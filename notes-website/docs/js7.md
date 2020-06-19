---
id: js7
title: World of loops
sidebar_label: Loops
---

## Types of loops

1. for
2. while
3. do while
4. for ..of
5. for..in
6. forEach (used with functions)

---

### for

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

```javascript
for ([initialExpression]; [condition]; [incrementExpression]) statement;
```

#### Nested for

```javascript
let game = [
  [4, 32, 8, 16],
  [4, 8, 2, 16],
  [8, 256, 16, 2],
  [2, 2, 8, 2],
];

let totalScore = 0;
for (let i = 0; i < game.length; i++) {
  let row = game[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}
```

---

### while

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

```javascript
while (condition) statement;
```

```javascript
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Use `while` loop, when you dont know how many times a loop will run. Use `for` when you've a particular range

---

### do-while

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

```javascript
do statement;
while (condition);
```

statement is always executed once before the condition is checked. (To execute multiple statements, use a block statement ({ ... }) to group those statements.)

If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops, and control passes to the statement following do...while.

```javascript
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

---

### for...of (No support in IE)

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

:::note
Use this when you dont need an index
:::

```javascript
for (variable of object) statement;
```

```javascript
let sub = ["soccer", "pophead", "science", "politics"];

for (let subr of sub) {
  console.log(subr);
}

for (let char of "helloworld") {
  console.log(char.toUpperCase());
}
```

#### for and for..of

```javascript
let game = [
  [4, 32, 8, 16],
  [4, 8, 2, 16],
  [8, 256, 16, 2],
  [2, 2, 8, 2],
];

let totalScore = 0;
for (let i = 0; i < game.length; i++) {
  let row = game[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
  console.log(`${row} summed to ${totalScore}`);
}

//for...of
for (let row of game) {
  let totalScore = 0;
  for (let num of row) {
    totalScore += num;
  }
  console.log(`${row} summed to ${totalScore}`);
}
```

#### for..of with objects

```javascript
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  "In Bruges": 9,
  "kill bill": 8,
}; // you cant use for loop to iterate over k-v of object, coz object dont have indices.

for (let x of movieReviews) {
  console.log(x);
} //error : movieReviews is not iterable
```

:::important
Objects are not iterable like arrays or strings.

Use forof loop to loop over .

```javascript
Object.keys(movieReviews); //list of keys
Object.values(movieReviews); //list of values
```

:::

```javascript
for (let movie of Object.keys(movieReviews)) {
  console.log(movie);
}

for (let movie of Object.keys(movieReviews)) {
  console.log(movieReviews[movie]);
}

for (let movie of Object.values(movieReviews)) {
  console.log(movie);
}
```

:::note
we can also use regular for loop on Object.keys(movieReviews)
:::

---

### for..in

The for...in statement **iterates a specified variable over all the enumerable properties of an object**. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

```javascript
for (variable in object) statement;
```

```javascript
const winnings = {
  play: 25200,
  challenge: 30000,
  championsTournament: 50000,
  battleOfDecades: 100000,
};

for (let prop in winnings) {
  console.log(prop);
} //play,challenge,championsTournament,battleOfDecades

//to print values
console.log(winnings[prop]);
let total = 0;
for (let prop in winnings) {
  total += winnings[prop];
}
```

for...in loops over keys automatically(unlike for...of where we need to use Object.keys() to iterate over).

Technically arrays are objects. can we use for..in with arrays?

#### with arrays

Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

```javascript
for (let k in [66, 77, 88, 99]) {
  console.log(k);
} // 0 1 2 3
```

No matter whatever the values will be in array, it will print indices. Here indices are stored as keys, thats why we get an output of 0 1 2 3

Representation:

| 0 : | 66  |
| --- | --- |
| 1 : | 77  |
| 2 : | 88  |
| 3 : | 99  |

:::important
Arrays are special objects where keys are an ordered set of indices.
:::

:::note
for...in doesn't maintain the order, that's another reason, its not great to use with arrays.

for..in loops order varies from browser to browser
:::

#### for...of vs for...in

While for...in iterates over property names, for...of iterates over property values.

for...of iterates over each char of iterable(like arrays, strings, Object.keys())

```javascript
const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
```

---

## label, break and continue

### label

A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

```javascript
label: statement;
//example
markLoop: while (theMark === true) {
  doSomething();
}
```

### break

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.

```javascript
break; //terminates the innermost enclosing loop or switch.
break [label]; //terminates the specified enclosing labeled statement.
```

```javascript
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
//breaking to a  label
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

### continue

The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.

```javascript
continue [label];
```

```javascript
//The following example shows a while loop with a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
```

#### Continue to label:

A statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program terminates the current iteration of checkj and begins the next iteration. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj statement is completed, and checkiandj reiterates until its condition returns false. When false is returned, the program continues at the statement following checkiandj.

If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.

```javascript
let i = 0;
let j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(j + " is odd.");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```
