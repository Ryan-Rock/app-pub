<template>
  <div class="moka">
    <h1>欢迎来到主页</h1>
    
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="qr-invalid">应用中心</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active:0,
      
    };
  },
  mounted() {
    
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
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

