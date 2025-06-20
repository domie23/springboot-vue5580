<template>
<div class="content">
  <!--  <div style="width: 100%;height: 100%" v-if="sessionTable!='users'">-->
  <div style="width: 100%;height: 100%">
    <div class="text main-text">欢迎使用 {{this.$project.projectName}}</div>
  </div>
  <div style="width: 100%;height: 100%;display:flex " v-if="sessionTable=='users'">
    <div style="width: 50%;height: 100%">
        <div id="statistic1" style="width:100%;height:600px;"></div>
    </div>
    <div style="width: 50%;height: 100%">
        <div id="statistic2" style="width:100%;height:600px;"></div>
    </div>
  </div>

</div>
</template>
<script>
import router from '@/router/router-static'
export default {
  data() {
    return {
      sessionTable : "",//登录账户所在表名
      role : "",//权限
      userId:"",//当前登录人的id

      echartsDate: new Date(),//echarts的时间查询字段


    };
  },
  mounted(){

    //获取当前登录用户的信息
    this.sessionTable = this.$storage.get("sessionTable");
    this.role = this.$storage.get("role");
    this.userId = this.$storage.get("userId");

    this.init();
    this.chartDialog1();
    this.chartDialog2();
  },
  methods:{
    chartDialog1() {
      let _this = this;
      let params = {
        // dateFormat :"%Y", //%Y-%m
        // riqi :getYearFormat(_this.echartsDate),//年
        // riqi :getMonthFormat(_this.echartsDate),//年月
        thisTable : {//当前表
          tableName :'qingjia',//当前表表名,
          // sumColum : 'shangpin_number', //求和字段
          // date : 'insert_time',//分组日期字段
          // string : 'shangpin_name',//分组字符串字段
          types : 'qingjia_types',//分组下拉框字段
        },
        // joinTable : {//级联表（可以不存在）
        //     tableName :'yonghu',//级联表表名
        //     // date : 'insert_time',//分组日期字段
        //     string : 'yonghu_name',//分组字符串字段
        //     // types : 'yonghu_types',//分组下拉框字段
        // }
      }
      _this.chartVisiable = true;
      _this.$nextTick(() => {
        var statistic = this.$echarts.init(document.getElementById("statistic2"), 'macarons');
        this.$http({
          url: "barCount",//barCountOne barCountTwo barSumOne barSumTwo
          method: "get",
          params: params
        }).then(({data}) => {
          if(data && data.code === 0){
            let yAxisName = "数值";//y轴
            let xAxisName = "信息";//x轴
            let series = [];//具体数据值
            data.data.yAxis.forEach(function (item,index) {//点击可关闭的按钮字符串在后台方法中
              let tempMap = {};
              tempMap.name=data.data.legend[index];
              tempMap.type='bar';
              tempMap.data=item;
              series.push(tempMap);
            })
      
            var option = {
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  crossStyle: {
                    color: '#999'
                  }
                }
              },
              toolbox: {
                feature: {
                  // dataView: { show: true, readOnly: false },  // 数据查看
                  magicType: { show: true, type: ['line', 'bar'] },//切换图形展示方式
                  // restore: { show: true }, // 刷新
                  saveAsImage: { show: true }//保存
                }
              },
              legend: {
                data: data.data.legend//标题  可以点击导致某一列数据消失
              },
              xAxis: [
                {
                  type: 'category',
                  axisLabel:{interval: 0},
                  name: xAxisName,
                  data: data.data.xAxis,
                  axisPointer: {
                    type: 'shadow'
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',//不能改
                  name: yAxisName,//y轴单位
                  axisLabel: {
                    formatter: '{value}' // 后缀
                  }
                }
              ],
              series:series//具体数据
            };
            statistic.setOption(option,true);
            window.onresize = function () {
              statistic.resize();
            };
          }else {
            this.$message({
              message: "报表未查询到数据",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.search();
              }
            });
          }
        });
      });


    },
    chartDialog2() {
	let _this = this
     let params = {
       // dateFormat :"%Y", //%Y-%m
       // riqi :getYearFormat(_this.echartsDate),//年
       // riqi :getMonthFormat(_this.echartsDate),//年月
       thisTable : {//当前表
         tableName :'kecheng',//当前表表名,
         // sumColum : 'shangpin_number', //求和字段
         // date : 'insert_time',//分组日期字段
         // string : 'shangpin_name',//分组字符串字段
         types : 'kecheng_types',//分组下拉框字段
       },
       // joinTable : {//级联表（可以不存在）
       //     tableName :'yonghu',//级联表表名
       //     // date : 'insert_time',//分组日期字段
       //     string : 'yonghu_name',//分组字符串字段
       //     // types : 'yonghu_types',//分组下拉框字段
       // }
     }
     _this.chartVisiable = true;
     _this.$nextTick(() => {
       var statistic = this.$echarts.init(document.getElementById("statistic1"), 'macarons');
       this.$http({
         url: "barCount",//barCountOne barCountTwo barSumOne barSumTwo
         method: "get",
         params: params
       }).then(({data}) => {
         if(data && data.code === 0){
           let yAxisName = "数值";//y轴
           let xAxisName = "信息";//x轴
           let series = [];//具体数据值
           data.data.yAxis.forEach(function (item,index) {//点击可关闭的按钮字符串在后台方法中
             let tempMap = {};
             tempMap.name=data.data.legend[index];
             tempMap.type='bar';
             tempMap.data=item;
             series.push(tempMap);
           })
     
           var option = {
             tooltip: {
               trigger: 'axis',
               axisPointer: {
                 type: 'cross',
                 crossStyle: {
                   color: '#999'
                 }
               }
             },
             toolbox: {
               feature: {
                 // dataView: { show: true, readOnly: false },  // 数据查看
                 magicType: { show: true, type: ['line', 'bar'] },//切换图形展示方式
                 // restore: { show: true }, // 刷新
                 saveAsImage: { show: true }//保存
               }
             },
             legend: {
               data: data.data.legend//标题  可以点击导致某一列数据消失
             },
             xAxis: [
               {
                 type: 'category',
                 axisLabel:{interval: 0},
                 name: xAxisName,
                 data: data.data.xAxis,
                 axisPointer: {
                   type: 'shadow'
                 }
               }
             ],
             yAxis: [
               {
                 type: 'value',//不能改
                 name: yAxisName,//y轴单位
                 axisLabel: {
                   formatter: '{value}' // 后缀
                 }
               }
             ],
             series:series//具体数据
           };
           statistic.setOption(option,true);
           window.onresize = function () {
             statistic.resize();
           };
         }else {
           this.$message({
             message: "报表未查询到数据",
             type: "success",
             duration: 1500,
             onClose: () => {
               this.search();
             }
           });
         }
       });
     });
      
    },
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  text-align: center;
  .main-text{
    font-size: 38px;
    font-weight: bold;
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>