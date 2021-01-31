import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
// 导入弹框提示组件
import { Message } from 'element-ui'
import { Container, Header, Aside, Main, Menu, Submenu, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row, col, table, TableColumn, Switch, Tooltip, Pagination, Dialog } from 'element-ui'
import { MessageBox, Tag, Tree } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 代表挂载属性和方法
Vue.prototype.$message = Message
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.use(Menu)
Vue.use(Submenu)

Vue.use(MenuItem)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(col)

Vue.use(table)
Vue.use(TableColumn)

Vue.use(Switch)

Vue.use(Tooltip)

// 分页区
Vue.use(Pagination)

// 提示框
Vue.use(Dialog)
// 作为方法存在 需要挂载在原型上
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Tag)

Vue.use(Tree)
