<template>
  <div class="somke_content">
    <view class="top"> 
    <view bindtap="start" :class="deviceData.fire==1?'on':''">
        <text class="iconfont icon-huoyan smoke_icon"></text>
    </view>
    </view>
    <view class="foot"> 
      <view class="nav">
        <view class="nav_left">
          <text class="iconfont icon-huoyan"></text>
          <text>是否有明火</text>
        </view>
        <view class="nav_right">
          <text>{{deviceData.fire==='1'?'有':'无'}}</text>
        </view>
      </view>
      <view class="nav" >
        <view class="nav_left">
          <text class="iconfont icon-yangan"></text>
          <text>烟雾浓度</text>
        </view>
        <view class="nav_right">
          <text>{{deviceData.smoke}}%</text>
        </view>
      </view>
    </view>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      sn:'',
      deviceData:{
        smoke:'20',
        fire:'0'
      },
      timer:''
    };
  },
  onLoad(option) {
    this.sn = option.sn;
    this.getDeviceData();
    this.timer = setInterval(() => {
      this.getDeviceData();
    }, 300);  
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
page{
  background-color: #32bac0;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-tongji:before {
  content: "\e649";
}

.icon-icon-test:before {
  content: "\e614";
}

.icon-wulu:before {
  content: "\e7eb";
}

.icon-daojishi:before {
  content: "\e64a";
}

/* 上 */

.top{
  padding: 200rpx 0;
  text-align: center;
}
.top>text{
  margin-top: 50rpx;
  font-size: 30rpx;
  display: inline-block;
  color: white;
}
.top>view{
  height: 300rpx;
  width: 300rpx;
  line-height:300rpx;
  text-align: center;
  border: 1px solid white;
  border-radius: 150rpx;
  margin: auto;
  
}

.top>view>text{
  font-size: 100rpx;
  color: white;
}
.on{
  border: 2px solid rgb(243, 117, 117) !important;
  box-shadow: 0px 0px 20px rgb(247, 63, 63);
}
.on text{
  color: rgb(247, 63, 63) !important;
}
/* 中间 */
.center{
  text-align: center;
}

.center>view>text{
  display: block;
  font-size: 40rpx;
  color: white;
  margin: 20rpx 0;
}

/* 下 */
.foot{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450rpx;
  position:fixed;
  bottom: 0rpx;
  background-color: white;
}

.foot .nav{
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50rpx;
  font-size: 50rpx;
  color: #555;
  text-align: center;
  border: 1px solid #eee;
}
.nav_left{
  display: flex;
  align-items: center;
}
.nav_left text:nth-of-type(1){
  margin-right: 20rpx;
  color: #555;
  font-size: 80rpx;
}
</style>
