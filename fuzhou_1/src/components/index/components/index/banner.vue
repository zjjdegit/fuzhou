<template>
    <div>
        <div class="banner_box">
            <img class="banner" src="../../images/banner.jpg">
            <img class="text" src="../../images/text.png">
            <div class="wrapper">
                <div>
                    <input placeholder="请输入您想搜索的目录信息"/>
                    <img src="../../images/search.png">
                </div>
            </div>
            <div id="particles-js">

            </div>
        </div>

    </div>
</template>

<script>
    import particles from 'particles.js'

    export default {
        name: "banner",
        mounted() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#3b485f"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 1000,
                            "height": 1000
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 160,
                        "color": "#7488a4",
                        "opacity": 0.5,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 8,
                            "duration": 10,
                            "opacity": 0.24775224775224775,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            })
        }
    }
</script>

<style scoped lang="scss">


    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }
    #particles-js {
        width: 100%;
        height: 400px;
    }

    .banner_box {
        position: relative;
        overflow: hidden;
        margin-top: 18px;
        height: 400px;
        .banner {
            width: 100%;
            height: 100%;
        }
        .text {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            width: 1145px;
            display: block;
            margin: 0 auto;
            pointer-events: none;
        }
        #particles-js {
            position: absolute;
            top: 0;
            z-index: 1;
        }
        .wrapper {
            position: absolute;
            z-index: 3;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            div {
                height: 52px;
                position: absolute;
                width: 680px;
                right: 0;
                top: 220px;
                padding: 5px 10px;
                overflow: hidden;

                input {
                    width: 630px;
                    height: 50px;
                    border: 0;
                    border-right: 2px solid #d7d8d8;
                    font-size: 14px;
                    float: left;
                }
                img {
                    float: right;
                    width: 33px;
                    height: auto;
                    margin-top: 6px;
                    cursor: pointer;
                }
                background: #fff;
            }
        }

    }
</style>