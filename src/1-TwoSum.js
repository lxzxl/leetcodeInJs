/**
 * Created by steven on 3/1/16.
 */
'use strict';

/**
 * O(n*n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var max = nums.length;
    for (var i = 0; i < max - 1; i++) {
        for (var _i = i + 1; _i < max; _i++) {
            if (nums[i] + nums[_i] === target) return [i, _i]
        }
    }
};

/**
 * O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var max = nums.length;
    var mapping = {};
    var search;
    for (var i = 0; i < max; i++) {
        search = mapping[target - nums[i]];
        if (search !== undefined) return [search, i];
        else mapping[nums[i]] = i;
    }
};