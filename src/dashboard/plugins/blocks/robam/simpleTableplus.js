import { tableSimplePlus, CATEGORIES } from '../../common/constants'
import { throttle } from '../../../utils'

export default {

  // 组件名称
  name: tableSimplePlus,

  // 前面板html模板
  viewTemplate() {
    return `
      <div data-gjs-type="${tableSimplePlus}" class="${tableSimplePlus}">
      </div>
    `
  },
  // 前面板html样式
  viewStyle() {
    return `
      <style>
        .${tableSimplePlus} {
          position: 'absolute';
          display: flex;
          flex-direction: column;
          overflow-x: auto;
          font-size: inherit;
          font-weight: inherit;
          font-style: inherit;
          font-family: inherit;
        }
        .${tableSimplePlus} > .table-body {
          width: 100%;
          flex: 1 1 auto;
          overflow-y: auto;
        }
        .${tableSimplePlus} table {
          width: 100%;
          translate: transform 0.4 ease;
          text-align: inherit;
          color: currentColor;
          font-size: inherit;
          font-weight: inherit;
          font-style: inherit;
          font-family: inherit;
        }
        .${tableSimplePlus} table > tbody > tr > td, .${tableSimplePlus} table > thead > tr > th {
          padding: 10px 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: inherit;
          font-size: inherit;
          font-weight: inherit;
          font-style: inherit;
          font-family: inherit;
        }
        .${tableSimplePlus} table > tbody > tr > td {
          background-position: center center;
          background-size: 100% auto;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .${tableSimplePlus} table > tbody > tr:hover > td {
          background-color: rgba(0,0,0,0.06);
        }
        .${tableSimplePlus} table > tbody > tr > td > img {
          max-width: 100%;
        }
        .${tableSimplePlus} > .search {
          margin-bottom: 12px;
          border: 1px solid transparent;
          border-radius: 2px;
          position: relative;
        }
        .${tableSimplePlus} > .search > input {
          width: 100%;
          height: 30px;
          padding-left: 10px;
          padding-right: 100px;
          border: none;
          background-color: transparent;
          color: inherit;
        }
        .${tableSimplePlus} > .search > button {
          position: absolute;
          right: 0;
          top: 0;
          width: 90px;
          height: 30px;
          border: none;
          border-left: 1px solid transparent;
          padding: 0 16px;
          text-align: center;
          cursor: pointer;
        }
        .${tableSimplePlus} > .search > button > .fa {
          color: inherit;
        }
        .${tableSimplePlus} .process {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            padding: 28px 0 12px;
            width: 100%;
        }
        .${tableSimplePlus} .process .icon-flag {
            display: none;
        }
        .${tableSimplePlus} .process .process-static {
            width: 100%;
            height: 15px;
            border-radius: 10px;
            box-shadow: inset 0px -5px 10px 0px white;
        }
        .${tableSimplePlus} .process .process-active {
            position: absolute;
            top: 28px;
            left: 0;
            width: 0;
            height: 14px;
            border: 1px solid #4dafe2;
            border-radius: 10px;
            background-size: 5px 5px;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.2);
        }

        ::-webkit-scrollbar-track {
          border-radius: 0;
          background: rgba(0,0,0,0.1);
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: none;
        }
      </style>
    `
  },

  // 编辑器右侧块管理器中显示属性配置
  blockOptions() {
    return {
      category: CATEGORIES.ROBAM,
      label: "渐变表格",
      attributes: { class: 'fa fa-table' },
    };
  },

  spOptions() {
    return {
      label: '渐变表格',
      icon: 'globe',
      docUrl: 'https://xuelangyun.yuque.com/docs/share/ac79e22a-aca2-4c73-afee-66a15dc0c309?# 《表格》',
      author: '徐超',
      email: '304093931@qq.com',
      inPorts: [
        {
          uuid: 'in1',
          subType: 'json',
          description: {
            zh_CN: '输入Json'
          }
        }],
      outPorts: [
        {
          uuid: 'out1',
          subType: 'json',
          description: {
            zh_CN: '输出选中的Row'
          },
        },
        {
          uuid: 'out2',
          subType: 'all',
          description: {
            zh_CN: '输出高亮的行'
          },
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
      childrenSelectable: false,
      traits: [{
        name: 'showTableTh',
        label: '显示表头',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'theadHeight',
        label: '表头行高(px)',
        changeProp: 1,
        type: 'number',
        min: 0
      }, {
        name: 'thBg',
        label: '表头背景色',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'thColor',
        label: '表头字体颜色',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'thFontSize',
        label: '表头字号',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'thFontWeight',
        label: '表头字体粗细',
        changeProp: 1,
        type: 'number',
        min: 400,
        step: 100,
      }, {
        name: 'thFontItalic',
        label: '表头字体风格',
        changeProp: 1,
        type: 'select',
        options: [{id: 'normal', name: '正常'}, {id: 'italic', name: '倾斜'}]
      }, {
        name: 'evenBgColor',
        label: '偶行背景',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'oddBgColor',
        label: '奇行背景',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'oddBgImage',
        label: '奇行背景图片',
        changeProp: 1,
      }, {
        name: 'selectedBgColor',
        label: '选中行背景',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'selectedBgImage',
        label: '选中行背景图片',
        changeProp: 1,
      }, {
        name: 'defaultSelectedLine',
        label: '默认选中行',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'trBorderStyle',
        label: '行边框类型',
        changeProp: 1,
        type: 'select',
        options: [{id: 'none', name: '无边框'}, {id: 'solid', name: '实线'}, {id: 'dashed', name: '虚线'}, {id: 'dotted', name: '点线'}]
      }, {
        name: 'trBorderColor',
        label: '行边框颜色',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'trHeight',
        label: '行高(px)',
        changeProp: 1,
        type: 'number',
        min: 0
      }, {
        name: 'showRowNum',
        label: '显示行数',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'linePeed',
        label: '不换行',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'checkable',
        label: '多选行',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'trMarginTop',
        label: '行上下间距',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'trMarginLeft',
        label: '单元格左右间距',
        changeProp: 1,
        type: 'number'
      }, {
        name: 'tdWidth',
        label: '固定列宽(px)',
        changeProp: 1,
        type: 'number',
        min: 0
      }, {
        name: 'colWidth',
        label: '列:宽',
        changeProp: 1,
        type: 'key-value',
        width: '25%:75%',
        placeholder: '列索引:宽度'
      }, {
        name: 'colAlign',
        label: '列:对齐',
        changeProp: 1,
        type: 'key-value',
        width: '25%:75%',
        placeholder: '列索引:水平对齐',
        options: [{id: 'left', name: '左侧'}, {id: 'center', name: '居中'}, {id: 'right', name: '右侧'}]
      }, {
        name: 'colImgUrl',
        label: '列:图片',
        changeProp: 1,
        type: 'key-value',
        splitor: '::',
        width: '25%::75%',
        placeholder: '列索引::图片目录url'
      }, {
        name: 'colBgUrl',
        label: '列:背景图',
        changeProp: 1,
        type: 'key-value',
        width: '25%::75%',
        splitor: '::',
        placeholder: '列索引::背景图片'
      }, {
        name: 'colFontsize',
        label: '列:字号',
        changeProp: 1,
        type: 'key-value',
        width: '25%:75%',
      }, {
        name: 'colFontfamily',
        label: '列:字体',
        changeProp: 1,
        type: 'key-value',
        width: '25%:75%',
        options: ['inherit', 'DS-Digital', '庞门正道']
      }, {
        name: 'colStyles',
        label: '自定义列样式',
        changeProp: 1,
        type: 'key-value',
        splitor: '::',
        width: '25%::75%',
        valueType: 'textarea'
      }, {
        name: 'flowUp',
        label: '向上流动',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'speed',
        label: '流动速度(s)',
        changeProp: 1,
        type: 'number',
        min: 0,
        step: 0.1
      }, {
        name: 'delay',
        label: '延迟(s)',
        changeProp: 1,
        type: 'number',
        min: 0,
        step: 0.1
      }, {
        name: 'highlight',
        label: '设置高亮',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'highlightLine',
        label: '高亮行',
        type: 'number',
        changeProp: 1,
        min: 1,
        step: 1
      }, {
        name: 'highlightColor',
        label: '高亮字体颜色',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'highlightBackground',
        label: '高亮行背景',
        changeProp: 1,
        type: 'color'
      }, {
        name: 'highlightBgImage',
        label: '高亮行背景图片',
        changeProp: 1,
      }, {
        name: 'searchable',
        label: '可搜索',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'searchWidth',
        label: '搜索框宽度',
        changeProp: 1,
      }, {
        name: 'searchPosition',
        label: '搜索框位置',
        changeProp: 1,
        type: 'select',
        options: [{id: 'flex-start', name: '居左'}, {id: 'center', name: '居中'}, {id: 'flex-end', name: '居右'}]
      }, {
        name: 'no_h_p_cols',
        label: '0水平内边距列',
        changeProp: 1,
      }, {
        name: 'hiddenDimension',
        label: '非渲染数据维度',
        changeProp: 1,
      }, {
        name: 'inLoader',
        label: '加载动画',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'clickEvent',
        label: '鼠标事件',
        changeProp: 1,
        type: 'select',
        options: [{id: 'null', name: '无'}, {id: 'click', name: '单击'}, {id: 'dblclick', name: '双击'}, {id: 'mousedown', name: '按下'}, {id: 'mouseup', name: '松开'}]
      }, {
        name: 'process',
        label: '替换进度条',
        changeProp: 1,
        type: 'checkbox'
      }, {
        name: 'processColumn',
        label: '列数',
        changeProp: 1,
        type: 'number',
        min: 1,
        step: 1
      }, {
        name: 'processDoneColor',
        label: '已完成颜色',
        changeProp: 1,
        type: 'color',
      }, {
        name: 'processWaitColor',
        label: '待完成颜色',
        changeProp: 1,
        type: 'color',
      }, {
        name: 'processStripeColor',
        label: '条纹颜色',
        changeProp: 1,
        type: 'color',
      }, {
        name: 'columnColor',
        label: '设置列颜色',
        changeProp: 1,
        type: 'checkbox',
      }, {
        name: 'columnColorOrder',
        label: '列数',
        changeProp: 1,
        type: 'number',
        min: 1,
        step: 1
      }, {
        name: 'columnPositiveColor',
        label: '列正值字体颜色',
        changeProp: 1,
        type: 'color',
      }, {
        name: 'columnNegativeColor',
        label: '列负值字体颜色',
        changeProp: 1,
        type: 'color',
      }, {
        name: 'defaultData',
        changeProp: 1,
        type: 'hide'
      }],
      defaultData:JSON.stringify([
        ["id", "姓名", "性别", "年龄", "采集时间"],
        ["001", "李磊", "男", "12", "2020-01-02 14:28:36"],
        ["002", "王华", "女", "42", "2020-01-02 14:28:36"],
        ["003", "孙南", "男", "34", "2020-01-02 14:28:36"],
        ["004", "李明", "男", "12", "2020-01-02 14:28:36"],
        ["005", "孙华", "女", "42", "2020-01-02 14:28:36"],
        ["006", "苏如花", "男", "34", "2020-01-02 14:28:36"]
      ]).replace(/\"/g, "\\\""),
      showTableTh: true,
      thBg: "none",
      thColor: "none",
      thFontSize: 14,
      thFontWeight: 400,
      thFontItalic: 'normal',
      evenBgColor: null,
      oddBgColor: null,
      oddBgImage: 'linear-gradient(90deg, rgba(2, 8, 20, 0) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(1, 7, 17, 0) 100%)',
      selectedBgColor: '#cce6ff',
      selectedBgImage: 'linear-gradient(0deg, #01C8F2 0%, rgba(9, 45, 93, 0.5) 100%)',
      defaultSelectedLine: 0,
      trBorderStyle: 'solid',
      trBorderColor: '#ddd',
      trHeight: 40,
      theadHeight: 40,
      showRowNum: false,
      linePeed: true,
      checkable: false,
      trMarginTop: 0,
      trMarginLeft: 0,
      tdWidth: 0,
      flowUp: false,
      speed: 1,
      delay: 2,
      highlight: false,
      highlightLine: 2,
      highlightColor: null,
      highlightBackground: null,
      highlightBgImage: 'linear-gradient(0deg, #01C8F2 0%, rgba(9, 45, 93, 0.5) 100%)',
      searchable: false,
      searchWidth: '100%',
      searchPosition: 'flex-start',
      inLoader: false,
      hiddenDimension: null,
      clickEvent: 'click',
      process: false,
      processColumn: 1,
      processDoneColor: 'rgb(24, 144, 255)',
      processWaitColor: 'rgba(24, 144, 255, 0.3)',
      processStripeColor: 'rgb(77, 175, 226)',
      columnColor: false,
      columnColorOrder: 1,
      columnPositiveColor: 'red',
      columnNegativeColor: 'green',
    }
  },

  onModelScript() {
    const showTableTh = Boolean('{[ showTableTh ]}');
    const thBg = '{[ thBg ]}';
    const thColor = '{[ thColor ]}';
    const thFontSize = parseInt('{[ thFontSize ]}');
    const evenBgColor = '{[ evenBgColor ]}';
    const oddBgColor = '{[ oddBgColor ]}';
    const oddBgImage = '{[ oddBgImage ]}';
    const selectedBgColor = '{[ selectedBgColor ]}';
    const selectedBgImage = '{[ selectedBgImage ]}';
    const defaultSelectedLine = Number('{[ defaultSelectedLine ]}');
    const trBorderStyle = ('{[ trBorderStyle ]}').toString();
    const trBorderColor = ('{[ trBorderColor ]}').toString();
    const thFontItalic = ('{[ thFontItalic ]}').toString();
    const trHeight = Boolean('{[ trHeight ]}') ? parseInt('{[ trHeight ]}') : 0;
    const theadHeight = Boolean('{[ theadHeight ]}') ? parseInt('{[ theadHeight ]}') : 0;
    const thFontWeight = Boolean('{[ thFontWeight ]}') ? parseInt('{[ thFontWeight ]}') : 0;
    const showRowNum = Boolean('{[ showRowNum ]}');
    const linePeed = Boolean('{[ linePeed ]}');
    const checkable = Boolean('{[ checkable ]}');
    const trMarginTop = Boolean('{[ trMarginTop ]}') ? parseInt('{[ trMarginTop ]}') : 0;
    const trMarginLeft = Boolean('{[ trMarginLeft ]}') ? parseInt('{[ trMarginLeft ]}') : 0;
    const speed = Boolean('{[ speed ]}') ? Number('{[ speed ]}') : 0;
    const delay = Boolean('{[ delay ]}') ? Number('{[ delay ]}') : 0;
    const colWidth = ('{[ colWidth ]}').toString();
    const tdWidth = parseInt('{[ tdWidth ]}');
    const colAlign = ('{[ colAlign ]}').toString();
    const flowUp = Boolean('{[ flowUp ]}');
    const highlight = Boolean('{[ highlight ]}');
    const highlightLine = Number('{[ highlightLine ]}');
    const highlightColor = ('{[ highlightColor ]}').toString();
    const highlightBackground = ('{[ highlightBackground ]}').toString();
    const highlightBgImage = ('{[ highlightBgImage ]}').toString();
    const searchable = Boolean('{[ searchable ]}');
    let searchWidth = ('{[ searchWidth ]}').toString();
    const searchPosition = ('{[ searchPosition ]}').toString();
    let searchKey = null;
    const inLoader = Boolean('{[ inLoader ]}');
    const colImgUrl = ('{[ colImgUrl ]}').toString();
    const colBgUrl = ('{[ colBgUrl ]}').toString();
    const colFontsize = ('{[ colFontsize ]}').toString();
    const colFontfamily = ('{[ colFontfamily ]}').toString();
    const colStyles = ('{[ colStyles ]}').toString();
    const no_h_p_cols = ('{[ no_h_p_cols ]}').toString();
    const hiddenDimension = '{[ hiddenDimension ]}';
    const clickEvent = ('{[ clickEvent ]}').toString();
    const process = Boolean('{[ process ]}');
    const processColumn = Number('{[ processColumn ]}');
    const processDoneColor = ('{[ processDoneColor ]}').toString();
    const processWaitColor = ('{[ processWaitColor ]}').toString();
    const processStripeColor = ('{[ processStripeColor ]}').toString();
    const columnColor = Boolean('{[ columnColor ]}');
    const columnColorOrder = Number('{[ columnColorOrder ]}');
    const columnPositiveColor = ('{[ columnPositiveColor ]}').toString();
    const columnNegativeColor = ('{[ columnNegativeColor ]}').toString();
    let defaultData = "{[ defaultData ]}";
    const self = this;
    const _id = self.getAttribute('id');
    const eventName = `call-${_id}`;
    let extraIndex;

    let extraDimension;

    if (hiddenDimension.indexOf(',') > 0) {
      extraDimension = hiddenDimension.split(',').map(dim => {
        const str = dim.trim();
        if (isNaN(Number(str))) {
          return str;
        } else {
          return parseInt(str);
        }
      });
    } else if (Boolean(hiddenDimension)) {
      extraDimension = [];
      if (isNaN(Number(hiddenDimension))) {
        extraDimension.push(hiddenDimension.toString());
      } else if (Boolean(hiddenDimension)) {
        extraDimension.push(parseInt(hiddenDimension));
      }
    }

    let noHovPaddingCols;
    if (no_h_p_cols.indexOf(',') > 0) {
      noHovPaddingCols = no_h_p_cols.split(',').map(i => parseInt(i));
    } else if (Boolean(no_h_p_cols)) {
      noHovPaddingCols = [parseInt(no_h_p_cols)];
    }

    const setColsKey = function(col, targetObj, splitor, key) {
      const k_v = col.split(splitor);
      const k = k_v[0].trim();
      const v = k_v[1].trim();
      if (!key) {
        targetObj[k] = v;
        return;
      }
      if (!targetObj[k]) {
        targetObj[k] = {};
      }
      targetObj[k][key] = v;
      if (key == 'style') {
        let styles;
        if (v.indexOf(';') > 0) {
          styles = v.split(';')
        } else {
          styles = [v];
        }
        styles.forEach(styleItem => {
          if (styleItem.indexOf(':') > 0) {
            const item = styleItem.split(':');
            const _k = item[0].trim();
            const _v = item[1].trim();
            if (!targetObj[k]) {
              targetObj[k] = {};
            }
            targetObj[k][_k] = _v;
          }
        })
      }
    };

    const getColsProperty = function(targetObj, sourceStr, splitor, key) {
      if (sourceStr.indexOf(',') > 0) {
        sourceStr.split(',').forEach(function(col) {
          setColsKey(col, targetObj, splitor, key);
        });
      } else if (sourceStr.indexOf(splitor) > 0) {
        setColsKey(sourceStr, targetObj, splitor, key);
      }
    };
    const cols = {};
    getColsProperty(cols, colWidth, ':', 'width');
    getColsProperty(cols, colAlign, ':', 'text-align');
    getColsProperty(cols, colBgUrl, '::', 'background-image');
    getColsProperty(cols, colFontsize, ':', 'font-size');
    getColsProperty(cols, colFontfamily, ':', 'font-family');
    getColsProperty(cols, colStyles, '::', 'style');
    getColsProperty(cols, colImgUrl, '::', 'img');
    try {
      defaultData = JSON.parse(defaultData.replace(/\\\"/g, "\""));
    } catch(err) {
      console.error(defaultData, err)
    }
    inLoader ? $(self).attr('loader', 'in') : $(self).removeAttr('loader');

    if (window.tableTimer && window.tableTimer[_id]) {
      clearInterval(window.tableTimer[_id]);
      window.tableTimer[_id] = undefined;
    } else if (window.tableTimer) {
      Object.keys(window.tableTimer).forEach((timerId) => {
        if (!$('#' + timerId).length) {
          clearInterval(window.tableTimer[timerId]);
          window.tableTimer[timerId] = undefined;
        }
      })
    } else {
      window.tableTimer = {};
    }

    $(self).empty();
    if (searchable) {
      if (!isNaN(Number(searchWidth))) {
        searchWidth += 'px';
      }
      $(self).append(`
        <div class="search" style="width: ${searchWidth}; align-self: ${searchPosition}; border-color: ${thBg};">
          <input type="text" />
          <button style="background-color: ${thBg}; color: ${thColor};">搜 索</button>
        </div>
      `);
    }
    if (showTableTh) {
      $(self).append(`
        <div class="table-head">
          <table style="background-color: ${thBg}; font-size: ${thFontSize}px; font-weight: ${thFontWeight}; font-style: ${thFontItalic}; color: ${thColor};"><thead></thead></table>
        </div>
      `);
    }
    $(self).append(`
      <div class="table-body" style="overflow: ${flowUp ? 'hidden' : 'auto'};">
        <table><thead style="font-size: ${thFontSize}px; visibility: hidden;"></thead><tbody></tbody></table>
      </div>
    `);

    const $tbody = $(self).find('.table-body tbody');
    const $tbody_head = $(self).find('.table-body thead');
    const $thead = $(self).find('.table-head thead');
    const $table = $(self).find('table');
    let marginTop;
    if (!trMarginTop  && !trMarginLeft) {
      $table.css({ 'border-collapse':'collapse', 'border-spacing': '0' });
    } else {
      $table.css({ 'border-collapse':'separate', 'border-spacing': (trMarginLeft || 0) + 'px ' + (trMarginTop || 0) + 'px' });
    }
    
    const renderHead = function(row) {
      const $tr = $(`
        <tr>
          ${showRowNum ? '<th width="48"></th>' : ''}
          ${checkable ? '<th width="48"><input type="checkbox" name="all" /></th>' : ''}
          <th>${row.join('</th><th>')}</th>
        </tr>
      `);
      if (tdWidth) {
        $tr.children('th').css('width', tdWidth + 'px');
      }
      $tr.children('th').each(function(i, el) {
        if (cols[i]) {
          for(let prop in cols[i]) {
            if (prop != 'text-align') continue;
            $(el).css(prop, cols[i][prop]);
          }
        }
      });
      if (showTableTh) {
        $thead.empty();
        $thead.append($tr.clone());
      }
      $tbody_head.empty();
      $tbody_head.append($tr);
      marginTop = -(trHeight + trMarginTop);
      $tbody_head.parent('table').css('margin-top', marginTop + 'px');
    };

    const renderBodyRow = function(row, index) {
      let data = row;
      if (extraIndex) {
        data = row.filter(function(col, i) {
          return extraIndex.indexOf(i) == -1;
        });
      }
      const $tr = $(`
        <tr>
          ${showRowNum ? '<td width="48">'+ index +'</td>' : ''}
          ${checkable ? '<td width="48"><input type="checkbox" name="all" /></td>' : ''}
          <td>${data.join('</td><td>')}</td>
        </tr>
      `);
      if (tdWidth) {
        $tr.children('td').css('width', tdWidth + 'px');
      }
      $tr.children('td').each(function(i, el) {
        if (cols[i]) {
          for(let prop in cols[i]) {
            if (prop == 'img') continue;
            if (prop == 'background-image') {
              $(el).css(prop, `url(${cols[i][prop]})`);
              continue;
            }
            $(el).css(prop, cols[i][prop]);
          }
        }
        if (cols[i] && cols[i].img) {
          const text = $(el).text();
          $(el).html(`<img src="${cols[i].img}${text}.png" alt="${text}" />`)
        }
        if (noHovPaddingCols && noHovPaddingCols.indexOf(i) > -1) {
          $(el).css({'padding-left': 0, 'padding-right': 0});
        }
      });
      $tr.attr('data-row', JSON.stringify(row));
      if (searchKey && data.join(' ').indexOf(searchKey) == -1) {
        $tr.css('display', 'none')
      }
      if (Boolean(evenBgColor) && index % 2 == 0) {
        $tr.css("background-color", evenBgColor);
      } else if (Boolean(oddBgColor) && index % 2 == 1) {
        $tr.css("background-color", oddBgColor);
      } else if (Boolean(oddBgImage) && index % 2 == 1) {
        $tr.css("background-image", oddBgImage);
      }
      if (Boolean(trBorderColor) && index > 1) {
        $tr.css('border-top', `1px ${trBorderStyle || 'solid'} ${trBorderColor}`);
      }
      $tbody.append($tr);
    };

    const renderTable = function(data) {
      $tbody.empty();
      if (tdWidth) {
        $table.width(tdWidth * data[0].length + (showRowNum ? (48 + trMarginLeft) : 0) + (checkable ? (48 + trMarginLeft) : 0) + (trMarginLeft || 0) * (data[0].length + 1));
      }
      $.each(data, function(index, row) {
        if (index == 0) {
          renderHead(row);
        } else {
          renderBodyRow(row, index);
        }
      });
      const $td = $(self).find('td');
      const $th = $(self).find('th');

      if (defaultSelectedLine) {
        let $selectedTr = $tbody.find('tr').eq(defaultSelectedLine - 1);
        $selectedTr.addClass('selected');
        $selectedTr.data({"background-color": $selectedTr.css("background-color"), "background-image":  $selectedTr.css("background-image")});

        $selectedTr.css("background-color", selectedBgColor);
        $selectedTr.css("background-image", selectedBgImage);

        const $selected_trs = $(self).find('tr.selected');
        let rows = [];
        $selected_trs.each(function(i, el) {
          let _row = JSON.parse($(el).attr('data-row'));
          rows.push(_row);
        });
        window.spSocket && window.spSocket.send({
          eventName: eventName,
          data: {
            success: true,
            out1: JSON.stringify(rows),
            extra: {
              global: { debug: true }
            }
          }
        });
      }

      if (linePeed) {
      //   $td.css({ 'white-space': 'break-spaces' });
      //   $th.css({ 'white-space': 'break-spaces' });
      //   $table.css({'table-layout': 'auto'});
      // } else {
        $td.css({ 'white-space': 'nowrap' });
        $th.css({ 'white-space': 'nowrap' });
        const $tableBody = $(self).find('.table-body');
        const $tableHead = $(self).find('.table-head');
        const tableBodyCssText = $tableBody.attr("style") + ";table-layout: fixed !important;";
        const tableHeadCssText = $tableHead.attr("style") + ";table-layout: fixed !important;";
        $tableBody.css('cssText', tableBodyCssText);
        $tableHead.css('cssText', tableHeadCssText);
      }
      setTimeout(resetHeadUi, 600);

      if (trHeight) {
        $td.outerHeight(trHeight)
        $th.outerHeight(trHeight);
      }
      if (theadHeight) {
        $thead.find('th').outerHeight(theadHeight);
      }

      if (flowUp && $tbody.parent().innerHeight() > $tbody.parent().parent().innerHeight()) {
        clearInterval(window.tableTimer[_id]);
        window.tableTimer[_id] = undefined;
        setBodyFlowup()
      } else {
        clearInterval(window.tableTimer[_id]);
        window.tableTimer[_id] = undefined;
      }

      if (process) {
        let backgroundImage = `linear-gradient(-45deg, ${processStripeColor} 0, ${processStripeColor} 25%, transparent 25%, transparent 50%, ${processStripeColor} 50%, ${processStripeColor} 75%, transparent 75%, transparent 100%)`

        $tbody.children('tr').each(function(i, el) {
          let $th = $(el).children('td').eq(processColumn - 1);
          let percent = $th.text();

          if (!isNaN(percent- 0) && (percent- 0) <= 1 && (percent- 0) >= 0 ) {
            percent = (percent- 0) * 100 + '%';
          }

          if (percent.indexOf('%') < 0) {
            return true;
          }

          let progressHtml = `
          <div class="process">
            <i id="icon-flag" class="icon-flag"></i>
            <div class="process-static" style="background-color: ${processWaitColor}"></div>
            <div id="process-bar" class="process-active" style="width: ${percent}; background-image: ${backgroundImage}; background-color: ${processDoneColor} "></div>
          </div>
          `;

          $(el).children('td').eq(processColumn - 1).html(progressHtml);
        });
      }

      if (columnColor) {
        $tbody.children('tr').each(function(e, el) {
          let $td = $(el).children('td').eq(columnColorOrder - 1);
          if (isNaN(Number($td.text()))) {
            return true;
          }

          let color = Number($td.text()) < 0 ? columnNegativeColor : columnPositiveColor;

          $td.css({color: color});
        });
      }

      if (highlight && flowUp && $tbody.parent().innerHeight() <= $tbody.parent().parent().innerHeight()) {
        if (window.tableHighlight) {
          clearInterval(window.tableHighlight[_id]);
          window.tableHighlight[_id] = undefined;
        }

        let $highlightLine = $tbody.children('tr').eq(highlightLine - 1);
        $highlightLine.data({color: $highlightLine.css('color'), 'background-color': $highlightLine.css('background-color'), 'background-image': $highlightLine.css('background-image') });
        $highlightLine.css({color: highlightColor, 'background-color': highlightBackground, 'background-image': highlightBgImage });

        window.tableHighlight[_id] = setInterval(function() {
            $tbody.children('tr').each(function(e, el){
              if ($(el).data('color')) {
                $(el).css({color: $(el).data('color'), 'background-color': $(el).data('background-color'), 'background-image': $(el).data('background-image') });
                $(el).data({color: '', 'background-color': '', 'background-image': 'none' });
                let $elNext = $(el).next();
                if ($elNext.length == 0) {
                  $elNext = $tbody.children('tr').first();
                }
                $elNext.data({color: $elNext.css('color'), 'background-color': $elNext.css('background-color'), 'background-image': $elNext.css('background-image') });
                $elNext.css({color: highlightColor, 'background-color': highlightBackground, 'background-image': highlightBgImage });
                return false;
              }
            });

            let rows = [];
            $highlightLine.children('td').each(function(e, el){ rows.push($(el).text()); })
            sendOut2(rows);
        }, delay * 1000)
      }
    };
    $thead.on('change', 'input[type=checkbox]', function(e) {
      const checked = $(this).is(':checked');
      if (checked) {
        $tbody.find('input[type=checkbox]').attr('checked', true);
      } else {
        $tbody.find('input[type=checkbox]').attr('checked', false);
      }
    })

    const setBodyFlowup = function () {
      const $body = $tbody.parent();
      window.tableTimer[_id] = setInterval(function() {
        const m_t = $tbody.children('tr').first().innerHeight() + trMarginTop - marginTop;

        $body.animate({marginTop: -m_t + 'px'}, speed * 1000,function() {
          if (highlight) {
            let $highlightLine = $tbody.children('tr').eq(highlightLine - 1);

            $tbody.children('tr').each(function(e, el){
              if ($(el).data('color')) {
                $(el).css({color: $(el).data('color'), 'background-color': $(el).data('background-color'), 'background-image': $(el).data('background-image') });
                $highlightLine.data({color: '', 'background-color': '', 'background-image': 'none' });
              }
            });

            $highlightLine.data({color: $highlightLine.css('color'), 'background-color': $highlightLine.css('background-color'), 'background-image': $highlightLine.css('background-image')  });
            $highlightLine.css({color: highlightColor, 'background-color': highlightBackground, 'background-image': highlightBgImage });

            let rows = [];
            $highlightLine.children('td').each(function(e, el){ rows.push($(el).text()); })
            sendOut2(rows);
          }

          const $first = $tbody.children('tr').first().detach();
          $tbody.append($first);
          $body.css({marginTop: marginTop + 'px'});
        })
      }, delay * 1000)
    };

    const sendOut2 = function (row) {
      window.spSocket && window.spSocket.send({
        eventName: eventName,
        data: {
          success: true,
          out2: JSON.stringify(row),
          extra: {
            global: { debug: true }
          }
        }
      });
    };

    const resetHeadUi = function () {
      const $tds = $tbody_head.find('th');
      $tds.each(function(i, el) {
        const w = $(el).innerWidth();
        $thead.find('th').eq(i).innerWidth(w);
      });
      const table_width = $tbody.parent('table').innerWidth();
      $thead.parent('table').innerWidth(table_width);
      $tbody.parent('table').innerWidth(table_width).parent('.table-body').innerWidth(table_width);
    };

    const handleSearch = function(e) {
      searchKey = $(self).children('.search').children('input').val().trim();
      if (e.type == 'click' || e.keyCode == 13) {
        $(self).find('tbody').children().each(function(i, el) {
          if (searchKey) {
            if($(el).attr('data-row').indexOf(e.target.value) < 0) {
              $(el).slideUp('fast')
            }
          }
        })
      } else if (!searchKey) {
        $(self).find('tbody').children(':hidden').slideDown('fast');
      }
    };
    
    $(self).find('.search > input').on('keyup', handleSearch)
    $(self).find('.search > button').on('click', handleSearch)

    const handleExtraIndex = function(tableColumn) {
      if (extraDimension && extraDimension.length) {
        extraIndex = extraDimension.map(function(dim, i) {
          if (isNaN(dim)) {
            const index = tableColumn.indexOf(dim);
            if (index == -1) {
              console.log("非渲染数据维度 " + dim + " has not found in data.")
            }
            return tableColumn.indexOf(dim);
          }
          return dim;
        });
      } else {
        extraIndex = null;
      }
    }
    handleExtraIndex(defaultData[0]);
    renderTable(defaultData);

    const handleClickRow = function (e) {
      e.stopPropagation();
      inLoader && window.loader && window.loader.add(_id);
      let selected = !$(this).hasClass('selected');
      let $selectedEle = '';
      $(this).siblings().each(function() {
        if ($(this).hasClass('selected')) {
          $selectedEle = $(this);
        }
      });
      if (selected) {
        if($selectedEle) {
          $selectedEle.removeClass('selected');
          $selectedEle.css("background-color", $selectedEle.data('background-color'));
          $selectedEle.css("background-image", $selectedEle.data('background-image'));
        }
        $(this).addClass('selected');
        $(this).data({"background-color": $(this).css("background-color"), "background-image":  $(this).css("background-image")});

        $(this).css("background-color", selectedBgColor);
        $(this).css("background-image", selectedBgImage);
      } else {
        $(this).removeClass('selected');
        $(this).css("background-color", $(this).data('background-color'));
        $(this).css("background-image", $(this).data('background-image'));
      }
      const $selected_trs = $(self).find('tr.selected');
      let rows = [];
      $selected_trs.each(function(i, el) {
        let _row = JSON.parse($(el).attr('data-row'));
        rows.push(_row);
      });
      window.spSocket && window.spSocket.send({
        eventName: eventName,
        data: {
          success: true,
          out1: JSON.stringify(rows),
          extra: {
            global: { debug: true }
          }
        }
      });
    };
    const sendCheckedRow = function(param) {
      const checkedRows = [];
      $tbody.find('input[type=checkbox]:checked').each(function(i, el) {
        const data = $(el).parents('tr').attr("data-row");
        checkedRows.push(JSON.parse(data));
      });
      const outData = {type: param, data: checkedRows};
      window.spSocket && window.spSocket.send({
        eventName: eventName,
        data: {
          success: true,
          out1: JSON.stringify(outData),
          extra: {
            global: { debug: true }
          }
        }
      });
    }

    if (window.prevEventType && window.prevEventType[eventName]) {
      $(self).off(window.prevEventType[eventName], 'table > tbody > tr');
    }
    if (clickEvent !== 'null' && !checkable) {
      $(self).on(clickEvent, 'table > tbody > tr', handleClickRow);
      if (!window.prevEventType) {
        window.prevEventType = {};
      }
      window.prevEventType[eventName] = clickEvent;
    }

    window.ee && window.ee.on('table-' + _id, function(param) {
      sendCheckedRow(param);
    });

    if (window.spSocket) {
      inLoader && window.loader && $(self).append($(window.loader.ele));
      window.spSocket.subscribe({
        eventName: eventName,
        callback: function (_data) {
          if (_data.data.in1) {
            inLoader && window.loader && window.loader.remove(_id);
            let data = JSON.parse(_data.data.in1);
            handleExtraIndex(data[0]);
            renderTable(data);
          }
        }
      });
    }
  },

  onViewInit() {
    const evn = `
      change:showTableTh 
      change:thBg 
      change:thColor 
      change:thFontSize 
      change:evenBgColor
      change:oddBgColor
      change:oddBgImage
      change:selectedBgColor 
      change:selectedBgImage
      change:defaultSelectedLine
      change:trBorderStyle 
      change:trBorderColor 
      change:theadHeight
      change:thFontItalic
      change:thFontWeight
      change:trHeight
      change:colWidth
      change:colAlign
      change:showRowNum
      change:linePeed
      change:checkable
      change:trMarginTop
      change:trMarginLeft
      change:tdWidth
      change:flowUp
      change:speed
      change:delay
      change:highlight
      change:highlightLine
      change:highlightColor
      change:highlightBackground
      change:highlightBgImage
      change:searchable
      change:searchWidth 
      change:searchPosition 
      change:inLoader
      change:colImgUrl
      change:colBgUrl
      change:colFontsize
      change:colFontfamily
      change:colStyles
      change:no_h_p_cols
      change:hiddenDimension
      change:clickEvent
      change:process
      change:processColumn
      change:processDoneColor
      change:processWaitColor
      change:processStripeColor
      change:columnColor
      change:columnColorOrder
      change:columnPositiveColor
      change:columnNegativeColor
    `;
    this.listenTo(this.model, evn, this.updateScript);
    this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
    this.listenTo(this.em, 'update:component:style:height update:component:style:width', throttle.bind(this, this.updateScript.bind(this)));
  }
}
