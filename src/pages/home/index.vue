<template>
  <view class="tudou_index">
    <!-- 轮播图 开始 -->
    <view class="index_swiper">
      <swiper class="swiper" :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="2000" indicator-active-color="#28bdb9">
        <swiper-item>
            <image
              style="background-color: #eeeeee"
              mode="widthFix"
              src="../../static/images/swiper_1.jpg"
            ></image>
        </swiper-item>
        <swiper-item>
            <image
              style="background-color: #eeeeee"
              mode="widthFix"
              src="../../static/images/swiper_2.jpg"
            ></image>
        </swiper-item>
        <swiper-item>
            <image
              style="background-color: #eeeeee"
              mode="widthFix"
              src="../../static/images/swiper_3.jpg"
            ></image>
        </swiper-item>
    </swiper>
      </view>
    <!-- 设备 开始 -->
    <view class="index_footer">
      
        <checkbox-group @change="selected">
      <view class="index_device" >
        <view @longpress="edit" @click="goto(`/pages/${deviceType[item.type-1]}/index?sn=${item.sn}`)" :class="['navigator',item.status===0?'gray':'',flag?'press':'']" v-for="item in deviceList" :key="item.id">
          <view>
            <text :class="item.status===0?'gray':''">{{deviceName[item.type-1]}}</text>
            <image :src="`../../static/icons/${deviceType[item.type-1]}.png`" mode="widthFix"></image>
          </view>
          <view>
            <text :class="item.status===1?'online':''"></text>
            <checkbox v-if="flag" :value="item.id" :checked="item.checked" @onchange="selected"/>
          </view>
        </view>
      </view>
        </checkbox-group>
      <view class="index_edit" v-if="flag">
        <button type="primary" @click="flag=false">取消</button>
        <button type="warn" @click="del">删除</button>
      </view>
    </view>

    <!-- 设备 结束 -->
  </view>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
      deviceType:['humiture','switch','smoke'],
      deviceName:['温湿度','开关','烟雾传感器'],
      deviceList:[],
      timer:'',
      flag:false,
      deleteList:''
    };
  },
  onShow(){
    this.getDeviceList();
  },
  onPullDownRefresh() {
    this.getDeviceList();
  },
  methods: {
    getDeviceList(){
      uni.request({
        url: 'user-device/getDeviceList',
        success: (res) => {
            if(res.data.code===200){
              this.deviceList = res.data.data.deviceList;
              this.deviceList.forEach(item => {
                item.checked = false;
              });
              console.log(this.deviceList);
            }
          }
        });
    },
    edit(){
      this.flag = true;
    },
    // 去注册页面
    goto(url) {
      if(!this.flag){
        uni.navigateTo({
          url: url,
        });
      }
    },
    selected(e){
      this.deleteList = e.detail.value;
    },
    del(){
      uni.request({
        url: 'device/deleteDevice',
        method:'POST',
        data: this.deleteList,
        success: (res) => {
            if(res.data.code===200){
              uni.showToast({
                title: '删除成功',
                duration: 2000
              });
              this.flag = false;
              this.getDeviceList();
            }else{
              uni.showToast({
                title: '删除失败',
                duration: 2000,
                icon:'none'
              });
            }
          }
        });
    }
  },
});
</script>

<style>
.tudou_index {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eee;
}
.tudou_index .index_swiper swiper {
  width: 750rpx;
  height: 340rpx;
}
.tudou_index .index_swiper image {
  width: 100%;
}
.index_footer{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.index_device{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.tudou_index .index_device .navigator {
  display: flex;
  margin-left: 20rpx;
  margin-top: 20rpx;
  padding: 20rpx;
  width: 345rpx;
  height: 190rpx;
  box-sizing: border-box;
  border-radius: 20rpx;
  background-color: white;
  box-shadow: 5rpx 7rpx 5px #ccc;
}
.gray{
  color: #555 !important;
}
.tudou_index .index_device .navigator>view:nth-of-type(1){
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: #555;
}
.tudou_index .index_device .navigator>view:nth-of-type(2){
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: #555;
}
.index_device .navigator>view:nth-of-type(2) text{
  width: 20rpx;
  height: 20rpx;
  background: #ccc;
  border-radius: 50%;
  /* border: 1px solid red; */
}
.online{
  background: #28bdb9 !important;
}
.tudou_index .index_device .navigator image {
  width: 80rpx;
  margin: 0 0 5rpx 10rpx;
}
.tudou_index .index_device .navigator view {
  margin-left: 20rpx;
  font-weight:bold;
  font-size: 27rpx;
}
.index_footer .index_edit{
  display: flex;
  height: 100rpx;
  padding: 30rpx 0;
  color: aqua;
  background: #fff;
  border-top-left-radius: 20rpx;
  border-top-right-radius: 20rpx;
}
.index_edit button{
  flex: 1;
  margin: 0 15rpx;
}
/* 重写 checkbox 样式 */
/* 未选中的 背景样式 */
checkbox .wx-checkbox-input{
  border-radius: 50%;/* 圆角 */
  width: 40rpx; /* 背景的宽 */
  height: 40rpx; /* 背景的高 */
  margin: 0;
}
/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked{
  border: 1rpx solid #FF783B;
  background: #FF783B;
}
/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
  border-radius: 50%;/* 圆角 */
  width: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
  height: 40rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
  line-height: 40rpx;
  text-align: center;
  font-size:30rpx; /* 对勾大小 30rpx */
  color:#fff; /* 对勾颜色 白色 */
  background: transparent;
  transform:translate(-50%, -50%) scale(1);
  -webkit-transform:translate(-50%, -50%) scale(1);
}
@keyframes move {
  0%{
      transform: rotate(0deg);
  }
  100%{
      transform: rotate(1deg);
  }
}

.press{
  animation: move 0.1s linear 0s infinite alternate ;
}
</style>
