import { timeLine, CATEGORIES } from '../../common/constants'

export default {
    name: timeLine,
    // 前面板html模板
    viewTemplate(){
        return `
        <div data-gjs-type="${timeLine}" class="${timeLine}-wrapper">
            <div class="timeLine">
                <div class="yearLine"></div>
                <div class="monthLine"></div>
            </div>
            <div class="info">
                <div class="info_id"></div>
                <div class="info_wrapper"></div>
            </div>
        </div>
      `
    },
    // 前面板html样式
    viewStyle(){
        return `
        <style>
        .${timeLine}-wrapper{
            background-color: #000;
            color: #fff;
        }
        .timeLine{
            margin-left:87px;
        }
        .info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .yearLine, .monthLine {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .monthLine {
            text-align: center;
        }
        .info_id {
            margin-right: 50px;
        }
        .info_wrapper {
            width: 1500px;
            height: 200px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        </style>
      `
    },
    // 编辑器右侧块管理器中显示属性配置
    blockOptions(){
        return {
            category: CATEGORIES.COMMON,
            label: '时间轴',
            attributes: { class: 'fa fa-calendar' }
          }
    },
    // 后面板显示属性配置
    spOptions(){
        return {
            label: '时间轴',
            icon: 'globe',
            docUrl: '',
            inPorts: [
              {
                uuid: 'in1',
                subType: 'memory.json',
                description: {
                  zh_CN: '输入1'
                }
              }
            ]
          }
    },
    componentOptions(){
        return {
            name: timeLine,
            resizable: true,
            dmode: 'absolute',
            droppable: false,
            traits: [
              {
                name: 'width',
                label: '宽度',
                changeProp: 1,
                type: 'number'
              },
              {
                name: 'height',
                label: '高度',
                changeProp: 1,
                type: 'number'
              },
              {
                name: 'fontSize',
                label: '字体大小',
                changeProp: 1,
                type: 'number'
              },
              {
                name: 'fontColor',
                label: '字体颜色',
                changeProp: 1,
                type: 'color'
              },
              {
                name: 'bgColor',
                label: '背景颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'yearFontSize',
                label: '年份字体大小',
                changeProp: 1
              }, {
                name: 'yearFontColor',
                label: '年份字体颜色',
                changeProp: 1,
                type: 'color'
              },{
                name: 'monthFontSize',
                label: '月份字体大小',
                changeProp: 1
              }, {
                name: 'monthFontColor',
                label: '月份字体颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'lineColor',
                label: '时间轴颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'lineWidth',
                label: '时间轴宽度',
                changeProp: 1
              },{
                name: 'topLablebgColor',
                label: '头部标签背景颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'topLableColor',
                label: '头部标签颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'topLableFontSize',
                label: '头部标签字体大小',
                changeProp: 1
              },{
                name: 'bottomLabelbgColor',
                label: '底部标签背景颜色',
                changeProp: 1,
                type: 'color'
              },{
                name: 'bottomLabelColor',
                label: '底部标签颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'bottomLableFontSize',
                label: '底部标签字体大小',
                changeProp: 1
              }, {
                name: 'importantColor',
                label: '重点场次颜色',
                changeProp: 1,
                type: 'color'
              }, {
                name: 'importantFontSize',
                label: '重点场次字体大小',
                changeProp: 1
              }
            ],
            'width': 2000,
            'height': 400,
            'bgColor': '#000',
            'fontSize': 16,
            'fontColor': '#fff',
            'yearFontSize': 16,
            'yearFontColor': '#32C7FF',
            'monthFontSize': 16,
            'monthFontColor': '#fff',
            'lineColor': '#31C7FF',
            'lineWidth': 3,
            'topLablebgColor': 'transparent',
            'topLableColor': '#E1B1BB',
            'topLableFontSize': 13,
            'bottomLabelbgColor': '#000',
            'bottomLabelColor': '#FFF000',
            'bottomLableFontSize': 13,
            'importantColor': '#32C7FF',
            'importantFontSize': 14
          }
    },
    onModelScript(){
        
        const self = this;
        const _id = self.getAttribute('id');
        const eventName = `call-${_id}`;
        console.log(eventName)
        const elem = $(self).find('.info_wrapper');
        const wrapWidth = elem.width();
        const data = [
            {
                id: '1002', //架机
                moduleName: 'IFTD等', // 模块名称
                startTime: '2020-01-01', // 开始时间
                endTime: '2020-02-10', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率
            },
            {
                id: '1002', //架机
                moduleName: 'RAKE进气道预安装等', // 模块名称
                startTime: '2020-02-11', // 开始时间
                endTime: '2020-03-30', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'blue', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率
            },
            {
                id: '1002', //架机
                moduleName: '侧风(地面试验)', // 模块名称
                startTime: '2020-03-31', // 开始时间
                endTime: '2020-05-12', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: 'MOC5', //底部标签
                bgColor: 'yellow', //背景颜色
                importantTime: '4.23', // 重要节点时间
                importantName: '转场锡林浩特', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率
            },
            {
                id: '1002', //架机
                moduleName: '高温前置', // 模块名称
                startTime: '2020-05-13', // 开始时间
                endTime: '2020-06-15', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'gray', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '高温', // 模块名称
                startTime: '2020-05-14', // 开始时间
                endTime: '2020-07-14', // 完成时间
                topLabel: 'PCM验证', // 顶部标签
                bottomLabel: 'MOC5', //底部标签
                bgColor: 'yellow', //背景颜色
                importantTime: '06.16', // 重要节点时间
                importantName: '转场吐鲁番', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '次高温', // 模块名称
                startTime: '2020-07-15', // 开始时间
                endTime: '2020-08-14', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: 'OGV螺栓更换等', // 模块名称
                startTime: '2020-08-15', // 开始时间
                endTime: '2020-09-26', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'blue', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '供油性能', // 模块名称
                startTime: '2020-09-30', // 开始时间
                endTime: '2020-10-25', // 完成时间
                topLabel: '飞模等', // 顶部标签
                bottomLabel: 'MOC5', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: 'APU/发动机 启动飞模', // 模块名称
                startTime: '2020-10-26', // 开始时间
                endTime: '2020-12-16', // 完成时间
                topLabel: '飞模、PCOM', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: 'APU/发动机 工作特性', // 模块名称
                startTime: '2020-12-27', // 开始时间
                endTime: '2021-02-08', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: 'MOC7', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '合格审定', // 模块名称
                startTime: '2021-02-09', // 开始时间
                endTime: '2021-04-04', // 完成时间
                topLabel: 'PM M EL', // 顶部标签
                bottomLabel: 'MOC5', //底部标签
                bgColor: 'yellow', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '负加速度', // 模块名称
                startTime: '2021-04-05', // 开始时间
                endTime: '2021-05-30', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'green', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '发动机 振动因子', // 模块名称
                startTime: '2021-05-31', // 开始时间
                endTime: '2021-07-22', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: 'MOC5', //底部标签
                bgColor: 'gray', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            },
            {
                id: '1002', //架机
                moduleName: '软件升级', // 模块名称
                startTime: '2021-08-23', // 开始时间
                endTime: '2021-10-31', // 完成时间
                topLabel: '', // 顶部标签
                bottomLabel: '', //底部标签
                bgColor: 'blue', //背景颜色
                importantTime: '', // 重要节点时间
                importantName: '', //重要节点名称
                completedNumber: '', //已完成架次数
                planningTimes: '', //规划架次数
                preparationRate: '', //准备完成率
                implementationRate: '' //实施完成率                       
            }                                                   

        ]
        function sortDataArray(dataArray){//对数组根据日期进行排序
          return dataArray.sort(function(a,b) {
              return Date.parse(a.startTime.replace(/-/g,"/"))-Date.parse(b.startTime.replace(/-/g,"/"));
          });
      }
        function datedifference(date1, date2) { //计算两个日期之差 sDate1和sDate2是2006-12-18格式 
            var Date1 = Date.parse(date1);
            var Date2 = Date.parse(date2);
            var dataSpan = Math.abs(Date2 - Date1);
            var iDays = Math.floor(dataSpan / (24*3600*1000))
            return iDays;
            
        }
        function getMonthBetween(start,end){  
          var result = [];  
          var s = start.split("-");
          var e = end.split("-");  
          var min = new Date();  
          var max = new Date();  
          min.setFullYear(s[0],s[1]);// 转换成时间格式
          max.setFullYear(e[0],e[1]);
          var curr = min;  
          console.log(curr)
          while(curr <= max){
              var month = curr.getMonth();  
              var str= month;
              if(str==0){
                str=12;
              }
              result.push(str);  
              curr.setMonth(month+1);
          }
          return result;  
      }

        function init(data) { //初始化
          clear();
          const width = Number('{[ width ]}');
          const height = Number('{[ height ]}')
          const bgColor = '{[ bgColor ]}';
          const fontSize = '{[ fontSize ]}'
          const fontColor = '{[ fontColor ]}'
          const yearFontSize = '{[ yearFontSize ]}';
          const yearFontColor = '{[ yearFontColor ]}';
          const monthFontSize = '{[ monthFontSize ]}';
          const monthFontColor = '{[ monthFontColor ]}';
          const lineColor = '{[ lineColor ]}';
          const lineWidth = '{[ lineWidth ]}';
          const topLablebgColor = '{[ topLablebgColor ]}';
          const topLableColor = '{[ topLableColor ]}';
          const topLableFontSize = '{[ topLableFontSize ]}';
          const bottomLabelbgColor = '{[ bottomLabelbgColor ]}';
          const bottomLabelColor = '{[ bottomLabelColor ]}';
          const bottomLableFontSize = '{[ bottomLableFontSize ]}';
          const importantColor = '{[ importantColor ]}';
          const importantFontSize = '{[ importantFontSize ]}';
          
          const sortedData = sortDataArray(data);
          const start = sortedData[0].startTime; // 开始时间
          const end = sortedData[sortedData.length-1].endTime; // 结束时间
          const totalSpan = datedifference(start, end)//开始到结束的天数
          const planInfo = `
          <span>${sortedData[0].id}</span>
          `
          $(self).find('.info_id').append(planInfo); // 添加飞机id信息
          const startYear = new Date(start).getFullYear(); // 开始年份
          const endYear = new Date(end).getFullYear(); // 结束年份
          const yearSpan = endYear - startYear + 1; //年份刻度
          const monthDate = getMonthBetween(start, end); // 得到月份刻度
          for (var i =0; i< yearSpan; i++){
              const yearHtml = `
              <div class="year">${startYear + i}</div>
            `
            $(self).find(".yearLine").append(yearHtml);
          }
          $(self).find('.year').css("margin-left", width/(monthDate.length)*12); // 年份距离  wrapWidth
          $(self).find('.year').eq(0).css("margin-left", 0);
          monthDate.forEach((item, index) => {
              const monthHtml = `
              <div class="monthItem">${item}</div>
              `
              $(self).find(".monthLine").append(monthHtml);
          })
          $(self).find('.monthItem').css("width", width/(monthDate.length)); // 月份刻度长度  wrapWidth
          const mt = $(self).find('.id').outerWidth(true);
          $(self).find('.monthItem').eq(0).css("margin-left", mt)
          $(self).find('.year').eq(0).css("margin-left", mt)
          sortedData.forEach((item, index) => {
              const html = `
                <div class= "info_content ${index}">
                  <div class="topLabel">${item.topLabel}</div>
                  <div class="module ${item.bgColor}">
                      <div class="content">${item.moduleName}</div>
                  </div>
                  <div class="bottomLabel">${item.bottomLabel}</div>                
                  <div class="important">${item.importantTime} ${item.importantName}</div>
                </div>
              `
              elem.append(html);
              const height = elem.find('.topLabel').innerHeight();
              if(item.topLabel == ''){
                  elem.find('.info_content').eq(index).children(".topLabel").addClass('noborder');
                  elem.find('.info_content').eq(index).children(".topLabel").append(`无`);
                  // elem.find('.info_content').eq(index).children(".module").css("margin-top", "30px");
              }
              if(item.bottomLabel == '') {
                  elem.find('.info_content').eq(index).children(".bottomLabel").addClass('noborder');
              }
              const timeSpan = datedifference(item.startTime, item.endTime) / totalSpan; // 占总长度的百分比
              elem.find('.info_content').eq(index).css("width", timeSpan*width) // wrapWidth
  
              if (index < (sortedData.length - 1)) {
                const betweenSpan = datedifference(sortedData[index].endTime, sortedData[index+1].startTime);
                if(betweenSpan > 2) {
                  elem.find('.info_content').eq(index).css("margin-right", betweenSpan/totalSpan*width)// wrapWidth
                }
              }else {
                console.log('没有下一个开始时间')
              }  
          })
          // 添加样式
          // $(self).find('.monthItem').css({"border-bottom":"3px solid #32C8FF","border-left":"1px solid #32C8FF"});
          $(self).find('.info_content').css({"position":"relative","height":"100%","text-align":"center"});
          //$(self).find('.topLabel').css({"box-sizing":"border-box","color":"#E1B1BB","border":"1px solid #E1B1BB","font-size":"16px","width":"80%","padding":"3px","margin-left":"10%","white-space":"nowrap"})
          $(self).find('.module').css({"width":"100%","height":"80%","display":"flex","justify-content":"center","align-items":"center","color":"#fff"})
          //$(self).find('.bottomLabel').css({"box-sizing":"border-box","color":"#FFF100","border":"1px solid #FFF100","background-color":"#000","font-size":"16px","padding":"3px","position":"absolute","top":"77%","left":"50%","transform":"translate(-50%)","white-space":"nowrap"})
          
          //$(self).find('.important').css({"color":"#32C8FF","white-space":"nowrap"})
          $(self).find('.yellow').css({"border":"1px solid rgba(255,255,0,1)","background":"linear-gradient(0deg,rgba(196,193,13,1) 0%,rgba(195,193,13,0) 100%)","opacity":"0.7"});
          $(self).find('.green').css({"border":"1px solid rgba(17,255,135,1)","background":"linear-gradient(0deg,rgba(0,210,54,1) 0%,rgba(0,151,25,0) 100%)","opacity":"0.7"});
          $(self).find('.blue').css({"border":"1px solid rgba(32,185,247,1)","background":"linear-gradient(0deg,rgba(0,135,152,1) 0%,rgba(0,135,151,0) 100%)","opacity":"0.7"});
          $(self).find('.gray').css({"border":"1px solid rgba(237,237,237,1)","background":"linear-gradient(0deg,rgba(168,176,185,1) 0%,rgba(202,215,204,0) 100%)","opacity":"0.7"});
          // 动态修改的样式
          $(self).find('.info_wrapper').css({"width": width, "height": height});
          $(self).css({ "backgroundColor": bgColor });
          $(self).find('.year').css({"font-size": yearFontSize,"color": yearFontColor});
          $(self).find( '.monthItem').css({"font-size": monthFontSize,"color": monthFontColor, "border-bottom-color": lineColor, "border-bottom-width": lineWidth,
          "border-left-color": lineColor, "border-left-width": '1', "border-style": "solid", "border-right-width": "0", "border-top-width": "0"
          });
          $(self).find('.topLabel').css({"background": topLablebgColor, "color": topLableColor, "font-size": topLableFontSize, "border-color": topLableColor,
          "border-width":"1px","border-style": "solid","box-sizing":"border-box","width":"80%","padding":"3px","margin-left":"10%","white-space":"nowrap"})
          $(self).find('.bottomLabel').css({"background-color": bottomLabelbgColor, "color": bottomLabelColor, "font-size": bottomLableFontSize, "border-color": bottomLabelColor,
          "border-width":"1px","border-style": "solid","box-sizing":"border-box","padding":"3px","position":"absolute","top":"77%","left":"50%","transform":"translate(-50%)","white-space":"nowrap"})
          $(self).find('.important').css({ "color": importantColor, "font-size": importantFontSize, "white-space":"nowrap"})
          $(self).find('.noborder').css({"border":"1px solid transparent","background-color":"transparent","color": "transparent"})
          $(self).find('.content').css({ "font-size":fontSize, "color": fontColor });
        }

        function clear(){
          $(self).find('.yearLine').empty();
          $(self).find('.monthLine').empty();
          $(self).find('.info_id').empty();
          $(self).find('.info_wrapper').empty();
        }

        init(data);

        window.addEventListener('resize', function () {
          init(data);
        }, false)
      // 有 dashboardHost 说明是运行模式
      if (window.spSocket) {
        console.log('11111')
        window.spSocket.subscribe({
          eventName: eventName,
          callback: function (_data) {
            const inDate = _data.data.in1;
            console.log(inDate)
            if (inDate) {
              // console.log('有数据')
              const _in1Str = JSON.parse(inDate)
              const arr = [];
              _in1Str.slice(1).forEach((val, index) => {
                arr[index] = {};
                _in1Str[0].forEach((v, i) => {
                  arr[index][v] = val[i]
                })
              })
              console.log(arr);
              init(arr);
            }   
          }
        });
      }
    },
    onViewInit(){
        this.updateScript();
        const evn = 'change:width change:height change:bgColor change:fontSize change:fontColor change:yearFontSize change:yearFontColor change:monthFontSize change:monthFontColor change:lineColor change:lineWidth change:topLablebgColor change:topLableColor change:topLableFontSize change:bottomLabelbgColor change:bottomLabelColor change:bottomLableFontSize change:importantColor change:importantFontSize';
        this.listenTo(this.model, evn, this.updateScript);
        this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));

    }
}
