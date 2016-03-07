/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxStart = 0;
    var maxEnd = 0;
    var i, t;
    for (i = 0; i < s.length; i++) {
        t = s.indexOf(s[i], i + 1);
        while (t > -1) {
            if (isPalindrome(s, i, t) && t - i > maxEnd - maxStart) {
                maxStart = i;
                maxEnd = t;
            }
            t = s.indexOf(s[i], t + 1);
        }
    }
    return s.slice(maxStart, maxEnd + 1);
};
var isPalindrome = function(s, l, r) {
    while (l < r) {
        if (s[l++] !== s[r--]) return false;
    }
    return true;
};

console.log(longestPalindrome('a'.repeat(1000)));
