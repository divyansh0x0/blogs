---
title: "Linear Differential Equations"
description: "Theory of higher order linear homogenous and non homogenous differential equations with constant coefficients"
---

## Theorem 1
For a linear differential equation:

$$
f_n(x)y^{(n)} + f_{n-1}(x)y^{(n-1)} + ... + f_0(x) y = Q(x)
$$

has the solution of form

$$
y(x) = y_c(x) + y_p(x)
$$

where $y_c (x)$ is the complimentary function of the differential equation which you can get by solving the
homogenous part of the above differential equation

$$
f_n(x)y^{(n)} + f_{n-1}(x)y^{(n-1)} + ... + f_0 y = 0
$$


> Note:  Solving linear differential equation with non-constant coefficients is extremely hard. Our study will be for
> constant coefficient only. But the above theorem is valid for non-constant coefficients.
## Theorem 2 (Linearity of Solutions)
For a linear differential equation:

$$
f_n(x)y^{(n)} + f_{n-1}(x)y^{(n-1)} + ... + f_0(x) y = Q(x)
$$

there exist $n$ $1$-parameter solutions $y_1(x), y_2(x), ..., y_n(x)$ and a n-parameter solution

$$
y_c = y_1(x) + y_2(x) + ... + y_n(x)
$$

which also satisfies the differential equation.

## Finding solution of Homogenous LDE with Constant Coefficients
For a first order differential equation with constant coefficients:

$$
ay' + by = 0
$$

The solution is

$$
    \int{ a\frac{dy}{y}} = \int{ -bdx}
$$
which gives
$$
    a\ln|y| =  -bx
$$
for y > 0, this can be written as:

$$
y = e^{ -\frac{b}{a} x}
$$

If we replace $-b/a$ with $m$ we get

$$
y = e^{m x}
$$

We can make an assumption for higher ordinary linear differential equation and assume $ce^{mx}$ is a solution. To check if we are correct
we can check it by putting it in an n-th linear order differential equation with constant coefficients :

So:

$$
a_n y^{(n)} + a_{n-1}y^{(n-1)} + ... + a_0 y = 0
$$

becomes

$$
a_n(ce^{mx})^{(n)} + a_{n-1}(ce^{mx})^{(n-1)} + ... + a_0(ce^{mx}) = 0
$$

This gives a polynomial equation in $m$ if we assume $c \ne 0$

$$
a_n m^n + a_{n-1} m^{n-1} + ... + a_0= 0
$$

This is the **characteristic equation** of our differential equation. Each root of this differential equation is a solution.
But the roots of a polynomial can be:
1. All distinct
2. All repeated
3. All distinct and imaginary

We don't need rest of the cases like some repeated and imaginary because above three can be used to find them due to the
linearity of linear differential equations.

### Case 1: All distinct
For n distinct roots of characteristic equation gives the solution, known as **complimentary solution**, of the form:

$$
y = c_1e^{m_1x} + c_1e^{m_2x} + ... + c_ne^{m_nx}
$$
### Case 2: All repeated
For n-th order homogenous LDE, the solution if characteristic equation as a root $m$ repeated $n$ times is:

$$
y = (c_1 + c_2x + ... + c_nx^{n-1}) e^{mx}
$$

### Case 3: All imaginary
For a single pair of imaginary roots $$\alpha \pm \iota \beta$$ the corresponding solution is 

$$
y = c_1e^{\alpha \pm \iota \beta} + c_2e^{\alpha \pm \iota \beta} = e^{\alpha x}(c_1 \cos(\beta x) + c_2 \sin(\beta x))
$$
This can also be written as

$$
y = c_1e^{\alpha x} \sin(\beta x +\delta) 
$$
or 

$$
y = c_1e^{\alpha x} \cos(\beta x -\delta)
$$

## Finding solution of Non-Homogenous LDE with Constant Coefficients

We already know the complementary function $y_c$ is the general solution for homogenous LDE:

$$
a_n y^{(n)} + a_{n-1}y^{(n-1)} + ... + a_0 y = 0
$$
For

$$
a_n y^{(n)} + a_{n-1}y^{(n-1)} + ... + a_0 y = Q(x)
$$

If we assume a single **particular solution** $y_p (x)$ satisfies the non-homogenous LDE, then using superposition principle we can 
say the general solution is:

$$
y(x) = y_c(x) + y_p(x)
$$

To find this particular solution we have various methods:

### 1. Method of Undetermined Coefficients

This procedure can only be used if $Q(x)$ consists of a sum of terms each of which
has a finite number of linearly independent derivatives, meaning only a finite number of derivatives exist 
each distinct (cannot be built from sum of other derivatives) after differentiating infinitely. 

So $Q(x)$ can only have:
1. constant term
2. $x^k$
3. $e^{ax}$
4. $\sin(ax)$
5. $\cos(ax)$
6. Combinations and compositions of above 5

> $x^{-1}$ has infinite number of derivatives all of which are linearly independent, where as $x^3$ has ${3x^2, 6x, 6} $
> as derivatives which are finite and linearly independent.

To find $y_p$ we have to do the following steps:
1. No term in Q(x) is same as a term in complimentary function $y_c$
   - If (1) is true then  $y_p(x)$ is a linear combination of terms in $Q(x)$ and linearly independent derivatives of each term. Example:  $Q(x) = x^2$ and $y_c = c_1e^{x} + c_2e^{2x}$ then $y_p = Ax^2 + Bx + C$
   - If (1) is not true (lets say $u(x)$ is the common term without constants) and the roots of characteristic equation is repeated $r$ times. Then $y_p$ is the linear combination of $x^2u(x)$ and all its derivatives. Example:  $Q(x) = xe^x$ and $y_c = c_1e^{x} + c_2xe^{x}$ then $y_p = Ax^3e^x + Bx^2e^x$. We ignore the $xe^x$ and $e^x$ as they are also in complementary function.
2. Differentiate the guess solution $y_p(x)$ and substitute them in the LDE.
3. Compare coefficients of each term and find the constants required for y_p(x)
4. You will have a single solution $y_p(x)$
5. The solution of LDE is then $y(x) = y_c(x) + y_p(x)$

