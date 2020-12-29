import { StatusTable, CATEGORIES } from "../../common/constants";
import "./less/StatusTable.less";

export default {
  // 组件名称
  name: StatusTable,

  // 前面板html模板
  viewTemplate() {
    return `
      <div data-gjs-type="${StatusTable}" class="${StatusTable}"></div>
    `;
  },
  // 前面板html样式
  viewStyle() {
    return `
      <style>
        .${StatusTable} {
          width: 800px;
        }
      </style>
    `;
  },

  // 编辑器右侧块管理器中显示属性配置
  blockOptions() {
    return {
      category: CATEGORIES.SHIFEI,
      label: `状态列表`,
      attributes: { class: "fa fa-table" },
    };
  },

  spOptions() {
    return {
      label: "状态列表",
      icon: "globe",
      docUrl: "",
      inPorts: [
        {
          uuid: "in1",
          subType: "memory.json",
          description: {
            zh_CN: "输入Json",
          },
        },
      ],
    };
  },

  // 组件属性
  componentOptions() {
    return {
      name: StatusTable,
      droppable: false,
      childrenSelectable: false,
      resizable: true,
    };
  },

  onModelScript() {
    const tabledata = [
      ["机型", "架机号", "基地", "飞行任务", "机组信息", "试飞工程师", "风险级别", "飞行状态", "起降时刻"],
      ["C919", "10102", "A基地", "双VFG供电XXXX", "AA、BB、CCC", "李XX", "中风险", "在飞", "9:00起飞"],
      ["ABC123", "111", "A基地", "双VFG供电XXXX", "AA、BB、CCC", "李XX", "中风险", "待飞", "9:50计划起飞"],
      ["C919", "10102", "A基地", "双VFG供电XXXX", "AA、BB、CCC", "李XX", "低风险", "降落", "9:50-11:50"],
      ["C919", "10102", "A基地", "双VFG供电XXXX", "AA、BB、CCC", "李XX", "高风险", "取消", ""],
    ];

    const parseData = (tabledata) => {
      const columns = tabledata[0].map(col => ({ title: col, field: col }));
      const data = tabledata.slice(1).map(row => {
        const rowData = {}
        columns.forEach((col, index) => rowData[`${col.field}`] = row[index]);

        return rowData;
      });

      return { columns, data };
    };

    const { columns, data } = parseData(tabledata);

    const createTags = (data) => {
      const tags = new Set();
      data.forEach((row) => {
        tags.add(row.status);
      });
      const $filter = document.createDocumentFragment();
      tags.forEach((t) => {
        const $tag = document.createElement("li");
        $tag.setAttribute("class", "tag-filter");
        $tag.innerText = t;

        $filter.appendChild($tag);
      });

      this.querySelector("ul.tag-filters").appendChild($filter);
    };

    var table = new Tabulator(`#${this.id}`, {
      columns,
      data, //load row data from array
      layout: "fitColumns", //fit columns to width of table
      responsiveLayout: "hide", //hide columns that dont fit on the table
      tooltips: true, //show tool tips on cells
      addRowPos: "top", //when adding a new row, add it to the top of the table
      movableColumns: false, //allow column order to be changed
      resizableRows: false, //allow row order to be changed
      headerSort: false,
      dataLoaded: function (data) {
        setTimeout(() => {
          this.redraw(true);
        }, 500)
      },
      rowMouseEnter: function (e, row) {
        const data = row.getData();
        const rowEl = row.getElement();
        switch (data["飞行状态"]) {
          case "在飞":
          case "在制":
            rowEl.style.borderColor = "#11ff87";
            break;
          case "待飞":
          case "交付":
            rowEl.style.borderColor = "#0e75d5";
            break;
          case "降落":
          case "生产试飞":
            rowEl.style.borderColor = "rgba(138, 135, 107, 1)";
            break;
          case "取消":
          case "交付试飞":
            rowEl.style.borderColor = "rgba(105, 131, 151, 1)";
            break;
          default:
            break;
        }
      },
      rowMouseLeave: function (e, row) {
        row.getElement().style.borderColor = "transparent";
      },
      rowFormatter: function (row) {
        const data = row.getData();

        const riskCell = row.getCells().find(function (cell) {
          return cell.getColumn().getField() === "风险级别";
        });

        if (riskCell) {
          const el = riskCell.getElement();

          switch (data["风险级别"]) {
            case "低风险":
              el.style.color = "#2d99fe";
              break;
            case "中风险":
              el.style.color = "#ffcf4c";
              break;
            case "高风险":
              el.style.color = "#ff4c5d";
              break;
            default:
              el.style.color = "#fefefe";
              break;
          }
        }

        switch (data["飞行状态"]) {
          case "在飞":
          case "在制":
            row.getElement().style.backgroundColor = "#02814d";
            break;
          case "待飞":
          case "交付":
            row.getElement().style.backgroundColor = "rgba(11, 98, 178, 0.5)";
            break;
          case "降落":
          case "生产试飞":
            row.getElement().style.backgroundColor = "rgba(138, 135, 107, 0.5)";
            break;
          case "取消":
          case "交付试飞":
            row.getElement().style.backgroundColor = "rgba(105, 131, 151, 0.5)";
            break;
          default:
            break;
        }
      },
    });

    // createTags(data);

    if (window.spSocket) {
      var eventName = `call-` + this.getAttribute("id");
      window.spSocket.subscribe({
        eventName: eventName,
        callback: function (_data) {
          const tabledata = JSON.parse(_data.data.in1);

          if (tabledata) {
            const { columns, data } = parseData(tabledata);

            table.setColumns(columns);
            table.replaceData(data);
          }
        },
      });
    }
  },

  onViewInit() {
    const evn = "";
    this.listenTo(this.model, evn, this.updateScript);
    this.listenTo(this.model, evn, this.em.handleUpdates.bind(this.em));
  },
};
