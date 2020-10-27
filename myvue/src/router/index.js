//1.定义路由：需要导入两个模块--->vue模块和vue-router模块；
//vue-router 需要下载   cnpm install vue-router --save    保存到生产环境中，以后项目上线要用的
// vue模块
import Vue from 'vue';
// vue-router模块依赖于vue模块；
import VueRouter from 'vue-router'

//2.使用模块
Vue.use(VueRouter);

//3.创建组件-----新建.vue文件---导入文件(通常组件名称为大写字母开头)
//首页组件
import Home from '../views/Home/Home.vue';
//分类组件
import Category from '../views/Category/Category.vue';
//发现组件
import Find from '../views/Find/Find.vue';
//购物车组件
import Cart from '../views/Cart/Cart.vue';
//我的组件
import Mine from '../views/Mine/Mine.vue';
//登录组件
import Login from '../views/Login/Login.vue';
//搜索组件
import Search from '../views/Search/Search.vue'



//商品列表组件
import ListDetail from '../views/Category/components/ListDetail.vue';

//商品页面详情组件
import GoodsDetail from '../views/GoodsDetail/GoodsDetail.vue';

//搜索列表组件
import SearchList from '../views/Search/SearchList.vue'

//创建配置首页的子组件
import Index from '../views/Home/children/Index.vue';
import EleHome from '../views/Home/children/EleHome.vue';
import Mcloth from '../views/Home/children/Mcloth.vue';
import ShoesBoots from '../views/Home/children/ShoesBoots.vue';
import Phone from '../views/Home/children/Phone.vue';
import Computer from '../views/Home/children/Computer.vue';
import HomeTextile from '../views/Home/children/HomeTextile.vue';
import PersonalBeauty from '../views/Home/children/PersonalBeauty.vue';


//4.配置路由---
const routes = [{
    path: '/home',
    name: 'home',
    component: Home, //首页路由
    //配置首页子组件的子路由
    children: [{
            path: 'index',
            component: Index,
        },
        {
            path: 'elehome',
            component: EleHome,
        },
        {
            path: 'mcloth',
            component: Mcloth,
        },
        {
            path: 'shoesboots',
            component: ShoesBoots,
        },
        {
            path: 'phone',
            component: Phone,
        },
        {
            path: 'computer',
            component: Computer,
        },
        {
            path: 'homehextile',
            component: HomeTextile,
        },
        {
            path: 'personalbeauty',
            component: PersonalBeauty,
        }, {
            path: "/home",
            redirect: "/home/index", //重定向到首页的-首页页面
        }
    ]
}, {
    path: '/',
    redirect: '/home', //设置：我们一打开项目的时候重定向到首页（home.vue），然后再由首页重定到首页中的首页（index.vue）
}, {
    path: '/category/:cid',
    name: 'category',
    component: Category, //分类页路由
}, {
    path: '/find',
    name: 'find',
    component: Find, //发现页路由
}, {
    path: '/cart',
    name: 'cart',
    component: Cart, //购物车路由
}, {
    path: '/mine',
    name: 'mine',
    component: Mine, //我的页面路由
}, {
    path: '/login',
    name: 'login',
    component: Login, //登录页面路由
}, {
    path: '/search',
    name: 'search',
    component: Search, //搜索页面路由
}, {
    path: '/listdetail',
    name: 'listdetail',
    component: ListDetail, //商品列表路由
}, {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: GoodsDetail, //商品详情页面路由
}, {
    path: '/searchlist',
    name: 'searchlist',
    component: SearchList, //搜索列表页面路由
}]

//5.实例化一个路由对象-----将上面我们配置的路由注入路由对象里面
const router = new VueRouter({
    routes, //与下面写法功能一样
    // routes: routes,
})


//6.暴露出去----最后将路由对象暴露出去，我们就可以使用了。
export default router;