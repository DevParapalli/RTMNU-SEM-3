# Simulation of the False Position Method for finding the root of a function
import math
import tabulate

#  Say the function is f(x) = x^3 - 4x + 1
def f(x):
    # return x**3 - 4*x + 1
    return x*math.e**x - math.cos(x)
    # return 3*x - math.cos(x) - 1


#  False Position Method
def false_position(a, b, tol, f, output_list):
    #  a and b are the initial guesses
    #  tol is the tolerance
    #  n is the number of iterations
    n = 0
    while abs(b - a) > tol:
        c = (a*f(b) - b*f(a)) / (f(b) - f(a))
        output_list.append((n, a, f(a),b, f(b), c, f(c)))
        if math.isclose(f(c), 0, abs_tol=tol):
            return (c, n)
        elif f(a)*f(c) < 0:
            b = c
        else:
            a = c
        n += 1
    return (c, n)


#  Main Program
if __name__ == '__main__':
    #  Initial guesses
    a = 0
    b = 1
    #  Tolerance
    tol = 1e-3
    # Iter, A, F(A), B, F(B), C, F(C)
    output = [('Iter', 'A', 'F(A)', 'B', 'F(B)', 'X_n', 'F(X_n)')]
    #  Call the function
    root, n = false_position(a, b, tol, f, output)
    print(tabulate.tabulate(output, headers='firstrow', tablefmt='fancy_grid'))
    print('The approximate root is', root, 'and the number of iterations is', n + 1)
