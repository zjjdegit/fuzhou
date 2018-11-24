<template>
    <div>
        <!--登陆-->
        <land></land>
        <!--nav-->
        <navTop></navTop>
        <!--banner-->
        <banner></banner>
        <check></check>
        <business></business>
        <dataCur></dataCur>
        <videoPlay></videoPlay>
        <news></news>
        <foot></foot>

    </div>

</template>

<script>
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    import banner from '../components/index/components/index/banner'
    import check from '../components/index/components/index/check'
    import business from '../components/index/components/index/business'
    import dataCur from '../components/index/components/index/data-cur'
    import videoPlay from '../components/index/components/index/video-play'
    import news from '../components/index/components/index/news'
    import land from '../components/index/components/index/land'
    import navTop from '../components/index/components/index/nav-1'
    import foot from '../components/index/components/index/foot'

    export default {
        name: "index",
        components: {
            banner, check, business, dataCur, videoPlay, news, land,foot,navTop
        },
        data() {
            return {}
        },
        mounted: function () {

        },
        created: function () {

        },
        methods: {}
    }
</script>

<style lang="scss">
    @import '/src/components/index/reset.min.css';

    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }


</style>