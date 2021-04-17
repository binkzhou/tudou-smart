<template>
  <div>
    <view class="top"> 
    <view bindtap="start" :class="num==1?'on':''">
        <text class="iconfont icon-wulu "></text>
    </view>
    <text>在线状态:{{net==1?'在线':'离线'}}</text>
    </view>
    <view class="foot"> 
    <view class="nav">
        <navigator url="" >
        <text class="iconfont icon-icon-test" ></text>
        </navigator>
        <text>定时</text>
    </view>
    <view class="nav" >
        <navigator url="">
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
            net: 1,
            num: 2
        }
    }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 2081637 */
  src: url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.eot');
  src: url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.woff') format('woff'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2081637_2m4eb4bzfuj.svg#iconfont') format('svg');
}
page{
  background-color: #37c3f8;
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
  /* border: 1px solid red; */
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
  /* color: white; */
  color: white;
}

.on{
  box-shadow: 0px 0px 20px #e9e3e3;
}

/* 中间 */
.center{
  /* border: 1px solid rebeccapurple; */
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
  /* line-height: 200rpx; */
  text-align: center;
  /* border: 1px solid blue; */
  float: left;
}
.foot .nav text{
  display: block;
}

.foot .nav navigator{
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