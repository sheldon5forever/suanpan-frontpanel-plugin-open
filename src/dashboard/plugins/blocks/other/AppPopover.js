import { appPopover, CATEGORIES } from '../../common/constants';

export default {

  // 组件名称
  name: appPopover,

  // 前面板html模板
  viewTemplate() {
    return `
      <div data-gjs-type="${appPopover}" class="${appPopover}"></div>
    `
  },
  // 前面板html样式
  viewStyle() {
    return `
      <style>
        .${appPopover} {
          position: relative;
          display: inline-block;
          padding: 16px;
          width: 60px;
          height: 60px;
          border: 2px solid #cccccc;
          border-radius: 3px;
        }
      </style>
    `
  },

  // 编辑器右侧块管理器中显示属性配置
  blockOptions() {
    return {
      category: CATEGORIES.OTHER,
      label: "项目预览",
      attributes: { class: 'fa fa-window-maximize' },
    };
  },

  // 组件属性
  componentOptions() {
    return {
      droppable: false,
      resizable: true,
      dmode: 'absolute',
      highlightable: false,
      childrenStatic: true,
      traits: [{
        name: 'link',
        label: '项目ID',
        changeProp: 1
      }]
    }
  },

  onModelScript() {
    $(this).click(function () {
      const link = ('{[ link ]}').toString();
      if (link) {
        $('#appFrame').remove();

        const $iframe = $(`<iframe id="appFrame" src="/dashboard/shanglu/${link}">`).css({ width: "100%", height: "100%", overflow: 'auto' });

        $('<div></div>')
          .css({ position: 'absolute', 'max-width': 'unset', width: '100%', height: '100%', padding: 0, })
          .append($iframe)
          .appendTo(document.body).modal();

        $('a.close-modal').css({ top: 0, right: 0 });

        $('.jquery-modal')
          .width('80vw')
          .height('80vh')
          .css({ position: 'relative', 'margin-left': '10%', 'margin-top': '5%', padding: '0px', 'background-color': 'transparent' });
      }
    })
  },

  onViewInit() {
    const evn = 'change:link'
    this.listenTo(this.model, evn, this.updateScript);
    this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
  }
}
