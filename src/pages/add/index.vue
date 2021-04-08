<template>
  <view>
    <view>
      <image
        mode="widthFix"
        class="cover-9"
        src="../../static/icons/scan.jpg"
        bindtap="img"
      ></image>
    </view>
    <button type="primary" bindtap="scan" style="width: 650rpx">
      添加设备
    </button>
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
view>view{
  width: 650rpx;
  margin: auto;
  
}

view>view>image{
  border: 1px solid #ccc;
  border-radius: 50rpx;
  width: 650rpx;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
}
</style>
