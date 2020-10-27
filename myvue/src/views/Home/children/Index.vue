<!--  -->
<template>
  <div class="home-index">
    <div class="swipe-wrap">
      <!-- 轮播图组件 -->
      <Swipe />
    </div>
    <!-- 快捷导航 -->
    <QuickNav />
    <!-- 滚动新闻 -->
    <SwipeNews />
    <!-- 中间商品 -->
    <ShowGoods />
    <!-- 中间商品 -->
    <ShowGoods />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

//导入轮播图组件
import Swipe from "@/components/Swipe.vue";

//导入快捷导航组件
import QuickNav from "../components/QuickNav.vue";

//导入热门新闻组件
import SwipeNews from "../components/SwipeNews.vue";

//导入商品中间模块
import ShowGoods from "../components/ShowGoods.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    ShowGoods,
  },
  data() {
    //这里存放数据
    return {};
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
.swipe-wrap {
  margin: 0 1rem;
  div {
    border-radius: 9px;
  }
}
</style>