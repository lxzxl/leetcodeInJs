/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var median;
    var total = nums1.length + nums2.length;
    var isOdd = total % 2;
    var p = {
        array: nums1[0] < nums2[0] ? nums1 : nums2,
        i: 0,
        prev: 0
    };
    for (var t = 0; t < Math.floor(total / 2); t++) {
        p.prev = p.array[p.i];
        p.array = nums1[0] < nums2[0] ? nums1 : nums2;
        p.i += 1;
    }

    // odd - targetCount
    if (isOdd) median = nums[targetCount - 1];
    // even - targetCount-1, targetCount
    else median = (nums[targetCount - 2] + nums[targetCount - 1]) / 2;
    return median;
};

console.log(findMedianSortedArrays([4, 5, 6], [1, 2, 3]));