<template>
  <view class="about_container">
    <view class="about_logo">
      <image mode="aspectFit" src="../../static/icons/logo2.png" alt="">
      <text>土豆智能</text>
    </view>
    <view class="about_detail">
      <view class="about_item">
        <text>版本</text>
        <text>V1.0.1</text>
      </view>
      <view class="about_item">
        <text>官方邮件</text>
        <text>xxxxx@qq.com</text>
      </view>
      <view class="about_item">
        <text>商务合作</text>
        <text>xxxxxx@qq.com</text>
      </view>
    </view>
  </view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
    };
  }
});
</script>

<style>
.about_logo{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.about_logo image{
  width: 200rpx;
  height: 200rpx;
  margin-top: 50rpx;
  margin-bottom: 20rpx;
}
.about_logo text{
  font-size: 35rpx;
  color: #333;
}

.about_detail{
  margin-top: 100rpx;
  font-size: 35rpx;
  border-top: 1px solid #ddd;
}
.about_detail .about_item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120rpx;
  padding: 0 40rpx;
  color: #333;
  border-bottom: 1px solid #ddd;
}
.about_detail .about_item text:last-child{
  color: #666;
}
</style>
