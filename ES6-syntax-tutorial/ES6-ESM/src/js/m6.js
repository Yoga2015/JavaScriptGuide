// 导入外部模块数据
import { basicNum, add } from './m5.js';

function test(ele) {
  ele.textContent = (add(99 + basicNum));
}