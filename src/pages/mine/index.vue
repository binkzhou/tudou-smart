<template>
  <view class="home_container">
    <navigator url="/pages/info/index" class="home_card">
      <image class="user_icon" src="../../static/icons/bg.jpg"></image>
      <view class="home_title">
        <text>游客</text>
        <text>点击注册/登陆</text>
      </view>
      <view>
        <text>></text>
      </view>
    </navigator>
    <view class="home_card">
      <view>
        <text>关于</text>
      </view>
      <view>
        <text>></text>
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
page{
  width: 100%;
  box-sizing: border-box;
  background: #ccc;
}
.home_card{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50rpx;
  padding: 10px;
  background: #fff;
}
.home_card view:nth-of-type(1){
  display: flex;
  flex-direction: column;
}
.home_card .home_title text:last-child{
  font-size: 25rpx;
  color: #aaa;
}
.home_card view:nth-of-type(2){
  flex: 1;
  text-align: right;
  color: #aaa;
}
.user_icon {
  width: 100rpx;
  height: 100rpx; 
  margin-right: 10rpx;
}
</style>
