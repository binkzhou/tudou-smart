<template>
  <view class="discover_container">
    <view class="content">
      <text>待扩展</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
});
</script>

<style>
.discover_container{
  background-color: #ddd;
  padding: 20rpx;
  height: 100vh;
}
.content{
  width: 100%;
  height: 200rpx;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 20rpx;
  box-shadow: 0px 0px 5px #eee;
  color: #B5A642;
  text-align: center;
  line-height: 200rpx;
  font-size: 50rpx;
}
</style>
