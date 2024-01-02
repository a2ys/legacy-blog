---
author: Aayush Shukla
pubDatetime: 2024-01-03T22:14:00Z
title: Mastering C Programming - Part 4 - Navigating Computers with Pointers
slug: navigating-wth-pointers
featured: false
draft: true
tags:
  - mastering-c
  - programming-tutorials
description: Navigating the realm of computers with pointers
---

### Part of a series on [Mastering C Programming](/tags/mastering-c)

Welcome back to another checkpoint for your C programming journney! This time, we are going to be learning about pointers. Pointers are powerful tools that enable us to manipulate memory directly, offering flexibility and efficiency in our code. Pointers may seem hard considering the hype they get from people, but I hope this post gives you clarity on what they do, how they work and how to use them.

Once you finish this article, be sure to practice some questions from [Questions on Pointers](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#pointers) present on my GitHub to test and strengthen your understanding.

## Table of Contents

## Declaration and Access of Pointer Variables

In C, a pointer is a variable that holds the memory address of another variable. To declare a pointer variable, we use the dereference operator `*`. You might have encountered this operator in previous code examples. To declare a pointer variable, you simply use this syntax.

```c
<data-type> *<pointer-variable-name>;
```

The data type here can be anything you want! Following is an example of how to declare a pointer.

```c
int *i;
```

Here, the dereference operator `*` signifies that the variable `num` is not a normal variable, it is of a special kind - it is a pointer variable! The following line of code means the same thing!

```c
int* i;
```

Putting the dereference operator `*` over `int` or the variable name does not hold any significance, it's up to you; both mean the same thing,

> i is a pointer to an int.

Since pointers can only store the memory addresses of other variables, you have to find a way to get the address of a variable. There's an operator for that as well, the address-of operator `&`. This operator gets the address of any variable you use it on.

```c
int num = 0; // Declared an integer variable num
int *ptr; // Declared an integer pointer ptr

ptr = &num; // The address of num variable is assigned to ptr.
```

In this example, `ptr` becomes a pointer to the variable `num`. The `&` operator is used to retrieve the address of `num`.

Now, if you have initialized a pointer variable, there must be a way to get the value of the variable it is pointing to. For that, you have to use the dereference operator `*`.

```c
int valueStoredInPointer = *ptr;
```

This is used to dereference the pointer `ptr`. That's why `*` is called the dereference operator in the first place! So, `*` operator is used to access the value through the pointer.

## Bits of knowledge: Array Decay

Before we venture into pointer arithmetic, it's crucial to understand a phenomenon known as "array decay". In C, an array can decay into a pointer, and understanding this will help you understand pointer arithmetic better.

```c
int main() {
    int numbers[] = {1, 2, 3, 4, 5};

    printf("Value of the first element: %d\n", numbers[0]);
    printf("Address of the array: %p\n", numbers);
    printf("Value using array decay: %d\n", *numbers);

    return 0;
}
```

If you have used Python before, printing an array variable prints the array, but here in C, something different will happen.

```c
printf("Address of the array: %p\n", numbers);
```

This will print something absurd. It is not something alien; it is actually the memory address of the first element of the array! In this example, `numbers` is an array, but when we use the array name without an index, it implicitly decays into a pointer to its first element. So, `numbers` actually became a pointer variable of an `integer` data type, as it is an `integer` array.

So, what do you use to get the value from a pointer? You use the dereference operator `*` for this!

So,

```c
printf("Value using array decay: %d\n", *numbers);
```

this will print the first element of the array, as the array decayed to a pointer to the first element. So dereferencing the array will get you the first element in the array.

Understanding array decay is important when working with functions that accept arrays as arguments or when dealing with the relationship between arrays and pointers.

## Pointer Arithmetic

Pointer arithmetic allows us to perform arithmetic operations directly on pointers, providing a powerful mechanism for navigating through memory.

If you understood pointer arithmetic, you could guess what this block of code does.

```c
int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int *ptr = numbers;

    printf("First element: %d\n", *ptr);
    printf("Second element: %d\n", *(ptr + 1));

    return 0;
}
```

This code first declares an array called `numbers`, then declares a pointer to that array called `ptr`. Notice that you don't have to provide the address-of `&` operator here, as the array decayed to a pointer to its first element. Basically, the array itself became an integer pointer.

So you must have guessed this prints the first element of the array:

```c
printf("First element: %d\n", *ptr);
```

Now you might wonder what this line does.

```c
printf("Second element: %d\n", *(ptr + 1));
```

This line increments the pointer to the next pointer. The explanation might be intriguing, but here it is.

> When you add N to a pointer; the compiler intuits that you want the address of the Nth item, and multiplies the offset by the size of the datatype.

This whole thing is explained in a 12 year old question on StackOverflow, but it is totally worth it. I highly recomend you to read the post and the discussion! Here's the [link](https://stackoverflow.com/questions/7886196/c-pointer-1-meaning).

So, in short, `*(ptr + 1)` gives you the second element. In the same way, `*(ptr + 2)` will give you the third element, and so on.
