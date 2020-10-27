<!--  -->
<template>
  <div class="quick-nav">
    <!-- 快捷导航 -->
    <!-- :auto="2000"   间隔时间
      :show-indicators="true"   是否显示指示点
      :default-index="1"    初始化索引
      :continuous="true"   是否循环播放
    @change="handleChange"   绑定一个事件，参数index可以获取索引-->
    <mt-swipe
      :auto="0"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item>
        <ul>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="@/assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
          <li>
            <img src="../../../assets/images/q-n01.png" alt="" />
            <span>潮流服饰</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
.quick-nav {
  height: 20.8rem;
  margin: 1rem 1rem 0 1rem;
  background: #efefef;
  border-radius: 9px;
  .mint-swipe {
    height: 20.4rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 18rem;
      li {
        width: 20%;
        height: 9rem;
        text-align: center;
        img {
          width: 7rem;
          height: 7rem;
        }
        span {
          font-size: 1.3rem;
        }
      }
    }
    .mint-swipe-indicators {
      bottom: 6px;
      .mint-swipe-indicator {
        width: 1.5rem;
        height: 0.4rem;
        margin: 0;
        opacity: 0.2;
        border-radius: 30rem;
        background: red;
      }
      .mint-swipe-indicator.is-active {
        background: orangered;
        opacity: 0.7;
      }
    }
  }
}
</style>