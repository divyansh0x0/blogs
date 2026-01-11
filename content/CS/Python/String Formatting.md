---
title: String formatting in python
description: Basic ways to format string in python
---

## Formatted String Literal
These were introduced in python 3.6 and are now the preffered method for embedding python expressions into strings

```python
name = "John Doe"
age = 30

out = f"He is {name} and his age is {age}"
```

This is just sugar syntax, and is equivalent to `format()` method we have discussed below.

Python also support format specifiers which can be used for truncating decimals, padding strings and aligning. These are:

In python 3.8+, formatted strings can also be used 

## Format Method

This is the traditional method of formatting strings in most languages.

A placeholder is replaced with values at runtime. Python uses `{}` as placeholder.

```python
name = "John Doe"
age = 30
out = "He is {} and his age is {}".format(name, age)
```