import StatusTable from './StatusTable';
import { CATEGORIES } from '../../common/constants';

export default (editor, options) => {
  window.SPFrontPanel.addBlock(editor, options, StatusTable, CATEGORIES.SHIFEI);
}; 