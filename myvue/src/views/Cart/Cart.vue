<!--  -->
<template>
  <div class="cart">
    <!-- 购物车头部 -->
    <header>
      <div class="address">
        <div class="addressi">
          <i class="iconfont icon-dizhi"></i>
          河南省 郑州市 高新区 枫杨街道
        </div>
        <div class="editShop">编辑商品</div>
      </div>
    </header>
    <!-- 购物车主体 -->
    <div class="cartlists" v-if="!isNullcart">
      <div class="cart-goods">
        <div
          class="check-goods"
          v-for="(cart, index) in cartLists"
          :key="cart.goods_id"
        >
          <!-- 选择 -->
          <div class="goods-check" @click="changeSelect(cart, index)">
            <i
              class="iconfont icon-fuxuankuangweixuan"
              v-if="!cart.isSelect"
            ></i>
            <i
              class="iconfont icon-fuxuankuangxuanzhong"
              v-else
              style="color: #f92028"
            ></i>
          </div>
          <!-- 商品图片 -->
          <div class="goods-img">
            <img :src="cart.goods_img" alt="" />
          </div>
          <!-- 商品信息 -->
          <div class="goods-info">
            <!-- 商品名字 -->
            <div class="goods-title">
              {{ cart.goods_name }}
            </div>
            <div class="goods-num">
              <!-- 商品价格 -->
              <div class="goods-price">
                <span>{{ cart.shop_price }}.</span>
                <em>00</em>
              </div>
              <!-- 商品操作 增加 减少 删除 收藏等操作 -->
              <div class="goods-action">
                <!-- 商品数量减减 -->
                <a href="javascript:;" @click="reduceCart(index)">-</a>
                <input
                  type="number"
                  value="1"
                  min="1"
                  ref="val"
                  v-model="cart.value"
                  @input="changeValue(index)"
                />

                <!-- 商品数量加加 -->
                <a href="javascript:;" @click="addCart(index)">+</a>
                <button class="iconfont icon-shoucang2"></button>
                <button
                  class="iconfont icon-lajitong-copy"
                  @click="delCart(index)"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 购物车为空时 -->
    <div class="Nullcart" v-else>
      <i class="iconfont icon-gouwuche"></i>
      <p>
        购物车空空如也！
        <router-link to="/home">去逛逛</router-link>
      </p>
    </div>

    <!-- 购物车底部 -->
    <div class="cart-footer" v-if="!isNullcart">
      <!-- 全选 -->
      <div class="goodsSelect" @click="selectAllFn">
        <i class="iconfont icon-fuxuankuangweixuan" v-if="!selectAll"></i>
        <i
          class="iconfont icon-fuxuankuangxuanzhong"
          v-else
          style="color: #f92028"
        ></i>
        全选
      </div>
      <!-- 合计总价 -->
      <div class="priceAll">
        合计：
        <span>{{ total }}.</span>
        <em>00</em>
      </div>
      <div class="goBuy">去结算({{ count }})</div>
    </div>
    <Footer />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    // 商品--
    reduceCart(index) {
      console.log(index);
      this.$store.commit("reduceCart", index);
    },
    //商品++
    addCart(index) {
      console.log(index);
      this.$store.commit("addCart", index);
    },
    //输入框输入值（直接输入修改）
    changeValue(index) {
      console.log(this.$refs.val[index].value);
      console.log(index);
      let val = this.$refs.val[index].value;
      this.$store.commit("changeValue", { index, val });
    },
    //删除商品
    delCart(index) {
      console.log(index);
      this.$store.commit("delCart", index);
    },

    //单选商品
    changeSelect(cart, index) {
      //单选商品
      console.log(cart);
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelect", { cart, index });
    },

    //全选商品
    selectAllFn() {
      this.$store.commit("selectAllFn");
    },
  },

  //监听属性 类似于data概念
  computed: {
    //购物车是否为空
    isNullcart() {
      return this.$store.state.carts.length == 0;
    },
    //购物车数据信息
    cartLists() {
      return this.$store.state.carts;
    },
    //选择所有的
    selectAll() {
      return this.$store.state.checkAll;
    },

    //合计总价格：
    total() {
      let totalPrice = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          totalPrice += item.shop_price * item.value;
        }
      });
      return totalPrice;
    },

    //计算总数量（购买了几件商品）
    count() {
      let count = 0;
      this.$store.state.carts.map((item) => {
        if (item.isSelect) {
          count += item.value;
        }
      });
      return count;
    },
  },
};
</script>
<style lang='less'>
.cart {
  // background: #efefef;s
  header {
    height: 2rem;
    padding: 1.1rem;
    .address {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      font-size: 1.4rem;
      color: #777;
      .addressi {
        i {
          margin-top: -1.3rem;
          width: 1.6rem;
          height: 1.6rem;
          display: inline-block;
        }
      }
      .editShop {
        color: #f92028;
      }
    }
  }
  .cartlists {
    border-bottom: 1px solid #eee;
    margin-bottom: 3rem;
    .cart-goods {
      .check-goods {
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        // background: #eee;
        .goods-img {
          width: 7rem;
          height: 7rem;
          img {
            width: 100%;
          }
        }
        .goods-info {
          width: 23.5rem;
          height: 7rem;
          .goods-title {
            line-height: 1.6;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .goods-num {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            .goods-price {
              font-weight: 700;
              span {
                color: rgb(242, 14, 40);
                font-size: 1.5rem;
                &::before {
                  content: "￥";
                  font-size: 10.5px;
                }
              }
              em {
                color: rgb(242, 14, 40);
                font-style: normal;
                font-size: 10.5px;
              }
            }
            .goods-action {
              display: flex;
              a {
                display: inline-block;
                width: 2rem;
                height: 2rem;
                text-align: center;
                line-height: 2rem;
                background: #f8f8f8;
                border-radius: 5px;
                border: 1px solid #eee;
                color: #333;
                font-size: 1.4rem;
              }
              input {
                width: 2.5rem;
                height: 2rem;
                border: 1px solid #eee;
                text-align: center;
              }
              button {
                width: 1.6rem;
                height: 1.8rem;
                background: none;
                margin-top: -1.1rem;
                margin-left: 1rem;
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
  .Nullcart {
    text-align: center;
    i {
      color: #777;
      font-size: 10rem;
    }
    p {
      margin-top: 5rem;
      color: #777;
      font-size: 1.6rem;
    }
  }
  .cart-footer {
    position: fixed;
    left: 0;
    bottom: 5rem;
    width: 100%;
    z-index: 10;
    height: 5rem;
    background: #fafafc;
    border-top: 1px solid #e3e8ee;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .goodsSelect {
      font-size: 1.4rem;
      margin-left: 1rem;
      i {
        display: inline-block;
        margin-top: -1.5rem;
      }
    }
    .priceAll {
      font-size: 1.4rem;
      span {
        color: rgb(242, 14, 40);
        font-size: 1.5rem;
        font-weight: 700;
        &::before {
          content: "￥";
          font-size: 10.5px;
        }
      }
      em {
        color: rgb(242, 14, 40);
        font-style: normal;
        font-size: 10.5px;
        font-weight: 700;
      }
    }
    .goBuy {
      width: 11rem;
      height: 5rem;
      background: #f44;
      color: #fff;
      text-align: center;
      line-height: 5rem;
      font-size: 1.4rem;
    }
  }
}
</style>