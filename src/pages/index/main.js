import Vue from 'vue'
import App from './index'

const pageApp = new Vue(App)
pageApp.$mount()

export default {
  config: {
    // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
    'navigationBarTitleText': '文章列表页面'
  }
}
