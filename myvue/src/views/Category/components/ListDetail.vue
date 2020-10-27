<!-- 商品列表页面 -->
<template>
  <div class="list-detail">
    <CategoryHeader />
    <!-- 筛选栏 -->
    <div class="filter-tab">
      <ul>
        <li>
          <span>综合</span>
          <i class="iconfont icon-sanjiaoxing-copy"></i>
        </li>
        <li>
          <span>新品</span>
          <i class="iconfont"></i>
        </li>
        <li>
          <span>销量</span>
          <i class="iconfont"></i>
        </li>
        <li>
          <span>价格</span>
          <i class="iconfont icon-sanjiaoxing-copy"></i>
        </li>
        <li>
          <i class="iconfont icon-shaixuan"></i>
          <span>筛选</span>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <Lists :lists="goodsLists" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./CategoryHeader.vue";

import Lists from "@/components/Lists.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
    Lists,
  },
  data() {
    //这里存放数据
    return {
      lists: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsLists() {
      return this.$store.state.goodsLists;
    },
  },
  mounted() {
    this.$store.dispatch("actgetGoodsLists", {
      cat_id: this.$route.query.cat_id,
    });
  },
};
</script>
<style lang='less'>
.list-detail {
  .filter-tab {
    width: 100%;
    height: 3.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #f1f1f1;
    font-size: 1.3rem;
    ul {
      display: flex;
      width: 100%;
      height: 3.6rem;
      justify-content: space-around;
      align-items: center;
      li {
        width: 20%;
        height: 3.6rem;
        line-height: 2rem;
        text-align: center;
        color: #333;
      }
    }
  }
}
</style>