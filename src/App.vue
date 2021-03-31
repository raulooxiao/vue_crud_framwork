<template>
    <div id="app" v-bkloading="{ isLoading: mainContentLoading }"
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

    import { bus } from '@/common/bus'

    import theHeader from '@/components/layout/header'
    // import thePermissionModal from '@/components/modal/permission'
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
            ...mapGetters(['mainContentLoading']),
            ...mapGetters(['site', 'globalLoading', 'mainFullScreen'])
            // ...mapGetters('userCustom', ['usercustom', 'firstEntryKey', 'classifyNavigationKey'])
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
            const self = this
            bus.$on('show-login-modal', data => {
                self.$refs.bkAuth.showLoginModal(data)
            })
            bus.$on('close-login-modal', () => {
                self.$refs.bkAuth.hideLoginModal()
                setTimeout(() => {
                    window.location.reload()
                }, 0)
            })
        },
        methods: {
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
            goPage (idx) {
                this.$router.push({
                    name: idx
                })
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
