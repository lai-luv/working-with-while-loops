# Writing While Loops in JavaScript

## While Loops 

- A while loop in JavaScript allows you to repeatedly execute a block of code as long as a specified condition remains true. Here's how a while loop is structured in JavaScript:

 ```javascript
while (condition) {
    // Code to be executed while the condition is true
    // This code block can contain one or more statements
}

// Code outside the loop

 ```

- Here's how the while loop works in JavaScript:
1. The condition is a boolean expression that is evaluated before each iteration of the loop. If the condition is initially true, the code block inside the loop is executed.
2. After the code block inside the loop is executed, the condition is re-evaluated. If the condition is still true, the loop's code block is executed again. This process continues until the condition becomes false.
3. Once the condition becomes false, the program continues with the next statement after the loop.

 ```javascript
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}
 ```

- In this example, the loop iterates five times because the condition count < 5 starts as true and becomes false after the fifth iteration (when count becomes 5). The output will be:

Count: 0
Count: 1
Count: 2
Count: 3
Count: 4

- It's important to ensure that the condition in a while loop eventually becomes false to prevent infinite loops. Infinite loops can lead to performance issues or crashes in your program.

### Prep

1. Connect your js file to your HTML file
2. Open your code in the browser and open your console

### Activities
1. In the `js` file, complete the list of exercises. 
