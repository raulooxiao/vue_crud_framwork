/**
 * @file router 配置
 * @author raulxiao
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import StatusError from './StatusError.js'

import preload from '@/setup/preload'
import afterload from '@/setup/afterload'
import { setupValidator } from '@/setup/validate'

import {
    MENU_MODEL
} from '@/dictionary/menu-symbol'

import {
    modelViews
} from '@/views'

import dynamicRouterView from '@/components/layout/dynamic-router-view'

Vue.use(VueRouter)

// const statusRouters = [
//     {
//         name: '404',
//         path: '/404',
//         components: require('@/views/status/404')
//     }, {
//         name: 'error',
//         path: '/error',
//         components: require('@/views/status/error')
//     }
// ]

// const redirectRouters = [{
//     path: '*',
//     redirect: {
//         name: '404'
//     }
// }]

const router = new VueRouter({
    mode: 'hash',
    routes: [
        // ...redirectRouters,
        // ...statusRouters,
        {
            name: MENU_MODEL,
            component: dynamicRouterView,
            children: modelViews,
            path: '/model',
            redirect: '/model/index'
        }
    ]
})

const beforeHooks = new Set()

function runBeforeHooks () {
    return Promise.all(Array.from(beforeHooks).map(callback => callback()))
}

export const addBeforeHooks = function (hook) {
    beforeHooks.add(hook)
}

function cancelRequest (app) {
    const pendingRequest = app.$http.queue.get()
    const cancelId = pendingRequest.filter(request => request.cancelWhenRouteChange).map(request => request.requestId)
    app.$http.cancelRequest(cancelId)
}

const checkViewAuthorize = async to => {
    // owener判断已经发现无业务时
    // if (to.meta.view === 'permission') {
    //     return false
    // }
    // const auth = to.meta.auth || {}
    // const view = auth.view
    // if (view) {
    //     const viewAuthData = typeof view === 'function' ? view(to, router.app) : view
    //     const viewAuth = await router.app.$store.dispatch('auth/getViewAuth', viewAuthData)
    //     to.meta.view = viewAuth ? 'default' : 'permission'
    // }
    return Promise.resolve()
}

const setLoading = loading => router.app.$store.commit('setGlobalLoading', loading)

const checkAvailable = (to, from) => {
    if (typeof to.meta.checkAvailable === 'function') {
        return to.meta.checkAvailable(to, from, router.app)
    } else if (to.meta.hasOwnProperty('available')) {
        return to.meta.available
    }
    return true
}

const setupStatus = {
    preload: true,
    afterload: true
}

router.beforeEach((to, from, next) => {
    Vue.nextTick(async () => {
        try {
            cancelRequest(router.app)
            to.name !== from.name && router.app.$store.commit('setTitle', '')
            if (to.meta.view !== 'permission') {
                Vue.set(to.meta, 'view', 'default')
            }
            if (to.name === from.name) {
                return next()
            }
            if (setupStatus.preload) {
                setLoading(true)
                setupStatus.preload = false
                await preload(router.app)
                setupValidator(router.app)
            }
            await runBeforeHooks()
            // const shouldContinue = await businessBeforeInterceptor(router.app, to, from, next)
            const shouldContinue = true
            if (!shouldContinue) {
                return false
            }
            console.log('here 2')
            const isAvailable = checkAvailable(to, from)
            if (!isAvailable) {
                throw new StatusError({ name: '404' })
            }
            await checkViewAuthorize(to)
            console.log('here 3')
            return next()
        } catch (e) {
            console.error(e)
            setupStatus.preload = true
            if (e.__CANCEL__) {
                next()
            } else if (e instanceof StatusError) {
                next({ name: e.name, query: e.query })
            } else if (e.status !== 401) {
                console.error(e)
                // 保留路由，将视图切换为error
                Vue.set(to.meta, 'view', 'error')
                next()
            } else {
                next()
            }
        } finally {
            setLoading(false)
        }
    })
})

router.afterEach(async (to, from) => {
    try {
        if (setupStatus.afterload) {
            setupStatus.afterload = false
            await afterload(router.app, to, from)
        }
    } catch (e) {
        setupStatus.afterload = true
        console.error(e)
    }
})

export default router
