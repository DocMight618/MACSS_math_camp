Critical points and approximation
================

# Sketch a function

Sketch the graph of a function (any function you like, no need to
specify a functional form) that is:[^1]

1.  Continuous on $[0,3]$ and has the following properties: an absolute
    minimum at 0, an absolute maximum at 3, a local maximum at 1 and a
    local minimum at 2.
2.  Do the same for another function with the following properties: 2 is
    a **critical number** (i.e. $f'(x) = 0$ or $f'(x)$ is undefined),
    but there is no local minimum and no local maximum.

**Solution:** There are many, many (in fact, uncountably infinitely
many) correct answers to this question, but they will all have a few
characteristics in common. For the first function, the lowest value of
the function must be produced by $x=0$, and the highest value of the
function must be produced by $x=3$. Furthermore, the graph must change
from moving up to moving down at $x=1$ and from moving down to moving up
at $x=2$. For the second graph, there simply must be a saddle point at
$x=2$ - for $x=2$ to be a critical point, it must be a local minimum, a
local maximum, or a saddle point, but we’ve specified that there are no
local minima and no local maxima - and the graph must not change from
increasing to decreasing or vice versa at any point.[^2]

<img src="03-critical-points_files/figure-gfm/function-1-1.png" width="90%" style="display: block; margin: auto;" />

# Find critical values

Find the critical values of these functions:[^3]

1.  $f(x) = 5x^{3/2} - 4x$

    **Solution:** First, find the derivative of the function.

    $$f'(x) = \frac{3}{2}(5)x^{3/2 - 1} - 4 = \frac{15}{2}x^{1/2} - 4 = \frac{15\sqrt{x}}{2} - 4$$

    If we set this derivative equal to 0 and solve, we get the following
    critical point:

    $\frac{15\sqrt{x}}{2} - 4 = 0$

    $\frac{15\sqrt{x}}{2} = 4$

    $15\sqrt{x} = 8$

    $\sqrt{x} = \frac{8}{15}$

    $x = \left(\frac{8}{15}\right)^2$

    $x = \frac{8^2}{15^2}$

    $x = \frac{64}{225}$

3.  $s(t) = 3t^4 + 4t^3 - 6t^2$

    **Solution:** The derivative of $s(t)$ requires simple power rule:

    $$s'(t) = 4(3)t^{4-1} + 3(4)t^{3-1} - 2(6)t^{2-1} = 12t^3 + 12t^2 - 12t = 12t (t^2 + t - 1)$$

    If we set this equal to zero, we immediately see that $t=0$ is a
    critical point. However, we cannot “eyeball” if/where
    $(t^2 + t - 1) = 0$. For that, we will need to use the quadratic
    formula. In case you don’t remember, the quadratic formula helps us
    find the roots of a quadratic function – the points at which the
    function equals 0. Think of a generic quadratic equation,
    $f(x) = ax^2 + bx + c$, where $a, b, c$ are the coefficients or
    constants to each term. Then,

    $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

    In our case with $t^2 + t - 1$, $a=1, b=1, c=-1$. Let’s plug these
    into the formula.

    $t = \frac{-1 \pm \sqrt{1^2 - 4(1)(-1}}{2(1)}$
    
    $t = \frac{-1 \pm \sqrt{1 + 4}}{2}$
    
    $t = \frac{-1 \pm \sqrt{5}}{2}$

    $t = \frac{-1 - \sqrt{5}}{2}, \frac{-1 + \sqrt{5}}{2}$

    Great. We have three critical points:
    $t = \frac{-1 - \sqrt{5}}{2}, 0, \frac{-1 + \sqrt{5}}{2}$.

4.  $f(r) = \dfrac{r}{r^2 + 1}$

    **Solution:** We can use the quotient rule to find the derivative.

    $$f'(r) = \frac{(r)' (r^2+1) - r (r^2 + 1)'}{(r^2+1)^2} = \frac{(1)(r^2+1) - r(2r)}{(r^2+1)^2} = \frac{r^2 + 1 - 2r^2}{(r^2+1)^2} = \frac{1-r^2}{(r^2+1)^2}$$

    To find the critical values, set the numerator of $s'(r)$ equal
    to 0. (Remember that since we are dealing with a fraction, we only
    need to find where the numerator equals 0. Also, given the nature of
    the denominator, we don’t have to worry about whether the function
    is ever undefined.)

    $$1-r^2 = 0 \Longrightarrow r^2 = 1 \Longrightarrow r = \pm 1$$

5.  $h(x) = x \ln(x)$

    **Solution:** The function requires product rule to differentiate.

    $$h'(x) = x \cdot (\ln x)' + x' \cdot \log x = x \cdot \frac{1}{x} + 1 \cdot \log x = 1 + \log x$$

    Now set this derivative equal to zero and solve.

    $1 + \log x = 0$

    $\log x = -1$

    $x = e^{-1}$

    $x = \frac{1}{e}$

# Find absolute minimum/maximum values

Find the absolute minimum and absolute maximum values of the functions
on the given interval:[^4]

1.  $f(x) = 3x^2 - 12x + 5, [0,3]$

    **Solution:** First, we must identify the critical points; to do
    this, we must find $f'(x)$. By our rules of derivation,
    $f'(x) = 6x -12$. The critical points will then be where
    $f'(x) = 6x-12 = 0$. Solving for $x$ then gives $x=2$. As this is a
    continuous function over the given interval, the absolute minimum
    and absolute maximum values must be at critical points or the
    endpoints of the interval. In this case, the set of candidate values
    of $x$ is then {0, 2, 3}. Evaluating the function at these points
    gives $f(0) = 5$, $f(2) = -7$, and $f(3) = -4$. So the absolute
    maximum occurs where $x=0, f(x) = 5$ and the absolute minimum occurs
    where $x=2, f(x) = -7$. It is a useful check of our work to make
    sure that $x=2$ gives a local minimum - after all, since $x=2$ is
    not one of the endpoints, in order to be the absolute minimum it
    must be a local minimum as well. To see whether it is a local
    minimum, we evaluate $f''(x)$ where $x=2$. $f''(x) = (6x-12)' = 6$,
    so $f''(2) = 6 > 0$. Since the second derivative is positive, the
    first derivative must be increasing at $x=2$ - in other words, it
    must be moving from negative to positive - and $x=2$ is indeed a
    local minimum.

2.  $f(t) = t\sqrt{4 - t^2}, [-1,4]$

    **Solution:** As before, we must first identify critical points. To
    find $f'(t)$, we must use both the power rule and the chain rule.
    The power rule tells us that
    $f'(t) = t(\sqrt{4-t^2})' + (t)'\sqrt{4-t^2}$. By the chain rule,
    the derivative of $\sqrt{4-t^2}$ is
    $\frac{1}{2}(4-t^2)^{-\frac{1}{2}}(4-t^2)' = \frac{1}{2}(4-t^2)^{-\frac{1}{2}}(-2t) = -t(4-t^2)^{-\frac{1}{2}}$.
    So the derivative of $f(t)$ is
    $f'(t) = -t^2(4-t^2)^{-\frac{1}{2}} + \sqrt{4-t^2}$. Setting this
    equal to zero and adding $t^2(4-t^2)^{-\frac{1}{2}}$ to both sides
    gives $t^2(4-t^2)^{-\frac{1}{2}} = \sqrt(4-t^2)$. Multiplying both
    sides by $\sqrt{4-t^2}$ then gives $t^2 = 4-t^2$; solving for $t$
    then gives $t = \pm \sqrt{2}$. Of course, $- \sqrt{2}$ is outside of
    our domain, so we can ignore it and instead only investigate
    $\sqrt{2}$.

    To see something about the behavior of the function at this point,
    we have to take the second derivative. Omitting the steps involved
    (it would be good practice to see if you can get the same answer!),
    $f''(t) = -t^3(4-t^2)^{-\frac{3}{2}} -3t(4-t^2)^{-\frac{1}{2}}$. At
    $t = \sqrt{2}$, this will be negative, so $t=\sqrt{2}$ produces a
    local maximum.

    Note that this function is not actually defined over the entire
    interval provided - if $t>2$, then we’d have to take the square root
    of a negative number. So the *effective* endpoints of the interval,
    for the purpose of finding the absolute minimum and maximum, are -1
    and 2. So our candidates for minimum and maximum are where
    $t \in \{-1,\sqrt{2},2\}$. Plugging in, we get $f(-1) = -\sqrt{3}$,
    $f(\sqrt{2}) = 2$, and $f(2) = 0$. So the absolute maximum occurs
    where $t = \sqrt{2}$, and the absolute minimum occurs at $t=-1$.

3.  $s(x) = x - \ln(x), [1/2, 2]$

    **Solution:** This one should be less painful than the previous
    problem. First, we need to find $s'(x)$. Remember, the derivative of
    the natural log of $x$ is just $\frac{1}{x}$! So
    $s'(x) = 1 - \frac{1}{x}$. Setting this equal to 0, we get
    $0 = 1-\frac{1}{x}$, which means $1 = \frac{1}{x}$, or $x=1$. Let’s
    check whether this is a minimum or a maximum.
    $s''(x) = \frac{1}{x^2}$, so $s''(1) = 1 > 0$. Since the second
    derivative is positive at $x=1$, $x=1$ should produce a local
    minimum. Plugging in $x=1$ and the endpoints of the interval, we get
    $s(1/2) = 1.19$, $s(1) = 1$, and $s(2) = 1.31$. $x=1$ is therefore
    not only produces a local minimum, but it produces the absolute
    minimum. The absolute maximum occurs at one of the endpoints, where
    $x=2$.

4.  $h(p) = 1 - e^{-p}, [0,1000]$

    **Solution:** The procedure should be getting familiar by now.
    First, we find the derivative of $h(p)$, giving us $h'(p) = e^{-p}$.
    However, we can make an interesting observation when we set this
    equal to 0, namely that $e^{-p}$ never equals 0! Its limit as $p$
    goes to infinity is 0, but it is not 0 for any finite $p$, let alone
    one in our interval. So we have no critical points, and the
    endpoints will give us the absolute minimum and maximum over the
    interval. Plugging in, we get $h(0) = 0$ and $h(1000)$ is very close
    to 1, so over our interval, $p=0$ produces the absolute minimum and
    $p = 1000$ produces the absolute maximum.

# A function with no local minima/maxima

Demonstrate that the function $f(x) = x^5 + x^3 + x + 1$ has no local
maximum and no local minimum.[^5]

**Solution:** This proof might seem hard to approach, so let’s just see
what happens when we try to find a local minimum or maximum. First, as
usual, we have to find the derivative, and we find that
$f'(x) = 5x^4 + 3x^2 +1$. Next, we have to set this equal to zero and
solve for $x$. After looking at the equation $5x^4 + 3x^2 +1 = 0$,
though, we might make an important observation - namely, that this has
no solutions! There are two ways we could show this fact. First, we
could create a variable $y = x^2$, rewrite the equation as
$5y^2 +3y +1 = 0$, and then observe that the quadratic equation gives us
no solutions. Second, and perhaps more elegantly, we can observe that
$x^4 \geq 0$ and $x^2 \geq 0$ for all $x$. Therefore
$5x^4 + 3x^2 + 1 \geq 5(0)+3(0) + 1 = 1$. So $f'(x) \geq 1 > 0$ for all
$x$. Thus, we see that the derivative never equals zero, and the
function has no critical points. But all local maxima and local minima
occur at critical points, so the function cannot have a local maximum or
local minimum.

# Approximate root-finding

Show that the equation

$$x^7 - 6x + 4 = 0$$

has a root between $0$ and $1$.[^6]

1.  Find an initial approximation by ignoring the term $x^7$.

    **Solution:** If we ignore $x^7$, we can solve for the root as

    $-6x + 4 = 0 \rightarrow -6x = -4 \rightarrow x = \frac{4}{6} = \frac{2}{3}$

3.  Use Newton’s method to find the root correct to 3 decimal places.

    **Solution:** Recall that the first derivative of the function is
    $f'(x) = x^6 - 6$. Assume a starting value of $x_0 = 0.7$.

    $x_0 = 0.7$

    $x_1 = x_0 - \frac{x_0^7 - 6 x_0 + 4}{7 x_0^6 - 6}$

    $x_1 = 0.7 - (0.0227271)$

    $x_1 = 0.677273$

    $x_2 = x_1 - \frac{x_1^7 - 6 x_1 + 4}{7 x_1^6 - 6}$

    $x_2 = 0.677273 - (-0.000324455)$
    
    $x_2 = 0.677597$

    $x_3 = x_2 - \frac{x_2^7 - 6 x_2 + 4}{7 x_2^6 - 6}$

    $x_3 = 0.677597 - (-5.92353 \times 10^-8)$

    $x_3 = 0.677597$ 

# Apply the mean value theorem

Does a continuous, differentiable function exist on $[0,2]$ such that
$f(0) = -1$, $f(2) = 4$, and $f'(x) \le 2 \  \forall \, x$? Use the mean
value theorem to explain your answer.[^7]

**Solution:** First we set up the mean value theorem which states that,
if a function is continuous and differentiable over some interval, then
a $c$ exists such that $f'(c) = \frac{f(b) - f(a) }{b-a}$.

We plug in the values given by the problem and find,
$f'(c) = \frac{f(2) - f(0)}{2 - 0} = \frac{4 - - 1}{2} = \frac{5}{2}$.

The problem states that the derivative of the function is less than or
equal to 2 over this entire interval, but the mean value theorem tells
us that that the derivative must equal 2.5 at some point. So by
demonstrating this contradiction, we’ve shown that the earlier values
could not have come from a continuous, differentiable function.

[^1]: Grimmer HW3.1

[^2]: Example graph derived using method described at
    <https://math.stackexchange.com/questions/1539815/reconstructing-a-function-from-its-critical-points-and-inflection-points>
    .

[^3]: Grimmer HW3.2

[^4]: Grimmer HW3.3

[^5]: Grimmer HW3.4

[^6]: Pemberton and Rau 10.1.3

[^7]: Grimmer HW3.5
