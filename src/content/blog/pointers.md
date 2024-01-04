---
author: Aayush Shukla
pubDatetime: 2024-01-04T20:33:00Z
title: Mastering C Programming - Part 4 - Navigating through Memory with Pointers
slug: navigating-wth-pointers
featured: true
draft: false
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

Putting the dereference operator `*` over `int` or the variable name does not hold any significance, it is your personal preference; both mean the same thing,

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

Now, if you go out of bounds from the array, and try to print the values, we get some interesting values. They are the values which are present in the computer's memory at that given memory location during the time of execution. Those values are highly unpredictable, and it is highly discouraged to go out of bounds during the execution; C does not perform boundary checks, so it's the programmer's responsibility to ensure that pointer arithmetic stays within the valid range of the array.

## Bits of knowledge: Void Pointers

In our exploration of pointers, it's worth understanding `void` pointers. Unlike other pointers, a `void` pointer (`void *`) is like a wild card. It doesn't point to any specific data type; instead, it can point to anything. This makes it a really useful tool, especially in scenarios where the data type might vary.

```c
void printValue(void *ptr, char type) {
    switch (type) {
        case 'd':
            printf("Integer Value: %d\n", *((int *)ptr));
            break;
        case 'f':
            printf("Float Value: %f\n", *((float *)ptr));
            break;
        case 'c':
            printf("Character Value: %c\n", *((char *)ptr));
            break;
        default:
            printf("Unknown Data Type\n");
    }
}

int main() {
    int intValue = 0;
    float floatValue = 3.14;
    char charValue = 'A';

    printValue(&intValue, 'd');
    printValue(&floatValue, 'f');
    printValue(&charValue, 'c');

    return 0;
}
```

In this example, the `printValue` function takes a `void` pointer and a character representing the data type. It then uses type casting to interpret the data correctly. This flexibility allows us to create functions that can handle multiple data types.

## Dynamic Memory Allocation

Dynamic memory allocation enables us to manage memory during program execution. We can reserve memory for variables, and also free memory whenever we need. Suppose you want to declare an integer pointer.

```c
int *ptr;

ptr = (int *)malloc(sizeof(int));
```

This is the syntax you need to follow to allocate memory for an integer. Note that the memory allocated is stored in an integer pointer. In C, when you allocate memory using malloc, it returns a void pointer (`void *`). That's why we store it in a pointer variable. But when you assign it directly to an integer pointer, you lose type information. So you have to explicity cast it to an integer pointer to maintain type safety. Thus you use `(int *)` to cast the pointer returned by `malloc()` to point to an integer variable.

But since you have assigned memory to a variable, you have to free the memory as well. You can do this by using the `free()` function. When you free the memory using `free`, the memory is deallocated, and the pointer becomes invalid. The following syntax will be followed to free the memory assigned to the integer pointer `ptr`.

```c
free(ptr);
```

The following program demostrates the use of `malloc()` and `free()`.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *dynamicArray;

    dynamicArray = (int *)malloc(5 * sizeof(int));  // Allocating memory for 5 integers

    // You can use dynamicArray as a regular array
    dynamicArray[0] = 0;

    free(dynamicArray);  // Don't forget to free the allocated memory

    return 0;
}
```

## Pointers and Functions

Pointers can also be passed in as function arguments. Here's an example to demonstrate that.

```c
void square(int *num) {
    *num = (*num) * (*num);
}

int main() {
    int value = 5;

    square(&value);

    printf("Squared value: %d\n", value);

    return 0;
}
```

Here, the square function takes a pointer to an integer as an argument, and modifies the value in the memory location stored by the pointer. Here, we pass in the memory location of `value` as parameters and the function does its magic. This is also known as call by reference; you must have read this [here](/posts/mastering-functions#call-by-value-and-call-by-reference). I advise you to go and brush up this part there!

## Bytes of knowledge

### Passing Arrays into Functions

You must have encountered array decay if you tried to solve the questions 1 and 2 from [Questions on Functions](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#functions) from my GitHub and not following the instructions as given in the two questions. When you to pass an array into a function argument, the array is not passed, instead, a pointer to the first element of the array is passed.

So,

```c
void printArray(int arr[])
```

Here, `arr` is not an array, instead it is a pointer to the first element passed into `arr` as parameters. So, all the information related to the array is lost, and what you get is only a pointer to the first element.

So, in both the questions 1 and 2, you have to pass the size separately as the information about the array is lost when it is passed into the function as parameters.

So, you have to always have the array `size` as an argument whenever you want to have the array itself as an argument in a function that requires arrays, just so you can be safe, and use the array when needed. So, a better and a more useful function signature will be,

```c
void printArray(int arr[], int size)
```

This time, you are also taking the size in as an argument, so that the array can be useful inside the function.

You can also use the following syntax with explicit pointer notation for the array parameter.

```c
void printArray(int *arr, int size)
```

Both versions are commonly used, and the choice between them often comes down to coding style preferences.

### Strings as Function Arguments

When it comes to dealing with strings in C, things get interesting. Unlike other data types, strings are represented as arrays of characters, so you have to specify the data type `char *` when taking them in as arguments, like you did in arrays (`int *` in the last example).

```c
#include <stdio.h>

void printString(const char *str) {
    while (*str != '\0') {
        printf("%c", *str);
        str++;
    }
    printf("\n");
}

int main() {
    char message[] = "Hello, World!";
    printString(message);

    return 0;
}
```

In this example, the `printString` function takes a pointer to a constant character `const char *str`. The `const` keyword indicates that the function won't modify the contents of the string. If you don't use `const`, you could still represent strings using `char *`, but it is a good practice to use `const char *` for string literals to prevent unintended modifications and enhance code safety. The function iterates through the characters of the string until it encounters the null terminator (`'\0'`), printing each character along the way.

### Double Pointers

Another interesting concept is the use of double pointers (`**`). These pointers point to other pointers. While it might seem a bit confusing at first, double pointers become useful when dealing with dynamic memory allocation or two-dimensional arrays.

```c
int main() {
    int value = 42;
    int *ptr1 = &value;
    int **ptr2 = &ptr1;

    printf("Value: %d\n", **ptr2);

    return 0;
}
```

Here, `ptr2` is a double pointer pointing to the address of `ptr1`, which, in turn, points to the `value`. This extra layer of indirection provides a powerful way to manage memory and complex data structures.

## Conclusion

As we conclude pointers, you've must have gained some understanding about pointers and their applications in C programming. From basic declaration to their interaction with arrays and functions, pointers open up new dimensions in your coding journey.
