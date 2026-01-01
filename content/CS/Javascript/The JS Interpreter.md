---
title: The JS Interpreter
description: Some under the hood working of javascript
---
# The Typescript Typesystem
## The primitives

In javascript a primitive is data that is not an object and has no methods or properties. There are 8 primitive data types in JS:
1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.


### Properties of immutable
#### 1. All primitives are immutable
All primitives are immutable, that is, they cannot be altered. The language does not offer utilities to mutate primitive values.
#### 2. Primitives have no Methods
Yes, primitives offer no methods, the JS engine auto boxes the primitives into a wrapper object and accesses the property 
on that object instead.

For example, `"foo".includes("f")` implicitly creates a String wrapper object and calls `String.prototype.includes()` on that object.

## The Objects