<template>
  <view class="info_container">
    <view>
      <text>头像</text>
      <image class="user_icon" src="../../static/icons/bg.jpg"></image>
    </view>
    <view>
      <text>昵称</text>
      <input type="text" value="张三"/>
    </view>
    <view>
      <view class="uni-title uni-common-pl">地区选择器</view>
        <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                    <picker @change="bindPickerChange" :value="index" :range="array">
                        <view class="uni-input">{{array[index]}}</view>
                    </picker>
                </view>
            </view>
        </view>
    </view>
  </view>
</template>

<script>
export default {
  
    data(){
        const currentDate = this.getDate({
            format: true
        })
        return{
            title: 'picker',
            array: ['中国', '美国'],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    methods:{
      bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.target.value)
            this.index = e.target.value
      },
      getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
    }
}
</script>

<style>
.info_container{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.info_container>view{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 730rpx;
  padding: 10rpx 0;
  border-bottom: 1px solid #ccc;
}
.info_container>view input{
  text-align: right;
  padding-right: 30rpx;
}
.user_icon{
  width: 100rpx;
  height: 100rpx;
  margin-right: 30rpx;
}
</style>