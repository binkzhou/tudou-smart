<template>
  <view class="temp_conatiner">
    <uni-ec-canvas
      class="uni-ec-canvas"
      id="line-chart"
      canvas-id="multi-charts-line"
      :ec="ec2"
    ></uni-ec-canvas>
    <uni-ec-canvas
      class="uni-ec-canvas"
      id="line-chart"
      canvas-id="multi-charts-line"
      :ec="ec"
    ></uni-ec-canvas>
  </view>
</template>

<script>
import uniEcCanvas from "@/components/uni-ec-canvas/uni-ec-canvas";
export default {
  data() {
    return {
      ec: {
        option: {
          title: {
              text: '今日湿度变化',
              left: 'center'
          },
          grid:{
            x:45,
            x2:20,
          },
          xAxis: {
            type: "category", 
            boundaryGap: false,
            data: ['0', '2', '4', '6', '8', '10', '12','14', '16', '18', '20', '22'],
            axisLine: {
              // y轴
              show: false
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            splitLine: {
              show: false
            }
          },
          yAxis: { 
              type: 'value',
              axisLabel: { 
                  formatter: '{value} %'
              },
              axisLine: {
                show: false
              },
              axisTick: {
              show: false,
              splitLine: {
                show: false
              }
            },
          },
          series: [{
              data: [60, 65, 70, 70, 66, 80, 82,77,75,78,65,65],
              type: 'line'
          }]
        }
      },
      ec2: {
        option: {
          title: {
              text: '今日温度变化',
              left: 'center'
          },
          grid:{
            x:45,
            // y:20,
            x2:20,
            // y2:25
          },
          xAxis: {
            type: "category", 
            boundaryGap: false,
            data: ['0', '2', '4', '6', '8', '10', '12','14', '16', '18', '20', '22'],
            axisLine: {
              // y轴
              show: false
            },
            axisTick: {
              // y轴刻度线
              show: false
            },
            splitLine: {
              // 网格线
              show: false
            }
          },
          yAxis: { 
              type: 'value',
              boundaryGap: false,
              axisLabel: {
                  formatter: '{value}°C'
              },
              axisLine: {
                // y轴
                show: false
              },
              axisTick: {
              // y轴刻度线
              show: false,
              splitLine: {
                // 网格线
                show: false
              }
            },
          },
          series: [{
              data: [20, 18, 16, 14, 15, 18, 21,24,24,25,23,23],
              type: 'line',
              cenet: [80,200],
              lineStyle: {
                color: "rgba(92, 123, 217, 1)"
              },
              itemStyle: {
                color: "rgba(92, 123, 217, 1)"
              }
          }]
        }
      }
    };
  },
  onReady() {
    setTimeout(() => {
    }, 1000);
  },
  components: {
    uniEcCanvas
  }
};
</script>

<style scoped>
.temp_conatiner{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 50rpx;
}
.uni-ec-canvas {
  width: 650rpx;
  height: 700rpx;
  padding-top: 50rpx;
  margin-bottom: 20rpx;
  border: 1px solid #eee;
  border-radius: 10rpx;
  z-index: 999;
}
</style>
