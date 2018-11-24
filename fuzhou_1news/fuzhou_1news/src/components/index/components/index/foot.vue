<template>
    <div class="foot">
        <div class="wrapper">
            <div class="left">
                <span>操作手册下载</span>
                <span> 技术支持</span>
                <span>13777819956</span>
                <span>17767204812</span>
            </div>
            <img src="../../images/foot_logo.png">

        </div>
    </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }

    .foot {
        height: 115px;
        background: #004464;
        overflow: hidden;
        div {
            div {
                float: left;
                color: #fff;
                font-size: 18px;
                span {
                    display: inline-block;
                    margin-right: 20px;
                }
                margin-top: 60px;
            }
            img {
                margin-top: 30px;
                float: right;
                width: 312px;
            }
        }

    }
</style>