<!-- 分类左边导航 -->
<template>
  <div class="category-left">
    <div class="left">
      <ul>
        <li
          v-for="list in this.$store.state.categoryDatas"
          :key="list.category_id"
        >
          <router-link tag="p" :to="'/category/' + list.category_id">{{
            list.menu_name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios"; //哪里用到就在哪里导入这个模块

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      is_active: 0,
      // categoryDatas: [],//这里不用了
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getCategoryDatas() {
      //http://192.168.0.161:3000/api/v1/category
      Axios.get("/api/v1/category").then((res) => {
        console.log(res.data);
        // console.log(res.data.data);
        if (res.data.status == 200) {
          this.$store.dispatch("actgetCategoryDatas", res.data.data);
        }
      });
    },
    changeTab(index) {
      this.is_active = index;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getCategoryDatas();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.category-left {
  height: 100%;
  border-right: 0.05rem solid #f5f5f5;
  .left {
    width: 8.4rem;
    height: 100%;
    overflow-y: scroll;
    ul {
      li {
        height: 2rem;
        padding: 0.9rem 0;
        line-height: 2rem;
        text-align: center;
        font-size: 1.3rem;
        color: #999;
        .router-link-active {
          border-left: 0.25rem solid #f23030;
          color: #f23030;
        }
      }
    }
  }
}
</style>