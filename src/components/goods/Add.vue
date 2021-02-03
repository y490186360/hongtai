<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片试图 -->
        <el-card>
            <!-- 提示区域 -->
            <el-alert title="消息提示的文案" type="info" center show-icon> </el-alert>
            <!-- 步骤条区 -->
            <el-steps :space="200" :active="activeIndex" finish-status="success" align-center>
                <el-step title="基本信息"></el-step>
                <el-step title="商品参数"></el-step>
                <el-step title="商品属性"></el-step>
                <el-step title="商品图片"></el-step>
                <el-step title="商品内容"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0
        }
    },
    created() {},
    methods: {}
}
</script>

<style lang="less" scoped></style>
