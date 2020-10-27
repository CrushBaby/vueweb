<!--  -->
<template>
  <div class="home-header">
    <header class="header">
      <div class="search">
        <router-link to="/search" tag="span">
          <input type="text" placeholder="搜索商品名称" />
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <a>登录</a>
    </header>
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
<style lang='less' scoped>
// scoped 样式只在当前组件中有效
.home-header {
  width: 100%;
  height: 5rem;
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .header {
    display: flex;
    width: 100%;
    height: 5rem;
    .search {
      width: 90%;
      position: relative;
      margin-left: 1rem;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
        border-radius: 1.5rem;
        font-size: 1.3rem;
        text-indent: 2rem;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 3.5rem;
        text-align: center;
        line-height: 3.7rem;
        top: 0;
        color: #999;
      }
    }
    a {
      display: block;
      font-size: 1.4rem;
      color: #fff;
      line-height: 4.7rem;
      width: 10%;
      text-align: center;
    }
  }
}
</style>