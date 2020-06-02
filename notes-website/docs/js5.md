---
id: js5
title: Arrays
sidebar_label: Arrays
---

# Capture collections of Data with Arrays

## Arrays creation

```javascript
let s = [];
let c = ["red", "blue", "green"];
let num = [15, 2, 4, 9];
let mixed = [true, 68, "cat", "null"];
new Array(); //[]
new Array(1, 2, 3, 4); //[1,2,3,4]
```

Unlike strings, **Arrays are mutable**.

```javascript
let list = ["chocolate", "cheese"];
list[1] = "milk";
list[2] = "Ice cream";
//add at the end
list[list.length] = "bread";
```

---

## Array Methods

Some of the most commonly used array methods..

### push

Add an element at the end. RT : length of array

### unshift

Add one or more elements at the first, RT: length of the array

### pop

Remove an element from end, RT: last item in the array

### shift

Remove element from start

```javascript
let num = [1, 2, 3, 4, 5, 6];
num.push(97); //[1,2,3,4,5,6,97]. RV : 7
num.pop(); //97
num.unshift(7, 8); //[7,8,1,2,3,4,5,6]
num.shift(); //7 [8,1,2,3,4,5,6]
```

### concat

Merge two or more arrays. RT: new array

### includes (not available in IE)

Determines whether an array includes a certain value among its entries. RT: true or false

### indexOf

returns index of a number(if exists), else return - 1

### reverse

Reverse an array `in place`

### join

creates and `returns a new string` by concatenating all of ele in an array (or array like object) seperated by ',' or a specified seperator. If it has only one item, that item is returned with a seperator.

```javascript
//concat
let arr = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];
arr.concat(arr2); //[a,b,c,d,e,f]

num1 = [1, 2, 3];
num2 = [4, 5, 6];
num3 = [7, 8, 9];

let num4 = num1.concat(num2, num3);
//num4 = [1,2,3,4,5,6,7,8,9]

//includes
let num = [1, 2, 3, 4, 5];
num.includes(6); //false
num.includes(1); //true
let ingredients = ["water", "corn starch", "cheese"];
ingredients.includes("corn"); // false (lookd for a direct match)
num.includes(3, 3); //search  for item 3 after index 3. RV: false
num.includes(2, 0); //RV: true
//Reverse & join
num.reverse(); // [5,4,3,2,1]
var ele = ["Fire", "Air", "water"];
ele.join(); //"Fire,Air,water"
ele.join(""); //"FireAirwater"
ele.join("-"); //''Fire-Air-water
```

### slice

Returns a shallow copy of portion of an array into new array object selected from begin to end (non inclusive)

```javascript
var num = [1, 2, 3, 4, 5];
num.slice(2); //[3,4,5]
num.slice(2, 4); //[3,4] -> 4th pos is not included
num.slice(1, 5); //[2,3,4,5]
num.slice(-3); //[3,4,5]
num.slice(-3, -1); //[3,4] -> go 3 elements back & 1 ele forward.
//copy an entire arr
num.slice(); //[1,2,3,4,5]
```

### splice

changes the content of an array by replacing or removing existing elements and / or adding new elements in place.

```javascript
var months = ["Jan", "March", "April", "June"];
//add an item to array
months.splice(1, 0, "Feb"); //[Jan,Feb,March,April,June] -> RT :[]
//replace  item in array
//replace 1 item at index 4 with the 3rd param
months.splice(4, 1, "May"); //[Jan,Feb,March,April,May] -> RT: deleted value -> June
//delete items
let arrDeletedItems = arr.splice(start,deleteCount[,item1[,item2]...])
//start - > index at where to start (if its -ve start from end)
//deleteCount -> an integer indicating how many elements to be deleted from `start`
//RT : An array containing deleted items, if no items are deleted an empty array is returned. deleted ele if only one is removed.
months.splice(0,2) //RT: Jan,Feb . arr: [March, April, May]
```

### Introduction to Sort

sorts elements of an array in place & return sorted array. Default sort order is built upon converting ele to string, then comparing to their unicode (UTF-16) unit values

Time and space complexity not guaranteed that depends on implementation.

```javascript
var months = ["March", "Jan", "Feb", "Dec"];
months.sort(); //[Dec,Feb,Jan,March]
var nums = [1, 30, 4, 21, 100000];
nums.sort(); //[1,100000,21,30,4]
Syntax: arr.sort(compareFn); //compareFn determines the sort order
//if this is omitted arr.ele are converted to strings then sorted acc to each character unicode.
let num = [4, 12, 5, 1, 3];
num.sort((a, b) => a - b); //[1,2,3,4,5]
num.sort((a, b) => b - a); //[5,4,3,2,1]
```

---

## Reference Types

### Pass by Value

Pass by value is only for **Primitive types** (Boolean, null, undefined, String, Number)

```javascript
let fruit = "orange"; //orange
let color = fruit; //orange
//here value of fruit is copied into color (pass by value)
```

### Pass by reference

Arrays, functions, objects
