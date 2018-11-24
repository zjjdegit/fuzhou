<template>
    <div class="nav wrapper">

        <div class="logo">
            <img src="../../images/nav_logo.png">
            <p>福州市人民检察院数据资源平台</p>
        </div>
        <ul class="nav_right">
            <li class="on"><a href="/index1">首页</a></li>
            <li><a href="/sjmlIndex">数据目录</a></li>
            <li><a href="/ywzymlIndex">系统目录</a></li>
            <li><a href="/ywzymlIndex">业务资源目录</a></li>
            <li><a>用户中心</a></li>
            <li><a>互动交流</a></li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: "nav-1",

    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .nav {
        clear: both;
        height: 68px;
        color: #333;
        line-height: 68px;
        .logo {
            cursor: pointer;
            img {
                width: 63px;
                float: left;
            }
            p {
                float: left;
                margin-left: 20px;
                font-size: 26px;
                color: #004464;
            }

        }
        .nav_right {
            float: right;
            li {
                cursor: pointer;
                float: left;
                margin-left: 25px;
                font-size: 18px;
                a{
                    color: #333;
                }
                em {
                    width: 14px;
                    height: 9px;
                    display: inline-block;
                    background: url("../../images/down.png") no-repeat;
                    background-size: 14px 9px;
                }
            }
            li:hover a{
                color: #e80000;
            }
            .on {
                color: #e80000;
            }
        }

    }
</style>