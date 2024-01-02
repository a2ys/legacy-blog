---
author: Aayush Shukla
pubDatetime: 2023-12-31T19:37:00Z
title: Mastering C Programming - Part 2 - Arrays Unveiled
slug: mastering-arrays
featured: false
draft: false
tags:
  - mastering-c
  - programming-tutorials
description:
  A dive into Arrays in C
---

### Part of a series on [Mastering C Programming](/tags/mastering-c)

Welcome back to our journey into the world of C programming! In this installment, we'll unravel Arrays, key building blocks that add depth and versatility to your coding arsenal.

Arrays are not something unique to C. They are present in every language, in fact, they are what you call Matrices in Mathematics. It's just the syntax of definition and access which changes, the core concepts remain the same in every language. Thus you'll find this post much smaller than the previous one. However, the article on functions will be significant as they are one of the most important fundamental of C which not leave you any soon.

Once you finish this article, be sure to practice some questions from [Questions on Arrays](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#arrays) present on my GitHub to test and strengthen your understanding.

## Table of Contents

## One-Dimensional Arrays

The one-dimensional array, a fundamental building block, allows us to organize data in a linear fashion. The syntax of declaration of an array in C is like this.

```c
<data-type> <array-name>[<size-of-array>];
```

This will only declare the array. To initialize the array, you need to provide the values next to it.

```c
<data-type> <array-name>[<size-of-array>] = {value1, value2, value3, ...};
```

The following code snippet will make it clear.

```c
// Declaration of an integer array
int numbers[5];

// Declaration and Initialisation of an integer array
// Note that the same variable name does not hold any signifance,
// you can have any variable name.
int numbers[5] = {1, 2, 3, 4, 5};

// Declaration of an array with without providing the size
// Even though you have not set any size for the array,
// the compiler knows its size because it knows the number of items stored inside it.
int numbers[] = {1, 2, 3};
```

To access any element in the array, you can simply use the indices of the element. The first element has the index `0`, the second element has the index `1`, and so on.

The following program will make it clear.

```c
#include <stdio.h>

int main() {
    // Declaration and initialization of an integer array
    int numbers[5] = {1, 2, 3, 4, 5};

    int firstElement = numbers[0];
    int secondElement = numbers[1];

    // Accessing array elements
    printf("First element: %d\n", firstElement);
    printf("Second element: %d\n", secondElement);

    return 0;
}
```

## Two-Dimensional Arrays (or a Matrix)

When linear organization is not sufficient, two-dimensional arrays come to the rescue, providing a grid-like structure. These can be understood with the following lines of explanation. Pay close attention.

```c
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

This declares a matrix of 3 rows and 3 columns.

Now when you try to do the following,

```c
int element = matrix[1][1];
```

`matrix[1]` first gets the first element, which is itself a 1-D array. So, `matrix[1]` gets the array `{4, 5, 6}`. Now when you do `matrix[1][1]`, it selects the element at index 1 from `matrix[1]`, which gets you the value 5. So the value stored in the variable `element` will be 5.

Note that the example I gave is just for an illustration purpose, and storing or trying to print `matrix[1]` may not be possible or meaningful for you now.

Now, what will happen if miss declaring a value in the matrix, and try to print the missed value.

```c
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8}};
```

When you try to print the missed value at `matrix[2][2]`, you'll get some absurd value. This is not some kind of error, but are a result of a fundamental feature of C. The same will happen when you try to print values from an unitialized array as well.

You'll unravel this mystery when you study Pointers.

## Strings

Strings in C are arrays of characters. They can be declared as illustrated in the below example.

```c
char greeting[] = "Hello, World!";
// value in the greeting variable can be illustrated as:
// {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'}
```

The end of a string in C is a null character escape sequence, or `\0`. Note that this is a zero (0) and not the O character. This will be helpful when you try to find the length of the string through the `while` loop.

```c
int length = 0;

while (greeting[length] != '\0') {
    length++;
}
```

The following code block illustrates printing the length of a string.

```c
#include <stdio.h>

int main() {
    // Declaration and initialization of a string
    char greeting[] = "Hello, World!";

    // Printing the string
    printf("%s\n", greeting);

    // Finding the length of the string
    int length = 0;

    while (greeting[length] != '\0') {
        length++;
    }

    // Printing the length of the string
    printf("Length: %d\n", length);

    return 0;
}
```

A few operations which you'll find useful are given for your reference.

- `strlen(string)`: This will return the length of the string.
- `strcat(str1, str2)`: This will concatenate `str2` into `str1`, and the result is stored in `str1`. Note that the size of str1 should be large enough to store the result of the two strings combined.
- `strcpy(str2, str1)`: Since in C, strings are arrays of characters, copying of strings cannot simply be done using the assignment operator. You need to use the `strcpy()` function which copies `str2` into `str1`. This makes it one of the most important functions you'll use in C. Note that the size of str2 should be large enough to store the copied string.
- `strcmp(str1, str2)`: This compares the strings `str1` and `str2`. If all characters are matching (the compiler encountered the null character, ASCII Value 0 in both the strings), it will give the value 0. If there are different strings, the compiler will simply give the difference of the ASCII values of the different characters, the first ASCII value is taken from `str1`, and the second from `str2`. I'll give you a task, try to find what happens if the lengths of `str1` and `str2` are different.

## Bits of knowledge: Getting the size of arrays

There is no direct way to get the size of the array whose length is unknown initially, but there's a turnaround. You can use the `sizeof()` function to get the size of the array.

Suppose you have a 64-bit processor, then the size of an integer corresponding to your processor will be 4 bits (or 32 bytes). So, if you store 5 integers, it will take up 20 bits of memory, and 10 integers will take up 40 bits of memory. So, if there are n integers stored on your machine, they will take up n*4 bytes of storage combined.

Arrays will be no different. So, if an array of integers contain an unknown number of elements, say n, then the array will take up n\*4 bits of space. But you know that an integer takes up 4 bits of space, so the number of elements in the array will be the memory taken up by the array of integers divided by the memory taken up by a single integer value for your machine; in the current case, (n\*4)/4 which equals n, the length of the array!

This can be achieved in a C program with the help of `sizeof()` function.

```c
int size = sizeof(int); // This will give you the size of an integer according to your processor.
```

When you use the `sizeof()` function and give the array as a parameter, it will return the size of the array, and we can divide it by the size of an element inside to get the length of the array.

```c
int array[] = {1, 2, 3, 4, 5};
int length = sizeof(array) / sizeof(array[0])
```

This is the syntax we use to calculate the length of the array. **Your task is to do the same task with an empty array**.

Note that we can also use `sizeof(int)` instead of using `sizeof(array[0])`, because we know that the array contains integer values, however the above syntax is for general use and is preferred over hardcoding the data type.

## Conclusion

In this focused exploration of arrays, you've gained insights into the power and versatility that arrays bring to C programming. Whether organizing data linearly or in a grid, arrays are indispensable tools in your programming toolkit.

## Next Article

The next article focuses on Functions in C, where you'll get to know all about Functions in the C language. You can get to the next article by clicking [here](/posts/mastering-functions).
