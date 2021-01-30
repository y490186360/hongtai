<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片试图 -->
        <el-card>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 用户列表区 -->
            <template>
                <el-table :data="userlist" border stripe>
                    <el-table-column type="index" label="#"></el-table-column>
                    <el-table-column label="姓名" prop="username"></el-table-column>
                    <el-table-column label="邮箱" prop="email"></el-table-column>
                    <el-table-column label="电话" prop="mobile"></el-table-column>
                    <el-table-column label="角色" prop="role_name"></el-table-column>
                    <el-table-column label="状态">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.mg_state"> </el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180px">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                            <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                                <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </el-card>
    </div>
</template>

<script>
import hub from '../../utils/hub.js'
export default {
    data() {
        return {
            queryInfo: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            userlist: [],
            total: 0
        }
    },
    created() {
        this.getUserList()
        hub.$emit('saveNavState', '/users')
    },
    methods: {
        async getUserList() {
            const { data: res } = await this.$http.get('users', {
                params: this.queryInfo
            })
            if (res.meta.status !== 200) {
                return this.$message.error('获取用户列表失败！')
            }
            this.userlist = res.data.users
            this.total = res.data.total
            console.log(res)
        }
    }
}
</script>

<style lang="less" scope></style>
