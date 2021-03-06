/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	return n < 0 ? null : (n <= 1 ? 1 : n * factorial(n - 1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	return array.length === 0 ? 0 : sum(array.slice(0, array.length - 1)) + array[array.length - 1];
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	array = array.flat(Infinity);
	return array.length === 0 ? 0 : arraySum(array.slice(0, array.length - 1)) + array[array.length - 1];
};

// 4. Check if a number is even.
var isEven = function(n) {
	n = Math.abs(n);
	return n === 0 ? true : (n === 1 ? false : isEven(n - 2));
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	let val = n < 0 ? n + 1 : n - 1;
	return n === 0 ? 0 : val + sumBelow(val);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if (x === y || Math.abs(x - y) === 1) {
		return [];
	}
	let val = x < y ? y - 1 : y + 1; 
	return range(x, val).concat(val);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	let nextExp = exp > 1 ? exp - 1 : exp + 1;
	if (exp < 0) {
		return 1 / (base * exponent(base, -nextExp));
	} else if (exp === 2) {
		return base * base;
	}
	return exp === 0 ? 1 : (exp === 1 ? base : base * exponent(base, nextExp));
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (!Number.isInteger(n)) {
		return false;
	}
	return n === 0 ? false : (n === 1 ? true : true && powerOfTwo(n / 2));
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	let len = string.length;
	return len === 1 || len === 0 ? string : string[len - 1] + reverse(string.slice(0, len - 1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	let str = string.split(' ').join('').toLowerCase();
	let len = str.length;
	return len === 1 || len === 0 ? true : str[0] === str[len - 1] && palindrome(str.slice(1, len - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	let absY = y < 0 ? -y : y;
	let absX = x < 0 ? -x : x;
	let nextX = (x ^ y) < 0 ? x + y : x - y;
	return y === 0 ? NaN : (absX < absY ? x : modulo(nextX, y));
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if (y < 0) {
		y = -y;
		x = -x;
	}
	return x === 0 || y === 0 ? 0 : x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	let absX = x < 0 ? -x : x;
	let absY = y < 0 ? -y : y;
	let nextX = (x ^ y) < 0 ? x + y : x - y;
	return y === 0 ? NaN : (absX - absY < 0 ? 0 : 1 + divide(nextX, y));
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x === 0 || y === 0) {
		return Math.max(x, y);
	}
	return x < 0 || y < 0 ? null : gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if ((str1 === '' && str2 !==  '') || (str2 === '' && str1 !== '')) {
		return false;
	} else if (str1 === str2 && str1 === '') {
		return true;
	}
	return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	return str === '' ? [] : createArray(str.slice(0, str.length - 1)).concat(str[str.length - 1]);
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	return array.length === 0 ? [] : reverseArr(array.slice(1)).concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	return length === 0 ? [] : buildList(value, length - 1).concat([value]);
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	let output = '';
	n % 3 === 0 ? output += "Fizz" : 0;
	n % 5 === 0 ? output += "Buzz" : 0;
	return n === 0 ? [] : fizzBuzz(n - 1).concat(output !== '' ? output : n.toString());
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	let count = array[0] === value ? 1 : 0;
	return array.length === 0 ? 0 : count + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	return array.length === 0 ? [] : rMap(array.slice(0, array.length - 1), callback).concat(callback(array[array.length - 1]));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	let count = 0;
	obj[key] ? count += 1 : 0;
	for (let k in obj) {
		if (typeof obj[k] === 'object') {
			count += countKeysInObj(obj[k], key);
		}
	}
	return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	let count = 0;
	for (let k in obj) {
		obj[k] === value ? count += 1 : 0;
		if (typeof obj[k] === 'object') {
			count += countValuesInObj(obj[k], value);
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}
		if (key === oldKey) {
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
		}
	}
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n === 1) return [0, 1];
	else if (n <= 0) return null;
	let next = fibonacci(n - 1);
	next.push(next[next.length - 1] + next[next.length - 2]);
	return next;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) return null;
	if (n === 0) return 0;
	return n < 2 ? n : nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	return array.length === 0 ? [] : capitalizeWords(array.slice(0, array.length - 1)).concat(array[array.length - 1].toUpperCase());
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	let word = array[array.length - 1];
	word = word ? word[0].toUpperCase() + word.slice(1) : undefined;
	return array.length === 0 ? [] : capitalizeFirst(array.slice(0, array.length - 1)).concat(word);
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	let sum = 0;
	for (let key in obj) {
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) sum += obj[key];
		if (typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
	}
	return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	let output = [];
	for (let i = 0; i < array.length; i++) {
		if (!Array.isArray(array[i])) output.push(array[i]);
		else output = output.concat(flatten(array[i]));
	}
	return output;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	obj ? 0 : obj = {};
	if (str !== '') obj[str[0]] ? obj[str[0]] += 1 : obj[str[0]] = 1;
	return str === '' ? obj : letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	let containsAllSame = list.every(el => el === list[0]);
	let firstDiff = list.findIndex(el => el !== list[0]);
	return list.length === 0 ? [] : [list[0]].concat(compress(containsAllSame ? [] : list.slice(firstDiff)));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	let containsNonArrEls = false;
	array.forEach(el => {
		Array.isArray(el) ? augmentElements(el, aug) : containsNonArrEls = true;
	});
	containsNonArrEls === true || array.length === 0 ? array.push(aug) : 0;
	return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	let nextIdx = 1;
	if (array[0] === 0) nextIdx = array.findIndex(el => el !== 0);
	return array.length === 0 ? [] : [array[0]].concat(minimizeZeroes(array.slice(nextIdx)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if (array.length === 0) return [];
	let lastEl = array[array.length - 1];
	let negEl = lastEl < 0 ? lastEl : -lastEl;
	let posEl = lastEl > 0 ? lastEl : -lastEl;
	return alternateSign(array.slice(0, array.length - 1)).concat(array.length % 2 === 0 ? negEl : posEl);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	let numToStrArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	if (str.length === 0) return str;
	let nextSpaceIdx = str.indexOf(' ');
	if (nextSpaceIdx < 0) nextSpaceIdx = str.length;
	let unchanged = str.slice(0, nextSpaceIdx);
	let changed = isNaN(unchanged) ? unchanged : numToStrArr[unchanged];
	return changed + (nextSpaceIdx === str.length ? '' : ' ') + numToText(str.slice(nextSpaceIdx + 1, str.length));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	let targetNode = node ? node : document;
	if (!targetNode.children.length) return 0;
	let sum = 0;
	for (let key in targetNode.children) {
		if (targetNode.children[key].tagName && targetNode.children[key].tagName.toLowerCase() === tag) sum += 1;
		if (targetNode.children[key].children && targetNode.children[key].children.length > 0) sum += tagCount(tag, targetNode.children[key]);
	};
	return sum;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	// optional test: invoke with only 2 arguments
	if (typeof target !== 'object') target = { 't': target, 'min': 0, 'max': array.length - 1};
	if (target.min >= target.max && target.t !== array[target.min]) return null;
	let mid = Math.floor((target.max - target.min) / 2) + target.min;
	if (array[mid] === target.t) return mid;
	if (array[mid] < target.t) {
		target.min = mid + 1;
		return binarySearch(array, target);
	}
	if (array[mid] > target.t) {
		target.max = mid;
		return binarySearch(array, target);
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	if (array.length <= 1) return array;
	let mid = Math.floor(array.length / 2);
	let l = mergeSort(array.slice(0, mid));
	let r = mergeSort(array.slice(mid));
	let combined = [];
	while (l.length > 0 || r.length > 0) {
		if (l.length === 0) {
			combined = combined.concat(r);
			r = [];
			break;
		} else if (r.length === 0) { 
			combined = combined.concat(l);
			l = [];
			break;
		} else if (l[0] < r[0]) {
			combined.push(l.shift());
		} else if (l[0] > r[0]) {
			combined.push(r.shift());
		}
	}
	return combined;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
	let output = Array.isArray(input) ? [] : {};
	let keys = Array.isArray(input) ? [...input.keys()] : Object.keys(input);
	for (let i = 0; i < keys.length; i++) {
		if (typeof input[keys[i]] === 'object') output[keys[i]] = clone(input[keys[i]]);
		else output[keys[i]] = input[keys[i]];
	}
	return output;
};
