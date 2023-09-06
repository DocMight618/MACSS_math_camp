Linear algebra
================

- Name

- How long did this problem set take you?

- How difficult was this problem set? very easy 1 2 3 4 5 very
  challenging

# Basic matrix arithmetic

If

$$\mathbf{a} = \begin{bmatrix}
    2 \\
    2
\end{bmatrix} \quad \mbox{and} \quad \mathbf{b} = \begin{bmatrix}
    1 \\
    3
\end{bmatrix}$$

find:[^1]

1.  $\mathbf{a} + \mathbf{b}$

    $$\mathbf{a} + \mathbf{b} = \begin{bmatrix}
         2 \\
         2
     \end{bmatrix} + \begin{bmatrix}
         1 \\
         3
     \end{bmatrix} = \begin{bmatrix}
         2 + 1 \\
         2 + 3
     \end{bmatrix} = \begin{bmatrix}
         3 \\
         5
     \end{bmatrix}$$

2.  $-4 \mathbf{b}$

    $$-4 \mathbf{b} = -4 \times \begin{bmatrix}
         1 \\
         3
     \end{bmatrix} = \begin{bmatrix}
         -4 \\
         -12
     \end{bmatrix}$$

3.  $3 \mathbf{a} - 4 \mathbf{b}$

    $$3 \mathbf{a} - 4 \mathbf{b} = 3 \times \begin{bmatrix}
         2 \\
         2
     \end{bmatrix} - 4 \times \begin{bmatrix}
         1 \\
         3
     \end{bmatrix} =\begin{bmatrix}
         6 \\
         6
     \end{bmatrix} - \begin{bmatrix}
         4 \\
         12
     \end{bmatrix} = \begin{bmatrix}
         6 - 4 \\
         6 - 12
     \end{bmatrix} = \begin{bmatrix}
         2 \\
         -6
     \end{bmatrix}$$

# More complex matrix arithmetic

Suppose

$$\mathbf{x} = \begin{bmatrix}
    3 \\
    2q \\
    6
\end{bmatrix} \quad \mbox{and} \quad \mathbf{y} = \begin{bmatrix}
    p + 2 \\
    -5 \\
    3r
\end{bmatrix}$$.

If $\mathbf{x} = 2 \mathbf{y}$, find $p, q, r$.[^2]

**Solution:** We can calculate each element of the vector independently,
given our knowledge of the relationship between $\mathbf{x}$ and
$\mathbf{y}$.

So $p = -\frac{1}{2}, q = -5, r = 1$.

# Check for linear dependence

Which of the following sets of vectors are linearly dependent?[^3]

In each part, you can denote each vector as
$\mathbf{a}, \mathbf{b}, \mathbf{c}$ respectively.

1.  $\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ 1 \end{bmatrix}$

    Yes: $\mathbf{a} + \mathbf{b} - \mathbf{c} = \mathbf{0}$

2.  $\begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \begin{bmatrix} 4 \\ 5 \\ 6 \end{bmatrix}, \begin{bmatrix} 7 \\ 8 \\ 9 \end{bmatrix}$

    Yes: $\mathbf{a} - 2 \mathbf{b} + \mathbf{c} = \mathbf{0}$

3.  $\begin{bmatrix} 13 \\ 7 \\ 9 \\ 2 \end{bmatrix}, \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 3 \\ -2 \\ 5 \\ 8 \end{bmatrix}$

    Yes: $0 \mathbf{a} + 1 \mathbf{b} + 0 \mathbf{c} = \mathbf{0}$

4.  $\begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 2 \\ -2 \\ -1 \end{bmatrix}, \begin{bmatrix} 2 \\ 1 \\ 3 \end{bmatrix}$

    Linearly independent.

# Vector length

Find the length of the following vectors:[^4]

1.  $(3,4)$

2.  $(0, -3)$

3.  $(1, 1, 1)$

4.  $(1, 2, 3)$

5.  $(1, 2, 3, 4)$

6.  $(3, 0, 0, 0, 0)$

# Law of cosines

The **law of cosines** states:

$$\cos(\theta) = \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \: \|\mathbf{w}\|}$$

where $\theta$ is the angle from $\mathbf{w}$ to $\mathbf{v}$ measured
in radians. Of importance, $\arccos()$ is the inverse of $\cos()$:

$$\theta = \arccos \left( \frac{\mathbf{v} \cdot \mathbf{w}}{\|\mathbf{v}\| \: \|\mathbf{w}\|} \right)$$

For each of the following pairs of vectors, calculate the angle between
them. Report your answers in both radians and degrees. To convert
between radians and degrees:[^5]

$$\text{Degrees} = \text{Radians} \times \dfrac{180^{o}}{\pi}$$

1.  $\mathbf{v} = (1, 0), \quad \mathbf{w} = (2, 2)$

2.  $\mathbf{v} = (4, 1), \quad \mathbf{w} = (2, -8)$

    Note: you could stop after solving $\mathbf{v} \cdot \mathbf{w}$,
    because the denominator will be irrelevant.

3.  $\mathbf{v} = (1, 1, 0), \quad \mathbf{w} = (1, 2, 1)$

# Matrix algebra

Using the matrices below, calculate the following. Some may not be
defined; if that is the case, say so.[^6]

$$
\mathbf{A} = \left[
  \begin{array}{r}
    3 \\
    -2 \\
    9
  \end{array}
\right]
\quad
\mathbf{B} = \left[
  \begin{array}{r}
    8 \\
    0 \\
    -1
  \end{array}
\right]
\quad
\mathbf{C} = \left[
  \begin{array}{rrr}
    7 & -1 & 5 \\
    0 & 2 & -4
  \end{array}
\right]
\quad
\mathbf{D} = \left[
  \begin{array}{rr}
    3 & 1 \\
    3 & 4 \\
    3 & -7
  \end{array}
\right]
\quad
\mathbf{E} = \left[
  \begin{array}{rrr}
    5 & 2 & 3 \\
    1 & 0 & -4 \\
    -2 & 1 & -6
  \end{array}
\right]
$$

$$
\mathbf{F} = \left[
  \begin{array}{rrr}
    4 & 1 & -5 \\
    0 & 7 & 7 \\
    2 & -3 & 0
  \end{array}
\right]
\quad
\mathbf{G} = \left[
  \begin{array}{rrr}
    2 & -8 & -5 \\
    -3 & 7 & -4 \\
    1 & 0 & 3 \\
    1 & 2 & 6
  \end{array}
\right]
\quad
\mathbf{K} = \left[
  \begin{array}{r}
    9 \\
    -2 \\
    -1 \\
    0
  \end{array}
\right]
$$

$$
\mathbf{L} = \left[
  \begin{array}{rrrr}
    5 & 0 & 3 & 1
  \end{array}
\right]
\quad
\mathbf{M} = \begin{bmatrix}
1 & -1 \\
1 & 3
\end{bmatrix}
$$

1.  $\mathbf{A} + \mathbf{B}$

    $$
     \mathbf{A} + \mathbf{B} = \left[\begin{array}{rrr}3 + 8 \\ -2 + 0 \\ 9 + (-1)\end{array}\right] = \left[\begin{array}{rrr} 11 \\ -2 \\ 8\end{array}\right]
     $$

2.  $-\mathbf{G}$

    $$-\mathbf{G} = (-1) \left[\begin{array}{rrr} 
     2 & -8 & -5\\
     -3 & 7 & -4\\
     1 & 0 & 3\\
     1 & 2 & 6
     \end{array}\right] =
     \left[\begin{array}{rrr} 
     -2 & 8 & 5\\
     3 & -7 & 4\\
     -1 & 0 & -3\\
     -1 & -2 & -6
     \end{array}\right]
     $$

3.  $\mathbf{D}'$

    $$\mathbf{D}' = \left[\begin{array}{rrr}
     3 & 3 & 3\\
     1 & 4 & -7\end{array}\right]
     $$

4.  $\mathbf{C} + \mathbf{D}$

    $\mathbf{C} + \mathbf{D}$ does not exist. The matricies are not the
    same dimensions.

5.  $\mathbf{A}' \mathbf{B}$

    This is a $1 \times 3$ matrix multiplied by a $3 \times 1$ matrix,
    resulting in a $1 \times 1$ matrix (aka a **dot product**).

    $$\mathbf{A}' \mathbf{B} = 3(8) + (-2)(0) + 9(-1) = 24 + 0 - 9 = 15$$

6.  $\mathbf{BC}$

    $\mathbf{BC}$ does not exist. The matricies are non-conformable.

7.  $\mathbf{FB}$

8.  $\mathbf{E} - 5\mathbf{I_3}$

9.  $\mathbf{M}^2$

    Recall that $\mathbf{M}^2 = \mathbf{M}\mathbf{M}$, so we must
    pre-multiply the matrix by itself.

# Matrix inversion

Invert each of the following matricies by hand (you can use a calculator
or computer to check your solution, but be sure to show your work).
Verify you have the correct inverse by calculating
$\mathbf{XX}^{-1} = \mathbf{I}$. Not all of the matricies may be
invertible - if not, show why.[^7]

1.  $\left[ \begin{array}{rr} 2 & 1 \\ 1 & 1 \end{array}\right]$

    **Solution:** Recall the rule for inverting $2 \times 2$ matricies:

    $$\mathbf{X} = \left[ \begin{array}{rr} x_{11} & x_{12} \\ x_{21} & x_{22} \end{array} \right]$$

    Given this rule, first calculate the determinant of the matrix.

    Now we can easily solve for the inverse:

2.  $\left[ \begin{array}{rr} 2 & 1 \\ -4 & -2 \end{array}\right]$

    **Solution:** Solve for the determinant

    At this point we are done. The matrix has a determinant of zero,
    making it singular. Singular matricies cannot be inverted.

3.  $\left[ \begin{array}{rrr} 2 & 4 & 0 \\ 4 & 6 & 3 \\ -6 & -10 & 0 \end{array}\right]$

    **Solution:** With a $3\times3$ matrix, we need to apply
    Gauss-Jordan elimination to obtain the inverse.

    1.  Setup the augmented matrix with the identity matrix

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             2 & 4 & 0 & 1 & 0 & 0 \\
             4 & 6 & 3 & 0 & 1 & 0 \\
             -6 & -10 & 0 & 0 & 0 & 1
           \end{array}
         \right]$$

    2.  Swap row 1 with row 3

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             4 & 6 & 3 & 0 & 1 & 0 \\
             2 & 4 & 0 & 1 & 0 & 0
           \end{array}
         \right]$$

    3.  Add $\frac{2}{3} \times$ row 1 to row 2

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & -2/3 & 3 & 0 & 1 & 2/3 \\
             2 & 4 & 0 & 1 & 0 & 0
           \end{array}
         \right]$$

    4.  Add $\frac{1}{3} \times$ row 1 to row 3

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & -2/3 & 3 & 0 & 1 & 2/3 \\
             0 & 2/3 & 0 & 1 & 0 & 1/3
           \end{array}
         \right]$$

    5.  Add row 2 to row 3

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & -2/3 & 3 & 0 & 1 & 2/3 \\
             0 & 0 & 3 & 1 & 1 & 1
           \end{array}
         \right]$$

    6.  Divide row 3 by 3

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & -2/3 & 3 & 0 & 1 & 2/3 \\
             0 & 0 & 1 & 1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    7.  Subtract $3 \times$ row 3 from row 2

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & -2/3 & 0 & -1 & 0 & -1/3 \\
             0 & 0 & 1 & 1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    8.  Multiply row 2 by $-\frac{3}{2}$

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & -10 & 0 & 0 & 0 & 1 \\
             0 & 1 & 0 & 3/2 & 0 & 1/2 \\
             0 & 0 & 1 & 1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    9.  Add $10 \times$ row 2 to row 1

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             -6 & 0 & 0 & 15 & 0 & 6 \\
             0 & 1 & 0 & 3/2 & 0 & 1/2 \\
             0 & 0 & 1 & 1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    10. Divide row 1 by $-6$

        $$
         \left[ 
           \begin{array}{rrr|rrr} 
             1 & 0 & 0 & -5/2 & 0 & -1 \\
             0 & 1 & 0 & 3/2 & 0 & 1/2 \\
             0 & 0 & 1 & 1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    11. The inverse of the original matrix is the right part of the
        augmented matrix.

        $$
         \left[ \begin{array}{rrr} 2 & 4 & 0 \\ 4 & 6 & 3 \\ -6 & -10 & 0 \end{array}\right]^{-1} = \left[ 
           \begin{array}{rrr} 
             -5/2 & 0 & -1 \\
             3/2 & 0 & 1/2 \\
             1/3 & 1/3 & 1/3
           \end{array}
         \right]$$

    12. Factor out common terms

        $$
         \left[ \begin{array}{rrr} 2 & 4 & 0 \\ 4 & 6 & 3 \\ -6 & -10 & 0 \end{array}\right]^{-1} = \dfrac{1}{6}\left[ 
           \begin{array}{rrr} 
             -15 & 0 & -6 \\
             9 & 0 & 3 \\
             2 & 2 & 2
           \end{array}
         \right]$$

# Dummy encoding for categorical variables

Ordinary least squares regression is a common method for obtaining
regression parameters relating a set of explanatory variables with a
continuous outcome of interest. The vector $\hat{\mathbf{b}}$ that
contains the intercept and the regression slope is calculated by the
equation:

$$\hat{\mathbf{b}} = (\mathbf{X'X})^{-1}\mathbf{X'y}$$

If an explanatory variable is nominal (i.e. ordering does not matter)
with more than two classes
(e.g. $\{\text{White}, \text{Black}, \text{Asian}, \text{Mixed}, \text{Other}\}$),
the variable must be modified to include in the regression model. A
common technique known as **dummy encoding** converts the column into a
series of $n-1$ binary ($0/1$) columns where each column represents a
single class and $n$ is the total number of unique classes in the
original column. Explain why this method converts the column into $n-1$
columns, rather than $n$ columns, in terms of linear algebra.
**Reminder: $\mathbf{X}$ contains both the dummy encoded columns as well
as a column of $1$s representing the intercept.**[^8]

**Solution:** In order to calculate $\hat{\mathbf{b}}$, we must be able
to calculate $(\mathbf{X'X})^{-1}$. And we can only invert
$\mathbf{X'X}$ if the matrix is **nonsingular**. What could make a
matrix singular? If at least one column is **linearly dependent**
(i.e. its value can be produced by linear combinations of other columns
in the matrix), then the matrix will not be **full rank**. A square
matrix that is not full rank will produce a determinant of 0, which as
you’ll recall in the case of a $2 \times 2$ matrix would require
division by zero.

$$
\mathbf{X}^{-1} = \frac{1}{0} \left[
  \begin{array}{rr}
  x_{22} & -x_{12} \\
  -x_{21} & x_{11}
  \end{array} \right]
$$

So $\mathbf{X'X}$ must be full rank in order to invert it. How does this
effect our one-hot encoding scheme? If we were to convert the
explanatory variable into $n$ binary variables, the matrix $X$ is
nonsingular. That is, any of the columns in $\mathbf{X}$ can be
represented as a linear combination of the other columns.

This leads to the problem of what happens when we calculate
$\mathbf{X}'\mathbf{X}$. Suppose

$$\mathbf{X} = \begin{bmatrix}
1 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}$$

It’s transpose is

$$\mathbf{X}' = \begin{bmatrix}
1 & 1 \\
1 & 0 \\
0 & 1
\end{bmatrix}$$

So

$$
\mathbf{X}'\mathbf{X} = \begin{bmatrix}
2 & 1 & 1 \\
1 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}
$$

The problem is that $\mathbf{X}'\mathbf{X}$ is still non-invertible. The
determinant of $\mathbf{X}'\mathbf{X}$ is 0. Notice that the first
column $\mathbf{x_1}$ is a linear combination of
$\mathbf{x_2} + \mathbf{x_3}$. In fact, $\mathbf{X}$ being invertible is
a necessary condition for $\mathbf{X}'\mathbf{X}$ being invertible.

# Solve the system of equations

Solve the following systems of equations for $x, y, z$, either via
matrix inversion or substitution:[^9]

1.  System \#1

    - Using matrix inversion:

      You can use (a lot) of Gauss-Jordan elimination to invert the
      matrix. Or I can just use R.

          ##      [,1] [,2] [,3]
          ## [1,]  0.1  0.3  0.5
          ## [2,]  0.3 -0.1  0.5
          ## [3,]  0.3 -0.1 -0.5
          ## [1]  2  2 -1

    - Using substitution

      1.  1 x third row added to second row and 2 x third row added to
          first row.

      2.  -3 x first row added to second row

      3.  Solve for $y$ and $z$

      4.  Substitute $y$ into the first equation

          $$x + 3(2) = 8 \rightarrow x = 2$$

      $$x = 2, y = 2, z = -1$$

2.  System \#2

    - Using matrix inversion

          ##        [,1]    [,2]     [,3]
          ## [1,]  0.200  0.2000 1.39e-17
          ## [2,] -0.171 -0.0286 2.86e-01
          ## [3,]  0.314 -0.1143 1.43e-01
          ## [1]  2.400 -0.629 -0.514

    - Using substitution

      1.  Add row 1 to row 2

      2.  Solve for $x$

          $$5x = 12 \rightarrow x = \frac{12}{5}$$

      3.  Plug in $x = 2$ and add row 1 x 3 to row 3

      4.  Solve for $z$

          $$4 \left( \frac{12}{5} \right) + 7z = 6 \rightarrow z = -\frac{18}{35}$$

      5.  Solve for $y$

          $$\frac{12}{5} - y + 2 \left( - \frac{18}{35} \right) = 2 \rightarrow y = -\frac{22}{35}$$

      $$x = \frac{12}{5}, y = -\frac{22}{35}, z = -\frac{18}{35}$$

# Multiplying by $\mathbf{0}$

When it comes to real numbers, we know that if $xy = 0$, then either
$x=0$ or $y=0$ or both. One might believe that a similar idea applies to
matricies, but one would be wrong. Prove that if the matrix product
$\mathbf{AB=0}$ (by which we mean a matrix of appropriate dimensionality
made up entirely of zeroes), then it is not necessarily true that either
$\mathbf{A=0}$ or $\mathbf{B=0}$. Hint: in order to prove that something
is not always true, simply identify one example where
$\mathbf{AB=0}, \: \mathbf{A, B \neq 0}$.[^10]

**Solution:** Generally speaking, it is easy to show that something is
*not* necessarily true. All that is needed is a single counterexample!
And in this case, there are infinitely many counterexamples. Here’s one:

$$
\mathbf{A} = \left[\begin{array}{rr}
1 & -1\\
-1 & 1\end{array}\right] \qquad \mathbf{B} = \left[\begin{array}{rr}
1 & 1\\
1 & 1\end{array}\right]
$$

$$
\mathbf{AB} = \left[\begin{array}{rr}
1(1)+1(-1) & 1(1)+1(-1)\\
1(-1)+1(1) & 1(-1)+1(1)\end{array}\right] =  \left[\begin{array}{rr}
0 & 0\\
0 & 0\end{array}\right]
$$

[^1]: Pemberton and Rau 11.1.2

[^2]: Pemberton and Rau 11.1.3

[^3]: Pemberton and Rau 11.1.4

[^4]: Simon and Blume 10.10

[^5]: Simon and Blume 10.12

[^6]: Grimmer HW5.3

[^7]: Simon and Blume 8.19

[^8]: My own creation

[^9]: Gill 4.19

[^10]: Grimmer HW5.5
