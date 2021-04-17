<template>
<view class="humiture">
  <view class="humiture_top">
	  <text class="z">舒适</text>
    <text class="r">注意保暖</text>
  </view>
  <view class="foot"> 
    <view class="left">
      <text class="lef">44.4</text>
      <text class="rig">温度(℃)</text>
    </view> 
    <view class="right">
      <text class="lef">98</text>
      <text class="rig">湿度(%)</text>
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
  },
});
</script>

<style>
.humiture {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #42cbeb 0%, #3273a9 100%);
  color: white;
}

.humiture .humiture_top{
  text-align: center;
  padding-top: 150rpx;
}
.humiture .humiture_top text{
  display: block;
}
.z{  
  font-size: 150rpx;
}
.r{
  font-size: 50rpx;
}

.foot{
  width: 700rpx;
  position: fixed;
  bottom: 0;
  /* border: 1px solid red; */
  margin:70rpx 25rpx;
  background-color: white;
  color: black;
  padding: 120rpx 0rpx;
  border-radius: 30rpx;
}
.foot text{
  
  display: block;
}

.foot .left{
  width: 350rpx;
  text-align: center;
  display: inline-block;
  /* border: 1px solid red; */
}

.foot .right{
  width: 350rpx;
  text-align: center;
  display: inline-block;
  /* border: 1px solid red; */
}

.lef{
  font-size: 80rpx;
}
.rig{
  color: #999;
  font-size: 40rpx;
}
</style>
