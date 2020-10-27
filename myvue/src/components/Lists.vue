<!-- 商品列表----一行两列组件（公共的组件） -->
<template>
  <div class="lists">
    <div class="prolist">
      <div class="proitems" v-for="list in lists" :key="list.goods_id">
        <router-link :to="'/goodsdetail/?goods_id=' + list.goods_id">
          <div class="proimg">
            <img :src="list.goods_img" alt="" />
          </div>
          <div class="proinfo">
            <h4>
              {{ list.goods_name }}
            </h4>
            <div class="proprice">
              <span>{{ list.shop_price }}.</span>
              <em>00</em>
            </div>
            <div class="prop">
              <em>进店</em>
              <span>5人已购买</span>
              <i class="iconfont icon-gouwuche1"></i>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  props: {
    lists: Array,
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.lists {
  background: #efefef;
  .prolist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // overflow-y: scroll;
    .proitems {
      float: left;
      width: 48%;
      margin: 1%;
      padding: 0.6rem 0 0;
      background: #fff;
      border-radius: 0.5rem;
      .proimg {
        width: 100%;
        border-radius: 0.5rem 0.5rem 0 0;
        img {
          width: 100%;
        }
      }
      .proinfo {
        padding: 0.8rem;
        border-radius: 0 0 0.5rem 0.5rem;
        h4 {
          color: #333;
          font-size: 1.4rem;
          height: 3.8rem;
          line-height: 1.9rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-weight: 400;
        }
        .proprice {
          padding: 6px 0px 8px;
          color: rgb(242, 14, 40);
          font-size: 16px;
          font-weight: 700;
          display: inline-block;
          em {
            font-style: normal;
            font-size: 11.2px;
          }
          &::before {
            content: "￥";
            font-size: 11.2px;
          }
        }
        .prop {
          height: 2rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          em {
            font-style: normal;
            background-color: #fef0f0;
            padding: 0.1rem 0.5rem;
            border-radius: 0.2rem;
            color: #f92028;
            font-size: 1.3rem;
          }
          span {
            color: #999;
            margin-left: 0.6rem;
            font-size: 1.2rem;
          }
          i {
            font-size: 1.4rem;
            color: #f92028;
            position: absolute;
            right: 0;
            top: -11px;
          }
        }
      }
    }
  }
}
</style>