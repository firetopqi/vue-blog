<template>
  <div class="main">
    <!-- <img src="/img/2.jpg" alt="ss" /> -->
    <div class="title">欢迎各位大咖</div>
    <div class="left"></div>
    <div class="load">
      <div class="input-item">
        <span class="label-name">用户名:</span>
        <at-input v-model="inputValue" placeholder="请输入您的用户名"></at-input>
      </div>
      <div class="input-item">
        <span class="label-name">密码:</span>
        <at-input v-model="password" type="password" placeholder="请输入您的密码"></at-input>
      </div>
      <at-button type="primary" value="登录" @click="loadIn">登录</at-button>
    </div>
  </div>
</template>
<script>
import { postLogInfo } from "@/api/login.js";
export default {
  data() {
    return {
      inputValue: "",
      password: "",
    };
  },
  methods: {
    loadIn() {
      let form = {
        name: this.inputValue,
        password: this.password,
      };
      postLogInfo(form)
        .then(res => {
          if (res.code === "0") {
            localStorage.setItem("token", res.token);
            this.$goToRedirect(this.$route);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  // background-image: url("/img/2.jpg");
  background: url("/img/111.jpg") no-repeat;
  overflow: hidden;
  background-size: cover;
  .title {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: 22px;
    color: rgb(72, 250, 2);
    border-bottom: 1px solid #eee;
    background-color: rgba(212, 235, 203, 0.3);
  }
  .load {
    position: absolute;
    right: 100px;
    top: 300px;
    border: 1px solid #ccc;
    padding: 20px 10px;
    background-color: rgba(212, 235, 203, 0.3);
  }
  .input-item {
    display: flex;
    .label-name {
      width: 50px;
      line-height: 28px;
      text-align: right;
      margin-bottom: 20px;
      margin-right: 15px;
    }
  }
}
</style>