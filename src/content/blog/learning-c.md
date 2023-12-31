---
author: Aayush Shukla
pubDatetime: 2023-12-31T15:00:00Z
title: Mastering C Programming - Part 1 - The Basics
slug: the-basics-of-c
featured: true
draft: false
tags:
  - mastering-c
  - programming-tutorials
description:
  A dive into the C Programming Fundamentals
---

### Part of a series on [Mastering C Programming](/tags/mastering-c)

Welcome to the exciting world of C programming! Whether you're a budding programmer or looking to strengthen your foundation, understanding the fundamentals is the key to mastering this versatile language.

This blog article will be a long one, but covers all the fundamentals of the C language.

Once you finish this article, be sure to practice some questions from [Questions on Fundamentals](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#fundamentals) present on my GitHub to test and strengthen your understanding.

**I recommend you to run the code snippets provided, and play with them as you go through this blog and other blogs, as playing with the code is the most important part of learning to code.**

You can read the blogs at your desired pace, and at your desired place, be it on the bed, on a chair or on a **porcelain throne**. _(if you get the reference XD)_

> Since you might have already studied about the core concepts previously, I'll just give a brief description about the core concepts, and focus more on the syntax. When shifting to C++, the core concepts, the logic building and the syntax all remain almost the same, it's just a few additions that make C++ better.

## Table of contents

## Variables and Reserved Words

In C (or any language), variables are like containers that hold data. They come in various types such as `int`, `float`, `char`, etc. These types define the kind of data a variable can store. Reserved words, also known as keywords, are special words with predefined meanings in the language. Understanding how to declare and use variables is crucial for any C programmer.

**Variables** -> The below syntax should always be followed when declaring variables in C.

```c
<data-type> <variable-name> = <value-to-be-stored>;
// Note that the semi-colon is important as line endings in C.
```

Here's a simple snippet that will make the syntax more clear. The elements `#include <stdio.h>`, `int main() {}` and `return 0` will get more clear by the end of this blog. For now, just assume they should remain there.

```c
#include <stdio.h>

int main() {
    // Declare an integer variable
    int age = 20;

    // Print the variable
    printf("My age is %d\n", age);

    return 0;
}
```

**Reserved Words** -> As you might have known previously, there are a few words that have special meanings for some behavior in all programming languages; C is no different These words hold a special significance in C syntax, and thus cannot be used as variable names in the C language. When you use them as variable names, the program will not compile. As of December of 2023, the C language has 32 keywords. Below are all of them. Remember to not get overwhelmed by their prescence, as you'll get to know every one of them by the end of this journey.

```c
auto	    break	    case	    char
const	    continue	default	    do
double	    else	    enum	    extern
float	    for		    if          static
int	    	register	return      union
short	    signed	    sizeof	    while
struct	    switch	    typedef     goto
unsigned	void	    volatile    long
```

## Data Types

C supports a variety of data types, each designed for specific purposes. From integers to floating-point numbers, characters to arrays, mastering data types is essential for effective programming. Knowing when to use which data type ensures efficient use of memory and enhances program performance.

This might also be your first time encountering data types, so I'll just give an overview of the basic data types that you would need for starting your journey.

- `int`: Stands for integer. Used for storing whole numbers, both positive and negative.
- `float`: Represents floating-point numbers (decimal numbers). Used for values that require fractional components.
- `double`: Similar to float but with a larger size, providing more precision. Used for more accurate storage of decimal numbers.
- `char`: Stands for character. Used for storing a single character, such as a letter, digit, or special symbol.
- `bool`: Stands for boolean. Used for storing true or false values (0 or 1).

A few more,

- `short`: Short integer. Similar to int but with a smaller range. Used when memory conservation is crucial.
- `long`: Long integer. Similar to int but with a larger range. Used when a broader range of whole numbers is needed.
- `unsigned int`: An integer that can only store non-negative values (zero and positive). Used when negative values are not applicable.
- `unsigned char`: A character that can only store positive values. Used when working with ASCII values or byte-level operations.
- `long double`: Extended precision floating-point number. Used for the highest precision in decimal numbers.

Here's the usage for the basic data types.

```c
#include <stdio.h>

int main() {
    // Integer
    int num = 42;

    // Floating-point
    float price = 24.99;
    double priceInDouble = 24.99;

    // Character
    char grade = 'A';

    // Boolean
    bool theTruth = true;

    return 0;
}
```

## Operators, Operator Precedence and Expressions

Operators are the building blocks of expressions in C. Understanding operator precedence ensures that expressions are evaluated in the correct order, preventing unexpected results. Following are all the operators with their precedence. You might know a few of them already, but take your time to get to know all of them.

1. **Postfix operators:** `() [] -> . ++ --`
    - Function call `()`
    - Array subscript `[]`
    - Member access operators `->` and `.`
    - Post-increment `++` and post-decrement `--`
2. **Unary operators:** `+ - ! ~ ++ -- (type) * & sizeof`
    - Unary plus `+`
    - Unary minus `-`
    - Logical NOT `!`
    - Bitwise NOT `~`
    - Pre-increment `++` and pre-decrement `--`
    - Type cast `(type)`
    - Dereference `*`
    - Address-of `&`
    - Sizeof `sizeof`
3. **Multiplicative operators:** `* / %`
    - Multiplication `*`
    - Division `/`
    - Modulus `%`
4. **Additive operators:** `+ -`
    - Addition `+`
    - Subtraction `-`
5. **Shift operators:** `<< >>`
    - Left shift `<<`
    - Right shift `>>`
6. **Relational operators:** `< <= > >=`
    - Less than `<`
    - Less than or equal to `<=`
    - Greater than `>`
    - Greater than or equal to `>=`
7. **Equality operators:** `== !=`
    - Equal to `==`
    - Not equal to `!=`
8. **Bitwise AND operator:** `&`
9. **Bitwise XOR operator:** `^`
10. **Bitwise OR operator:** `|`
11. **Logical AND operator:** `&&`
12. **Logical OR operator:** `||`
13. **Conditional operator (Ternary):** `? :`
14. **Assignment operators:** `= += -= *= /= %= &= ^= |= <<= >>=`
15. **Comma operator:** `,`

Operators with higher precedence are evaluated before operators with lower precedence. Parentheses `()` can be used to override the default precedence and explicitly specify the order of evaluation.

An expression is a combination of variables, operators, and constants that, when evaluated, results in a single value.

```c
#include <stdio.h>

int main() {
    int num1 = 10, num2 = 5;

    // Addition
    int sum = num1 + num2;

    // Multiplication
    int product = num1 * num2;

    printf("Sum: %d, Product: %d\n", sum, product);

    return 0;
}
```

In this example, the expressions `num1 + num2` and `num1 * num2` showcase basic arithmetic operations. The results are stored in the variables `sum` and `product`, respectively.

One thing to note is when you add two `integer` variables, you'll get an `integer`, and when you add two `float`, or `double` variables, or perform any operations on them, you'll get the variable of the same kind.

## Type Conversions

C provides a mechanism called type conversion (or typecasting) to ensure that expressions involving different data types are handled appropriately. Type conversions are really important in creating programs involving the interaction of various data types. When C++ does this by itself, it's called implicit type conversion, and when it is done by the user, it's called explicit type conversion.

### Implicit Type Conversion

```c
#include <stdio.h>

int main() {
    int num1 = 10;
    float num2 = 5.5;

    // Implicit type conversion (int to float)
    float result = num1 + num2;

    printf("Result: %f\n", result);

    return 0;
}
```

Here, `num1` is an integer, and `num2` is a floating-point number. When they are added, the `result` is implicitly converted to a `float` to accommodate the fractional part.

### Explicit Type Conversion

In some cases, you may need to perform explicit type conversion to ensure the correct behavior of an expression. This is achieved using the type cast operator `(type)`.

```c
#include <stdio.h>

int main() {
    int num1 = 10;
    float num2 = 5.5;

    // Explicit type conversion (float to int)
    int result = num1 + (int)num2;

    printf("Result: %d\n", result);

    return 0;
}
```

In this example, the `result` is explicitly cast to an `integer`, truncating the fractional part and resulting in an `integer` value.

## Input/Output and User Interaction

Communication with your program is essential. The `scanf` and `printf` functions facilitate user input and output, making the program interactive. In your journey of C/C++ programming, you'll need these functions really often.

```c
#include <stdio.h>

int main() {
    int age;

    // Get user input
    printf("Enter your age: ");
    scanf("%d", &age);

    // Display the input
    printf("You are %d years old\n", age);

    return 0;
}
```

## Branching

Branching and looping are essential constructs in C programming that enable you to control the flow of your program based on conditions and iterate over a set of statements.

### The if-else block

The `if-else` statement allows your program to make decisions based on certain conditions. You might be familiar with the syntax.

```c
#include <stdio.h>

int main() {
    int marks;

    // Get user input
    printf("Enter your marks: ");
    scanf("%d", &marks);

    // Check if the student passed
    if (marks >= 50) {
        printf("Congratulations! You passed.\n");
    } else {
        printf("Oops! You need to work harder.\n");
    }

    return 0;
}
```

In this example, the program checks if the entered marks are greater than or equal to 50 and displays a corresponding message.

### The switch statement

The `switch` statement provides an alternative way to make decisions based on the value of an expression. It's particularly useful when you have multiple cases to consider, or you want to match a certain value against a set of values, and using `if-else` will result in a long chain of statements.

```c
#include <stdio.h>

int main() {
    char grade;

    // Get user input
    printf("Enter your grade (A, B, C, D, or F): ");
    scanf(" %c", &grade);

    // Evaluate the grade
    switch (grade) {
        // Match the given expression against the value 'A'.
        // This is equivalent to: if (grade == 'A') {}
        case 'A':
            printf("Excellent!\n");
            // Note that the break statement is necessary here.
            // Without break, the program continues to the
            // next labeled statement, executing the statements
            // until a break or the end of the statement is reached.
            break;
        case 'B':
            printf("Good job!\n");
            break;
        case 'C':
            printf("Satisfactory.\n");
            break;
        case 'D':
            printf("Needs improvement.\n");
            break;
        case 'F':
            printf("Sorry, you failed.\n");
            break;
        default:
            // The default block executes when the given expression
            // does not match any of the cases.
            printf("Invalid grade entered.\n");
    }

    return 0;
}
```

## Looping

Loops allow you to execute a block of code repeatedly. There are three primary loop structures in the C language, the `for` loop, the `while` loop and the `do-while` loop.

### for Loop

The `for` loop is suitable when you know in advance how many times you want to execute a block of code.

```c
#include <stdio.h>

int main() {
    // Print numbers from 1 to 5
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }

    return 0;
}
```

This for loop prints numbers from 1 to 5.

### while Loop

The `while` loop is used when you want to repeat a block of code as long as a condition is `true`.

```c
#include <stdio.h>

int main() {
    int count = 1;

    // Print numbers from 1 to 5 using a while loop
    while (count <= 5) {
        printf("%d ", count);
        count++;
    }

    return 0;
}
```

This `while` loop achieves the same result as the `for` loop.

### do-while Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the block of code is executed at least once.

```c
#include <stdio.h>

int main() {
    int count = 1;

    // Print numbers from 1 to 5 using a do-while loop
    do {
        printf("%d ", count);
        count++;
    } while (count <= 5);

    return 0;
}
```

In this example, the block of code is executed once before the condition is checked.

### break and continue Statements

The `break` statement is used to exit a loop prematurely, while the `continue` statement skips the rest of the loop's code and jumps to the next iteration. These statements are really important when you want to implement loops, as they are really helpful in controlling your loop's flow.

```c
#include <stdio.h>

int main() {
    // Print odd numbers from 1 to 10 using a for loop
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            // Skip even numbers
            continue;
        }
        printf("%d ", i);

        if (i == 7) {
            // Stop the loop when reaching 7
            break;
        }
    }

    return 0;
}
```

In this example, the loop prints odd numbers and stops when reaching 7.

## Basic Syntax: Hello, World!

Now, let's unravel the basic syntax of C programming with the classic "Hello, World!" program. This simple program is the starting point for many programmers, serving as an introduction to the syntax and structure of C.

```c
#include <stdio.h>

int main() {
    // Print the classic Hello, World message.
    printf("Hello, World!\n");

    return 0;
}
```

This minimalistic program introduces key elements, including the `#include` directive for including the standard input/output library `<stdio.h>` and the `main` function, which is the entry point of every C program. The `printf` function is used to display the message, and `return 0` indicates a successful execution.

## Conclusion

This lays the foundation for your journey into the world of C programming. As you delve deeper into C programming, these tools will become indispensable; you'll find yourself equipped with the tools to tackle more complex challenges in the language.

So, welcome to the world of C programming!

## Next Article

The next article is on Arrays in C, where you'll get to know all about arrays in the C language. You can get to the next article by clicking [here](/posts/mastering-arrays).
