const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arrar) {
  let variable = 0;
  let result = 1;
    if (arrar instanceof Array){
        for(let num of arrar) {
        if(Array.isArray(num)) {
            result = this.calculateDepth(num);
            if(result>variable) {
            variable = result;
            }
          }
        } 
      return variable+1;
      } return variable; 
    }
 }
module.exports = {
  DepthCalculator
};
