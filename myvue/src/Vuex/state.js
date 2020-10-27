//state是vuex中存储数据的
//定义一个state对象
const state = {
    categoryDatas: [], //分类组件里面的左边数据--类别数据
    swipeDatas: [], //首页轮播图
    userInfo: {}, //用户信息
    goodsLists: [], //商品列表
    goodsDetails: [], //商品详情
    // 购物车数据
    carts: localStorage['carts'] ? JSON.parse(localStorage['carts']) : [],

    //全选按钮状态
    checkAll: localStorage['checkAll'] ? JSON.parse(localStorage['checkAll']) : false,
    searchLists: [], //搜索列表
}

//将state对象暴露出去
export default state