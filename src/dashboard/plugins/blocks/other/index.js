import { streamComputing, detectionResultRef, appPopover } from '../../common/constants';
import { CATEGORIES } from '../../common/constants';

import CardSetting from './CardSetting';
import AppPopover from './AppPopover';
import CASWarning from './CASWarning';

export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  /**
   * 流计算
   */
  bm.add(streamComputing, {
    label: '流计算',
    category: c.otherCategory,
    attributes: { class: 'fa fa-magnet' },
    content: `
      <ul class="${streamComputing}" data-gjs-type="${streamComputing}"></ul>
      <style>
        .${streamComputing} {
          margin: 0;
          padding: 0;
          list-style: none;
          width: 800px;
          max-height: 800px;
          overflow-y: auto;
        }
        .${streamComputing} > li {
          font-size: 12px;
          color: #595959;
          border-left: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          display: flex;
        }
        .${streamComputing} > li.headline {
          font-size: 14px;
          color: #262626;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #d9d9d9;
          background-color: #fafafa;
        }
        .${streamComputing} > li > span {
          display: block;
          padding: 8px 16px;
          border-right: 1px solid #ddd;
          width: 120px;
        }
        .${streamComputing} > li > span:first-child {
          width: calc(100% - 120px * 5);
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .${streamComputing} > li > span:last-child.primary {
          color: #02d5f5;
        }
        .${streamComputing} > li > span:last-child.warning {
          color: #f2bc07;
        }
        .${streamComputing} > li > span:last-child.danger {
          color: #f54743;
        }
      </style>
    `
  });
  /**
   * 检测结果
   */
  bm.add(detectionResultRef, {
    label: '检测结果',
    category: c.otherCategory,
    attributes: { class: 'fa fa-magnet' },
    content: `
      <div class="${detectionResultRef}" data-gjs-type="${detectionResultRef}">
      </div>
      <style>
        .${detectionResultRef} {
          display: flex;
          align-items: center;
          width: 420px;
          color: #000;
        }
        .${detectionResultRef}.dark {
          color: #fff;
        }
        .${detectionResultRef}-status {
          width: 102px;
          height: 102px;
          padding: 30px;
          margin-right: 42px;
          position: relative;
        }
        .${detectionResultRef}-status::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          border-radius: 50%;
          background-color: currentColor;
          opacity: 0.1;
        }
        .${detectionResultRef}-status::after {
          content: '';
          position: absolute;
          top: 12px;
          right: 12px;
          bottom: 12px;
          left: 12px;
          z-index: 2;
          border-radius: 50%;
          background-color: currentColor;
          opacity: 0.1;
        }
        .${detectionResultRef}.danger .${detectionResultRef}-status::after, .${detectionResultRef}.danger .${detectionResultRef}-status::before {
          background-color: #ff4949;
        }
        .${detectionResultRef}.primary .${detectionResultRef}-status::after, .${detectionResultRef}.primary .${detectionResultRef}-status::before {
          background-color: #0078f1;
        }
        .${detectionResultRef}-status > svg {
          margin-top: -4px;
        }
        .${detectionResultRef}-status > svg path {
          fill: rgba(0,0,0,0.4);
        }
        .${detectionResultRef}.danger .${detectionResultRef}-status > svg path {
          fill: #ff4949;
        }
        .${detectionResultRef}.primary .${detectionResultRef}-status > svg path {
          fill: #0078f1;
        }
        .${detectionResultRef}-status > span {
          display: block;
          position: absolute;
          top: 30px;
          right: 30px;
          bottom: 30px;
          left: 30px;
          z-index: 5;
          font-size: 30px;
          line-height: 42px;
          text-align: center;
          color: #fff;
          opacity: 0.72;
        }
        .${detectionResultRef}.dark .${detectionResultRef}-status > span {
          color: #000;
        }
        .${detectionResultRef}-status > span::after {
          content: "W";
        }
        .${detectionResultRef}.danger .${detectionResultRef}-status > span::after {
          content: 'N';
        }
        .${detectionResultRef}.primary .${detectionResultRef}-status > span::after {
          content: "";
          position: absolute;
          width: 32px;
          height: 16px;
          border-width: 2px 4px;
          border-style: solid;
          border-color: transparent transparent currentColor currentColor;
          transform: rotate(-45deg) translate(-10px, -4px);
        }
        .${detectionResultRef}-msg > h4 {
          font-size: 24px;
          line-height: 1.1;
          margin-bottom: 8px;
          color: currentColor;
        }
        .${detectionResultRef}.danger .${detectionResultRef}-msg > h4 {
          color: #ff4949;
        }
        .${detectionResultRef}.primary .${detectionResultRef}-msg > h4 {
          color: #0078f1;
        }
        .${detectionResultRef}-msg > p {
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
          color: currentColor;
          opacity: 0.8;
        }
      </style>
    `
  });

  bm.add(appPopover, {
    label: '项目链接',
    category: c.otherCategory,
    attributes: { class: 'fa fa-magnet' },
    content: `
      <div class="${appPopover}" data-gjs-type="${appPopover}">
      </div>
    `
  });

  [CardSetting, AppPopover, CASWarning].forEach(comp => {
    window.SPFrontPanel.addBlock(editor, opt, comp, CATEGORIES.OTHER);
  });
}
