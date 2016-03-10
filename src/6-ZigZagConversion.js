/**
 * Created by steven on 16/3/10.
 */
'use strict';

/**
 * Explain of ZigZag: ./6-ZigZagConversion.png
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 *
 * from the picture: [n>=0]
 *  0 row indexes: 2*(numRows-1)*n
 *  1 row indexes: 2*(numRows-1)*n+1, 2*(numRows-1)*n+1+2*(numRows-1-1)
 *  2 row indexes: 2*(numRows-1)*n+2, 2*(numRows-1)*n+2+2*(numRows-1-2)
 *          .
 *          .
 *          .
 *  x row indexes: 2*(numRows-1)*n+x, 2*(numRows-1)*n+x+2*(numRows-1-x)
 *      the second index should always less than next 0 row's index.
 */
var convert = function(s, numRows) {
    if (numRows < 2) return s;
    var rows = new Array(numRows).fill('');
    var n = 0;
    while (true) {
        var baseI = 2 * (numRows - 1) * n;
        if (baseI >= s.length) break;
        for (var x = 0; x < numRows; x++) {
            var i = baseI + x;
            var ii = i + 2 * (numRows - 1 - x);
            if (i < s.length) rows[x] += s[i];
            if (ii < s.length && x > 0 && x < numRows - 1) rows[x] += s[ii]; // exclude head and tail.
        }
        n++;
    }
    return rows.reduce(function(prev, cur) {
        return prev + cur;
    });
};
