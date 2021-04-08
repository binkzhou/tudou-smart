<template>
  <view class="tudou_index">
    <!-- 轮播图 开始 -->
    <view class="index_swiper">
      <image
        style="height: 150px; background-color: #eeeeee"
        mode="scaleToFill"
        src="../../static/icons/b3.jpg"
      ></image>
    </view>
    <!-- 设备 开始 -->
    <view class="index_device">
      <navigator url="" v-for="item in deviceList" :key="item.id">
        <image :src="`../../static/icons/${item.img}.png`" mode="widthFix"></image>
        <view>{{ item.name }}</view>
      </navigator>
    </view>
    <!-- 设备 结束 -->
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      deviceList:[
        {
          id:'1',
          name:'温湿度',
          img:'humiture'
        }
      ]
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
.tudou_index {
  height: 100vh;
}
.tudou_index .index_swiper swiper {
  width: 750rpx;
  height: 340rpx;
}
.tudou_index .index_swiper image {
  width: 100%;
}
.tudou_index .index_device navigator {
  float: left;
  margin-left: 20rpx;
  margin-top: 20rpx;
  padding: 20rpx;
  width: 345rpx;
  height: 190rpx;
  border-radius: 20rpx;
  background-color: white;
  box-shadow: 5rpx 7rpx 5px #ccc;
}
.tudou_index .index_device navigator image {
  width: 80rpx;
  margin: 0 0 5rpx 10rpx;
}
.tudou_index .index_device navigator view {
  margin-left: 20rpx;
  font-weight:bold;
  font-size: 27rpx;
}
</style>
