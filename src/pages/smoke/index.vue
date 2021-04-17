<template>
  <view class="somke_content">
    <view class="somke_iconContainer">
      <text class="iconfont icon-huoyan smoke_icon"></text>
    </view>
     <view class="smoke_state">
      <view class="smoke_item">
        <text class="iconfont icon-wifi"></text>
        <text class="somke_con">已联网</text>
      </view>
      <view class="smoke_item">
        <text class="iconfont icon-huoyan"></text>
        <text class="somke_con">未感应到</text>
      </view>
      <view class="smoke_item">
        <text class="iconfont icon-yangan"></text>
        <text class="somke_con">未感应到</text>
      </view>
    </view>
    <view class="smoke_detail"> 
      <view>
        <text>是否有明火</text>
        <text>有</text>
      </view>
      <view>
        <text>烟雾浓度</text>
        <text>80%</text>
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
@font-face {
  font-family: 'iconfont';  /* project id 2479706 */
  src: url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.eot');
  src: url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.woff') format('woff'),
  url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2479706_byh1h04nlw9.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  color: #fff;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-huoyan:before {
  content: "\e899";
}

.icon-wulianwangditushangtubiao_huaban:before {
  content: "\e615";
}

.icon-wifi:before {
  content: "\e97b";
}

.icon-yangan:before {
  content: "\e642";
}
.somke_content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  color: #fff;
  background: #2f7fe7;
}
.somke_iconContainer{
  background: #54A3EA;
  margin-top: 100rpx;
  padding: 100rpx;
  border: 50rpx solid #2684E4;
  border-radius: 50%;
}
.smoke_icon{
  font-size: 150rpx;
  color: white;
}
.smoke_state{
  display: flex;
  justify-content: space-between;
  width: 600rpx;
}
.smoke_item{
  color: #fff;
}
.smoke_item text{
  display: block;
  text-align: center;
  font-size: 70rpx;
}
.smoke_item .somke_con{
  margin-top: 20rpx;
  font-size: 30rpx;
}
.smoke_detail{
  display: flex;
  width: 100%;
  margin-top: 100rpx;
}
.smoke_detail view{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100rpx;
  /* border: 1px solid red; */
}
.smoke_detail view:first-child{
  font-size: 40rpx;
  border-right: 1px solid #6bbef1;
}
.smoke_detail view text:first-child{
  font-size: 30rpx;
  margin-bottom: 50rpx;
}
</style>
