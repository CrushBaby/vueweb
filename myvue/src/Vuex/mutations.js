//mutations里面定义的方法是用来修饰state（数据）----这个里面定义的方法是用来修饰数据的

//引入弹出框插件
import { MessageBox } from 'mint-ui';

const mutations = {
    //传递两个参数
    //分类数据
    getCategoryDatas(state, data) {
        state.categoryDatas = data;
    },
    //首页轮播图数据
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    //用户列表数据
    getUserInfo(state, data) {
        state.userInfo = data
    },
    //商品列表数据
    getGoodsLists(state, data) {
        state.goodsLists = data
    },
    //商品详情数据
    getGoodsDetails(state, data) {
        console.log(data)
        state.goodsDetails = data
    },

    //设置购物车中的数据
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data);
        }
        localStorage.setItem('carts', JSON.stringify(state.carts));
    },

    //商品数字++
    addCart(state, index) {
        console.log(state.carts[index]);
        state.carts[index].value++; //修改对应索引数据中的value值
        localStorage.setItem('carts', JSON.stringify(state.carts)); //重新设置本地存储数据
    },

    //商品数字--
    reduceCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1;
            MessageBox({
                title: '友情提示',
                message: '亲，至少要购买一个哦！'
            });
        } else {
            state.carts[index].value--;
            //修改对应索引数据中的value值
            localStorage.setItem('carts', JSON.stringify(state.carts)); //重新设置本地存储数据
        }
    },

    //输入框直接输入数量
    changeValue(state, data) {
        console.log(state); //商品对象信息
        console.log(data); //{index: 0, val: "18"}
        if (data.val <= 1) {
            data.val = 1;
            MessageBox({
                title: '友情提示',
                message: '亲，至少要购买一个哦！'
            });
        }
        state.carts[data.index].value = data.val;
        localStorage.setItem('carts', JSON.stringify(state.carts));
    },

    //删除商品
    delCart(state, index) {
        MessageBox.confirm('亲，您确定要删除该宝贝吗？').then(() => {
            console.log('确定');
            state.carts.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(state.carts)); //重新设置本地存储数据
        }, () => {
            console.log('取消');
        })
    },

    //商品的选中状态
    changeSelect(state, isSelect) {
        console.log(state);
        console.log(isSelect);
        state.carts[isSelect.index] = isSelect.cart;

        let isCheck = state.carts.every((item) => {
            return item.isSelect == true;
        })
        console.log(isCheck);

        state.checkAll = isCheck;
        localStorage.setItem('checkAll', state.checkAll);

        localStorage.setItem('carts', JSON.stringify(state.carts)); //重新设置本地存储数据
    },

    //全选按钮
    selectAllFn(state) {
        state.checkAll = !state.checkAll;
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })

        localStorage.setItem('carts', JSON.stringify(state.carts));

        localStorage.setItem('checkAll',
            state.checkAll); //重新设置本地存储数据
    },
    //搜索页面
    searchKeywords(state, data) {
        state.searchLists = data
    }
}
export default mutations