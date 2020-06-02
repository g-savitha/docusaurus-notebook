---
id: js4
title: Making Decisions in JS
sidebar_label: Program Logic and Control Flow
---

## Comparision operators

`>, <, >=, <=, ==, !=, ===,!==`

---

## == vs ===

| ==                                                                                                                                      | ===                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| checks for _equality of value_, but not equality of type                                                                                | checks for _equality of value and type_                                          |
| converts(coerces) both values to same type & then compare them                                                                          |                                                                                  |
| eg: 5==5 //True 'b' == 'c' //false 7 == '7' //true 0==''//true true==false//false 0==false//true null==undefined//true 10!='10' //false | 5===5 //true 1===2 //false 2==='2' //false false === 0//false 10 !== '10' //true |

---

## conditional statements

### if-else

```javascript
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### else if

```javascript
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

---

## Truthy and Falsy values

All values have an inherit truthy or falsy boolean values.

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

> JavaScript uses type coercion in Boolean contexts.

### Type coercion

Type conversion (or typecasting) means transfer of data from one data type to another.

_Implicit_ conversion happens when the compiler automatically assigns data types, but the source code can also _explicitly_ require a conversion to take place.

For example, given the instruction 5+2.0, the floating point 2.0 is implicitly typecasted into an integer, but given the instruction Number("0x11"), the string "0x11" is explicitly typecasted as the number 17.

---

## Logical operators

`&&, ||, !` -> logical operators

```javascript
const a = 3;
const b = -2;
console.log(a > 0 && b > 0);
// expected output: false
console.log(a > 0 || b > 0);
// expected output: true
console.log(!(a > 0 || b > 0));
// expected output: false
```

---

## Operator Precedence

Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

in case of logical operators.
`! > && > ||`

> For more visit [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

## Switch statement

The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

```javascript
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

> Refer MDN Docs for more [Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

---

## Ternary Operator

Syntax:

> Condition ? expressionIfTRUE : expressionIfFalse

```javascript
let color = status === "offline" ? "red" : "green";
```
