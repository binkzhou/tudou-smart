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
    <button type="primary" bindtap="scan" style="width: 650rpx" @click="addDevice">
      添加设备
    </button>
  </view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    addDevice(){

      // 允许从相机和相册扫码 
      uni.scanCode(
        {
          success: function (res) {
              const sn = JSON.parse(res.result).sn;
              uni.request({
                url: 'device/addDevice',
                method:'POST',
                data: {
                    sn
                },
                success: (res) => {
                    if(res.data.code===200){
                      wx.switchTab({
                          url: '/pages/home/index'
                      });
                    }else{
                      uni.showToast({
                          title: res.data.message,
                          duration: 2000,
                          icon:'none'
                      });
                    }
                }
            });
          }
      });
    }
  },
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
