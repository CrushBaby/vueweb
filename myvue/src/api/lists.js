import ajax from './ajax';

//定义一个全局变量--全局路径
const Base_URL = '/api';

//请求数据--->商品列表页面数据(接口)
//api/v1/category/goodslist?cat_id=1107
export const getGoodsLists = (params) => ajax(Base_URL + "/v1/category/goodslist", params)


//商品详情页面数据（接口）
//api/v1/category/goodsdetail?goods_id=621
export const getGoodsDetails = (parmas) => ajax(Base_URL + '/v1/category/goodsdetail', parmas)