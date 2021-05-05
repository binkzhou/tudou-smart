<template>
  <view class="content">
    <view class="login_box">
      <view class="login_header">
        <image :src="src" class="login_avatar" />
      </view>
      <view class="input-row">
        <input class="uni-input" type="text" placeholder="请输入账号" v-model="user.email"/>
        <input
          class="uni-input"
          password
          type="text"
          placeholder="请输入密码"
          v-model="user.password"
        />
      </view>
      <button class="login_btn" @click="login">登陆</button>
      <view class="login_footer">
        <view>
          <text @click="goto('/pages/reset/index')">忘记密码</text>|
          <text @click="goto('/pages/register/index')">注册账号</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
import '@/api/request'
const avatar = require("@/static/images/ren.jpg");
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      src: avatar,
      user:{
        email:'',
        password:''
      }
    };
  },
  onLoad() {
  },
  methods: {
    // 去注册页面
    goto(url) {
      uni.redirectTo({
        url: url,
      });
    },
    login(){
      const {email,password} = this.user;
      if(email&&password){
        uni.showLoading({
				    title: '正在登录...'
        });
        uni.request({
          url: 'user/login',
          method:'POST',
          data: {
              email,
              password
          },
          header: {
              'content-type': 'application/json'
          },
          success: (res) => {
            if(res.data.code===200){
              uni.showToast({
                title: '登录成功',
                duration: 2000
              });
              console.log(res);
              if (res.data.data && res.data.data.jwtToken) {
                      wx.setStorageSync('token', res.data.data.jwtToken);   //保存Cookie到Storage
              }
              uni.request({
                url:'user/getUserInfo',
                success:(res)=>{
                  if(res.data.code===200){
                    wx.setStorageSync('userInfo', res.data.data.userInfo);
                  }
                }
              })
              uni.switchTab({
                url: '/pages/home/index',
              });
            }else{
              uni.showToast({
                title: '登录失败',
                duration: 2000,
                icon:"none"
              });
            }
          },
          fail:(res)=>{
            console.log(res);
          }
        });
      }else{
        uni.showToast({
          title: '邮箱或密码不能为空',
          duration: 2000,
          icon:"none"
        });
      }
    }
  },
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

/* 头部 */
.login_header {
  margin-top: 100rpx;
  margin-bottom: 100rpx;
  text-align: center;
}
.login_avatar {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
/* 登陆框 */
.content .uni-input {
  height: 100rpx;
  margin-bottom: 20rpx;
  padding-left: 30rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
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
.login_footer view text{
  padding: 0 10rpx;
}
</style>
