class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = '';
        for(let i=0; i<strs.length; i++) {
            encodedStr += strs[i].length + '#' + strs[i];
        }
        console.log(encodedStr);
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let j=0;
        let decodedArr = [];
        for(let i=0; i<str.length; i++) {
            if(str.charAt(i) === '#') {
                let strLength = str.substring(j, i);
                let decodedStr = str.substring(i+1, i + Number(strLength) + 1);
                decodedArr.push(decodedStr);
                j = i + Number(strLength) + 1;
                i = j;
            }
        }
        return decodedArr;
    }
}
