---
title: "Ordinary Differential Equations"
description: "Contains everything related to ordinary differential equations"
---
Note:
Throughout the blog, we will treat y = f(x)
## Definitions

### Ordinary Differential Equations
Let $f(x)$ define a function of $x$ on an interval $(a,b)$ then an **Ordinary
Differential Equation** (ODE) is an equation involving
1. the variable x
2. the function $f(x)$
3. one or more of derivatives of $f(x)$

#### Example: 

$$
\frac{df(x)}{dx} + x[f(x)]^2 = 0
$$

is an ordinary differential equation but because 
we usually write f(x) = 0. It is common to see this equation written as 

$$
\frac{dy}{dx} + xy^2 = 0
$$ 

### Order of a Differential Equation
It is the order of the highest derivative involved in the differential equation

#### Example:

$$
    x(y''')^2 + 2y''  + (xy')^5 = x^3
$$
This ODE has order 3, because the highest derivative of function of $x$ (i.e. $y = f(x)$) is $y'''$

### Solution of a Differential Equation
An **explicit solution** is a function $f(x)$ which satisfies the differential equation on substitution. This is easy to check. 

An **implicit solution** i.e. a relation $f(x,y) = 0$ is significantly harder to check because most of the time an implicit
solution cannot be converted into explicit solution of form $y=f(x)$. We can say a relation $f(x,y) = 0$ is an **implicit solution** to 
differential equation 

$$
F(x,y,y',...,y^{(n)}) = 0
$$
on an interval $I: a < x < b$, if 
1. It defines $y$ as an implicit function of $x$ on $I$, i.i. if there exists a function $g(x)$ defined on $I$ such that $f[x,g(x)] = 0$ for every $x$ in $I$
2. and if $g(x)$ satisfies the differential equation.

In short to check implicit solution you have to find all functions $g_i(x)$ (each of which are defined on an *interval* not just a *point*) from the relation and check if all of them satisfy both the implicit solution and the differential equation.

> Note: $f(x,y) = 0$ is an equation (and a relation as well) and an equation is never a solution of a differential equation. 
> Only a *function* can be a solution. When we say $f(x,y) = 0$ is a solution we mean that the function $g(x)$ defined by the 
> relation $f(x,y) = 0$ is a solution.

### General Solution and Particular Solution
> Some False Conjectures You May Have
> 1. A differential equation may or may not have infinite number of solutions, i.e. a differential equation can have exactly one solution, or no solutions at all.
> 2. It is possible a differential equation has a solution only in a small interval $I$, or not have a solution for an interval or a point.

For a class of differential equations the solution of a differential equation of order $n$ contains $n$ arbitrary constants
$c_1, c_2, ..., c_n$. We call these **$n$-parameter family of solutions** and the constants $c_1$ to $c_n$ are the **parameters**.
So a solution of such class of differential equation will have $n+1$ variables ($n$ constants and the variable $x$ itself)

Traditionally **general** and **particular** solutions of a differential equation were defined as:
1. The $n$-parameter family of solutions of an $n$th order differential equation has been called traditionally as the "general" 
solution of differential equation.
2. When we give a particular set of values to all constants in the general solution we get 
"particular solution" of the differential equation.

> Note: A general solution according to its name should contain all solutions of a differential equation. Unfortunately, this is not the 
> case for all differential equations. For example $y = xy' + (y')^2$ has 1-parameter solution $y = cx + c^2$ which will be called 
> the traditional solution, but it does not include $y = -x^2/4$ which is also a solution to this differential equation. Such solutions are known as 
> **singular solutions**

From the above note its clear that a traditional general solution ($n$-parameter solution) is not general, and we won't call it general throughout the blog.
This is because it is possible a differential equation has multiple $n$-parameter solutions and it does not make sense to call each of them
as general solutions because they are not interconvertible.

To proof how undesirable these traditional definitions are, we have an example:
Consider

$$
y' = -2y^{3/2}
$$

Its solution is 

$$
y = \frac{1}{(x+c)^2} \space\space\space\space\space ... (1)
$$

But it has another solution

$$
y = 0
$$

Which cannot be obtained from $(1)$. Also we can get the solution $(1)$ as
$$
y = \frac{Cx}{(Cx+1)^2}
$$
using substitution and for this solution $y=0$ is not particular at all as you can get it by using $C=0$ 

So we now define particular and general solution correctly to fix this confusion.

#### Particular Solution
A solution which satisfies the equation and does not contain arbitrary constants.

#### General Solution
An $n$-parameter family of solutions of a differential equation will be called a general solution if it contains
*every* particular solution of the equation.

So no such thing as a singular solution exists for us, we will treat them as particular solutions.

### Initial Conditions
For an $n$-parameter solution, there exists $n$ conditions given in terms of one value of independent variable, which are known
as the initial conditions.

Normally, number of initial conditions equal the order of differential equation, however there exists differential equations
where this will not be true. 


## Geometrical Representation of Solution of Differential Equation
When we are asked to find $1$-parameter solution of 

$$
y' = F(x,y), a < x < b,\space\space\space...(1)
$$

we are in effect being asked to find a family of curves in which every member has at each of its point the slope given by
$(1)$

The graph of the function satisfying $(1)$ is known as the **integral curve**.


