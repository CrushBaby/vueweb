<!-- 分类右边 -->
<template>
  <div class="category-right">
    <div class="right">
      <div class="category-hd">
        <a href="">
          <!-- 分类头部照片--和左边数据相对应 绑定获取的图片数据-->
          <img :src="adImg" alt="" />
        </a>
      </div>
      <div>
        <div
          class="category-bd"
          v-for="lists in categoryRightDatas"
          :key="lists.cat_id"
        >
          <div class="category-tit">
            <h3>
              -
              <span>{{ lists.cat_name }}</span>
              -
            </h3>
          </div>
          <ul>
            <li v-for="list in lists.child" :key="list.cat_id">
              <router-link :to="'/listdetail?cat_id=' + list.cat_id">
                <img src="@/assets/images/category01.jpg" alt="" />
                <span>{{ list.cat_name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      adImg: "",
      categoryRightDatas: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to) {
      // console.log(to); //对象，包含路由的信息
      let cid = to.params.cid;
      // console.log(cid);
      this.getCategoryRightDatas(cid);

      //监听数据的变化:
      //创建一个新数组---从store仓库里面放的数据中进行遍历---接收返回为true的数据（分类类别的id）
      var arr = this.$store.state.categoryDatas.filter((item) => {
        return item.category_id == cid;
      });
      //打印新的数据，并找到当前选中类别的头部图片
      // console.log(arr);
      this.adImg = arr[0].menu_img;
    },
  },
  //方法集合
  methods: {
    getCategoryRightDatas(cid) {
      Axios.get(`/api/v1/category/categorylist/${cid}`).then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.data);
        if (res.status == 200) {
          this.categoryRightDatas = res.data.data;

          //监听数据的变化:
          //创建一个新数组---从store仓库里面放的数据中进行遍历---接收返回为true的数据（分类类别的id）
          var arr = this.$store.state.categoryDatas.filter((item) => {
            return item.category_id == cid;
          });
          //打印新的数据，并找到当前选中类别的头部图片
          // console.log(arr);
          this.adImg = arr[0].menu_img;
        }
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this);
    console.log(this.$route);
    this.getCategoryRightDatas("858");
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less'>
.category-right {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .right {
    // overflow-y: scroll;
    .category-hd {
      height: 9.6rem;
      overflow: hidden;
      margin-top: 1.1rem;
      border-radius: 0.2rem;
      padding: 0 1.1rem;
      img {
        width: 100%;
      }
    }
    .category-bd {
      // height: 35.3rem;
      padding: 0 1.1rem;
      margin-bottom: -2rem;
      .category-tit {
        margin: 0.3rem 0 1.1rem;
        position: relative;
        overflow: hidden;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        color: #333;
        span {
          font-weight: 400;
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          width: 33%;
          height: 8.2rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            display: block;
            height: 8.2rem;
            text-align: center;
            span {
              display: block;
              font-size: 1.2rem;
              color: #777;
              margin-top: 0.8rem;
            }
            img {
              width: 5.2rem;
              height: 5.2rem;
            }
          }
        }
      }
    }
  }
}
</style>