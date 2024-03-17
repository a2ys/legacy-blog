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

## Pointers to Structures

Just like how we dynamically allocate memory for primitive data types like integer and float, we can use dynamic memory allocation on structures as well.

```c
struct Person {
  char name[50];
  int age;
};
```

Here we first define a struct named `Person`. Now, to dynamically allocate memory for the `struct Person` on runtime, we can write the following syntax in the `main()` function. This syntax is similar to whatever we did before.

```c
struct Person *p = (struct Person *) malloc(sizeof(struct Person));
```

Here, `struct Person *p` declares a pointer variable `p` that can store memory addresses of `struct Person` objects. `malloc(sizeof(struct Person))` allocates memory dynamically on the heap, large enough to hold a `struct Person` object.

The assignment `p = (struct Person *)malloc(sizeof(struct Person))` stores the allocated memory address in p.

Now, to put the values for the children in the `struct Person *`, we use the following syntax.

```c
strcpy(p->name, name);
p->age = age;
```

This same syntax is followed when accessing elements from a `struct Person *`. This arrow operator (`->`) is something you might have found new. This arrow operator is used to access members of a pointer variable. This is not the complete theory, but this is enough to make you understand the concept. You will understand this and use this more when you begin Object-Oriented Programming in C++.

`p` is a pointer, so we need the `->` operator to access its members.

`p->name` is equivalent to `(*p).name`. It dereferences `p` to get the actual `struct Person` object it points to and then uses the dot operator (`.`) to access the name member within that object.

In simple terms, when you make a pointer to a structure object, you have to access the members either by dereferencing the pointer object and then accessing its members (`(*<pointer-to-a-struct>).<child>`), or by using the arrow operator (`<pointer-to-a-struct>-><child>`).

The `strcpy` function copies the value of the `name` variable into the `name` member of the structure pointed to by `p`.

Similarly, this line, `p->age = age`, assigns the value of the `age` variable to the `age` member of the structure pointed to by `p`.

### Why not the Dot Operator (.)?

The dot operator (`.`) can only be used to access members of structures or unions directly, not through pointers. In the given code, `p` is a pointer, not a `struct Person` object itself. Therefore, you cannot use `p.name` or `p.age` as they would be invalid. The `->` operator is the correct way to access members when using a pointer variable.

## Bytes of knowledge: Alignment and Padding in Structures

```c
#include <stdio.h>

struct Person {
    char str[20];
    int c;
    char d;
};

int main() {
    printf("Size of struct Person: %zu\n", sizeof(struct Person));
    printf("Size of char[20]: %zu\n", sizeof(char[20]));
    printf("Size of int: %zu\n", sizeof(int));
    printf("Size of char: %zu\n", sizeof(char));

    return 0;
}

```

Try to run this code and check what happens. It would print 28 at the end, which might seem absurd.

In theory,

```c
sizeof(struct Person) = sizeof(char str[20]) + sizeof(int) + sizeof(char) = 25 bytes
```

Practically, it is not 25 bytes but 28 bytes. The extra 3 bytes occupied by the struct is called padding.

The size of the struct is not necessarily the sum of the sizes of its individual members due to alignment requirements. In C++, the compiler may add padding between the members to ensure proper alignment. This is done for performance reasons, as accessing aligned memory is generally faster.

In this case, the `struct Person` contains an `int` (4 bytes), a `char` (1 byte), and a character array `str` of size 20 (20 bytes). Due to alignment, the compiler may add some padding after the `char` member to align the character array.

Thus, the size of the struct is calculated as follows:

```c
int (4 bytes) + padding (currently 3 bytes to make the char align) + char (1 byte) + char[20] (20 bytes) = 28 bytes.
```

Alignment refers to the memory boundary at which a data type's address should be a multiple of.

In simple terms, it ensures that data is stored in memory in a way that is efficient for the computer's architecture. Proper alignment is crucial for performance because accessing aligned memory is generally faster than accessing misaligned memory.

Each data type has a natural alignment requirement, which is usually determined by the size of the data type. For example:

- An `int` typically has an alignment requirement of 4 bytes.
- A `double` often has an alignment requirement of 8 bytes.

The alignment requirement is important because many computer architectures are optimized for accessing data at specific addresses that are aligned with the size of the data. If a data type is not aligned properly, it might require multiple memory accesses or additional processing, leading to slower performance.

In C and C++ programming, the compiler automatically adds padding between structure members to ensure that each member is aligned according to its requirements. This padding helps to align subsequent members and the overall structure.

In the `struct Person` structure, the compiler added padding to ensure that each member of the struct is properly aligned, which resulted in a larger overall size.

Arrays, in general, don't introduce additional alignment requirements beyond the alignment of their element type. The alignment requirement of `char` is usually 1 byte. Therefore, in the struct, the `char[20]` array doesn't introduce additional alignment requirements, and no padding is added after it.

It's important to note that alignment decisions can vary between different compilers and platforms. Compiler designers make choices based on a combination of factors, including performance optimization, memory access efficiency, and architectural considerations.

## Unions: Versatility in Data Storage

Unions allow us to store different data types in the same memory location, conserving memory and providing flexibility in data representation.

```c
union Data {
  int i;
  float f;
  char str[20];
};
```

This is how we define a union type in C. This union can either hold an integer, a float or a string.

```c
data.i = 10;
printf("Integer value: %d\n", data.i);
data.f = 3.14;
printf("Float value: %f\n", data.f);
strcpy(data.str, "Hello");
printf("String value: %s\n", data.str);
```

In this example, as we assign values to its members, they occupy the same memory location, and only the most recently assigned value is kept, and all other previously assigned values are lost.

## Bytes of knowledge: Where do the lost values from a Union go?

For this block and in the upcoming blocks of code, I'll use C++, as the syntax for a union is the same there. (and printing is easier. 😂)

For a union, you know by now that all members share the same memory location. Accessing one member will overwrite the value of the others.

Let's explore more into this by creating a union with the name `Value`.

```c
union Value
{
  int name;
  double decimal;
  char character;
};
```

Now, you might have guessed what would be the output for this.

```c
// Create a union variable
union Value myValue;

// Assign values to the union members
myValue.name = 0;
cout << "Name: " << myValue.name << endl;

myValue.decimal = 1.0;
cout << "Decimal: " << myValue.decimal << endl;

myValue.character = 'A';
cout << "Character: " << myValue.character << endl;
```

But for the following lines of code, you might not be able to guess the answer.

```c
cout << "After setting character, Name: " << myValue.name << endl;
cout << "After setting character, Decimal: " << myValue.decimal << endl;
```

The values are stored in the same memory location, so accessing one member will overwrite the others. So these prints may not be meaningful as the union members share the same memory. But you might wonder what actually happened here, and what happened to the values.

Explaining it simply, when you write a value to one member of the union, it occupies the memory associated with that member. When you subsequently write to another member, it overwrites the memory associated with the first member. This is because all members of the union use the same memory space.

And the garbage values are not some totally random or unrelated garbage values, it's just the computer doing what it is told.

In simple terms, the following steps happen internally when you create a union and write to it, and then overwrite some value.

1. When you create a union, the compiler allocates enough memory to hold the largest member of the union. This ensures that the union has enough space to accommodate any of its members.
2. When you write a value to one member of the union, it is stored in the shared memory location allocated for that union. If you then write a value to another member, it will overwrite the contents of the shared memory location.
3. Unlike structures, unions do not enforce type checking when you access their members. You, as the programmer, are responsible for ensuring that you interpret the values correctly based on the currently active member.

Visually,

1. Initially, the memory is empty.

```diff
  Memory Layout:
  +-----------------------+
  |                       |
  |                       |
  |                       |
  +-----------------------+
```

2. The value `0` is stored in the shared memory location.

```c
  myValue.name = 0;
```

```diff
  Memory Layout:
  +-----------------------+
  |          0            |
  |                       |
  |                       |
  +-----------------------+
```

3. Now, the value `1.0` overwrites the memory that was previously holding `0`. The union's memory now represents the decimal member. The name value is lost.

```c
  myValue.decimal = 1.0;
```

```diff
  Memory Layout:
  +-----------------------+
  |        1.0            |
  |                       |
  |                       |
  +-----------------------+
```

This behavior makes unions a bit tricky to use, and they require careful handling to ensure that you interpret the data correctly based on the currently active member. They are typically used in situations where you need to conserve memory and are confident about the active member at any given time.

Here, when you try to print `myValue.name`, the compiler will try to read what is there at the shared memory location and try to interpret it as an integer. There are some cases where it is able to do so, whereas in most cases, the computer will just
