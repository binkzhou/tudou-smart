<template>
  <view class="content">
    <view class="login_box">
      <view class="login_header">
        <image :src="src" class="login_avatar" />
      </view>
      <view class="input-row">
        <input class="uni-input" type="text" placeholder="请输入账号" />
        <input
          class="uni-input"
          password
          type="text"
          placeholder="请输入密码"
        />
      </view>
      <button class="login_btn">登陆</button>
      <view class="login_footer">
        <view>
          <text>忘记秘密？</text>
          <text @click="goto('/pages/register/index')">| 注册账号</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
const avatar = require("@/static/images/avatar.jpg");
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      src: avatar,
    };
  },
  onLoad() {},
  methods: {
    // 去注册页面
    goto(url:string) {
      uni.redirectTo({
        url: url,
      });
    },
  },
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}

/* 头部 */
.login_header {
  margin-top: 10rpx;
  margin-bottom: 100rpx;
  text-align: center;
}
.login_avatar {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
/* 登陆框 */
.input-row {
  width: 650rpx;
  overflow: hidden;
  background: #fff;
}
.content .uni-input {
  height: 100rpx;
  padding-left: 30rpx;
  border-bottom: 1px solid #ccc;
}
/* 登陆按钮 */
.login_btn {
  width: 650rpx;
  margin-top: 50rpx;
  color: #fff;
  background-color: #2a85ff;
}
/* 底部 */
.content .login_footer {
  display: flex;
  justify-content: center;
  margin-top: 50rpx;
}
</style>
