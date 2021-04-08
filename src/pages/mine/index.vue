<template>
  <view class="tudou_index">
    <view class="user_info_wrap">
      <view class="user_img_wrap">
        <image class="user_bg" src="../../static/icons/bg.jpg"></image>
        <view v-if="userinfo.nickName" class="user_info">
          <image class="user_icon" :src="userinfo.avatarUrl"></image>
          <view class="user_name">{{ userinfo.nickName }}</view>
        </view>
        <view v-else class="user_info">
          <navigator url="/pages/login2/index">
            <image class="user_icon" src="../../static/icons/ren.jpg"></image>
            <view class="user_name">立即登录</view>
          </navigator>
        </view>
      </view>
    </view>
    <view class="user_content">
      <view class="user_main">
        <!-- 应用信息相关 -->
        <view class="app_info_wrap">
          <navigator url="/pages/feedback/index" class="app_info_item"
            >常见问题</navigator
          >
          <navigator url="/pages/feedback/index" class="app_info_item"
            >用户协议</navigator
          >

          <view class="app_info_item">关于我们</view>
          <view class="app_info_item app_info_contact">
            <text>联系客服</text>
            <text>400-000-0000</text>
          </view>
        </view>
        <!-- 推荐 -->
        <view class="recommend_wrap"> 把应用推荐给其他人 </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      userinfo: {},
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
page {
  background-color: #edece8;
}
.user_info_wrap {
  height: 45vh;
  overflow: hidden;
  background-color: var(--themeColor);
  position: relative;
}
.user_info_wrap .user_img_wrap {
  position: relative;
}
.user_info_wrap .user_img_wrap .user_bg {
  height: 50vh;
  filter: blur(7rpx);
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
  margin-top: 40rpx;
  font-size: 30rpx;
}
.user_content {
  position: relative;
}
.user_content .user_main {
  padding-bottom: 100rpx;
  color: #666;
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  top: -40rpx;
}
.user_content .user_main .app_info_wrap {
  margin-top: 30rpx;
  background-color: #fff;
}
.user_content .user_main .app_info_wrap .app_info_item {
  padding: 25rpx;
  border-bottom: 1rpx solid #ccc;
}
.user_content .user_main .app_info_wrap .app_info_contact {
  display: flex;
  justify-content: space-between;
}
.user_content .user_main .recommend_wrap {
  margin-top: 30rpx;
  background-color: #fff;
  padding: 25rpx;
}
</style>
