# Simulation for the Newton-Raphson Method

# need to figureout a way to get f_prime(x) from f(x)

import sympy
import tabulate

sympy.init_printing(use_unicode=True, use_latex=True)

x = sympy.Symbol('x')


# Change the function here
# math.e is E, math.pi is pi
f = x**3 - 4*x + 1
##

f_prime = f.diff(x)




def newton_raphson_method(x0, tol, f, f_prime, output_list): 
    n = 0
    while abs(f.subs(x, x0)) > tol:
        x1 = x0 - f.subs(x, x0)/f_prime.subs(x, x0)
        output_list.append((n, x0, f.subs(x, x0), x1, f.subs(x, x1)))
        x0 = x1
        n += 1
    return (x1, n)

if __name__ == "__main__":
    tol = 1e-3
    x0 = 0
    print("f(x) = ", f)
    print("f'(x) = ", f_prime)
    output = [('Iter', 'X_n', 'F(X_n)', 'X_n+1', 'F(X_n+1)')]
    root, n = newton_raphson_method(x0, tol, f, f_prime, output)
    print(tabulate.tabulate(output, headers='firstrow', tablefmt='fancy_grid'))
    print("The approximate root is", root, "and the number of iterations is", n)
