//1.
console.log("1st Answer");

// Function to find pairs in an array that sum up to a target
function findPairs(arr, target) {
    let pairs = [];
    let left = 0;
    let right = arr.length - 1;
    
    // Use two method approach to find pairs
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return pairs;
}

let nums = [3, 5, 7, 8, 9, 2];
let targetSum = 9;
let result = findPairs(nums, targetSum);
console.log(result);

console.log("*************************************")

//2.
console.log("2nd Answer");

// Function to reverse an array
function rvereseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

/* Utility function to print an array */
function printArray(arr, size) {
    for (var i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}

/* Driver function to test above functions */
var arr = [1, 2, 3, 4, 5, 6, 7];
var n = 7;
// To print the original array 
printArray(arr, n);

// Function calling to reverse the array
rvereseArray(arr, 0, n - 1);

console.log("Reversed array is");

// To print the reversed array 
printArray(arr, n);

console.log("*************************************")

// 3
console.log("3rd Answer");

// Function to check if one string is a rotation of another
function checkString(s1, s2, indexFound, Size) {
    for (let i = 0; i < Size; i++) {
        if (s1[i] != s2[(indexFound + i) % Size]) return false;
    }
    return true;
}

// driver code
let s1 = "abcd";
let s2 = "cdab";

if (s1.length != s2.length) {
    console.log("s2 is not a rotation of s1");
}
else {
    let indexes = []; // Store occurrences of the first character of s1
    let Size = s1.length;
    let firstChar = s1[0];

    // Find indexes of the first character in s2
    for (let i = 0; i < Size; i++) {
        if (s2[i] == firstChar) {
            indexes.push(i);
        }
    }

    let isRotation = false;

    // Check if the strings are a rotation of each other for every occurrence of firstChar in s2
    for (let idx of indexes) {
        isRotation = checkString(s1, s2, idx, Size);

        if (isRotation)
            break;
    }

    if (isRotation) console.log("String-2 is a rotation of String-1")
    else console.log("String-2 is not a rotation of String-1")
}

console.log("*************************************")

//4
console.log("4rth Answer");

// Function to find the first non-repeated character in a string
function firstNonRepeatedCharacter(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}

// Example usage:
const inputString = "programming";

const result1 = firstNonRepeatedCharacter(inputString);

if (result1 !== null) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("All characters are repeated in the given string.");
}

console.log("*************************************")

//5
console.log("5th Answer");

// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to convert postfix expression to prefix expression
function postfixToPrefix(postfixExpression) {
    const stack = [];

    for (const char of postfixExpression) {
        if (isOperator(char)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const prefixExpression = char + operand1 + operand2;
            stack.push(prefixExpression);
        } else {
            stack.push(char);
        }
    }

    // The final item in the stack is the prefix expression
    return stack.pop();
}

// Example usage:
const postfixExpression = "23+5*";

const prefixExpression = postfixToPrefix(postfixExpression);
console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);

console.log("*************************************")

//6
console.log("6th Answer");

// Function to convert prefix expression to infix expression
function prefixToInfix(prefixExpressionn) {
    const stack = [];

    // Iterate through the expression in reverse order
    for (let i = prefixExpressionn.length - 1; i >= 0; i--) {
        const char = prefixExpressionn[i];

        if (isOperator(char)) {
            // If the character is an operator, pop two operands from the stack
            const operand1 = stack.pop();
            const operand2 = stack.pop();

            // Concatenate the operands and the operator within parentheses
            const infixExpression = (`${operand1}${char}${operand2}`);
            stack.push(infixExpression);
        } else {
            // If the character is an operand, push it to the stack
            stack.push(char);
        }
    }

    // The final item in the stack is the infix expression
    return stack.pop();
}

// Example usage:
const prefixExpressionn = "+*23*45";

const infixExpression = prefixToInfix(prefixExpressionn);
console.log(`Prefix Expression: ${prefixExpressionn}`);
console.log(`Infix Expression: ${infixExpression}`);

console.log("*************************************")

//7
console.log("7th Answer");

// Function to check if brackets in a code snippet are closed properly
function areBracketsClosed(codeSnippet) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of codeSnippet) {
        if (bracketMap.hasOwnProperty(char)) {
            // If it's an open bracket, push it onto the stack
            stack.push(char);
        } else if (Object.values(bracketMap).includes(char)) {
            // If it's a closing bracket, pop the last open bracket from the stack
            const lastOpenBracket = stack.pop();

            // Check if the corresponding open bracket matches the last open bracket
            if (bracketMap[lastOpenBracket] !== char) {
                return false; // Brackets are not closed properly
            }
        }
    }

    // If the stack is empty, all brackets are closed
    return stack.length === 0;
}

// Example usage:
const codeSnippet1 = "if (x > 0) { console.log('Positive'); }";
const codeSnippet2 = "function myFunction() { return [1, 2, 3]; }";

console.log(areBracketsClosed(codeSnippet1)); // Output: true
console.log(areBracketsClosed(codeSnippet2)); // Output: true

console.log("*************************************")

//8

console.log("8th Answer");

// Function to reverse a stack
function reverseStack(inputStack) {
    const auxiliaryStack = [];

    // Pop all elements from the input stack and push them onto the auxiliary stack
    while (inputStack.length > 0) {
        auxiliaryStack.push(inputStack.pop());
    }

    // Pop all elements from the auxiliary stack and push them back onto the input stack
    while (auxiliaryStack.length > 0) {
        inputStack.push(auxiliaryStack.pop());
    }

    return inputStack;
}

// Example usage:
const originalStack = [1, 2, 3, 4, 5];
console.log("Original Stack:", originalStack);

const reversedStack = reverseStack([...originalStack]); // Create a copy to avoid modifying the original stack
console.log("Reversed Stack:", reversedStack);

console.log("*************************************")

//9

console.log("9th Answer");

// Stack class to reverse a string
class Stack {
    constructor() {
        this.top = null
    }
    push(ele) {
        var node = new newNode(ele)
        node.next = this.top
        this.top = node
    }
    pop() {
        var temp = this.top
        var char = temp.data
        this.top = this.top.next
        temp = null
        return char
    }
    reverseString(str) {
        var i = 0
        var reversestr = ""
        while (i != str.length) {
            this.push(str.charAt(i))
            i++
        }
        var temp = this.top
        while (temp != null) {
            var char
            char = this.pop()
            reversestr += char
            temp = this.top
        }
        return reversestr
    }
    display() {
        var temp = this.top
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
class newNode {
    constructor(data, next) {
        this.data = data
        this.next = null
    }
}

const stack = new Stack()
const string = "Swapnil";
 
const reverse = stack.reverseString(string)
console.log(`The String provided - ${ string }\nString in reverse format - ${ reverse }`);


console.log("*************************************")

//10
console.log("10th Answer");

// Class to implement a stack with a getMin function
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
  
    push(value) {
        // Push the value onto the main stack
        this.stack.push(value);
  
        // If the minStack is empty or the new value is smaller than the current minimum,
        // push the new value onto the minStack; otherwise, push the current minimum again.
        if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }
  
    pop() {
        // Pop the top element from both stacks
        this.stack.pop();
        this.minStack.pop();
    }
  
    getMin() {
        // Return the current minimum from the minStack
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
const minStack = new MinStack();
  
minStack.push(5);
minStack.push(7);
minStack.push(3);
minStack.push(9);
minStack.push(0);
  
console.log("Current Minimum:", minStack.getMin()); // Output: 1
  
minStack.pop();
console.log("Current Minimum:", minStack.getMin()); // Output: 2
