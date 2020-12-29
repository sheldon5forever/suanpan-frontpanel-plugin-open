import { CATEGORIES } from "../../common/constants";
import TimeLine from "./TimeLine";
import Interval from "./Interval";

export default (editor, options) => {
  [TimeLine, Interval].forEach(comp => {
    window.SPFrontPanel.addBlock(editor, options, comp, CATEGORIES.ECHARTS);
  });
};
