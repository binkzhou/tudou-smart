<template>
  <view class="home_container">
    <view class="user_info_wrap">
      <view class="user_img_wrap">
        <image class="user_bg" src="../../static/icons/bg.jpg"></image>
        <view v-if="userInfo.username" class="user_info">
          <image class="user_icon" src="../../static/images/ren.jpg"></image>
          <view class="user_name">{{userInfo.username}}</view>
        </view>
        <view v-else class="user_info">
          <navigator url="/pages/login/index">
            <image class="user_icon" src="../../static/images/ren.jpg"></image>
            <view class="user_name">立即登录</view>
          </navigator>
        </view>
      </view>
    </view>
    <view class="user_content">
      <view class="user_main">
        <view class="app_info_wrap">
          <navigator url="/pages/reset/index" class="app_info_item">
            <view>
              <text class="iconfont icon-xiugaimima"></text>
              <text>修改密码</text>
            </view>
            <view>
              <text class="iconfont icon-jiantou"></text>
            </view>
          </navigator>
          <navigator url="/pages/agreement/index" class="app_info_item">
            <view>
              <text class="iconfont icon-changjianwenti"></text>
              <text>用户协议</text>
            </view>
            <view>
              <text class="iconfont icon-jiantou"></text>
            </view>
          </navigator>
          <navigator url="/pages/about/index" class="app_info_item">
            <view>
            <text class="iconfont icon-moban"></text>
              <text>关于我们</text>
            </view>
            <view>
              <text class="iconfont icon-jiantou"></text>
            </view>
          </navigator>
          <view class="app_info_item app_info_contact" @click="call">
            <view>
              <text class="iconfont icon-lianxikefu"></text>
              <text>联系客服</text>
            </view>
            <view>
            </view>
            <text>xxx-xxxx-xxxx</text>
          </view>
          <view class="app_info_item" @click="logout">
            <view>
              <text class="iconfont icon-tuichudenglu"></text>
              <text>退出登录</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({ 
  data() {
    return {
      userInfo:{}
    };
  },
  onShow() {
    const userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo);
    if(userInfo){
      this.userInfo = userInfo;
    }
  },
  methods: {
    logout(){
      let _this = this;
      uni.showModal({
        title: '提示',
        content: '你确定要退出登录吗?',
        success: function (res) {
            if (res.confirm) {
              _this.userInfo={};
              wx.removeStorageSync('token');
              wx.removeStorageSync('userInfo')
            }
        }
    });
    },
    call(){
      uni.makePhoneCall({
        phoneNumber: '18171283247'
    });
    }
  },
});
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 2504294 */
  src: url('//at.alicdn.com/t/font_2504294_wdawff0qlj.eot');
  src: url('//at.alicdn.com/t/font_2504294_wdawff0qlj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2504294_wdawff0qlj.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2504294_wdawff0qlj.woff') format('woff'),
  url('//at.alicdn.com/t/font_2504294_wdawff0qlj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2504294_wdawff0qlj.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-changjianwenti:before {
  content: "\e648";
}

.icon-moban:before {
  content: "\e61d";
}

.icon-jiantou:before {
  content: "\e61f";
}

.icon-tuichudenglu:before {
  content: "\e615";
}

.icon-xiugaimima:before {
  content: "\e633";
}

.icon-lianxikefu:before {
  content: "\e624";
}
page {
  background-color: #edece8;
}
.user_info_wrap {
  height: 400rpx;
  overflow: hidden;
  margin: 10rpx;
  background-color: var(--themeColor);
  position: relative;
}
.user_info_wrap .user_img_wrap {
  position: relative;
}
.user_info_wrap .user_img_wrap .user_bg {
  height: 400rpx;
  width: 100%;
  filter: blur(3rpx);
}
.user_info_wrap .user_img_wrap .user_info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  text-align: center;
}
.user_info_wrap .user_img_wrap .user_info .user_icon {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
}
.user_info_wrap .user_img_wrap .user_info .user_name {
  color: #fff;
  margin-top: 20rpx;
  font-size: 30rpx;
}
.user_content {
  position: relative;
}
.user_content .user_main {
  padding-bottom: 100rpx;
  color: #666;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.user_content .user_main .app_info_wrap {
  margin: 0 10rpx;
  background-color: #fff;
}
.user_content .user_main .app_info_wrap .app_info_item {
  display: flex;
  justify-content: space-between;
  padding: 30rpx ;
  border-bottom: 1rpx solid #eee;
}
.app_info_item view text:nth-last-of-type(2){
  margin-right: 20rpx;
}
.user_content .user_main .app_info_wrap .app_info_contact {
  display: flex;
  justify-content: space-between;
}
.user_content .user_main .recommend_wrap {
  margin-top: 30rpx;
  background-color: #fff;
  padding: 25rpx ;
}
.navigator-hover{
  opacity: 1;
}
</style>
