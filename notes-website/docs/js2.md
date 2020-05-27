---
id: js2
title: Values & Variables contd.
sidebar_label: More Primitive Types
---

# More Primitive Types

---

## Boolean

Boolean has two types of values - true , false

```javascript
//In JS Variable can change type

let donuts = 12;
donuts = false;
dounts = "a";
//Probably you wouldnt want to change, but you can
```

---

## String

```javascript
"hi" + 1; //hi1
"hi" - "h"; //NaN
```

- ### String Indices
  Every character in string is indexed
  ```javascript
  "hello".length; //5
  "".length; //0
  let greet = "hello world";
  greet[0]; //h
  greet[20]; //undefined (another primitive) -> nothing is there
  greet[greet.length - 1]; //d
  greet[0] = "A"; // We cant change strings like this in JS
  //Strings are immutable
  ```
- ### String Methods

  Some of the most used methods

  ```javascript
  let msg = "hello";
  msg.toUpperCase(); //HELLO
  msg.toLowerCase(); //hello

  //trim() - removes trailing and leading spaces
  let greet = "    leave me alone      ";
  greet.trim(); //"leave me alone"
  //indexOf()
  let tvShow = "cat_dog";
  tvShow.indexOf("cat"); //0
  tvShow.indexOf("dog"); //4
  tvShow.indexOf("z"); //-1 -> since z is not there
  tvShow.indexOf("a"); //1
  //slice()
  let str = "super cat dog";
  str.slice(0, 5); //super -> 0 is the start index and 5 is the end index
  str.slice(5); //cat dog
  str.slice(40); //""
  //replace()
  let laugh = "hahaha so funny! hahaha";
  laugh.replace("hahaha", "lol"); // lol so funny! hahaha -
  //It only replaces the first instance
  ```

- ### String Escapes
  ```javascript
  \n //new line
  \' //single quote
  \" // double quote
  \\ //back slash
  ```
- ### String Template literals

  Allows embedded expressions, which will be evaluated & then turned into a resulting string

  ```javascript
  `I counted ${3 + 4}`; //I counted 7
  let item = eggs;
  let price = 1.99;
  let quantity = 4`you bought ${quantity} ${item} , Total Price : $${
    price * quantity
  }`; //you bought 4 eggs, total price : $7.96
  ```

---

## Null & Undefined

| Null                             | Undefined                                                  |
| -------------------------------- | ---------------------------------------------------------- |
| Intentional absence of any value | variable that do not have any assigned value are undefined |
| Value must be assigned           |                                                            |

- ### Null
  ```javascript
  //No one has logged in yet
  let loggedInUser = null; //value is explicitly set to nothing
  //As user logs in
  loggedInUser = "Alan";
  ```
- ### Undefined
  ```javascript
  "lol"[4]; //undefined
  let u = undefined; //we can initialize this way, but its not a good practice to do this
  let color; //undefined
  ```
