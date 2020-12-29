const CalenderRef = 'sp-calender';

export default (editor, opt = {}) => {
    const domc = editor.DomComponents;
    const blockManager = editor.BlockManager;

    // 添加 block
    blockManager.add(CalenderRef, {
        category: "通用",
        label: "日历日程组件",
        attributes: { class: 'fa fa-calendar' },
        content: {
            type: CalenderRef,
            content: `<div class="content" ></div>
            <style>
            .content{
                width: 400px;
                height: 400px;
            }
              .fc-event{
                display: none!important;
            }
            .scheduleWrapper{
                width: 100%;
            }
            .scheduleWrapper ul{
                padding: 0px;
            }
            .scheduleWrapper ul li{
                list-style: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .scheduleWrapper table td{
                cursor: pointer;
            }
            .fc-unthemed .fc-content, .fc-unthemed .fc-divider, .fc-unthemed .fc-list-heading td, .fc-unthemed .fc-list-view, .fc-unthemed .fc-popover, .fc-unthemed .fc-row, .fc-unthemed tbody, .fc-unthemed td, .fc-unthemed th, .fc-unthemed thead{
                border: none;
            }
            .fc td.fc-today{
                border: none;
            }
            </style>
            `
        }
    });
    domc.addType(CalenderRef, {
        isComponent: el => el.tagName == 'Calender',
        model: {
          defaults: {
              name: CalenderRef,
              resizable: true,
              dmode: 'absolute',
              childrenSelectable: false,
              highlightable: false,
              droppable: false,
              traits: [
                {
                  name: 'bgColor',
                  label: '背景颜色',
                  type: 'color',
                  changeProp: 1   
                },
                {
                  name: 'thColor',
                  label: '星期颜色',
                  type: 'color',
                  changeProp: 1                   
                },
                {
                  name: 'tbodyColor',
                  label: '日期颜色',
                  type: 'color',
                  changeProp: 1
                },
                {
                  name: 'otherMounthColor',
                  label: '非本月日期颜色',
                  type: 'color',
                  changeProp: 1
                },
                {
                  name: 'hasBorder',
                  label: '是否有边框',
                  type: 'checkbox',
                  changeProp: 1
                },
                {
                  name: 'todybgColor',
                  label: '当天日期颜色',
                  type: 'color',
                  changeProp: 1
                },
                {
                  name: 'fontSize',
                  label: '字体大小',
                  type: 'number',
                  changeProp: 1
                }
              ],
              'bgColor': '#fff',
              'thColor': '#000',
              'tbodyColor': '#000',
              'otherMounthColor': '#000',
              'hasBorder': false,
              'todybgColor': '#fcf8e3',
              'fontSize': 14,
              script() {
                console.log(moment);
                const bgColor = '{[ bgColor ]}'
                const thColor = '{[ thColor ]}'
                const tbodyColor = '{[ tbodyColor ]}'
                const otherMounthColor = '{[ otherMounthColor ]}'
                const hasBorder = Boolean('{[ hasBorder ]}')
                const todybgColor = '{[ todybgColor ]}'
                const fontSize = '{[ fontSize ]}'
                let self = this;
                let elem = $(self).children('.content');
                const _id = self.getAttribute('id');
                const eventName = `call-${_id}`;
                const date = new Date();
                // const year = date.getFullYear();
                // const month = date.getMonth() +1;
                // const day = date.getDate();
                // const nowDate = year + '-' + month + '-' + day;
                const nowDate = moment(date).format('YYYY-MM-DD')
                const defaultSchedule = [
                  {
                    title: 'Business Lunch',
                    start: '2020-06-12T08:00:00',
                    end: '2020-06-12T09:00:00',
                  },
                  {
                    title: 'Meeting',
                    start: '2020-06-13T10:00:00',
                    end: '2020-06-13T15:00:00',                      
                  },
                  {
                    title: 'Conference',
                    start: '2020-06-18',
                    end: '2020-06-20'                    
                  },
                  {
                    title: 'rest',
                    start: '2020-06-18T10:00:00',
                    end: '2020-06-18T11:00:00'                    
                  },

                  {
                    title: 'Party',
                    start: '2020-06-21T20:00:00',
                    end: '2020-06-22T10:00:00'                      
                  }
                ]
                
                // 有 dashboardHost 说明是运行模式
                if (window.spSocket) {
                  window.spSocket.subscribe({ // 接收
                      eventName: eventName,
                      callback: function (_data) {
                        console.log(_data);
                        const _in1Str = _data.data.in1;
                        if(_in1Str){
                          defaultSchedule = JSON.parse(_in1Str);
                        }
                      }
                  });
                }
                elem.fullCalendar({
                  header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                  },
                  defaultDate: nowDate,
                  navLinks: false, // can click day/week names to navigate views
                  editable: true,
                  events: defaultSchedule,
                  dayClick: function(date, jsEvent, view) {
                    if($(self).find(".scheduleWrapper").length > 0) {
                      $(self).find(".scheduleWrapper").remove();
                    }                   
                    $(self).find(".scheduleWrapper").empty();
                    let html = `<div class="scheduleWrapper"></div>` //新增html
                    elem.append(html);
                    var events = elem.fullCalendar('clientEvents', function(event) {
                      var eventStart = moment(event.start).format('YYYY-MM-DD');
                      var eventEnd = event.end ? moment(event.end).format('YYYY-MM-DD') : null;
                      var theDate = moment(date).format('YYYY-MM-DD');
                      return (eventStart <= theDate && (eventEnd >= theDate) && !(eventStart < theDate && (eventEnd == theDate))) || (eventStart == theDate && (eventEnd === null));
                    });
                    console.log(events);
                    if (events.length > 0){
                      html = `<ul></ul>`
                      $(self).find(".scheduleWrapper").append(html)
                      events.forEach((item, index) => {
                        const startDate = moment(item.start._i).format('YYYY-MM-DD')
                        const endDate = moment(item.end._i).format('YYYY-MM-DD')
                        let html;
                        if(startDate == endDate) {
                          console.log('aa');
                          html = `
                          <li class="item">
                          <div class="item-left">
                            <span>${index + 1 }</span>
                            <span>${item.title}</span>
                          </div>
                          <div class="item-right">
                            <i class= "fa"></i>
                            <span>${moment(item.start._i).format('HH:mm')}</span>~
                            <span>${moment(item.end._i).format('HH:mm')}</span>
                          </div>
                        </li>
                        `
                        } else {
                          console.log('bb')
                          html = `
                          <li class="item">
                          <div class="item-left">
                            <span>${index + 1 }</span>
                            <span>${item.title}</span>
                          </div>
                          <div class="item-right">
                            <i class= "fa"></i>
                            <span>${moment(item.start._i).format('YYYY/MM/DD')}</span>~
                            <span>${moment(item.end._i).format('YYYY/MM/DD')}</span>
                          </div>
                        </li>
                        `
                        }
                        $(self).find("ul").append(html)
                      })
                    } else {
                      html = '<div>当前日期没有日程安排</div>'
                      $(self).find(".scheduleWrapper").append(html)
                    }
                  }
                })
                elem.css("background-color", bgColor);
                elem.find(".fc-day-header").css("color", thColor);
                elem.find(".fc-day").css("color", tbodyColor);
                elem.find(".fc-other-month").css("color", otherMounthColor);
                if (hasBorder == false) {
                  elem.find("td").css("border", "none");
                  elem.find("th").css("border", "none");
                } else {
                  elem.find("td").css("border-color", "#ddd");
                  elem.find("th").css("border-color", "#ddd");                  
                }
                elem.find(".fc-today").css("background", todybgColor);
                elem.find(".fc-day-header").css("font-size", fontSize);
                elem.find(".fc-day-number").css("font-size", fontSize)
              },
          },
          init() {
            this.addAttributes({
                sp: {
                  metadata: {
                    label: '这是一个文本框',
                    icon: 'globe',
                    def: {
                      type: 22,
                      params: {},
                      ports: [
                        {
                            uuid: 'in1',
                            type: 'data',
                            ioType: 'in',
                            display: true,
                            subType: 'dashbord.string',
                            description: {
                              zh_CN: 'Disabled'
                            }
                          },
                          {
                            uuid: 'out1',
                            type: 'data',
                            ioType: 'out',
                            display: true,
                            description: {
                              zh_CN: '输出param'
                            }
                          }
                      ]
                    }
                  }
                }
              })
          }
        },
        view: {
            init() {
              const evn = `
              change:bgColor
              change:thColor
              change:tbodyColor
              change:otherMounthColor
              change:hasBorder
              change:todybgColor
              change:fontSize
              `;
              this.listenTo(this.model, evn, this.updateScript);
              this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
            }
        }
    })
}