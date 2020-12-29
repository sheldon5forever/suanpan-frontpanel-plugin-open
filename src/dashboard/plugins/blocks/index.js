// import loadOtherBlocks from "./other";
// import loadCommonBlocks from "./common";
// import loadShifeiBlocks from './shifei';
import robam from './robam';
import keyValueTrait from '../common/traits/keyValue';

export default () => {
  if (window.SPFrontPanel) {
    window.SPFrontPanel.addPlugin("plugin-robam-simple-table-plus", (editor, opts = {}) => {
      // loadCommonBlocks(editor, opts);

      // loadOtherBlocks(editor, opts);
      keyValueTrait(editor, opts);
      robam(editor, opts);
    });
  }
};
