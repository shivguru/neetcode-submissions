class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const stringsMap = new Map();
        for(let str of strs) {
            const charCountArray = new Array(26).fill(0);
            for(let i = 0; i< str.length; i++) {
                const charLocation = str[i].charCodeAt(0) - 97;
                charCountArray[charLocation]++;
            }            
            let strArr = [];
            if(stringsMap.has(charCountArray.join('::'))) {
                const groupAnagrams = stringsMap.get(charCountArray.join('::'));
                strArr = [...groupAnagrams, str];
            } else {
                strArr = [str];
            }
            stringsMap.set(charCountArray.join('::'), strArr);
        }

        const resultsArr = [];
        for(let [key, value] of stringsMap) {
            resultsArr.push(value);
        }
        return resultsArr;
        
    }
}
