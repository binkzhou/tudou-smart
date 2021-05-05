<template>
<view class="countdown_container">
  <view class="top">
    <view>
      <text>{{min}}分{{sec}}秒后{{off_on=='off'?'开':'关'}}</text>
    </view>
  </view>
  <view class="foot" >
    <view class="time" @click="tapName" data-time="1">
      <text>1分钟</text>
    </view>
    <view class="time" @click="tapName" data-time="3">
      <text>3分钟</text>
    </view>
    <view class="time" @click="tapName" data-time="5">
      <text>5分钟</text>
    </view>
    <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
        <view class="uni-input time"><text>自定义</text></view>
    </picker>
    <view class="start" bindtap="star">
      <button type="primary" :disabled="min==0&&sec==0" @click="cancel">取消</button>
      <button type="primary" :disabled="min==0&&sec==0" @click="countDown">{{flag?'开始计时':'暂停'}}</button>
    </view>
  </view>
</view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      off_on: 'off',
      sn:'',
      min:0,
      sec:0,
      time:'',
      flag:true,
      timer:'',
      isFirst:true
    };
  },
  onLoad(option) {
    this.sn = option.sn;
    this.getDeviceData();
    this.timer = setInterval(() => {
      this.getDeviceData();
    }, 300);
  },
  methods: {
    tapName(event) {
      this.min = event.currentTarget.dataset.time;
    },
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
    bindTimeChange(e){
      this.time = e.target.value;
      const arrTime = e.target.value.split(":");
      this.min = arrTime[0].replace(/\b(0)/gi,"");
      this.sec = arrTime[1].replace(/\b(0)/gi,"");
      console.log(this.min,this.sec);
    },
    countDown(){
      if(this.flag){
        this.timer = setInterval(() => {
          if(this.sec!=0){
            this.isFirst = false;
            this.sec = this.sec-1;
          }
          if(this.sec==0&&this.min!=0){
            this.min = this.min - 1;
            this.sec = 59;
          }
          if(this.sec==0&&this.min==0){
            clearInterval(this.timer)
            this.flag = true;
            if(!this.isFirst){
              const topic = `smart/${this.sn}`; 
              const data = `{"on_off":${this.off_on=='off'?'"on"':'"off"'}}`;
              uni.request({
                url: `device/send`,
                method:'POST',
                data:{
                  topic,
                  data
                },
                success: (res) => {
                    if(res.data.code===200){
                      this.off_on = JSON.parse(res.data.data.deviceNewData.data).off_on;
                    }
                  }
                });
            }
          }
        }, 100);
      }else{
        clearInterval(this.timer);
        this.timer = null;
      }
      this.flag = !this.flag;
  },
  cancel(){
    this.min = 0;
    this.sec = 0;
    clearInterval(this.timer);
    this.flag = true;
  }
  },
});
</script>

<style>
page {
  /* background-color: #37c3f8; */
  background-color: #32bac0;
}


/* 顶部 */
.top view{
  width: 500rpx;
  height: 500rpx;
  line-height: 500rpx;
  margin: auto;
  text-align: center;
}
.top view text{
  color: white;
  font-size: 80rpx;
  
}


/* 底部 */
.foot {
  width: 100%;
  position: fixed;
  bottom: 0rpx;
  background-color: white;
}

.foot .time {
  height: 130rpx;
  line-height: 130rpx;
  padding-left: 50rpx;
  font-size: 30rpx;
  border-bottom: 1px solid #eee;
}

.foot .hover {
  color: #32bac0;
}
.foot .start {
  display: flex;
  width: 700rpx;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  margin: 50rpx auto;
  font-size: 30rpx;
}
.foot .start button{
  width: 45%;
}
button{
  background: #32bac0 !important;
}
</style>
