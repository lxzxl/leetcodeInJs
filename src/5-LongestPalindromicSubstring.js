/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * @param {string} s
 * @return {string}
 */
/*
 Algorithm:
 loop each letter, for each letter(i):
 - search right-ward for same letter position(r),
 - for the longest same letter string, check if outside is Palindrome -- (s[i--] === s[r++])
 - finally, the next loop letter position(r+1) should be the next different letter. - i=r+1
 */
var longestPalindrome = function(s) {
    var maxSubStr = s.length ? s[0] : '';
    var i, l, r;
    for (i = 1; i < s.length; i++) {
        l = i - 1;
        r = i + 1;
        var maxL = false;
        var maxR = false;// when searching same character, record the max left and right position.
        while (1) {
            /*
             search all same characters.
             and move i to the next not same characters index.
             */
            if (!maxL) {
                // when left index exceed left range or differ from current, search left same chars stops.
                if (l === -1 || s[l] !== s[i]) maxL = true;
                else l--;
            }
            if (!maxR) {
                // when right index exceed right range or differ from current, search right same chars stops.
                if (r === s.length || s[r] !== s[i]) maxR = true;
                else {
                    // move current index to the same right one. finally it will add 1 to different char.
                    i = r;
                    r++;
                }
            }
            if (l === -1 && r === s.length) break;// when l or r index exceed the range, stop.
            if (maxL && maxR) {
                // if l or r index exceed the range, OR left != right,  => STOP.
                if ((l === -1 && r === s.length) || s[l] !== s[r]) {
                    break;
                } else {
                    l--;
                    r++;
                }
            }
        }
        // now, r,l should be just exceed the range of string.
        // so the actual index should be l+1, r-1, so length = (r-1)-(l+1)+1 = r-l-1
        if (r - l - 1 > maxSubStr.length) maxSubStr = s.slice(l + 1, r);
    }
    return maxSubStr;
};
