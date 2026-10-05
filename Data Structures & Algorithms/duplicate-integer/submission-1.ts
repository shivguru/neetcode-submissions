class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap = new Map<number, number>();
        for( let i=0; i< nums.length; i++) {
            if(numsMap.has(nums[i])) {
                return true;
            }
            numsMap.set(nums[i], nums[i]);
        }
        return false;
    }
}
