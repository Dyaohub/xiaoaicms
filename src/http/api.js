// //封装所有的请求
import service from "./index"

//实例
// export default {
//     //登录
//     //username：用户名
//     //password： 密码
//     login({
//         username,
//         password
//     }) {
//         return service.post('/login', {
//             username,
//             password
//         })
//     },
//     //获取首页的数据
//     getHoemData() {
//         return service.get('/babel.config.js')

//     }
// }



export default {
    // 注册页面
    postSignup({ username, password }) {
        return service.post('user/register', { username, password })

    },

    // 登录页面
    postSignin({ username, password, code }) {
        return service.post('/user/login', { username, password, code })
    },

    // 验证码
    getCode() {

        return service.get('/captcha')
    },

    // 计数器
    getHomeData() {

        return service.get('/homeData')
    },

    // 折线图
    getHomeChat() {

        return service.get('/homeChat')
    },

    // 雷达图
    getRadarChat() {

        return service.get('/radarChat')
    },

    // 饼图
    getRingChat() {

        return service.get('/ringChat')
    },

    // 柱状图 
    gethomeData() {

        return service.get('/homeChat')
    },

    // 订单:
    getorderData() {
        return service.get('/orderData')
    },

    // 进度条
    getprogress() {
        return service.get('/progress')
    },

    // 表格数据: 
    gettableData() {
        return service.get('tableData')
    }
}