<template>
  <div class="moka">
    <div class="contain">
      <div  v-if="isLogin">
        <div class="labelGroup">
          <label for="name">用户名:</label>
          <input type="text" id="name" v-model="name" autocomplete = "off" placeholder="请输入账号">
        </div>
        <div class="labelGroup">
          <label for="pwd">密码:</label>
          <input type="password" id="pwd" v-model="password" autocomplete = "off" placeholder="请输入密码">
        </div>
        <a @click="login">登 录</a>
        <a @click="gologins">注 册</a>
      </div>
      <div v-else>
        <div class="labelGroup">
          <label for="name">用户名:</label>
          <input type="text" v-model="userInfo.username" autocomplete = "off" placeholder="请输入账号">
        </div>
         <div class="labelGroup">
          <label for="name">密码:</label>
          <input type="text" v-model="userInfo.pwd" autocomplete = "off" placeholder="请输入账号">
        </div>
         <div class="labelGroup">
          <label for="name">确认密码:</label>
          <input type="text" v-model="userInfo.confirmPwd" autocomplete = "off" placeholder="请输入账号">
        </div>
        <a @click="insert">注 册</a>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "",
      name: "",
      password: "",
      isLogin: true,
      userInfo: { username: "", pwd: "", confirmPwd: "" }
    };
  },
  mounted() {
    
  },
  methods: {
    gologins() {
      this.isLogin = false;
    },
    login() {
      this.$http({
        method: "post",
        url: "/apis/logins/login",
        data: { name: this.name, password: this.password },
        dataType: "json"
      })
        .then(res => {
          console.log(res);
          alert(res.data);
           this.$router.push('/main')
        })
        .catch(function(error) {
          alert("服务器未响应");
        });
    },
    insert() {
      let userInfo=this.userInfo;
      this.$http({
        method: "post",
        url: "/apis/logins/sign",
        data: {
          info:userInfo
        },
      })
        .then(res => {
          console.log(res);
          this.$router.push('/main')
        })
        .catch(function(error) {
          alert("服务器未响应");
        });
    }
  }
};
</script>
<style scoped>
.moka {
  width: 100%;
  /* background:rgba(73, 214, 184, 0.5); */
  min-height: 100%;
}
.contain {
  padding-top: 30%;
  width: 100%;
}

.contain label {
  display: inline-block;
  width: 25%;
  text-align: right;
  font-size: 18px;
}
.contain .labelGroup {
  margin-top: 10%;
}
input {
  background: none;
  outline: none;
  border: 0px;
  border: 1px solid #c8c9cc;
  background: white;
  height: 28px;
  padding-left: 1%;
  width: calc(100% - 150px);
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #999;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #999;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */

  color: #999;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #999;
}
a {
  display: inline-block;
  width: 96%;
  border: 1px solid black;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: white;
  color: rgb(46, 5, 5);
  font-size: 18px;
  word-spacing: 1%;
  box-sizing: border-box;
}
</style>
<style>
html,
body {
  height: 100%;
}
</style>

