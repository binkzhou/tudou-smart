<template>
<view class="humiture">
  <view class="humiture_top">
	  <text class="z">舒适</text>
    <text class="r">注意保暖</text>
  </view>
  <view class="foot"> 
    <view>
      <view class="left">
        <text class="lef">{{deviceData.temp}}</text>
        <text class="rig">温度(℃)</text>
      </view> 
      <view class="right">
        <text class="lef">{{deviceData.humidity}}</text>
        <text class="rig">湿度(%)</text>
      </view>
    </view>
    <navigator url="/pages/chart/index" class="more app_info_item">
      <text>历史数据</text> 
    </navigator>
  </view>
</view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      sn:'',
      deviceData:{
        temp:'20',
        humidity:'80'
      },
      timer:''
    };
  },
  onLoad(option) {
    this.sn = option.sn;
    this.getDeviceData();
    this.timer = setInterval(() => {
      this.getDeviceData();
    }, 1000);
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  methods: {
    getDeviceData(){
      uni.request({
        url: 'device-data/getDeviceNewData',
        data: {
          sn:this.sn
        },
        success: (res) => {
            if(res.data.code===200){
              this.deviceData = JSON.parse(res.data.data.deviceNewData.data);
            }
          }
        });
    }
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
  
  border-radius: 30rpx;
}
.foot view:nth-of-type(1){
  padding: 40rpx 0rpx;
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

.foot .more{
  height: 100%;
  padding: 60rpx 0;
  text-align: center;
  border-top: 1px solid #eee;
  color: #555;
}
</style>
