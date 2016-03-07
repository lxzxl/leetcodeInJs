/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0;
    var left, right;
    if (s.length < 2) return s.length;
    for (left = 0, right = 1; right < s.length; right++) {
        var searchedIndex = s.lastIndexOf(s[right], right - 1)//search backward from before current right index.
        if (searchedIndex > -1) {
            /*
             If search, then point left index to searched index's next.
             */
            maxLength = Math.max(maxLength, right - left);
            left = Math.max(left, searchedIndex + 1);// 'abba' ---> when checking 'ba', searchedIndex = 0, which is < left.
        }
    }// after the loop, right === ss.length
    return Math.max(maxLength, right - left);
};

console.log(lengthOfLongestSubstring("abba"));