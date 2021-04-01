/**
 * @file main store
 * @author raulxiao
 */

import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global.js'
import request from './modules/request.js'
import example from './modules/example'
// 模型
import objectAssociation from './modules/api/object-association.js'
import objectBatch from './modules/api/object-batch.js'
import objectBiz from './modules/api/object-biz.js'
import objectCommonInst from './modules/api/object-common-inst.js'
import objectMainLineModule from './modules/api/object-main-line-module.js'
import objectModelClassify from './modules/api/object-model-classify.js'
import objectModelFieldGroup from './modules/api/object-model-field-group.js'
import objectModelProperty from './modules/api/object-model-property.js'
import objectModel from './modules/api/object-model.js'
import objectModule from './modules/api/object-module.js'
import objectRelation from './modules/api/object-relation.js'
import objectSet from './modules/api/object-set.js'
import objectUnique from './modules/api/object-unique.js'
import { unifyObjectStyle } from '@/common/util'

Vue.use(Vuex)

const store = new Vuex.Store({
    ...global,
    // 模块
    modules: {
        example,
        request,
        // 模型
        objectAssociation,
        objectBatch,
        objectBiz,
        objectCommonInst,
        objectMainLineModule,
        objectModelClassify,
        objectModelFieldGroup,
        objectModelProperty,
        objectModel,
        objectModule,
        objectRelation,
        objectSet,
        objectUnique
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
