<!--登录页面-->
<template>
  <div class="login">
    <div class="login-bd">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="login-tab">
        <!-- 绑定.active--class名 -->
        <a href="javascript:;" :class="{ active: loginFlag }" @click="changeTab"
          >短信登录</a
        >
        <a
          href="javascript:;"
          :class="{ active: !loginFlag }"
          @click="changeTab"
          >账号登录</a
        >
      </div>
      <div class="login-content">
        <!-- 短信登录  -->
        <div v-if="loginFlag">
          <section>
            <input
              type="tel"
              maxlength="11"
              placeholder="手机号"
              v-model="phone"
            />
            <button v-if="!num" @click="getcodeFn">获取验证码</button>
            <button v-else disabled>已发送{{ num }}s</button>
          </section>
          <section>
            <input type="number" placeholder="验证码" maxlength="7" />
          </section>
        </div>
        <!-- 账号登录 -->
        <div v-else>
          <section>
            <input
              type="tel"
              maxlength="11"
              placeholder="用户名/邮箱/手机号"
              v-model="user_name"
            />
          </section>
          <section>
            <input
              type="password"
              placeholder="密码"
              v-model="pass"
              v-if="hidePass"
            />
            <input type="text" placeholder="密码" v-model="pass" v-else />
            <button
              class="iconfont icon-yincang"
              v-if="hidePass"
              @click="showHidePass"
            ></button>
            <button
              class="iconfont icon-xianshi-"
              v-else
              @click="showHidePass"
            ></button>
          </section>
          <section>
            <input
              type="tel"
              placeholder="验证码"
              maxlength="7"
              v-model="captcha"
            />
            <!-- 获取验证码 -->
            <img
              ref="captcha"
              src="http://localhost:3000/api/v1/users/captcha"
              @click="getCaptcha"
              alt=""
            />
          </section>
        </div>
        <!-- 登录按钮 http://114.215.173.225:3000 -->
        <button class="login-btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

//引入弹窗插件
import { Toast } from "mint-ui";

//引入login.js文件
import { loginuser } from "@/api/login.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginFlag: true, //是短信登录方式还是账号登录方式的旗帜判断
      phone: "",
      pass: "",
      num: 0,
      timer: "",
      hidePass: true,
      user_name: "",
      captcha: "",
      userinfo: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    identifyPhone() {
      //正则验证手机号码
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //切换tab栏：
    changeTab() {
      this.loginFlag = !this.loginFlag;
    },
    //获取验证码
    getcodeFn() {
      //判断手机号如果为true，倒计时开启：
      if (this.identifyPhone) {
        this.num = 60;
        this.timer = setInterval(() => {
          this.num--;
          if (this.num == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast({
          message: "手机号格式不正确",
          position: "center",
          duration: 3000,
        });
      }
    },
    showHidePass() {
      this.hidePass = !this.hidePass;
    },
    // 获取验证码,点击切换
    getCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t=" + new Date().getTime();
    },

    async login() {
      //登录方法
      //
      if (!this.user_name) {
        Toast("请输入用户名/邮箱/手机号！");
        return;
      } else if (!this.pass) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }

      //请求数据
      const result = await loginuser(this.user_name, this.pass, this.captcha);
      console.log(result);
      console.log(result.data[0]); //用户信息

      //判断登录不成功的情况：
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }

      //如果登录成功，就会跳转到首页页面
      if (result.status == 200) {
        this.$store.dispatch("actgetUserInfoDatas", result.data[0]);
        this.$router.push("/home");
      }
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
.login {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .login-bd {
    width: 95%;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 5px solid rgb(94, 192, 94);
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .login-tab {
      width: 100%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      a {
        display: block;
        width: 45%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        background: #ccc;
        font-size: 1.4rem;
        border-radius: 5px;
      }
      .active {
        //点击选中变色
        background: red;
        color: #fff;
      }
    }
    .login-content {
      section {
        margin-top: 1.5rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #ccc;
          box-sizing: border-box; //input框细线边框
          border-radius: 5px;
          text-indent: 2rem; //首行缩字符
          &:focus {
            //获取输入框焦点边框线
            border: 1px solid #f00;
          }
        }
        button {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%); //盒子垂直居中
          background: transparent; //背景透明色
          font-size: 1.3rem;
          color: #666;
        }
        img {
          position: absolute;
          right: 10px;
          top: 50%;
          height: 4rem;
          transform: translateY(-50%);
          background: transparent;
          font-size: 1.4rem;
          color: #666;
        }
      }
      .login-btn {
        display: block;
        width: 100%;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        background: red;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 5px;
        margin-top: 1.5rem;
      }
    }
  }
}
</style>