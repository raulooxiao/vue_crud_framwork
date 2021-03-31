import { language } from '@/i18n'
import http from '@/api'
import { Base64 } from 'js-base64'

const state = {
    config: {
        site: {},
        validationRules: {}
    },
    validatorSetuped: false,
    user: {},
    supplier: window.Supplier,
    language: language,
    globalLoading: true,
    nav: {
        stick: window.localStorage.getItem('navStick') !== 'false',
        fold: window.localStorage.getItem('navStick') === 'false'
    },
    header: {
        back: false
    },
    layout: {
        mainFullScreen: false
    },
    userList: [],
    headerTitle: '',
    permission: [],
    appHeight: window.innerHeight,
    title: null,
    businessSelectorVisible: false,
    businessSelectorPromise: null,
    businessSelectorResolver: null,
    scrollerState: {
        scrollbar: false
    },
    // old
    mainContentLoading: false
}

const getters = {
    config: state => state.config,
    validatorSetuped: state => state.validatorSetuped,
    site: state => {
        // 通过getter和CMDB_CONFIG.site获取的site值确保为页面定义和配置定义的集合
        return { ...window.Site, ...state.config.site }
    },
    user: state => state.user,
    userName: state => state.user.username,
    admin: state => state.user.admin === '1',
    isBusinessSelected: (state, getters, rootState, rootGetters) => {
        return rootGetters['objectBiz/bizId'] !== null
    },
    language: state => state.language,
    supplier: state => state.supplier,
    supplierAccount: state => state.supplier.account,
    globalLoading: state => state.globalLoading,
    navStick: state => state.nav.stick,
    navFold: state => state.nav.fold,
    mainFullScreen: state => state.layout.mainFullScreen,
    showBack: state => state.header.back,
    userList: state => state.userList,
    headerTitle: state => state.headerTitle,
    permission: state => state.permission,
    title: state => state.title,
    businessSelectorVisible: state => state.businessSelectorVisible,
    scrollerState: state => state.scrollerState,
    // old
    mainContentLoading: state => state.mainContentLoading
}

const actions = {
    getUserList ({ commit }) {
        return http.get(`${window.API_HOST}user/list?_t=${(new Date()).getTime()}`, {
            requestId: 'get_user_list',
            fromCache: true,
            cancelWhenRouteChange: false
        }).then(list => {
            commit('setUserList', list)
            return list
        })
    },
    getBlueKingEditStatus ({ commit }, { config }) {
        return http.post('system/config/user_config/blueking_modify', {}, config)
    },
    getConfig ({ commit }, { config }) {
        // return http.get('admin/find/system/config_admin', {}, config)
        return {
            'result': true,
            'data': null
        }
    },
    updateConfig ({ commit }, { params, config }) {
        return http.put('admin/update/system/config_admin', params, config).then(() => {
            commit('setConfig', params)
        })
    },
    // old
    userInfo (context, config = {}) {
        // ajax 地址为 USER_INFO_URL，如果需要 mock，那么只需要在 url 后加上 AJAX_MOCK_PARAM 的参数，
        // 参数值为 mock/ajax 下的路径和文件名，然后加上 invoke 参数，参数值为 AJAX_MOCK_PARAM 参数指向的文件里的方法名
        // 例如本例子里，ajax 地址为 USER_INFO_URL，mock 地址为 USER_INFO_URL?AJAX_MOCK_PARAM=index&invoke=getUserInfo

        // 后端提供的地址
        // const url = USER_INFO_URL
        // mock 的地址，示例先使用 mock 地址
        const mockUrl = USER_INFO_URL + (USER_INFO_URL.indexOf('?') === -1 ? '?' : '&') + AJAX_MOCK_PARAM + '=index&invoke=getUserInfo'
        return http.get(mockUrl, {}, config).then(response => {
            const userData = response.data || {}
            context.commit('updateUser', userData)
            return userData
        })
    }
}

const mutations = {
    setGlobalLoading (state, loading) {
        state.globalLoading = loading
    },
    setNavStatus (state, status) {
        Object.assign(state.nav, status)
    },
    setHeaderStatus (state, status) {
        Object.assign(state.header, status)
    },
    setLayoutStatus (state, status) {
        Object.assign(state.layout, status)
    },
    setUserList (state, list) {
        state.userList = list
    },
    setPermission (state, permission) {
        state.permission = permission
    },
    setAppHeight (state, height) {
        state.appHeight = height
    },
    setTitle (state, title) {
        state.title = title
    },
    setBusinessSelectorVisible (state, visible) {
        state.businessSelectorVisible = visible
    },
    createBusinessSelectorPromise (state) {
        state.businessSelectorPromise = new Promise(resolve => {
            state.businessSelectorResolver = resolve
        })
    },
    resolveBusinessSelectorPromise (state, val) {
        state.businessSelectorResolver && state.businessSelectorResolver(val)
    },
    setScrollerState (state, scrollerState) {
        Object.assign(state.scrollerState, scrollerState)
    },
    setConfig (state, config) {
        // 按照数据格式约定验证规则的正则需要baes64解码
        const { validationRules } = config
        for (const rule of Object.values(validationRules)) {
            rule.value = Base64.decode(rule.value)
        }
        state.config = { ...config }
        window.CMDB_CONFIG = config
        window.CMDB_CONFIG.site = { ...window.Site, ...config.site }
    },
    setValidatorSetuped (state) {
        state.validatorSetuped = true
    },
    // old
    setMainContentLoading (state, loading) {
        state.mainContentLoading = loading
    },
    updateUser (state, user) {
        state.user = Object.assign({}, user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
