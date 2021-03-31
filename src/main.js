/**
 * @file main entry
 * @author raulxiao
 */

import './public-path'
import Vue from 'vue'

import App from '@/App'
import router from '@/router/index.js'
import store from '@/store'
import { injectCSRFTokenToHeaders } from '@/api'
import auth from '@/common/auth'
import Img403 from '@/images/403.png'
import Exception from '@/components/exception'
import { bus } from '@/common/bus'
import AuthComponent from '@/components/auth'
import '@/common/bkmagic'
// cmdb
import './magicbox'
import './directives'
import './setup/permission'
import './assets/scss/common.scss'

import i18n from './i18n'
import cmdbRequestMixin from './mixins/request'
import cmdbAuthMixin from './mixins/auth'
import cmdbAppMixin from './mixins/app.js'
import routerActions from './router/actions'

import cmdbUI from './components/ui'

Vue.use(cmdbUI)
Vue.mixin(cmdbRequestMixin)
Vue.mixin(cmdbAuthMixin)
Vue.mixin(cmdbAppMixin)
Vue.component('app-exception', Exception)
Vue.component('app-auth', AuthComponent)

Vue.prototype.$routerActions = routerActions

auth.requestCurrentUser().then(user => {
    injectCSRFTokenToHeaders()
    if (!user.isAuthenticated) {
        auth.redirectToLogin()
    } else {
        global.bus = bus
        global.mainComponent = new Vue({
            el: '#app',
            router,
            store,
            i18n,
            components: { App },
            template: '<App/>'
        })
    }
}, err => {
    let message
    if (err.status === 403) {
        message = 'Sorry，您的权限不足!'
        if (err.data && err.data.msg) {
            message = err.data.msg
        }
    } else {
        message = '无法连接到后端服务，请稍候再试。'
    }

    const divStyle = ''
        + 'text-align: center;'
        + 'width: 400px;'
        + 'margin: auto;'
        + 'position: absolute;'
        + 'top: 50%;'
        + 'left: 50%;'
        + 'transform: translate(-50%, -50%);'

    const h2Style = 'font-size: 20px;color: #979797; margin: 32px 0;font-weight: normal'

    const content = ``
        + `<div class="bk-exception bk-exception-center" style="${divStyle}">`
        + `<img src="${Img403}"><h2 class="exception-text" style="${h2Style}">${message}</h2>`
        + `</div>`

    document.write(content)
})
