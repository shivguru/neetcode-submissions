class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closingBracesArr = ['}', ']', ')'];
        const inputArr = s.split('');
        for(let i = 0; i < inputArr.length; i++) {
            if(closingBracesArr.includes(inputArr[i])) {
                if(stack.length && 
                    this.matchingOpenBrace(stack[stack.length - 1]) == inputArr[i]) {
                    //console.log(this.matchingOpenBrace(stack[stack.length - 1]) == inputArr[i]);
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(inputArr[i]);
            }
            console.log(stack);
        }
        if(stack.length) {
            return false;
        } else {
            return true;
        }
    }

    matchingOpenBrace(brace) {
        switch (brace) {
            case '{':
                return '}';
            case '[':
                return ']';
            case '(':
                return ')';
        }
    }
}
