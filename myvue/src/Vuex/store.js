import Vue from 'vue'; //引入vue模块
import Vuex from 'vuex'; //引入vuex模块 需要先下载安装 cnpm install vuex --save  ---状态管理功能
Vue.use(Vuex); //使用vuex模块；

//导入其他相应的模块
//state是vuex中存储数据的
import state from './state.js'; //后缀名.js可以省略不写
//mutations里面定义的方法是用来修饰state（数据）----这个里面定义的方法是用来修饰数据的
import mutations from './mutations.js';
//actions中定义方法--是用来提交mutations中定义的方法
import actions from './actions';

//实例化一个vuex仓库，注入其他模块
const store = new Vuex.Store({
    state,
    mutations,
    actions,
})

//将实例仓库暴露出去 
export default store