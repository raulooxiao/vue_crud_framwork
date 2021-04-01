<template>
    <div id="app" v-bkloading="{ isLoading: globalLoading }"
        :class="{
            'no-breadcrumb': hideBreadcrumbs,
            'main-full-screen': mainFullScreen
        }">
        <div class="browser-tips" v-if="showBrowserTips">
            <span class="tips-text">您的浏览器非Chrome，建议您使用最新版本的Chrome浏览，以保证最好的体验效果</span>
            <i class="tips-icon bk-icon icon-close-circle-shape" @click="showBrowserTips = false"></i>
        </div>
        <the-header></the-header>
        <router-view class="views-layout" :name="topView" ref="topView"></router-view>
        <!-- <the-permission-modal ref="permissionModal"></the-permission-modal> -->
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import theHeader from '@/components/layout/header'
    // import thePermissionModal from '@/components/modal/permission'
    import { addResizeListener, removeResizeListener } from '@/utils/resize-events'
    import { MENU_INDEX } from '@/dictionary/menu-symbol'

    export default {
        name: 'app',
        components: {
            theHeader
            // thePermissionModal
            // theLoginModal
        },
        data () {
            const showBrowserTips = window.navigator.userAgent.toLowerCase().indexOf('chrome') === -1
            return {
                showBrowserTips,
                routerKey: +new Date(),
                systemCls: 'mac'
            }
        },
        computed: {
            // ...mapGetters(['mainContentLoading']),
            ...mapGetters(['site', 'globalLoading', 'mainFullScreen']),
            ...mapGetters('userCustom', ['usercustom', 'firstEntryKey', 'classifyNavigationKey']),
            isIndex () {
                return this.$route.name === MENU_INDEX
            },
            hideBreadcrumbs () {
                return !(this.$route.meta.layout || {}).breadcrumbs
            },
            topView () {
                const topRoute = this.$route.matched[0]
                return (topRoute && topRoute.meta.view) || 'default'
            },
            loginUrl () {
                const siteLoginUrl = this.site.login || ''
                const loginStrIndex = siteLoginUrl.indexOf('login')
                let loginModalUrl
                if (loginStrIndex > -1) {
                    loginModalUrl = siteLoginUrl.substring(0, loginStrIndex) + 'login/plain'
                }
                return loginModalUrl
            }
        },
        watch: {
            site (site) {
                let language = (this.$i18n.locale || 'cn').toLocaleLowerCase()
                if (['zh-cn', 'zh_cn', 'zh', 'cn'].includes(language)) {
                    language = 'cn'
                }
                document.title = site.title.i18n[language] || site.title.value
            }
        },
        created () {
            const platform = window.navigator.platform.toLowerCase()
            if (platform.indexOf('win') === 0) {
                this.systemCls = 'win'
            }
        },
        mounted () {
            addResizeListener(this.$el, this.calculateAppHeight)
            window.permissionModal = this.$refs.permissionModal
            window.loginModal = this.$refs.loginModal
        },
        beforeDestroy () {
            // removeResizeListener(this.$refs.mainScroller, execMainResizeListener)
            removeResizeListener(this.$el, this.calculateAppHeight)
        },
        methods: {
            calculateAppHeight () {
                this.$store.commit('setAppHeight', this.$el.offsetHeight)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #app{
        height: 100%;
    }
    .browser-tips{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #ff5656;
        background-color: #f8f6db;
        z-index: 99999;
        .tips-text{
            margin: 0 20px 0 0 ;
        }
        .tips-icon{
            cursor: pointer;
        }
    }
    .views-layout{
        height: calc(100% - 58px);
    }
    // 主内容区全屏
    .main-full-screen {
        ::v-deep {
            .header-layout,
            .nav-layout,
            .breadcrumbs-layout {
                display: none;
            }
        }
        .views-layout {
            height: 100%;
        }
    }
    .no-breadcrumb {
        ::v-deep {
            .main-layout {
                margin-top: 0
            }
            .main-views {
                height: 100%;
                margin-top: 0;
            }
        }
    }
</style>
