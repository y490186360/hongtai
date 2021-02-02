<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>参数列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片试图区 -->
        <el-card>
            <!-- 警告区域 -->
            <el-alert show-icon title="注意：只允许为第三级分类设置相关参数！" type="warning" :closable="false"> </el-alert>
            <!-- 选择商品分类区域 -->
            <el-row class="cat_opt">
                <el-col>
                    <span>选择商品分类：</span>
                    <!-- 选择商品分类的级联选择框 -->
                    <el-cascader v-model="selectedCateKeys" :options="catelist" :props="cateProps" @change="handleChange"></el-cascader>
                </el-col>
            </el-row>

            <!-- tab 页签区域 -->
            <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
                <el-tab-pane label="动态参数" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="静态属性" name="second">配置管理</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 商品分类列表
            catelist: [],
            cateProps: {
                value: 'cat_id',
                label: 'cat_name',
                children: 'children',
                expandTrigger: 'hover'
            },
            // 级联选择框双向绑定到的数组
            selectedCateKeys: [],
            // 被激活的页签的名称
            activeName: 'first'
        }
    },
    created() {
        this.getCateList()
    },
    methods: {
        async getCateList() {
            const { data: res } = await this.$http.get('categories')
            if (res.meta.status !== 200) {
                return this.$message.error('获取商品分类失败')
            }
            // 获取商品分类成功
            this.catelist = res.data
        },
        // 级联选择框选中项变化，会触发这个函数
        handleChange() {
            // 证明选中的不是三级分类
            if (this.selectedCateKeys.lenght !== 3) {
                // 证明选中的不是 3 级分类
                this.selectedCateKeys = []
                return false
            }
            // 证明选中的是三级分类
            console.log(this.selectedCateKeys)
        },
        // Tab 页签点击时触发
        handleTabClick() {
            console.log(this.activeName)
        }
    }
}
</script>

<style lang="less" scoped>
.cat_opt {
    margin: 15px 0;
}
</style>
