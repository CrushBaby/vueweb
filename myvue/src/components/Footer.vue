<!--  -->
<template>
  <div class="footer">
    <ul>
      <router-link tag="li" to="/home">
        <i
          class="iconfont icon-shouye1"
          v-if="this.$route.path.includes('/home')"
        ></i>
        <i class="iconfont icon-shouye" v-else></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to="/category/858">
        <i
          :class="[
            'iconfont ',
            'icon-leimupinleifenleileibie',
            { 'router-link-active': this.$route.path.includes('/category') },
          ]"
          v-if="this.$route.path.includes('/category')"
        ></i>
        <i class="iconfont icon-leimupinleifenleileibie1" v-else></i>
        <span
          :class="{
            'router-link-active': this.$route.path.includes('/category'),
          }"
          >分类</span
        >
      </router-link>
      <router-link tag="li" to="/find">
        <i class="iconfont icon-faxian1" v-if="active == 'find'"></i>
        <i class="iconfont icon-faxian" v-else></i>
        <span>发现</span>
      </router-link>
      <router-link tag="li" to="/cart">
        <i class="iconfont icon-gouwucheman" v-if="active == 'cart'"></i>
        <i class="iconfont icon-gouwuche" v-else></i>
        <span>购物车</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <i class="iconfont icon-my2-act" v-if="active == 'mine'"></i>
        <i class="iconfont icon-wode" v-else></i>
        <span>我</span>
      </router-link>
    </ul>
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
    return {
      active: "home", //默认当前选中首页
    };
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
  mounted() {
    // console.log(this);
    this.active = this.$route.path.slice(1);
    // console.log(this.$route.path.includes("/home"));
    // console.log(this.$route.path.includes("/category"));
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  ul {
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      width: 7.5rem;
      height: 5rem;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      i {
        display: block;
        width: 2.2rem;
        margin-top: -20px;
        font-size: 2.2rem;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
}

.router-link-active {
  color: #f20e28;
}
</style>