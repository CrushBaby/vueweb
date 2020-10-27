<!-- 分类组件头部 -->
<template>
  <div class="category-header">
    <header>
      <form>
        <!--回退到上一级： window.history.back() -->
        <a href="javascript:;" onClick="window.history.back()"
          ><i class="iconfont icon-jiantouxiangzuo"></i
        ></a>
        <router-link to="/search" tag="span">
          <input type="search" placeholder="请输入关键字" />
        </router-link>
        <i class="iconfont icon-sousuo1 search"></i>
      </form>
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
<style lang='less'>
.category-header {
  width: 100%;
  height: 3.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f1f1f1;
  header {
    width: 100%;
    height: 100%;
    form {
      display: flex;
      position: relative;
      a {
        width: 10%;
        height: 3rem;
        line-height: 3.5rem;
        text-align: center;
        i {
          display: inline-block;
          margin-top: -0.8rem;
          color: #999;
        }
      }
      span {
        width: 85%;
        display: block;
        input {
          width: 100%;
          height: 3.2rem;
          line-height: 3rem;
          border-radius: 15px;
          border: 1px solid #ddd;
          color: #666;
          text-indent: 2rem;
          font-size: 1.3rem;
        }
      }

      .search {
        position: absolute;
        right: 3rem;
        top: -0.8rem;
        color: #999;
      }
    }
  }
}
</style>