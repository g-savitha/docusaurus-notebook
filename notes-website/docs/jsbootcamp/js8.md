---
id: js8
title: Functions
sidebar_label: Functions
---

## Intro to functions

Functions are reusable procedures

2 step process -> define a fn, run a fn.

```javascript
//define
function fn() {
  //do something
}
//run
fn();
```

**Function arguments are input to functions.**

```javascript
//single arg
function sqr(num) {
  console.log(num * num);
}
sqr(4);
//multiple args
function sum(x, y) {
  console.log(x + y);
}
sum(4, 5);

function divide(a, b) {
  console.log(a / b);
}
divide(1, 4); //0.25
divide(4, 1); //4
divide("s", 4); //NaN
divide(5); // 5/undefined -> NaN
```

:::note
If there is a missing arg, JS takes undefined as input.
:::

**Return** :

Captures a value from fn. we can only return one value. if u want to return more than one value, use arr or string.

```javascript
function add(x, y) {
  return [x, y];
  // or
  return `${x} , ${y}`;
}
```

---

## Scope

1. Function scope
2. Block Scope
3. Lexical Scope

### Function Scope

```javascript
//1:

function help() {
  let msg = "HELP ME!";
  msg; //HELP ME!
}
msg; //error: not defined

//msg is scoped only to help() function

//2:

function lol() {
  let p = "Tom";
  const age = 45;
  var color = "teal";
}

lol();
console.log(color); //error: not defined
console.log(age); //error: not defined
console.log(p); //error: not defined

//3:

let bird = "sparrow";
function birdwatch() {
  let bird = "parrot";
  console.log(bird); //parrot
}
bird; //sparrow
birdwatch(); //parrot
//you get an error if both bird variables are under same scope
```

:::note
In function scope, both var and const behave same as let.
:::

### Block Scope
