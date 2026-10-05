class Stack<T> {
    constructor(){}
    elements: T[] = [];

    push(element: T): void {
        this.elements.push(element);
    }

    pop(): T | undefined {
        return this.elements.pop();
    }
}

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let numberStack = new Stack<number>();

        for( let i=0; i<tokens.length; i++) {
            if(!['+', '-', '*', '/'].includes(tokens[i])) {
                numberStack.push(Number(tokens[i]));
            } else {
                const number2 = numberStack.pop()!;
                const number1 = numberStack.pop()!;
                let val = 0;
                if (tokens[i] === '+') val = number1 + number2;
                else if (tokens[i] === '-') val = number1 - number2;
                else if (tokens[i] === '*') val = number1 * number2;
                else if (tokens[i] === '/') val = Math.trunc(number1/number2);
                numberStack.push(val);
            }
        }
        return numberStack.pop()!;
    }
}