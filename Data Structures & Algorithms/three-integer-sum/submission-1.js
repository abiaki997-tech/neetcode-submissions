class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
	let sortn = nums.sort((a, b) => a - b);
	for (let i = 0; i < sortn.length; i++) {
		let p1 = i + 1;
		let p2 = sortn.length - 1;
		//-1 already combintation done other 2 all
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		while (p1 < p2) {
			let sum = sortn[i] + sortn[p1] + sortn[p2];
			if (sum == 0) {
				result.push([sortn[i], sortn[p1], sortn[p2]])
				p1++;
				p2--;
                //skip duplicates
				while (p1 < p2 && sortn[p1] === sortn[p1 - 1]) p1++;
				while (p1 < p2 && sortn[p2] === sortn[p2 + 1]) p2--;
			} else if (sum > 0) {
				p2--;
			} else {
				p1++;
			}
		}
	}
	return result
    }
}
