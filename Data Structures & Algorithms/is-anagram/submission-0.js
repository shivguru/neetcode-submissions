class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }
        const sMap = new Map();
        const tMap = new Map();
        for(let i = 0; i< t.length; i++) {
            const sChar = s.charAt(i);
            let totalOccurance = 1;
            if(sMap.has(sChar)) {
                totalOccurance = sMap.get(sChar) + 1;                
            }
            sMap.set(sChar, totalOccurance);

            const tChar = t.charAt(i);
            totalOccurance = 1;
            if(tMap.has(tChar)) {
                totalOccurance = tMap.get(tChar) + 1;                
            }
            tMap.set(tChar, totalOccurance);
        }

        for(let [key] of sMap) {
            if(sMap.get(key) !== tMap.get(key)) {
                return false;
            }
        }
        return true;
    }
}
