<template>
    <div>
        <el-button @click="visible = true">按钮</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>欢迎使用 Element</p>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "test"
    }

</script>

<style scoped>

</style>