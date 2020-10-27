import ajax from './ajax.js';
const Base_URL = '/api';
//首页轮播图
export const getHomeSwipe = () => ajax(Base_URL + '/v1/index/swipe')