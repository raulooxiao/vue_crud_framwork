/**
 * @file main store
 * @author raulxiao
 */

import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global.js'
import request from './modules/request.js'
import example from './modules/example'
import { unifyObjectStyle } from '@/common/util'

Vue.use(Vuex)

const store = new Vuex.Store({
    ...global,
    // 模块
    modules: {
        example,
        request
    }
})

/**
 * hack vuex dispatch, add third parameter `config` to the dispatch method
 *
 * @param {Object|string} _type vuex type
 * @param {Object} _payload vuex payload
 * @param {Object} config config 参数，主要指 http 的参数，详见 src/api/index initConfig
 *
 * @return {Promise} 执行请求的 promise
 */
store.dispatch = function (_type, _payload, config = {}) {
    const { type, payload } = unifyObjectStyle(_type, _payload)

    const action = { type, payload, config }
    const entry = store._actions[type]
    if (!entry) {
        if (NODE_ENV !== 'production') {
            console.error(`[vuex] unknown action type: ${type}`)
        }
        return
    }

    store._actionSubscribers.forEach(sub => {
        return sub(action, store.state)
    })

    return entry.length > 1
        ? Promise.all(entry.map(handler => handler(payload, config)))
        : entry[0](payload, config)
}

export default store
