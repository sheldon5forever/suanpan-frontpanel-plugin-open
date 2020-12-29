import simpleTableplus from './simpleTableplus';
import { CATEGORIES } from '../../common/constants';

export default (editor, options) => {
  window.SPFrontPanel.addBlock(editor, options, simpleTableplus, CATEGORIES.ROBAM);
}; 