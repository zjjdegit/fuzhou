<template>
    <div class="video_box">
        <div class="wrapper">
            <h1>检务数据资源调度平台</h1>
            <img @click="showFn" src="../../images/video_bg.png">
        </div>

        <div class="play_bg " v-show="close">
            <div class="close" @click="closeFn()" @play="onPlayerPause(player1)">
                <span class="x">X</span>
            </div>

            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions"
                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"
            >

            </video-player>
        </div>

    </div>
</template>

<script>

    import VideoPlayer from 'vue-video-player'
    import {videoPlayer} from 'vue-video-player';

    export default {
        name: "video-play",
        data() {
            return {
                video: {
                    sources: [{
                        src: 'http://www.cdfg.com.cn/template/1/default/_files/video/zmzeren.mp4',
                        type: 'video/mp4'
                    }],
                    options: {
                        autoplay: true,
                        volume: 1,
                        poster: 'http://covteam.u.qiniudn.com/poster.png'
                    }
                },
                playerOptions: {
                    //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
                    }],
                    poster: "poster.jpg", //你的封面地址
                    width: 1200,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
                },
                close: false,
                player1: '',
            }
        },
        components: {
            videoPlayer
        },
        mounted() {
        },
        methods: {
            onPlayerPlay(player) {
                // alert("play");
            },
            onPlayerPause(player) {

                // alert("pause");
            },
            showFn() {
                this.close = true;
                this.$refs.videoPlayer.player.play()

            },
            closeFn() {
                this.close = false;
                this.$refs.videoPlayer.player.pause()
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .video_box {
        text-align: center;
        padding-bottom: 40px;
        .play_bg {
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            z-index: 99;
            background: rgba(0, 0, 0, 0.7);
            .close {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                width: 1100px;
                height: 600px;
                margin: auto;
            }
            .x {
                color: #fff;
                background: #000;
                font-size: 28px;
                width: 40px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                display: block;
                position: absolute;
                right: -32px;
            }
        }
        .play {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            margin: auto;
            width: 1100px;
            height: 620px;
        }
        h1 {
            font-size: 26px;
            color: #222;
            padding: 60px 0 50px;
        }
        img {
            width: 950px;
            display: block;
            margin: 0 auto;
            cursor: pointer;
        }
        /*video {*/
        /*display: block;*/
        /*height: 1000px;*/
        /*}*/

    }
</style>