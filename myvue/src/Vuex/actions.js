import { getHomeSwipe } from "../api/index.js"

import { getGoodsLists, getGoodsDetails } from '../api/lists.js'

import { getSearchLists } from '../api/search.js'

//actions中定义方法--是用来提交mutations中定义的方法
const actions = {
    //也是传递两个参数
    //商品分类
    actgetCategoryDatas(context, data) {
        //'getCategoryDatas'是指我们在mutations中定义的方法
        context.commit('getCategoryDatas', data)
    },
    //轮播图
    async actgetSwipeDatas(context) {
        const result = await getHomeSwipe();
        console.log(result);
        context.commit('getSwipeDatas', result.data)
    },
    //用户信息
    actgetUserInfoDatas(context, data) {
        context.commit('getUserInfo', data)
    },
    //商品列表
    async actgetGoodsLists(context, data) {
        const result = await getGoodsLists(data)
        console.log(result);
        context.commit('getGoodsLists', result.data);
    },
    //商品详情
    async actgetGoodsDetails(context, data) {
        const result = await getGoodsDetails(data)
        console.log(result);
        context.commit('getGoodsDetails', result.data[0])
    },
    //关键字搜索
    async actsearchKeywords(context, params) {
        const result = await getSearchLists(params);
        console.log(result);
        context.commit('searchKeywords', result.data)
    }
}

export default actions