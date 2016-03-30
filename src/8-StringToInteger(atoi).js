/**
 * Created by steven on 3/30/16.
 */
'use strict';

/**
 * @param {string} str
 * @return {number}
 * "123.2" => 123.2
 */
var myAtoi = function (str) {
    var m = str.match(/^\s*?([+-])?(\d+)/);
    if (m === null) return 0;
    var isNegative = m[1] === '-';
    var intStr = m[2];
    // for checking overflow. -2147483648 -- 2147483647
    var maxStr = '2147483647';// -2147483648
    if (intStr.length > maxStr.length) {
        intStr = isNegative ? (parseInt(maxStr) + 1).toString() : maxStr;
    }
    else if (intStr.length === maxStr.length) {
        for (var i = 0; i < intStr.length; i++) {
            if (intStr[i] > maxStr[i]) {
                intStr = isNegative ? (parseInt(maxStr) + 1).toString() : maxStr;
                break;
            } else if (intStr[i] === maxStr[i]) {
                continue;
            } else {
                break;
            }
        }
    }
    return parseInt(intStr) * (isNegative ? -1 : 1);
};

console.log(myAtoi('+2'));
