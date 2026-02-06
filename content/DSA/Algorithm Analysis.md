---
title: "Algorithm analysis - Time and Space Complexity"
description: "Explains the RAM model used in algorithm analysis" 
---

## The RAM model
The RAM (Random Access Machine) is a theoretical model is used in algorithm analysis to estimate time and space complexity
in a way that is closer to real computers than, say, Turing machines.

1. The  RAM model contains instructions commonly found in real computers, and take a **constant of time**. These are:
   1. Arithmetic (Add, Subtract, Multiply, Divide, Remainder, Floor, Ceiling)
   2. Data movement (Load, Store, Copy)
   3. Control (Jump, High level If and Else, Goto, Return, Subroutine Call)
2. The data types in the model are integer and floating points.
3. The size of each word of data is assumed to be limited and cannot go arbitrary
4. The memory model is simple, it has no hierarchy (caches, virtual memory). Other models exist which include the memory hierarchy

The running time is expressed as a function of input size $n$

--- 
Example:
```python
# Finding element in an array   |   cost   | times
for i in range(0, n):           #    c1        n
    if A[i] == x                #    c2        n
        return i                #    c3        1
return -1                       #    c3        1
```
> $c3$ is possible only once that's why its duplicated


The running time of the algorithm is:

$$T(n) = c_1 n + c_2 n + c_3 = (c_1 + c_2) n + c_3$$

This is a linear function in n.

### Worst Case Analysis
This gives us the upper bound on the running time for any input. It provides a 
guarantee that the algorithm will never take any longer. 

It occurs fairly often in algorithms such as searching a database for a particular piece of information.

### Average Case Analysis

## Bit (Log-cost) Model

## Word-RAM model

## Pointer Machine Model

## Boolean Circuit Model

## PRAM (Parallel RAM)

## External Memory (I/O) Model

## Cache Oblivious Model

## Streaming Model

## Communication Complexity Model