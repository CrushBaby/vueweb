<!-- 商品详情页面 -->
<template>
  <div class="goods-detail">
    <!-- 头部 -->
    <header>
      <div class="back">
        <i class="iconfont icon-xiangyoujiantou"></i>
      </div>
      <ul>
        <li class="activer">商品</li>
        <li>详情</li>
        <li>评论</li>
      </ul>
      <div class="share">
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </header>
    <!-- 商品信息 -->
    <div class="goods-info">
      <!-- 商品轮播图 -->
      <div class="goods-Swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img :src="goodsdetails.goods_img" alt="" />
            </div>
            <div class="swiper-slide">
              <img :src="goodsdetails.goods_img" alt="" />
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 商品价格 -->
      <div class="goods-price">
        <div>
          <span class="nowPrice">{{ goodsdetails.shop_price }}.</span>
          <em>00</em>
          <del class="yPrice">￥799.00</del>
        </div>
      </div>
      <!-- VIP会员 -->
      <div class="high-vip">
        <div class="vip-wrap">
          <div class="textvip">
            <img src="@/assets/images/icon-vip.png" alt="" />
            <span>高级VIP享超值优惠价</span>
            <span>520.</span>
            <em>00</em>
          </div>
          <div class="openvip">
            <router-link to="/Login">
              <span>立即开通</span>
              <i class="iconfont icon-gengduo"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 商品标题 -->
      <div class="goods-title">
        <h3>
          {{ goodsdetails.goods_name }}
        </h3>
      </div>
      <!-- 商品库存 -->
      <div class="goods-outer">
        <p>
          <span>累计销量 2</span>
          <span>库存500</span>
          <span> 上海市 上海市 </span>
        </p>
      </div>
      <!-- 商品详情 -->
      <div class="goods-desc" v-html="goodsdetails.goods_desc"></div>
    </div>
    <!-- 底部 -->
    <div class="goods-footer">
      <div class="server">
        <i class="iconfont icon-kefu2"></i>
        <span>客服</span>
      </div>
      <div class="sc">
        <i class="iconfont icon-shoucang1"></i>
        <span>收藏</span>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche">
            <span>{{ count }}</span>
          </i>
          <div :class="{ addNum: flag }" v-show="flag">+1</div>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="addCart" @click="addCart(goodsdetails)">加入购物车</div>
      <div class="quickBuy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//引入swipe插件（轮播图）cnpm install swipe --save;

//引入swiper插件
import Swiper from "swiper"; //cnpm install swiper @4 --save
import "swiper/dist/css/swiper.css";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
      timer: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    //商品信息
    goodsdetails() {
      return this.$store.state.goodsDetails;
    },
    //数量
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        count += item.value;
      });
      return count;
    },
  },
  methods: {
    //添加购物车的方法：
    addCart(data) {
      console.log(data);
      //数据处理
      //1.判断购物车列表中是否有当前数据；
      //2.如果有的话，就将购物车中的商品数字++；
      //3.如果没有的话，就在购物车页面新增一个商品
      console.log(this.$store.state.carts);

      this.flag = true;
      this.timer = setTimeout(() => {
        this.flag = false;
      }, 1000);

      //2.如果有的话，就将购物车中的商品数字++；
      var isCart = this.$store.state.carts.find((item) => {
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });

      //3.如果没有的话，就在购物车页面新增一个商品
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          goods_img: data.goods_img,
          value: 1,
          isSelect: false,
        };
      }

      this.$store.commit("setCartDatas", cartData);
    },
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this);
    console.log(this.$route);
    this.$store.dispatch("actgetGoodsDetails", {
      goods_id: this.$route.query.goods_id,
    });

    //商品详情页的轮播图
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>
<style lang='less'>
.goods-detail {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    z-index: 999;
    // border-bottom: 1px solid #e5e5e5;
    .back {
      i {
        position: absolute;
        top: -1.4rem;
        left: 2rem;
        font-size: 2.2rem;
        color: #777;
      }
    }
    ul {
      display: flex;
      width: 22.5rem;
      height: 4rem;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      display: none;
      li {
        width: 7.5rem;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
        font-size: 1.5rem;
        color: #555;
      }
      .activer {
        color: #f92028;
        border-bottom: 2px solid#f92028;
      }
    }
    .share {
      i {
        position: absolute;
        right: 2rem;
        top: -1.4rem;
        font-size: 2.2rem;
        color: #777;
      }
    }
  }
  .goods-info {
    //   轮播图
    .goods-Swiper {
      width: 100%;
      height: 37.5rem;
      img {
        width: 100%;
        height: 37.5rem;
      }
    }
    //   价格
    .goods-price {
      width: 35.3rem;
      height: 2.8rem;
      padding: 1.1rem 1.1rem 0.8rem;
      .nowPrice {
        font-size: 24px;
        font-weight: 700;
        color: rgb(242, 14, 40);
        &::before {
          content: "￥";
          font-size: 16.8px;
        }
      }
      em {
        font-style: normal;
        font-size: 16.8px;
        font-weight: 700;
        color: rgb(242, 14, 40);
      }
      .yPrice {
        font-size: 14px;
        color: rgb(153, 153, 153);
        margin-left: 0.5rem;
      }
    }
    .high-vip {
      width: 35.5rem;
      height: 4.3rem;
      padding: 0 1rem 1rem;
      .vip-wrap {
        background: #f7f8fc;
        width: 33.5rem;
        height: 2.3rem;
        padding: 1rem;
        font-size: 1.4rem;
        padding: 1rem;
        border-radius: 5rem;
        display: flex;

        .textvip {
          width: 25.9rem;
          height: 2.3rem;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          color: #333;
          img {
            width: 2rem;
            height: 2rem;
            margin-right: 0.5rem;
          }
          span:nth-child(3) {
            font-size: 15px;
            font-weight: 700;
            color: rag(51, 51, 51);
            &::before {
              content: "￥";
              font-size: 10.5px;
            }
          }
          em {
            font-style: normal;
            font-size: 10.5px;
            font-weight: 700;
            color: rag(51, 51, 51);
          }
        }
        .openvip {
          width: 6.3rem;
          height: 1.6rem;
          padding: 0.3rem 0.5rem 0.4rem 0.8rem;
          background: #000;
          font-size: 1.2rem;
          border-radius: 1.5rem;
          span {
            color: #e3c49e;
          }
          i {
            display: inline-block;
            height: 1.4rem;
            color: #e3c49e;
            margin-left: 0.3rem;
            font-size: 1rem;
            margin-top: -1.5rem;
          }
        }
      }
    }
    .goods-title {
      width: 35.3rem;
      height: 4.4rem;
      padding: 0 1.1rem 1.1rem;
      h3 {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 500;
        color: #333;
        //文本溢出隐藏（多行文本）
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .goods-outer {
      width: 35.3rem;
      height: 1.9rem;
      padding: 0 1.1rem 1.1rem;
      p {
        font-size: 1.4rem;
        color: #999;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .goods-desc {
      width: 95%;
      padding: 2.5%;
      img {
        width: 100%;
      }
    }
  }
  //   底部
  .goods-footer {
    width: 100%;
    height: 5rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    border-top: 1px solid #efefef;
    background: #fff;
    .server {
      font-size: 1.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      i {
        font-size: 2rem;
        margin-top: -2rem;
      }
    }
    .sc {
      font-size: 1.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      i {
        font-size: 2rem;
        margin-top: -2rem;
      }
    }
    .cart {
      font-size: 1.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      a {
        display: block;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      i {
        font-size: 2rem;
        margin-top: -2rem;
        position: relative;
        span {
          display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          line-height: 0.5rem;
          text-align: center;
          border-radius: 50%;
          font-size: 0.6rem;
          color: #fff;
          font-style: normal;
          background: #f44;
          position: absolute;
          top: 1.5rem;
          left: 1.8rem;
        }
      }
      .addNum {
        color: #f00;
        position: absolute;
        left: -5rem;
        font-size: 2rem;
        width: 100%;
        top: 3rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        opacity: 0;
        text-align: center;
        animation: moveup 1s linear;
        z-index: 9;
      }
      @keyframes moveup {
        0% {
          top: 1rem;
          opacity: 0;
        }
        50% {
          top: -2rem;
          opacity: 1;
        }
        100% {
          top: -2rem;
          opacity: 0;
        }
      }
    }
    .addCart {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #f44;
      border: 1px solid #f44;
      font-size: 16px;
    }
    .quickBuy {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #ff976a;
      border: 1px solid #ff976a;
      font-size: 16px;
    }
  }
}
</style>