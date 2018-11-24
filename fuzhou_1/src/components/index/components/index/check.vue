<template>
    <div>
        <div class="wrapper">
            <ul class="check" id="check">
                <li>
                    <div>
                        <img src="../../images/hospital.png">
                        <div>
                            <p>{{num[0]}}+</p>
                            <span>区检察院</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../images/check.png">
                        <div>
                            <p>{{num[1]}}+</p>
                            <span>检务系统</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../images/book.png">
                        <div>
                            <p>{{num[2]}}+</p>
                            <span>信息资源</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="../../images/computer.png">
                        <div>
                            <p>{{num[3]}}+</p>
                            <span>信息项</span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>

</template>

<script>

    export default {
        name: "check",
        data() {
            return {
                n: 0,
                num: [1000, 30000, 4000, 3000]
            }
        },
        mounted: function () {
            var oCheck = document.getElementById("check");
            var oP = oCheck.getElementsByTagName("p");

            for (var i = 0; i < oP.length; i++) {
                var b = parseInt(oP[i].innerHTML)
                console.log(b)
                this.numAdd(oP[i])

            }
        },
        created: function () {

        },
        methods: {
            numAdd(_that) {
                var i = 0;
                var n = parseInt(_that.innerHTML)
                var set = setInterval(function () {
                    i++
                    _that.innerHTML = (i > 100 ? n : i < 10 ? "0" + i : i) + "+";
                }, 12)
                setTimeout(function () {
                    clearInterval(set)
                }, 3000)
            }
        }


    }
</script>


<style scoped lang="scss">
    .wrapper {
        width: 1170px;
        margin: 0 auto;
    }
    .check {
        height: 140px;

        img, div {
            float: left;
        }
        img {

            width: 59px;

        }
        li {
            width: 25%;
            margin-top: 40px;
            float: left;
        }
        div {
            margin-left: 100px;
            div {
                margin-left: 25px;
                color: #333;
                p {
                    font-size: 28px;
                }
                span {
                    font-size: 18px;
                }
            }
        }
    }

</style>