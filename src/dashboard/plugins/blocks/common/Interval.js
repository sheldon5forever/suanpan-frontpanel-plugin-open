import { Interval, CATEGORIES } from '../../common/constants'
import { values } from 'underscore'

export default {
    name: Interval,
    viewTemplate(){
        return `
        <div data-gjs-type="${Interval}" class="${Interval}"></div>
      `
    },
    viewStyle(){
        return `
        <style>
        .${Interval}{
            font-size: 16px;
            color:#000;
        }
        </style>
      `
    },
    blockOptions(){
        return {
            category: CATEGORIES.COMMON,
            label: '定时器',
            attributes: { class: 'fa fa-clock-o' }
          }
    },
    spOptions(){
        return {
            label: '定时器',
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
            ],
            outPorts: [{
                uuid: 'out1',
                subType: 'memory.json',
                description: {
                  zh_CN: '输出1'
                }
              }
            ]
          }
    },
    componentOptions(){
        return {
            name: Interval,
            resizable: true,
            dmode: 'absolute',
            droppable: false,
            traits:[
                {
                    name: 'color',
                    label: '字体颜色',
                    changeProp: 1,
                    type: 'color'
                },
                {
                    name: 'fontSize',
                    label: '字体大小',
                    changeProp: 1,
                    type: 'number'
                },
                {
                    name: 'seconds',
                    label: '时间间隔',
                    changeProp: 1,
                    type: 'number'
                },
                {
                    name: 'isSocket',
                    label: '实时接收',
                    changeProp: 1,
                    type: 'checkbox'
                }
            ],
            'color': '#000',
            'fontSize': 16,
            'seconds': 1000,
            'fontSize': 16,
            'isSocket': true
        }
    },
    onModelScript(){
        const color = '{[ color ]}';
        const fontSize = Number('{[ fontSize ]}');
        const seconds = Number('{[ seconds ]}');
        const isSocket = Boolean('{[ isSocket ]}');
        const self = this
        const _id = self.getAttribute('id');
        const eventName = `call-${_id}`;
        console.log(eventName)
        $(self).text('文本')
        if (window.spSocket) {
          console.log('执行')
          window.spSocket.subscribe({
            eventName: eventName,
            callback: function (_data) {
              let _in1Str = _data.data.in1;
              if (_in1Str) {
                const data = JSON.parse(_in1Str);
                let source = data;
                let intervalID;
                intervalID = setInterval(function(){
                  console.log(source)
                  $(self).text(source)
                  $(self).css({"color":"color","font-size":"fontSize"})
                }, 1000);
                if((intervalID !== '') && (isSocket == false)){
                  clearInterval(intervalID);
                }
              }
            }
          });
        }
    },
    onViewInit(){
        this.updateScript();
        const evn = 'change:color change:fontSize change:seconds change:isSocket';
        this.listenTo(this.model, evn, this.updateScript);
        this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
    }
}