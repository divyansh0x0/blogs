---
title: "Formula List for ODEs"
description: "List of all important formulas you must know to solve ODEs"
---

## Differential Operator and Inverse Polynomial Operator
> An operator is a function which maps one function to another

$D = d/dx$ is known as the Differential Operator.

A polynomial of operators such as $D$ is known as Polynomial Operator $P(D)$

The inverse of $(D-a)$ is defined as
$$
\frac{1}{D-a}f(x) = e^{ax}\int{f(x)} e^{-ax}dx
$$

For a polynomial operator $P(D) = (D-a_1)(D-a_2)...(D-a_n)$
The inverse of polynomial operator is

$$
\frac{1}{P(D)} f(x)= \frac{1}{D-a_1}\frac{1}{D-a_2}...\frac{1}{D-a_n}f(x) =\frac{1}{D-a_1}\bigg( \frac{1}{D-a_2}... \left(\frac{1}{D-a_n}f(x) \right)\bigg)
$$

This leads to $n$ integrals for $n$ degree polynomial operator. We will find some special cases of f(x) where 
this property can simplified to single integral
### Particular solutions using Inverse Polynomial Operator
### For Differential Operator

1. For polynomial function, we can use binomial expansion of $(1-x)^n = 1 + x + x^2 + x^3 + ... + \infty$. The expansion goes to only $D^n/a^n$ because $D^{k}x^n = 0 \space \forall \space k>n$
   $$
   \frac{1}{(D-a)}x^n = \frac{1}{a}(1-\frac{D}{a})^{-1}x^n =\frac{1}{a}(1+\frac{D}{a}+\frac{D^2}{a^2}+...+\frac{D^n}{a^n})x^n
   $$

### For Polynomial Operator

1. Pure exponentiation provided $P(a) \ne 0$
$$
\frac{1}{P(D)}e^{ax} =  \frac{1}{P(a)} e^{ax}
$$
If $P(a) = 0$ then we can use the first non zero derivative of $P(D)$ which is lets say $P^n(D)$
$$
\frac{1}{P(D)}e^{ax} =  x^n\frac{1}{P^n(a)} e^{ax}
$$
2. Exponential Shift 
$$
\frac{1}{P(D)}e^{ax}f(x) = e^{ax}\frac{1}{P(D+a)} f(x)
$$
3. The following is true for $\cos(ax+b)$ as well. Because this only replaces even power terms, you can do a multiply both numerator
and denominator with a polynomial of $D$ to turn odd powers even.
$$
\frac{1}{P(D^2)}\sin(ax+b) = \frac{1}{P(-a^2)}\sin(ax+b)
$$
If $P(-a^2) = 0$ then we can use the first non-zero derivative of $P(D)$ which is lets say $P^n(D)$
$$
   \frac{1}{P(D)}\sin(ax+b) =  x^n\frac{1}{P^n(a)}\sin(ax+b)
$$
4. For other function the inverse polynomial operator can be broken into partial fractions to avoid subsequent integrals which are complicated.
> Note: If $\sin(ax)f(x)$ or $\cos(ax)f(x)$ is present in an LDE, you can make use of *exponential shift* because of the **superposition principle**.
> Assume sin(ax) to be $Im(e^{\iota ax})$ and cos(ax) to be $Re(e^{\iota ax})$. Then 
> the inverse operation can be applied and you will get $e^{ax}\frac{1}{D+a} f(x)$ - take the real or imaginary part and that will be the
> correct particular integral

## Equations Reducible to LDEs with Constant Coefficients
### Euler-Cauchy Homogenous Linear Equation
An $n-th$ order differential equation of the form:
$$
k_nx^n \frac{d^ny}{dx^{n}} + k_{n-1}x^{n-1}\frac{d^{n-1}y}{dx^{n-1}} + ... + k_{1}x\frac{dy}{dx} + k_0y = Q(x)
$$
The most common Cauchy–Euler equation is the second-order equation, which appears in a number of physics and engineering 
applications, such as when solving Laplace's equation in polar coordinates. 

This can be reduced to a constant coefficient LDE, by doing the substitution 
$$
x = e^t ⇒ t = \log(x) 
$$
which on using chain rule gives
$$
\frac{dy}{dx} = \frac{dy}{dt}\frac{dt}{dx} = \frac{dy}{dt}\frac{1}{x}
$$
If $D \equiv d/dt$ then
$$
x\frac{dy}{dx}= Dy
$$
Similarly for higher order
$$
x^n\frac{d^ny}{dx^n}= D(D-1)(D-2)...(D-n)y
$$
So the following becomes
$$
k_nx^n \frac{d^ny}{dx^{n}} + k_{n-1}x^{n-1}\frac{d^{n-1}y}{dx^{n-1}} + ... + k_{1}x\frac{dy}{dx} + k_0y = Q(x)
$$
this
$$
\{k_n[D(D-1)(D-2)...(D-n)] + k_{n-1}[D(D-1)(D-2)...(D-n-1)] + ... + k_{1}[D] + k_0\}y = G(t)
$$
where $G(t)$ is the transformed function by putting $x= e^t$


> The entire equation can also be solved by guessing one of the solution to be $y = x^m$ 
### Legendre's Linear Differential Equation
It is similar to Euler-Cauchy Differential Equation.
$$
k_n(ax+b)^n \frac{d^ny}{dx^{n}} + k_{n-1}(ax+b)^{n-1}\frac{d^{n-1}y}{dx^{n-1}} + ... + k_{1}(ax+b)\frac{dy}{dx} + k_0y = Q(x)
$$

This can also be solved using the same method as Euler-Cauchy. You use the substitution $ax+b=e^t ⇒ t = \log(ax+b)$. 
This gives the following relation
$$
(ax+b)^n \frac{d^ny}{dx^{n}} = a^n D(D-1)(D-2)...(D-n)y = G(t)
$$
where $G(t)$ is the transformed function by putting $ax+b = e^t$

The only difference being the constant $a^n$ in the product.
> Euler-Cauchy LDE is a special case of Legendre's LDE where $a = 1, b=0$ in (ax+b)