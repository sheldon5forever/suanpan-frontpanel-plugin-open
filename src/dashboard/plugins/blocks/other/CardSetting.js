import { formInput, cardSetting, CATEGORIES } from '../../common/constants'

export default {

  // 组件名称
  name: cardSetting,

  // 前面板html模板
  viewTemplate() {
    return `
      <div data-gjs-type="${cardSetting}" class="${cardSetting}">
        <div class="${cardSetting}-btn">
            <i class="fa fa-cog"></i>
        </div>
        <div class="${cardSetting}-body">
            <a class="${cardSetting}-close"><i class="fa fa-close"></i></a>
            <div class="wrapper wrapper-out2" id="out2">
              <div data-gjs-type="${formInput}" class="${formInput}"></div>
            </div>
            <h4>权重设置</h4>
            <div class="wrapper wrapper-out1" id="out1">
              <div data-gjs-type="${formInput}" class="${formInput}"></div>
              <div data-gjs-type="${formInput}" class="${formInput}"></div>
              <div data-gjs-type="${formInput}" class="${formInput}"></div>
            </div>
            <div class="${cardSetting}-footer">
                <button type="button" class="btn btn-primary btn-block">保存</button>
            </div>
        </div>
      </div>
    `
  },
  // 前面板html样式
  viewStyle() {
    return `
      <style>
        .${cardSetting} {
          position: relative;
          display: inline-block;
          padding: 16px;
          width: 60px;
          height: 60px;
          z-index: 999;
        }
        .${cardSetting}-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          cursor: pointer;
          font-size: 18px;
        }
        .${cardSetting}-body {
          position: absolute;
          left: 0;
          top: 100%;
          width: 420px;
          border: 1px solid #dcdcdc;
          background-color: #fff!important;
          font-size: 14px;
        }
        .${cardSetting}-body .wrapper-out1 {
          padding: 16px;
        }
        .${cardSetting}-body .wrapper-out2 {
          padding: 24px 16px 16px;
          background-color: #f0f0f0!important;
        }
        .${cardSetting}-footer {
          border-top: 1px solid #eee;
          padding: 16px;
        }
        .${cardSetting}-body h4 {
          margin: 8px 16px 0;
          padding: 10px 16px;
          border-bottom: 1px solid #eee;
          font-size: 16px;
        }
        .${cardSetting}-body .btn {
          border-radius: 3px;
          background-color: #4792e2!important;
        }
        .${cardSetting}-body .btn:hover {
          border-radius: 3px;
          opacity: 0.8;
        }
        .${cardSetting}-close {
          display: block;
          position: absolute;
          right: -16px;
          top: -16px;
          width: 32px;
          height: 32px;
          padding: 8px;
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          background-color: #fff!important;
          border: 1px solid #dcdcdc;
          line-height: 0;
        }
        .${cardSetting}-close .fa {
          line-height: 16px;
        }
        .${cardSetting}-close:hover {
          transform: scale(1.1);
        }

        .${cardSetting} .${formInput}.horizontal {
          display: flex;
          align-items: center;
        }
        .${cardSetting} .${formInput}.vertical {
          height: auto!important;
        }
        .${cardSetting} .${formInput} {
          margin: 12px 0;
        }
        .${cardSetting} .${formInput}.horizontal .form-label {
          flex: 0 0 30%;
          margin: 0;
          padding: 0 16px;
          text-align: right;
        }
        .${cardSetting} .${formInput}.vertical .form-label {
          margin-bottom: 8px;
          display: block;
          width: 50%;
        }
        .${cardSetting} .${formInput}.horizontal .form-control {
          flex: 0 0 0%;
        }
        .${cardSetting} .${formInput}.has-addon .form-control {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .${cardSetting} .${formInput}.vertical.has-addon .form-control {
          display: inline-block;
          width: calc(100% - 40px);
        }
        .${cardSetting} .${formInput} .input-addon {
          display: inline-block;
          width: 40px;
          padding: .5675rem 0;
          border-top: 1px solid #ced4da;
          border-right: 1px solid #ced4da;
          border-bottom: 1px solid #ced4da;
          border-top-right-radius: .25rem;
          border-bottom-right-radius: .25rem;
          font-size: 0.75rem;
          line-height: 1.5;
          text-align: center;
          background-color: #f5f5f5;
          color: #666;
        }
      </style>
    `
  },

  // 编辑器右侧块管理器中显示属性配置
  blockOptions() {
    return {
      category: CATEGORIES.OTHER,
      label: "设置卡",
      attributes: { class: 'fa fa-window-maximize' },
    };
  },

  spOptions() {
    return {
      label: '设置卡',
      icon: 'globe',
      outPorts: [
        {
          uuid: 'out1',
          subType: 'all',
          description: {
            zh_CN: '输出1'
          }
        }, {
          uuid: 'out2',
          subType: 'all',
          description: {
            zh_CN: '输出2'
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
      childrenStatic: true
    }
  },

  onModelScript() {
    const self = this;
    $(self).on('click', '.card-setting-btn', function () {
      $(this).next().slideToggle('fast')
    });
    $(self).on('click', '.card-setting-close', function () {
      $(this).parent().slideUp('fast')
    });
    if (window.spSocket) {
      $(self).children('.card-setting-body').css('display', 'none');
    }

    const eventName = `call-` + self.getAttribute('id');
    $(self).on('click', 'button', function (e) {
      const out1 = {}
      const out2 = {}
      $(self).find('#out1 input').each(function(i, e) {
        const key = $(e).attr('name')
        const type = $(e).attr('type')
        let value = $(e).val()
        if (type == 'radio' || type == 'checkbox') {
          $(e).is(':checked') ? out1[key] = value : null
        } else {
          value.indexOf(',') > 0 && (value = value.split(',').map(function(item) { return Number(item) }))
          out1[key] = value
        }
      })
      $(self).find('#out2 input').each(function(i, e) {
        const key = $(e).attr('name')
        const type = $(e).attr('type')
        let value = $(e).val()
        if (type == 'radio' || type == 'checkbox') {
          $(e).is(':checked') ? out2[key] = value : null
        } else {
          value.indexOf(',') > 0 && (value = value.split(',').map(function(item) { return Number(item) }))
          out2[key] = value
        }
      })
      if (window.spSocket) {
        window.spSocket.send({
          eventName: eventName,
          data: {
            success: true,
            out1: JSON.stringify(out1),
            out2: JSON.stringify(out2),
            extra: {
              global: { debug: true }
            }
          }
        });
      }
    })
  },

  onViewInit() {
  }
}
