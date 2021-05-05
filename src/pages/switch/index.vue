<template>
  <div>
    <view class="top"> 
    <view bindtap="start" :class="off_on=='on'?'on':''" @click="swOn_Off">
        <text class="iconfont icon-wulu "></text>
    </view>
    </view>
    <view class="foot"> 
    <view class="nav"  @click="swOn_Off">
        <view class="sw" :class="off_on=='on'?'on':''">
          <text class="iconfont icon-wulu"></text>
        </view>
        <text>开关</text>
    </view>
    <view class="nav" >
        <navigator :url="`/pages/countdown/index?sn=${sn}`">
        <text class="iconfont icon-daojishi"></text>
        </navigator>
        <text>倒计时</text>
    </view>
    </view>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sn:'',
            off_on: 'off',
            timer:''
        }
    },
    onLoad(option){
      this.sn = option.sn;
      this.getDeviceData();
      this.timer = setInterval(() => {
        this.getDeviceData();
      }, 300);
    },
    beforeDestroy(){
      clearInterval(this.timer)
    },
    methods:{
      getDeviceData(){
        uni.request({
          url: 'device-data/getDeviceNewData',
          data: {
            sn:this.sn
          },
          success: (res) => {
              if(res.data.code===200){
                this.off_on = JSON.parse(res.data.data.deviceNewData.data).off_on;
              }
            }
          });
      },
      swOn_Off(){
        const topic = `smart/${this.sn}`;
        const data = `{"on_off":${this.off_on=='off'?'"on"':'"off"'}}`;
        uni.request({
          url: `device/send`,
          method:'POST',
          data:{
            topic:topic,
            data:data
          },
          success: (res) => {
              if(res.data.code===200){
                this.off_on = JSON.parse(res.data.data.deviceNewData.data).off_on;
              }
            }
          });
      }
    }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';
  src: url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.eot');
  src: url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.woff') format('woff'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.svg#iconfont') format('svg');
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
.top view{
  height: 300rpx;
  width: 300rpx;
  line-height:300rpx;
  text-align: center;
  border: 1px solid white;
  border-radius: 150rpx;
  margin: auto;
  
}

.top view text{
  font-size: 100rpx;
  color: white;
}

.on{
  box-shadow: 0px 0px 20px #e9e3e3;
}

/* 中间 */
.center{
  text-align: center;
}

.center view text{
  display: block;
  font-size: 40rpx;
  color: white;
  margin: 20rpx 0;
}

/* 下 */
.foot{
  width: 100%;
  /* height: 400rpx; */
  /* border: 1px solid yellow; */
  position:fixed;
  bottom: 0rpx;
  background-color: white;
  padding: 150rpx 0rpx;
}

.foot .nav{
  width: 375rpx;
  height: 200rpx;
  text-align: center;
  float: left;
}
.foot .nav .on{
  border-color: #32bac0;
}
.foot .nav .on text{
  color: #32bac0;
}
.foot .nav text{
  display: block;
}

.foot .nav navigator,.sw{
  width: 100rpx;
  height: 100rpx;
  line-height: 100rpx;
  border: 1px solid #aaa;
  border-radius: 100rpx;
  margin: 20rpx auto;
}
.foot .nav view text{
  color: #999;
  font-size: 50rpx;
}
.foot .nav text{
  color:#555;
}
</style>