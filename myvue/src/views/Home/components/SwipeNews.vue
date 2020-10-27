<!--  -->
<template>
  <div class="swipe-news">
    <div class="news">
      <img src="@/assets/images/hot-news.png" alt="" />
      <ul :class="{ 'news-info': true, trans: flag == true }" ref="news">
        <li v-for="list in newsListDatas" :key="list.id">{{ list.title }}</li>
      </ul>
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
    return {
      imgSrc: require("@/assets/images/hot-news.png"),
      flag: false,
      timer: "",
      newsListDatas: [
        { id: "1", title: "服务店突破2000多家" },
        { id: "2", title: "我们成为中国最大家电零售B2B2C系统" },
        { id: "3", title: "三大国际腕表品牌签约" },
        { id: "4", title: "新闻004" },
        { id: "5", title: "新闻005" },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollnews() {
      var oUl = this.$refs.news; //获取ul节点
      oUl.style.marginTop = "-3.6rem";
      var that = this;
      that.flag = !that.flag;
      setTimeout(function () {
        that.newsListDatas.push(that.newsListDatas[0]);
        //将数组的第一个元素添加到数组末尾；
        that.newsListDatas.shift();
        oUl.style.marginTop = "0";
        that.flag = !that.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(this.$refs);
    this.timer = setInterval(this.scrollnews, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.swipe-news {
  height: 3.6rem;
  padding: 0.7rem 1rem;
  background: #efefef;
  margin: -1rem 1rem;
  border-radius: 9px;
  .news {
    display: flex;
    height: 3.5rem;
    padding: 0.5rem 0;
    border-top: 1px solid #ccc;
    overflow: hidden;
    img {
      width: 7rem;
      height: 3rem;
      margin-top: 1.5px;
    }
    .trans {
      transition: all 0.5s;
    }
    .news-info {
      height: 3.6rem;
      margin-left: 1rem;
      li {
        height: 3.6rem;
        line-height: 3.6rem;
        font-size: 1.4rem;
        font-weight: 700;
        color: #333;
      }
    }
  }
}
</style>