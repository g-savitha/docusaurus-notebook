---
id: js1
title: Introduction
sidebar_label: Values & variables
---

# Values & Variables

---

## Primitive Types

1. Number (+ve, -ve, whole numbers, integers & decimal)
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol & BigInt

---

## Number

50, 7, 33.7, 82.0, -777.8

```javascript
50 + 5; //55
90 - 1; //89
111 * 7; //777
400 / 25; //16
27 % 2; //1
2 ** 3; //8
10 / 3; //3.33333 ... 5 (Irrational number -> we have millions of 3s compiler automatically appends 5 & gives o/p)
```

---

## NaN & Infinity

NaN(Not a number) -> a numeric value that represents something that is not a number

```javascript
0 / 0; //NaN
1 + NaN; //NaN
1 / 0; //Infinity
1 / 0; //-Infinity
0 / 0; //NaN
0 / -0; //NaN
```

---

## Unary Operators

+= , -=, ++, --,\*=,/=, %=, -, +

- ### Unary negation (-)

  The unary negation operator precedes its operand and negates it.

  ```javascript
  Syntax: -x;

  Examples: var x = 3;
  y = -x; // y = -3, x = 3

  // Unary negation operator can convert non-numbers into a number
  var x = "4";
  y = -x; // y = -4
  ```

- ### Unary plus (+)

  The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (0x-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN

  ```javascript
  Syntax: +x;

  Examples: +3 + // 3
  "3" + // 3
  true + // 1
  false + // 0
  null + // 0
    function (val) {
      return val;
    }; // NaN
  ```

---

## Variables & Let

Variables are of two types - let & const

```javascript
Syntax : let someName = value;

Examples:
let hens = 4;
hens -1; //3 -> this doesnt change the value stored in hens
hens; //4
hens--; //4 (post decrement -> value will be updated in next line) -> this does change the value
hens; //3
hens = hens-1; //2 -> this does
hens //2
let avg = 98.7
let avg = 0 // Syntax error : avg already declared

```

```
Note : Name the variables using camel case
```

---

## Intro to const

Const works just like let, except you cannot change the value

:::note
Once you learn about arrays and objects you'll see where const makes more sense than let

:::

```javascript
const hens = 4;
hens = 20; //error

const age = 17;
age = age + 1; //error

const pi = 3.14;
const minHeight = 60;
const count = 10;
let count = 3; //Error: You cant have variable with same name even though one is const and other is let
```

---

## Legacy of Var

Before let and const, var was the only way to declare variables

```javascript
var dist = 7.4;
```
