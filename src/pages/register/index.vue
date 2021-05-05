<template>
  <view class="content">
    <view class="login_box">
      <view class="login_header">
          <image :src="src" class="login_avatar"/>
      </view>
      <view class="input-row">
        <input class="uni-input"  type="text" placeholder="请输入邮箱" v-model="user.email"/>
        <view class="uni-code">
          <input type="text" maxlength="6" placeholder="请输入验证码" v-model="user.code"/>
          <button @click="sendCode">{{computeTime>0 ? `${computeTime}s已发送` : '获取验证码'}}</button>
        </view>
        <input class="uni-input"  type="text" placeholder="请输入用户名" v-model="user.username"/>
        <input class="uni-input" password type="text" placeholder="请输入密码" v-model="user.password"/>
        
      </view>
      <button class="login_btn" @click="register">注册</button>
      <view class="login_footer">
        <view>
          <text>已有账号</text>|<text @click="goto('/pages/login/index')">登陆</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
const avatar = require('@/static/images/ren.jpg')
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      src: avatar,
      computeTime:0,
      user:{
        email:'',
        username:'',
        password:'',
        code:''
      }
    };
  },
  onLoad() {},
  methods: {
    // 去登陆页面
    goto(url) {
      uni.redirectTo({
        url: url,
      });
    },
    sendCode(){
      const emailreg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      const email = this.user.email;
      if (emailreg.test(email)) {
						if (!this.computeTime) {
            this.computeTime = 30;
            this.timer = setInterval(() => {
						this.computeTime--;
						if (this.computeTime <= 0) {
							clearInterval(this.timer)
						}
					}, 1000);
           uni.request({
            url: 'user/sendEmail',
            data: {
                email,
                IsUpdatePassWord:false
            },
            success: (res) => {
              if(res.data.code===200){
                  uni.showToast({
                    title: '发送成功,请检查邮箱',
                    duration: 2000,
                    icon:"none"
                  });
                  if (res && res.header && res.header['Set-Cookie']) {
                      console.log(res);
                      wx.setStorageSync('cookieKey', res.header['Set-Cookie']);   //保存Cookie到Storage
                  }
                }else{
                  uni.showToast({
                    title: res.data.message,
                    duration: 2000,
                    icon:"none"
                  });
                }
              },
              fail:(res)=>{
                console.log(res);
              }
            });
				}
			}else{
        uni.showToast({
          title: '邮箱格式不正确',
          duration: 2000,
          icon:"none"
        });
      }
    },
    register(){
      const emailreg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      const {email,username,password,code} = this.user;
      if (emailreg.test(email)) {
        uni.request({
          url: 'user/register',
          method:'POST',
          data: {
              email,
              username,
              password,
              code,
          },    
          header: {
              'content-type': 'application/json'
          },
          success: (res) => {
            if(res.data.code===200){
              uni.showToast({
                title: '注册成功',
                duration: 2000
              });
              uni.redirectTo({
                url: '/pages/login/index',
              });
            }else{
              uni.showToast({
                title: res.data.message,
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
          title: '邮箱格式不正确',
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
  margin-top: 70rpx;
  margin-bottom: 70rpx;
  text-align: center;
}
.login_avatar {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
/* 登陆框 */
.content .uni-input {
  width: 650rpx;
  height: 100rpx;
  margin-bottom: 20rpx;
  padding-left: 30rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
}
.uni-code{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650rpx;
  height: 100rpx;
  margin-bottom: 20rpx;
  padding-left: 30rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
}
.uni-code input{
  height: 100rpx;
}
.uni-code button{
  height: 80rpx;
  margin-right: 15rpx;
  line-height: 80rpx;
  color: #fff;
  background: #2a85ff;
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
