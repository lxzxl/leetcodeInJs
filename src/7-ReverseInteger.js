/**
 * Created by steven on 16/3/11.
 */
'use strict';
/**
 * @param {number} x
 * @return {number}
 * int32 range: -2147483648 -- 2147483647
 */
var reverse = function(x) {
    var resStr = '';
    var isNegative = false;
    var ss = x.toString();
    var i = ss.length - 1;
    var end = 0;
    if (ss[0] === '-') {
        isNegative = true;
        end = 1;
    }
    for (i; i >= end; i--) resStr += ss[i];
    // check overflow.
    var maxStr = '2147483647';// -2147483648
    var isOverflow = false;
    if (resStr.length === maxStr.length) {
        for (i = 0; i < maxStr.length - 1; i++) {
            var maxChar = maxStr[i];
            // special check for last number.
            if (i === maxStr.length - 1 && isNegative) {
                maxChar = (parseInt(maxStr[i]) + 1).toString();
            }
            if (resStr[i] > maxChar) {//overflow
                isOverflow = true;
                break;
            }
            else if (resStr[i] < maxChar) break;// not over flow
            //when equal, compare next number.

        }
    }
    return isOverflow ? 0 : (parseInt(isNegative ? '-' + resStr : resStr));
};

console.log(reverse(-2147483412));
