<!--  -->
<template>
  <div class="home">
    <HomeHeader />
    <div class="nav-list">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeFn"
      >
      </ly-tab>
      <div class="category-link">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
    </div>
    <div style="height: 9.1rem"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HomeHeader from "@/views/Home/components/HomeHeader.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    HomeHeader,
    Footer,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家居家纺",
        },
        {
          label: "个人化妆",
        },
      ],
      options: {
        activeColor: "#fff", //设置选中的颜色
      },
      childrenRouter: [
        "/home/index",
        "/home/elehome",
        "/home/mcloth",
        "/home/shoesboots",
        "/home/phone",
        "/home/computer",
        "/home/homehextile",
        "/home/personalbeauty",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeFn(item, index) {
      // console.log(item);
      // console.log(index);
      this.$router.push(this.childrenRouter[index]);
    },
  },
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
.home {
  .nav-list {
    display: flex;
    position: fixed;
    top: 5rem;
    left: 0;
    height: 4.1rem;
    z-index: 99;
    .ly-tab {
      width: 80%;
      height: 100%;
      .ly-tabbar {
        height: 100%;
        background: red;
        border: 0;
        box-shadow: 0 0px 0px 0px #eee;
        .ly-tab-list {
          height: 100%;
          padding: 0 1rem;
          .ly-tab-item {
            padding: 0 0.2rem;
          }
        }
        a {
          color: #fff;
        }
      }
    }
    .category-link {
      width: 20%;
      height: 4.1rem;
      line-height: 4.1rem;
      background: red;
      color: #fff;
      text-align: center;
      i {
        width: 2.5rem;
        height: 2.5rem;
        display: inline-block;
        font-size: 1.6rem;
        padding-left: 5px;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
        line-height: 1.2rem;
      }
      span {
        font-size: 1.4rem;
      }
    }
  }
}
</style>