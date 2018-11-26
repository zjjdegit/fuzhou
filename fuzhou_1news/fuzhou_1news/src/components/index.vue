<template>
    <div class="wrapper">
        <div v-show="indexHide">
            <Header/>
        </div>

        <el-menu v-show="indexHide"
                :default-active="activeIndex1"
                class="el-menu-demo-top"
                mode="horizontal"
                @select="handleSelect"
                background-color="#4AA7FD"
                text-color="#fff"
                active-text-color="#fff">
            <el-menu-item v-for="(item,index) in navList" :index="item.index" :key="index" @click="toIndex(index)">
                <router-link :to="item.name">
                    {{item.navItem}}
                </router-link>
            </el-menu-item>
        </el-menu>
        <el-container class="el-container" :class="{indexContainer:indexHide?'':'indexContainer'}">

            <el-aside width="auto" v-show="indexHide">
                <Sidebar :activeLeftNav='activeLeftNav' @changeTopAct="changeTopAct"/>

            </el-aside>
            <el-main :class="{indexContainer:indexHide?'':'indexContainer'}">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import $ from "jquery";
    import Header from './header'
    import Sidebar from './sidebar'
    import sjmlIndex from './sjmlIndex'
    import {mapMutations, mapGetters} from 'vuex'

    export default {

        components: {
            Header,
            Sidebar,
            sjmlIndex
        },

        props: {},

        data() {
            return {
                activeIndex1: '1',
                activeLeftNav: ['1'],
                indexHide: true,

                navList: [
                    {name: '/index1', navItem: '首页', index: '0'},
                    {name: '/sjmlIndex', navItem: '数据目录', index: '1'},
                    {name: 'xtmlIndex', navItem: '系统目录', index: '2'},
                    {name: '/ywzymlIndex', navItem: '业务资源目录', index: '3'},
                    {name: '/jiliansystem', navItem: '级联系统', index: '4'},
                    {name: '/hdjl', navItem: '互动交流', index: '5'},
                ]
            }
        },

        watch: {
            changeChartWidth: function () {
                if (this.changeChartWidth) {
                    $('.el-main').animate({
                        'margin-left': 65
                    })
                } else {
                    $('.el-main').animate({
                        'margin-left': 240
                    })
                }
            },
        },

        computed: {
            ...mapGetters([
                'changeChartWidth'
            ])
        },

        methods: {
            sureRoute() {
                let routePath = this.$route.path;
                for (let i = 0; i < this.navList.length; i++) {
                    if (routePath === this.navList[i].name) {
                        this.activeLeftNav = [this.navList[i].index];
                        this.activeIndex1 = this.navList[i].index;
                    }
                }
            },
            handleSelect(key, keyPath) {
                this.activeLeftNav = keyPath;
            },
            changeTopAct(key) {
                this.activeIndex1 = key;
            },
            toIndex(index) {

                if (index == 0) {
                    window.location.href = '/index1'
                }
            }
        },

        created() {
        },

        mounted() {
            this.sureRoute();
            console.log(window.location.pathname)
            if (window.location.pathname == "/index1") {
                this.indexHide = false;
            }
        }

    }
</script>

<style scoped>
    .el-menu-demo-top .el-menu-demo {
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .el-menu-demo-top {
        width: 100%;
        position: fixed !important;
        top: 94px;
        z-index: 9;
    }

    .el-menu-demo-top .el-submenu {
        height: 50px;
        line-height: 50px;
    }

    .el-menu-demo-top .el-menu-item {
        font-size: 18px;
        height: 50px !important;
        line-height: 50px !important;
        margin: 0 3%;
        padding: 0;
    }

    .el-menu-demo-top .el-menu-item:nth-child(1) {
        margin-left: 90px;
    }

    .el-aside {
        background-color: #f3f3f3;
        position: fixed;
        height: 100%;
        z-index: 9;
    }

    .el-main {
        padding: 0;
        margin-left: 240px;
    }

    .wrapper {
        height: 100%;
        width: 100%;
    }

    .container {
        height: 100%;
        width: 100%;
    }

    .el-container {
        margin-top: 145px;
    }
    .indexContainer{
        margin-top: 0;
        margin-left: 0px;
    }
</style>