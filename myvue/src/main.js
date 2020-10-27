import Vue from 'vue'
import App from './App.vue'
//导入路由模块，就可以用啦
import router from './router/index.js'

//轮播图插件
//1.下载安装mint-ui    cnpm install mint-ui --save   /cnpm install mint-ui -S

//2.引入mint-ui模块
import MintUI from 'mint-ui';

//3.引入mint-ui的css
import 'mint-ui/lib/style.css';

//引入store模块
import store from '@/Vuex/store.js';


//ly-tab  一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件--->导航栏的回弹效果

//1.下载 cnpm i ly-tab -S 

//2.引入 ly-tab
import LyTab from 'ly-tab';

//使用 ly-tab
Vue.use(LyTab);

//使用mint-ui
Vue.use(MintUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')