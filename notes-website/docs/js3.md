---
id: js3
title: Modelling data efficiently
sidebar_label: Modelling data efficiently
---

## The Math Object & Random Numbers

Math Object is a collection of math functionality.

:::note
Contains Properties and methods for mathematical constants and functions

:::

```javascript
Math.PI; //3.145
Math.round(4.9); //5
Math.abs(-456); //456
Math.pow(2, 5); //32
Math.floor(3.9999); //3
```

- ### Random Number

  ```javascript
  Math.random(); //0.1450243
  ```

  gives us a random decimal between 0 to 1(non - inclusive 1)

  #### Random numbers from 1 - 10:

  ```javascript
  Math.floor(Math.random() * 10);
  ```

---

## typeof

typeof operator tells the type of a variable

```javascript
typeof "78"; //string
typeof 87; //number
```

---

## parseInt & parseFloat

Used to parse string into number. Watch out for NaN

```javascript
parseInt("24"); //24
parseInt("24.5"); //24
parseInt("28dayslater"); //28
parseFloat("24.87"); //24.87
parseFloat("24"); //24
parseInt("I ate 3 fish"); //NaN -> checks for first digit as number
```
