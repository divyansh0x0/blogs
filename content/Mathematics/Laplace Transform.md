---
title: "Laplace Transform"
description: "What Laplace and Fourier transforms really"
---

## Integral Transform

> In mathematics, a **transformation**, **transform**, or **self-map** is a function $f$, that maps a set X to itself,
> i.e. f: X → X.
> Examples include linear transformations of vector spaces and geometric transformations, which include projective
> transformations, affine transformations, and specific affine transformations, such as rotations, reflections and
> translations.


An integral transform is any transform $T$ of the following form

$$
(Tf)(u) = \int_{t_1}^{t_2}f(t)K(t,u)dt
$$

The input of this transform is a function $f(t)$ and the output is another function $(Tf)(u)$

The $K$ is called the **kernel** or **nucleus** of the transform.
It is a function of two variables - $t$ and $u$.

Some kernels have an associated inverse kernel $K^{-1}(u,t)$ which yields an
inverse transform.
$$
f(t) = \int_{u_1}^{u_2}{(Tf)(u)K^{-1}(u,t)}
$$

### Why use transforms?

There are many classes of problems that are difficult to solve in their original representation.
An integral transform "maps" an equation from its original "domain" into another domain, in which manipulating
and solving the equation may be much easier. The solution can then be mapped back to the original domain using the
inverse of the integral transform.

## What Laplace Transform Is

The Laplace transform of a function $f(t)$ is defined in two ways for $s>=0$:

1. The unilateral or one sided Laplace transform:
   $$
   \mathcal{L}\{f\}(s) = \int_{0}^{\infty}{e^{-st}f(t)dt}
   $$
2. The bilateral or two sided Laplace transform:
   $$
   \mathcal{B}\{f\}(s) = \int_{-\infty}^{\infty}{e^{-st}f(t)dt}
   $$

In engineering the input $t$ in Laplace transform is time and therefore the use of Bilateral Laplace Transform is
extremely rare.
So when one says "the Laplace transform" without qualification the one-sided transform is usually intended.

### Existence of Laplace Transform

The Laplace Transform exists if the integral $\mathcal{L}\{f\}(s) = \int_{0}^{\infty}{e^{-st}f(t)dt}$ if:

1. If $f(t)$ is sectionally continuous i.e. it is continuous in every subinterval and has finite limit at the end points
   of each subinterval.
2. If $f(t)$ is exponential of order $\gamma$

### Inverse Laplace Transform

The inverse of Laplace Transform is given by the following complex integral which is known by various names -
**Bromwhich integral**, **Fourier-Mellin integral** and **Mellin's inverse formula**:
$$
f(t) = \mathcal{L}^{-1}\{F(s)\}(t) = \frac{1}{2\pi\iota} \lim_{T \rightarrow \infty}\int_{\gamma-\iota T}^{\gamma + \iota T}{e^{st}F(s)ds}
$$
where $\gamma$ is a real number so that the contour path of integration is in the region of convergence of $F(s)$.

In practice though, it is more convenient to decompose a Laplace transform into known transforms of functions and
construct the inverse
by inspection.

## Important Laplace Transforms

> ### Heaviside Step Function
>Also known as **unit step function** denoted by $H$, $u$ or $\theta$
> is a step function, the value of which is zero for negative arguments and one for positive arguments while $H(0)$ has
> different value
> based on convention.
> Example:<br>
> $H(x) := \frac{1}{2}(sgn(x) + 1)$<br>
> The Heaviside Step Function is used as a switch  

|             Name              |                Function                |           Laplace Transform            |       Region of Convergence        |
|:-----------------------------:|:--------------------------------------:|:--------------------------------------:|:----------------------------------:|
|    Heavyside Step Function    |                 $u(t)$                 |             $\frac{1}{s}$              |              all $s$               |
|       Exponential Decay       |       $e^{-\alpha t}\cdot u(t)$        |            $\frac{1}{s+a}$             |      $\text{Re}(s) > -\alpha$      |
|             Sine              |       $\sin(\omega t)\cdot(ut)$        |     $\frac{\omega}{s^2+\omega^2}$      |         $\text{Re}(s) > 0$         |
|            Cosine             |       $\cos(\omega t)\cdot(ut)$        |        $\frac{s}{s^2+\omega^2}$        |         $\text{Re}(s) > 0$         |
|        Hyperbolic Sine        |       $\sinh(\omega t)\cdot(ut)$       |     $\frac{\omega}{s^2-\omega^2}$      | $\text{Re}(s) > \vert\alpha\vert$  |
|       Hyperbolic Cosine       |       $\cosh(\omega t)\cdot(ut)$       |     $\frac{\omega}{s^2-\omega^2}$      | $\text{Re}(s) > \vert\alpha\vert$  |
|  Exponential Decay Sine Wave  | $e^{-\alpha t}\sin(\omega t)\cdot(ut)$ | $\frac{\omega}{(s+\alpha)^2+\omega^2}$ |                                    |
| Exponential Decay Cosine Wave | $e^{-\alpha t}\cos(\omega t)\cdot(ut)$ |   $\frac{s}{(s+\alpha)^2+\omega^2}$    |                                    |
|      Polynomial Function      |            $x^{n}, n \gt 0$            |          $\frac{n!}{s^{n+1}}$          | $\text{Re}(s) > \vert\alpha\vert $ |

## Properties of Laplace Transform

1. Linearity: 
$$
\mathcal{L}\{u+v\}(s) = \mathcal{L}\{u\}(s)+\mathcal{L}\{v\}(s)
$$
2. Exponential function cause shift in Laplace Transform: 
$$
\mathcal{L}\{e^{at}\cdot f(t)\}(s) = \mathcal{L}\{f\}(s-a) 
$$
3. Scaling:
$$
\mathcal{L}\{f(at)\}(s) = \frac{1}{a}L\{f(t)\}(\frac{s}{a}) 
$$
4. Laplace of a derivative of a function is a multiplication of $s$ with the original function
$$
\mathcal{L}\{f^n\}=s^n \mathcal{L}\{f(t)\}(s) - s^{n-1}f(0) - s^{n-2}f'(0) - ... - f^{(n-1)}(0);
$$
The reason for subtraction of derivatives at $t=0$ is because this is our initial condition. So in Laplace transform $t=0$ is always an initial condition in IVP

## Solving LDEs using Laplace Transform
Laplace transform is good for solving IVPs, otherwise characteristic/auxillary equation methods are easier to get a more general 
solution.

For a second order LDE:
$$
ay'' + by' + cy = Q(x)
$$
Take the Laplace transform
$$
a(s^2L\{y\}(s) - sy(0) - y'(0)) + b(sL\{y\}(s)) - y(0)) - c(L\{y\}(s)) = L\{Q(x)\}(s)
$$
which gives
$$
L\{y\}(s) = \frac{ L\{Q(x)\}(s) + asy(0) + ay'(0) + by(0)} {as^2 + bs + c}
$$

Then you can take the inverse Laplace transform to get y(x). The solution you get will be the particular solution for the 
initial conditions $y(0)$ and $y'(0)$