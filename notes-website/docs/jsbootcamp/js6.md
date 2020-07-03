---
id: js6
title: Objects
sidebar_label: Objects
---

## Introduction

1. Objects are collections of properties
2. Properties are k,v pairs
3. Rather than accessing data using index, we use custom keys

Object is more like a blob that holds diff pieces of data (K-V pairs, necessarily without any order)

---

## Creating Object literals

`{} - > empty object`

Just like arrays, when you store an obj in a variable it is reference to that obj.

:::note
**Valid Keys : **

All keys are converted to strings except symbols
:::

```javascript
const fitBitdata = {
  steps: 3078,
  miles: 211.7,
  avgCalorieBurn: 5755,
  workoutThisWeek: "5 of 7",
  avgSleep: "2.13",
  45: "forty five",
};

fitBitdata.miles; //211.7
fitBitdata.avgCalorieBurn //5755
fitBitData.45 //error because its converted to string
fitBitdata.'45' //still an error coz we dont have key '45'
fitBitdata['45'] //fortyfive
```

---

## Accessing object properties

Whats happening here is when you do `const fitBitdata = {45: "forty five",};`. 45 is converted to '45', then it searches for a matching key.

inside of object we can think of it as `const fitBitdata = {'45': "forty five",};`. when we ask for `fitBitdata[45] or fitBitdata['45']` it is going to look for '45', it finds and gives us a value.

**Why to use [] aside from numbers as a key? where else would you use it?**

Sometimes we've property names that may not be valid identifiers.

```javascript
let my cat = 'kitty' //error
let 76trombones = 'trombones' //error

const data  = {
    '76 trombones' : 'great song'
}

data.76 trombones //error
data['76 trombones'] //great song.
// works fine coz key have been stored as a string, even though its an invalid identifier.
```

sometimes we want to use a dynamic value like variable to access data from object.

```javascript
const colors = {
  red: "#eb4db",
  yellow: "#f9ca24",
  blue: "#3036b",
};

colors.blue; //#3036b
colors.yellow; // #f9ca24
colors[yellow]; //error -> its going to look for a variable yellow.
yellow; // error -> coz we dont have variable yellow, we have yellow key
colors["yellow"]; ///#f9ca24

let mysteryColor = "yellow";
colors[mysteryColor]; // #f9ca24 -> this will work
//because we have a var mysteryColor which internally has a key yellow & it looks for its value.
colors.mysteryColor; // undefined-> coz we dont have a property mysteryColor
//we get undefined when we try to access that doesnt exist

colors["bl" + "ue"]; // #3036b
```

:::note
Use square brackets [] when you've dynamic value as a key or when you have an invalid identifier.
:::

---

## Updating and adding properties

```javascript
//Adding
const reviews = {};
reviews["queenBee49"] = 4.0;
reviews.smith78 = 3.5;
reviews.colt = 5;

//Updating

reviews["colt"] = 4.5;
reviews["queenBee49"] += 2;
reviews.smith78++;
```

---

## Nested Arrays and Objects

```javascript
const student = {
  first: "David",
  last: "Jones",
  strength: ["music", "art"],
  exams: {
    midTerm: 92,
    final: 88,
  },
};

const avg = (student.exams.midTerm + student.exams.final) / 2; // 90
student.strength[1]; //art

//to get objects in order - Array of objects
const shoppingCart = [
  {
    product: "JENGA",
    price: "6.88$",
    quantity: 1,
  },
  {
    product: "Echo Dot",
    price: "29.99$",
    quantity: 3,
  },
  {
    product: "Fire Stick",
    price: "39.99$",
    quantity: 2,
  },
];

const game = {
  player1: {
    uName: "blue",
    playingAs: "X",
  },
  player2: {
    uName: "muffin",
    playingAs: "O",
  },
  board: [
    ["O", null, "X"],
    ["X", "O", "X"],
    ["null", "O", "X"],
  ],
};
```

---

## Objects & Reference Types

```javascript
const food = {
  italian: "pizza",
  indian: "roti",
  american: "donut",
};

food2 = food;
food2.mexican = "rice";

food; //{italian: "pizza", indian: "roti", american: "donut", mexican: "rice"}
food2; //{italian: "pizza", indian: "roti", american: "donut", mexican: "rice"}
```

Both contain same data, since they are referring to one object

---

## Array / Object Equality

```javascript
let nums = [1, 2, 3];
let nums2 = [1, 2, 3];
nums === nums2; //false
[] === []; //false -> coz both are referenced at diff locations
{} === {} //false
{a : 1} === {a : 1} //false
let d1 = {a : 1};
let d2 = d1
d1===d2 //true

let nums3 = nums;
nums3 === nums; //true
//Example 2
const user = {
  uName: "cherry",
  email: "cherry@gmail.com",
  notifications: [],
};
if (user.notifications === []) {
  console.log("No new notifications");
} // this doesn't work -> referencing diff locations

//instead

if (user.notifications.length === 0) {
  console.log("No new notifications");
}

//or
if (!user.notifications.length) {
  console.log("No new notifications");
}
```
