<!--搜索页面-->
<template>
  <div>
    <div class="search-header">
      <!-- 搜索头部 -->
      <header>
        <form>
          <!--回退到上一级： window.history.back() -->
          <a href="javascript:;" onClick="window.history.back()"
            ><i class="iconfont icon-jiantouxiangzuo"></i
          ></a>
          <router-link to="/search" tag="span">
            <input
              type="search"
              placeholder="请输入关键字"
              v-model="keywords"
            />
          </router-link>
          <i class="iconfont icon-sousuo1 search"></i>
          <button @click="searchKeywords">搜索</button>
        </form>
      </header>
      <!-- 搜索内容 -->
      <div class="search-warp">
        <div class="recent-search">
          <p>最近搜索</p>
          <i class="iconfont icon-lajitong-copy"></i>
        </div>
        <div class="search-tags">
          <a href="javascript:;">小米</a>
          <a href="javascript:;">手机</a>
        </div>
        <div class="hot-search">
          <p>热搜</p>
        </div>
        <div class="search-tags">
          <a href="javascript:;">周大福</a>
          <a href="javascript:;">内衣</a>
          <a href="javascript:;">生活</a>
          <a href="javascript:;">珠宝</a>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.dispatch("actsearchKeywords", {
          keywords: this.keywords,
        });
        this.$router.push("/searchlist");
      }
    },
  },
};
</script>
<style lang='less'>
.search-header {
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
        width: 75%;
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
        right: 7rem;
        top: -0.8rem;
        color: #999;
      }
      button {
        width: 15%;
        text-align: center;
        font-size: 1.5rem;
        background: transparent;
        color: #232326;
      }
    }
  }
  .search-warp {
    margin-top: 2.5rem;
    padding: 0 1rem;
    .recent-search {
      display: flex;
      justify-content: space-between;
      position: relative;
      p {
        font-size: 1.5rem;
        color: #232326;
      }
      i {
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        position: absolute;
        top: -1.5rem;
        right: 1rem;
      }
    }
    .search-tags {
      padding-top: 1rem;
      height: 3rem;
      a {
        display: block;
        height: 2rem;
        line-height: 2rem;
        padding: 0 1rem;
        background: #f0f2f5;
        color: #686868;
        float: left;
        text-align: center;
        margin-right: 1rem;
        border-radius: 0.3rem;
        font-size: 1.3rem;
      }
    }
    .hot-search {
      p {
        font-size: 1.5rem;
        color: #232326;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>