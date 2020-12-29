import { CASWarning, CATEGORIES, dynamicText } from '../../common/constants'

export default {

  // 组件名称
  name: CASWarning,

  // 前面板html模板
  viewTemplate() {
    return `
      <div data-gjs-type="${CASWarning}" class="${CASWarning}">
        <div class="chart">
          <div class="${dynamicText}" data-gjs-type="${dynamicText}">文本显示</div>
          <div class="bg"></div>
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle dashed-circle"></div>
          <div class="circle left-circle"></div>
          <div class="circle top-circle"></div>
          <svg class="outer-circle-svg1" width="100%" height="100%" >
            <path id="path1" d="M 516 258 A 258 258 0 0 0 92.16079670087285 60.360533675303685" stroke="rgb(50, 200, 255)" stroke-width="3px" fill="none" fill-opacity="1"></path>
          </svg>
          <svg class="outer-circle-svg2" width="526.5px" height="526.5px" >
            <path id="path2" d="M 516 258 A 258 258 0 0 0 92.16079670087285 60.360533675303685" stroke="rgb(50, 200, 255)" stroke-width="3px" fill="none" fill-opacity="1"></path>
          </svg>
          <svg class="outer-circle-svg3" width="526.5px" height="526.5px" >
            <path id="path3" d="M 516 258 A 258 258 0 0 0 258 0" stroke="rgb(50, 200, 255)" stroke-width="3px" fill="none" fill-opacity="1"></path>
          </svg>
          <svg width="15.019%" height="14.244%" class="arrow arrow1">
            <path id="path4" fill-rule="evenodd"  stroke="rgb(50, 200, 255)" stroke-width="2.907%" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(50, 200, 255)"
              d="M7.508,7.515 L34.999,35.091 L62.491,7.515 L62.491,30.906 L34.999,58.485 L7.508,30.906 L7.508,7.515 Z"/>
            </svg>
          <svg width="15.213%" height="15.213%" class="arrow arrow2">
            <path id="path5" fill-rule="evenodd"  stroke="rgb(50, 200, 255)" stroke-width="2.907%" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(50, 200, 255)"
              d="M46.418,63.460 L46.479,24.522 L7.539,24.582 L24.080,8.041 L63.021,7.980 L62.959,46.919 L46.418,63.460 Z"/>
          </svg>
          <svg class="arrow arrow3" width="15.019%" height="15.213%">
            <path id="path6" fill-rule="evenodd"  stroke="rgb(50, 200, 255)" stroke-width="2.907%" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(50, 200, 255)"
              d="M23.962,63.491 L23.902,24.202 L62.491,24.262 L46.100,7.573 L7.509,7.511 L7.571,46.802 L23.962,63.491 Z"/>
          </svg>
        </div>
        <div class="title"></div>
      </div>
    `
  },
  // 前面板html样式
  viewStyle() {
    return `
      <style>
        .${CASWarning} {
          display: flex;
          flex-direction: column;
          align-content: center;
        }
        .${CASWarning} .${dynamicText} {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .${CASWarning} .title {
          display: inline-block;
          margin: 0 auto;
        }
        .${CASWarning} .chart {
          position: relative;
          width: 516px;
          height: 516px;
        }
        .${CASWarning} .circle {
          border-color: rgb(50, 200, 255);
        }
        .${CASWarning} .outer-circle-svg1, .${CASWarning} .outer-circle-svg2, .${CASWarning} .outer-circle-svg3 {
          position: absolute;
          left:0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .${CASWarning} .outer-circle-svg1 {
          transform: rotate(-92deg);
        }
        .${CASWarning} .outer-circle-svg2 {
          transform: rotate(43deg);
        }
        .${CASWarning} .outer-circle-svg3 {
          transform: rotate(135deg);
        }
        .${CASWarning} .bg {
          border-radius: 50%;
          background-image: -moz-linear-gradient(rgba(0,0,0,0), rgba(50,200,255,0.5098), rgba(0,0,0,0));
          background-image: -webkit-linear-gradient(rgba(0,0,0,0), rgba(50,200,255,0.5098), rgba(0,0,0,0));
          background-image: -ms-linear-gradient(rgba(0,0,0,0), rgba(50,200,255,0.5098), rgba(0,0,0,0));
          position: absolute;
          width: 68.2170542635659%;
          border: 1px solid rgba(50, 200, 255,1);
          height: 68.2170542635659%;
          z-index: 2;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          overflow: auto;
        }
        
        .${CASWarning} .circle1 {
          border-width: 20px;
          border-style: solid;
          border-radius: 50%;
          opacity: 0.302;
          position: absolute;
          width: 79.0697674418605%;
          height: 79.0697674418605%;
          z-index: 3;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          overflow: auto;
        }
        
        .${CASWarning} .circle2 {
          border-width: 3px;
          border-style: solid;
          border-radius: 50%;
          position: absolute;
          width: 79.6511627906977%;
          height: 79.6511627906977%;
          z-index: 4;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          overflow: auto;
        }
        
        .${CASWarning} .dashed-circle {
          border-width: 3px;
          border-radius: 50%;
          border-style: dashed;
          position: absolute;
          width: 71.3178294573643%;
          height: 71.3178294573643%;
          z-index: 5;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          overflow: auto;
        }
        
        .${CASWarning} .left-circle {
          border-width: 10px;
          border-radius: 100% 0 0 100%/50%;
          border-style: solid;
          border-right: none;
          position: absolute;
          left: 12.7906976744186%;
          width: 36.6279069767442%;
          height: 73.8372093023256%;
          z-index: 6;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        
        .${CASWarning} .top-circle {
          border-width: 15px;
          border-radius: 50% 50% 0 0/100% 100% 0 0;
          border-bottom: none;
          border-bottom-width: 0;
          border-style: solid;
          position: absolute;
          top: 7.75193798449612%;
          width: 84.8837209302326%;
          height: 41.2790697674419%;
          z-index: 7;
          left: 0;
          right: 0;
          margin: auto;
        }
        .${CASWarning} .arrow1 {
          position: absolute;
          left: 45.73643410852713%;
          top: 22.28682170542636%;
          z-index: 8;
        }
        
        .${CASWarning} .arrow2 {
          position: absolute;
          left: 25.1937984496124%;
          top: 64.53488372093023%;
          z-index: 9;
        }
        
        .${CASWarning} .arrow3 {
          position: absolute;
          left: 62.5968992248062%;
          top: 64.53488372093023%;
          z-index: 10;
        }
      </style>
    `
  },

  // 编辑器右侧块管理器中显示属性配置
  blockOptions() {
    return {
      category: CATEGORIES.OTHER,
      label: `
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M170.666667 810.666667c-12.8 0-21.333333-8.533333-21.333334-21.333334V298.666667c0-12.8 8.533333-21.333333 21.333334-21.333334s21.333333 8.533333 21.333333 21.333334v490.666666c0 12.8-8.533333 21.333333-21.333333 21.333334z" fill="#ffffff" p-id="13004">
          </path>
          <path d="M851.2 810.666667H172.8c-12.8 0-23.466667-8.533333-23.466667-21.333334s10.666667-21.333333 23.466667-21.333333h678.4c12.8 0 23.466667 8.533333 23.466667 21.333333s-10.666667 21.333333-23.466667 21.333334z" fill="#ffffff" p-id="13005">
          </path>
          <path d="M853.333333 810.666667c-12.8 0-21.333333-8.533333-21.333333-21.333334V298.666667c0-12.8 8.533333-21.333333 21.333333-21.333334s21.333333 8.533333 21.333334 21.333334v490.666666c0 12.8-8.533333 21.333333-21.333334 21.333334z" fill="#ffffff" p-id="13006">
          </path>
          <path d="M170.666667 277.333333h682.666666v42.666667H170.666667zM401.066667 576h-117.333334c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h117.333334c12.8 0 21.333333 8.533333 21.333333 21.333334s-10.666667 21.333333-21.333333 21.333333zM742.4 576h-117.333333c-12.8 0-21.333333-8.533333-21.333334-21.333333s8.533333-21.333333 21.333334-21.333334h117.333333c12.8 0 21.333333 8.533333 21.333333 21.333334s-10.666667 21.333333-21.333333 21.333333zM401.066667 682.666667h-117.333334c-12.8 0-21.333333-8.533333-21.333333-21.333334s8.533333-21.333333 21.333333-21.333333h117.333334c12.8 0 21.333333 8.533333 21.333333 21.333333s-10.666667 21.333333-21.333333 21.333334zM742.4 682.666667h-117.333333c-12.8 0-21.333333-8.533333-21.333334-21.333334s8.533333-21.333333 21.333334-21.333333h117.333333c12.8 0 21.333333 8.533333 21.333333 21.333333s-10.666667 21.333333-21.333333 21.333334z" fill="#ffffff" p-id="13007">
          </path>
          <path d="M341.333333 405.333333c-12.8 0-21.333333-8.533333-21.333333-21.333333v-170.666667c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333334 21.333333v170.666667c0 12.8-8.533333 21.333333-21.333334 21.333333zM682.666667 405.333333c-12.8 0-21.333333-8.533333-21.333334-21.333333v-170.666667c0-12.8 8.533333-21.333333 21.333334-21.333333s21.333333 8.533333 21.333333 21.333333v170.666667c0 12.8-8.533333 21.333333-21.333333 21.333333z" fill="#ffffff" p-id="13008">
          </path>
        </svg>
        <div class="gjs-block-label">CAS告警</div>
      `
    };
  },

  spOptions() {
    return {
      label: 'CAS告警',
      icon: 'globe',
      docUrl: '',
      inPorts: [
        {
          uuid: 'in1',
          subType: 'memory.json',
          description: {
            zh_CN: '输入Json'
          }
        }
      ]
    }
  },

  // 组件属性
  componentOptions() {
    return {
      droppable: false,
      resizable: true,
      dmode: 'absolute',
      highlightable: false,
      disableChildEdit: true,
      traits: [
      {
        name: 'bgWidth',
        type: 'number',
        label: '图表宽度(px)',
        changeProp: 1
      }, {
        name: 'lineColor',
        type: 'color',
        label: '图表线条颜色',
        changeProp: 1
      }, {
        name: 'bgColor',
        type: 'color',
        label: '图表背景颜色',
        changeProp: 1
      }, {
        name: 'title',
        label: ' 标题',
        changeProp: 1
      }, {
        name: 'titleFontSize',
        label: ' 标题字体大小',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'marginTop',
        label: ' 标题和图表间距(px)',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'valueFontSize',
        label: ' 中间值字体大小(px)',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'valueFontColor',
        label: ' 中间值字体颜色(px)',
        changeProp: 1,
        type: 'color'
      }],
      bgWidth: 516,
      bgHeight: 516,
      lineColor: "rgb(50, 200, 255)",
      bgColor: "rgb(50, 200, 255, 0.508)",
      title: 'WARNING',
      marginTop: 68,
      titleFontSize: 60,
      valueFontSize: 60,
      valueFontColor: '#fff'
    }
  },

  onModelScript() {
    const bgWidth =  parseInt('{[ bgWidth ]}');
    const lineColor = '{[ lineColor ]}';
    const bgColor = '{[ bgColor ]}';
    const title = '{[ title ]}';
    const marginTop =  parseInt('{[ marginTop ]}');
    const titleFontSize =  parseInt('{[ titleFontSize ]}');
    const valueFontSize =  parseInt('{[ valueFontSize ]}');
    const valueFontColor = '{[ valueFontColor ]}';
    const self = this;
  
    function initChart() {
      const percent = bgWidth / 516 ;
      const $circle1 = $(self).find('.circle1');
      const $leftCircle = $(self).find('.left-circle');
      const $topCircle = $(self).find('.top-circle');
      const $circle = $(self).find('.circle');
      const $bg = $(self).find('.bg');
      const $path = $(self).find('path');
      const $title = $(self).find('.title');
      const $dynamicText = $(self).find('.chart .dynamic-text');
      
      $circle1.css('border-width', (20 * percent > 3) ? 20 * percent : 3 + 'px');
      $leftCircle.css('border-width', (10 * percent > 3) ? 10 * percent : 3 + 'px');
      $topCircle.css('border-width', (15 * percent > 3) ? 15 * percent : 3 + 'px');
      $(self).find('.chart').css({ 'width': bgWidth, 'height': bgWidth});
      $circle.css('border-color', lineColor);
      $(self).find('.top-circle').css({ 'border-bottom-color': 'rgba(0,0,0,0)', 'border-bottom-width': 0 });
      $bg.css({ 
        'background-image': 'linear-gradient(rgba(0,0,0,0), ' + bgColor + ', rgba(0,0,0,0))',
        'border-color': lineColor,
      });      

      $path.each(function(index, element) {
        element.setAttribute("stroke", lineColor) ;
        const id = element.id;
        let d = element.getAttribute("d");
        if (id.includes('path1') || id.includes('path2')) {
          d = 'M ' + 516 * percent + ' ' +  258 * percent + ' A ' + 258 * percent + ' ' + 258 * percent + ' 0 0 0 ' + 92.16079670087285 * percent + ' ' + 60.360533675303685 * percent;
        } else if (id.includes('path3')) {
          d = 'M ' + 516 * percent + ' ' +  258 * percent + ' A ' + 258 * percent + ' ' + 258 * percent + ' 0 0 0 ' + 258 * percent + ' 0';
        } else if (id.includes('path4')) {
          d = 'M' + 7.508 * percent + ','+ 7.515 * percent + ' L' + 34.999 * percent + ',' + 35.091 * percent + ' L' + 62.491 * percent + ',' + 7.515 * percent + ' L' + 62.491 * percent + ',' + 30.906 * percent + ' L' + 34.999 * percent + ',' + 58.485 * percent + ' L' + 7.508 * percent + ',' + 30.906 * percent + ' L' + 7.508 * percent + ',' + 7.515 * percent + ' Z';
        } else if (id.includes('path5')) {
          d = 'M' + 46.418 * percent + ','+ 63.460 * percent + ' L' + 46.479 * percent + ',' + 24.522 * percent + ' L' + 7.539 * percent + ',' + 24.582 * percent + ' L' + 24.080 * percent + ',' + 8.041 * percent + ' L' + 63.021 * percent + ',' + 7.980 * percent + ' L' + 62.959 * percent + ',' + 46.919 * percent + ' L' + 46.418 * percent + ',' + 63.460 * percent + ' Z';
        } else if (id.includes('path6')) {
          d = 'M' + 23.962 * percent + ','+ 63.491 * percent + ' L' + 23.902 * percent + ',' + 24.202 * percent + ' L' + 62.491 * percent + ',' + 24.262 * percent + ' L' + 46.100 * percent + ',' + 7.573 * percent + ' L' + 7.509 * percent + ',' + 7.511 * percent + ' L' + 7.571 * percent + ',' + 46.802 * percent + ' L' + 23.962 * percent + ',' + 63.491 * percent + ' Z';
        } 
        element.setAttribute("d", d)
      });
      $(self).find(".arrow path").each(function(index, element) {
        element.setAttribute("fill", lineColor) ;
      });
      $title.html(title);
      $title.css({ color: lineColor , 'font-size': titleFontSize + 'px', 'border-bottom': '1px dashed ' + lineColor, 'padding-top': marginTop });
      $dynamicText.css({ 'font-size': valueFontSize + 'px', 'color': valueFontColor });
    }
    initChart();
  },

  onViewInit(config) {
    const evn = "change:lineColor change:bgColor change:bgWidth change:title change:titleFontSize change:marginTop change:valueFontSize change:valueFontColor "
    this.listenTo(this.model, evn, this.updateScript);
    this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
  }
}
