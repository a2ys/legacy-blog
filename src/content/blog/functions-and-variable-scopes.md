---
author: Aayush Shukla
pubDatetime: 2023-12-31T22:14:00Z
title: Mastering C Programming - Part 3 - Mastering Functions, Storage Classes, and Variable Scope
slug: mastering-functions
featured: false
draft: false
tags:
  - mastering-c
  - programming-tutorials
description: Elevating C Programming Proficiency - A dive into Functions and Variable Scope in C
---

### Part of a series on [Mastering C Programming](/tags/mastering-c)

Welcome back to our exploration of C programming mastery! In this segment, we'll delve into the intricacies of functions, providing a more in-depth understanding of storage classes and variable scope. These concepts are essential for creating modular, efficient, and well-organized C programs.

Once you finish this article, be sure to practice some questions from [Questions on Functions](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#functions) present on my GitHub to test and strengthen your understanding.

Do what is told in questions 1 and 2 above, as you'll encounter an issue when you forget to specify the arguments as instructed.

## Table of Contents

## Functions

Functions serve as the backbone of modular programming in C, allowing you to create reusable and well-organized code.

### Declaration and Definition

Declaring and defining a function involves specifying the function's signature, including its return type, name, and parameters. The following syntax is followed when declaring functions in C.

```c
<function-return-type> <function-name>() {}
```

For example,

```c
int add(int num1, int num2) {
    int sum = num1 + num2;

    return sum;
}
```

The above program defines a function to add two values. The return statement is what is placed in place of the function from where it is called.

So,

```c
int c = add(10, 20);
```

becomes

```c
int c = 30; // add(10, 20) returns a value 30
```

This is just for illustration purposes, but will make you understand the concept.

When you don't want to specify a return type; in layman's terms, you don't intend to use the function to get any value, and just want the function to do some part of the code, you can use the `void` return type. Literally, `void` means "nothing", so `void` tells the compiler that the function will return nothing.

```c
void greet() {
    printf("Hello from the function!\n");
}
```

The `greet()` function just prints a message, and does not return anything, as it is of a `void` return type.

### Call by Value and Call by Reference

In C, you can call a function requiring parameters in two ways, either by providing the value directly, or by a reference to the variable containing the value. You'll learn about references when you study pointers.

```c
#include <stdio.h>

// Call by Value
void addTen(int num) {
    num += 10;
}

int main() {
    int value = 5;

    // Call by Value
    addTen(value);
    printf("Value after Call by Value: %d\n", value);

    return 0;
}
```

This is an example of call by value, where we call the function directly by giving the variable `value`. The value of the `value` variable is modified in-place through the function.

However, when doing a call by reference, there are a few notable differences.

```c
#include <stdio.h>

// Call by Reference
void addTenRef(int *num) {
    *num += 10;
}

int main() {
    int value = 5;

    // Call by Reference
    addTenRef(&value);
    printf("Value after Call by Reference: %d\n", value);

    return 0;
}
```

First of all, the major difference lies in the function definition. In the function arguments, we ask for a pointer (you'll get to know about this soon) via the dereference operator `*`, and then dereference the value from the pointer to modify the value in-place. This program achieves the same thing as the previous program.

### Bits of knowledge: Arguments and Parameters

A simple thing to note is that the values passed into a function on calling are called parameters, and the values used in the function definition are called arguments. Taking reference from the previous examples,

```c
int add(int num1, num2)
```

Here, `num1` and `num2` are function arguments.

```c
add(10, 20);
```

Here, 10 and 20 are the parameters.

### Function Overloading

Function overloading is a feature in programming languages that allows multiple functions with the same name to be defined, but with different parameters or types. The compiler or interpreter differentiates between these functions based on the number or types of their parameters. This enables programmers to use a familiar and intuitive naming convention for functions that perform similar tasks but operate on different data types or have different parameter lists.

In function overloading,

- Same Function Name: You can define multiple functions with the same name within the same scope.
- Different Parameter Lists: The functions must have different parameter lists, either in terms of the number of parameters or their types.
- Compile-Time Resolution: The appropriate function to be called is determined at compile time based on the number and types of arguments passed during the function call.

This can be achieved only in C++, and not in C, due to difference in design philosophies. There are a few reasons why function overloading is not supported in C, and you can study about it yourself. The reasons will be quite interesting.

The following program illustrates function overloading. It is written in C++.

```cpp
#include <cstdio> // Include the C standard I/O header for printf

// Function with two integer arguments
void add(int a, int b) {
    printf("Sum of two integers: %d\n", a + b);
}

// Function with two double arguemnts
void add(double a, double b) {
    printf("Sum of two doubles: %lf\n", a + b);
}

int main() {
    add(5, 10);       // Calls the first function based on the data type of the parameters
    add(3.5, 7.2);    // Calls the second function based on the data type of the parameters

    return 0;
}
```

In this example, the add function is overloaded with two versions—one that takes two integers and another that takes two doubles. The appropriate version of the function is called based on the data type of the parameters provided during the function calls in the main function.

## Recursive Functions

Recursive functions are a special type of functions. Recursive functions call itself in the function definition. They are used to simplify the functions, which without recursion, would either have required a simplifiable loop within the function definition, or might have been a long task to do. I know this definition seems overwhelming.

In simple terms, a recursive function calls itself in the function definition, and is used to simplify program logic. Implementing the logic is a rather bigger deal than defining them. I highly recomend you to visit [my article on recursion](/posts/recursive-functions) to completely understand the concept behind recursion! For now, I'll just brief you with the concept of recursion taking the help of the Factorial.

Suppose you want to calculate the factorial of the number 4.

In mathematics, you do it like `4! = 4 \* 3!`. This calls the factorial function (!) again. Now this 3! will be `3! = 3 \* 2!`. This 2! will be `2! = 2 \* 1!`. Now, the definition of factorial gives the value of `1!`, which turns out to be 1. So the recursive calls start to simplify. 2! gets defined as `2! = 2 \* 1 = 2`, and 3! becomes `3! = 3 \* 2! = 3 \* 2 = 6`, and thus 4! finally becomes `4! = 4 \* 3! = 4 \* 6 = 24`.

What you witnessed right now is what is known as recursion! So the recursive function `n!` calls itself in the definition as `n! = n \* (n - 1)!`, and by definition, the value of 1! and 0! is 1, and the factorial of negative integers are not defined (until you call Gamma Functions 👀).

So, going by the definition of the factorial function in mathematics, we can define factorials in C as explained below.

```c
int factorial(int n) {
    if (n == 0 || n == 1)
    {
        // The factorial definition defines the factorials of 0 and 1 respectively.
        return 1;
    } else {
        // The general definition of the factorial function is what is returned below.
        // The program handles all the cases, just as how mathematics handles the factorials.
        return n * factorial(n - 1);
    }
}
```

## Scope of Variables and Storage Classes

Storage classes are used to control variable lifetimes.

### Automatic Variables/Automatic Storage Classes

By default, variables inside a function have automatic storage duration. They are created when the function is called and destroyed when it exits.

```c
#include <stdio.h>

int main() {
    int localVar = 5;

    // It's the same as
    // Automatic variable (default storage class)
    auto int localVar = 5;

    // localVar exists only within this block
    printf("Local Variable: %d\n", localVar);

    return 0;
}
```

So when the `main()` function exits, the variable localVar is destroyed. The same is the case for any local variable defined within a function.

We can use some storage classes to control the lifetime, and visibility, of the variables.

### Static Variables/Static Storage Classes

Unlike automatic variables, static variables have a more extended stay in the world of C programming. Their values persist between function calls, and they exhibit a longevity that spans the entire execution of the program.

```c
#include <stdio.h>

// Static variable
static int staticVar = 3;

void demoStaticVar() {
    // Retains its value between calls
    staticVar++;
    printf("Static Variable: %d\n", staticVar);
}

int main() {
    demoStaticVar();
    demoStaticVar();
    demoStaticVar();

    // The staticVar persists even after the main function exits
    return 0;
}
```

Here, `staticVar` maintains its value across multiple calls to the function `demoStaticVar`. Its longevity extends beyond the scope of any single block or function.

### Register Variables/Register Storage Classes

Register variables, suggested to the compiler for storage in a CPU register, are transient entities with a swift presence. Their lifespan is confined to the scope in which they are declared.

```c
#include <stdio.h>

// Register variable
register int regVar = 7;

int main() {
    // Accessing a register variable
    printf("Register Variable: %d\n", regVar);

    // Once the block is exited, regVar bids adieu
    return 0;
}
```

In this example, `regVar` is a register variable, potentially residing in a CPU register for faster access. However, its lifespan is limited to the block in which it is declared.

### External Variables/External Storage Classes

By default, variables are invisible to other files, meaning when you try to use a file in another file via the `import` directive, all the variables in the program are invisible to the other file. The `extern` keyword changes this behaviour. External variables, declared with the extern keyword, exhibit a global scope, making them accessible across different files. Their lifespan extends throughout the program's execution.

```c
#include <stdio.h>

// External variable with global scope
extern int extVar;

int main() {
    // Accessing an external variable
    printf("External Variable: %d\n", extVar);

    // External variables persist across the program's execution
    return 0;
}
```

Here, `extVar` is an external variable, and its presence spans the entirety of the program.

## Conclusion

As you deepen your understanding of functions, storage classes, and variable scope, you're enhancing your capabilities as a C programmer. These concepts provide the foundation for creating robust and modular code.

## Next Article

The next article is on Pointers in C, one of the most important concepts. You can get to the next article by clicking [here](/posts/navigating-with-pointers).
