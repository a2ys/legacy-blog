---
author: Aayush Shukla
pubDatetime: 2024-03-04T16:23:00Z
title: Mastering C Programming - Part 5 - Structures and Unions
slug: structs-and-unions
featured: false
draft: false
tags:
  - mastering-c
  - programming-tutorials
description: A dive into the C Programming Fundamentals
---

### Part of a series on [Mastering C Programming](/tags/mastering-c)

Welcome back to another part in the series on Mastering C programming. Here we'll study about Structures and Unions in C. These concepts being fairly easy would not take much of your time, yet are important for one's foundational knowledge on how C works.

Once you finish this article, be sure to practice some questions from [Questions on Structures](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#structures) and [Questions on Unions](https://github.com/a2ys/learning-cpp?tab=readme-ov-file#unions) present on my GitHub to test and strengthen your understanding.

## Table of Contents

## Why Structs and Unions?

Structures allow us to group related data under a single name, while unions enable us to store different data types in the same memory location. Both of them are containers for data, having different usage as per the problem being faced. A struct is the closest to a class you can get in C; this also hints that we are going to start Object-Oriented Programming soon. 😉

## Structures: Bringing Order to Data

Structures are like containers that hold different pieces of data together. They help organize complex data structures and improve code readability. In Python, you must have studied about a dictionary (hashmap), a structure in C is basically just that with the keys being the variable names.

```c
struct Person {
    char name[50];
    int age;
};
```

In this example, we define a `Person` structure with two members: `name` (an array of characters) and `age` (an integer).

This `Person` structure is now kind of a data type in the program it was declared, so you can declare a variable with the type `Person`. However, you need to specify that it is a `struct`.

```c
struct Person person1; // Declaring the structure variable. Note that we are using the keyword struct here.
strcpy(person1.name, "John"); // Putting the value "John" in person1.name
person1.age = 30; // Putting the value 30 in person1.age
```

Alternatively, we can directly initialize the structure variables using an array of values; the values will be put in the same order as declared in the structure definition.

```c
struct Person person1 = {"John", 30}; // The value "John" is given to person1.name, and the value 30 is given to person1.age
```

We can access the members of a struct using the dot (`.`) operator.

```c
// Accessing structure members using dot (.) operator
printf("Name: %s\n", person1.name);
printf("Age: %d\n", person1.age);
```

A simple correlation to Python is given below.

```python
person1 = {"name": "John", "age": 30}
print(person1["name"])
print(person1["age"])
```

Here, you can correlate `person1["name"]` from Python to `person1.name` in C. Note that they are fundamentally not the same, but you can use this correlation to understand this part.

## Arrays of Structures

Just like normal data types, we can have arrays of a structure type as well. This is illustrated below.

```c
struct Student {
  char name[50];
  int age;
};
```

Here, we define a structure named `Student`. To create an array of `Student` type, we can do the following.

```c
struct Student students[3];
```

In this line of code, we declare an array of 3 `Student` structures. Try to correlate this with the declaration of a normal array and you'll get how this works.

```c
int array[3];
```

This is how an array of integers is declared. Note that the only thing that is changing is the data type of the array. In this example, the data type is `int`, whereas in the example above, the data type is `struct Student`.

So, to access any element from the `students` array, we can do what we normally do in any other usual array. So, `students[0]` will get us the first element, `students[1]` will get us the second element, and so on. So to individually set the values for the elements, we can follow the below syntax.

```c
strcpy(students[0].name, "Alice");
students[0].age = 20;

strcpy(students[1].name, "Bob");
students[1].age = 22;
```

This code puts the values Alice and 20 in the first element of the `students` array, and the values Bob and 22 in the second element. The following code thus prints the values accordingly.

```c
// Accessing and printing student information
printf("First student name: %s\n", students[0].name);
printf("Second student age: %d\n", students[1].age);
```

## Structures and Functions

Structures can be passed as arguments to functions, allowing us to manipulate complex data structures efficiently.

```c
// Function to print details of a person
void printPerson(struct Person p) {
  printf("Name: %s\n", p.name);
  printf("Age: %d\n", p.age);
}
```

This function takes a `struct Person` as an argument, and prints its name and age.

```c
// Creating a 'Person' structure instance
struct Person person1 = {"Alice", 25};

// Calling the 'printPerson' function with 'person1' as argument
printPerson(person1);
```

This block of code then calls the function with a new instance of the `struct Person` type.
