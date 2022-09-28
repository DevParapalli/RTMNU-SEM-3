

class Complex {

    double real;
    double imaginary;

    Complex(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    public static Complex add(Complex c1, Complex c2) {
        return new Complex(c1.real + c2.real, c1.imaginary + c2.imaginary);
    }

    public static Complex subtract(Complex c1, Complex c2) {
        return new Complex(c1.real - c2.real, c1.imaginary - c2.imaginary);
    }

    public static Complex multiply(Complex c1, Complex c2) {
        // (a+ib)*(c+id) = (ac-bd) + i(ad+bc)
        return new Complex(
                c1.real * c2.real - c1.imaginary * c2.imaginary,
                c1.real * c2.imaginary + c1.imaginary * c2.real);
    }

    public static Complex divide(Complex c1, Complex c2) {
        // (a+ib)/(c+id) = (ac+bd)/(c^2+d^2) + i(bc-ad)/(c^2+d^2)
        return new Complex(
                (c1.real * c2.real + c1.imaginary * c2.imaginary) / (c2.real * c2.real + c2.imaginary * c2.imaginary),
                (c1.imaginary * c2.real - c1.real * c2.imaginary) / (c2.real * c2.real + c2.imaginary * c2.imaginary));
    }

    public static double abs(Complex c) {
        return Math.sqrt(c.real * c.real + c.imaginary * c.imaginary);
    }

    public static double arg(Complex c) {
        return Math.atan2(c.imaginary, c.real);
    }

    public static Complex conjugate(Complex c) {
        return new Complex(c.real, -c.imaginary);
    }

    public static Complex reciprocal(Complex c) {
        return new Complex(c.real / (c.real * c.real + c.imaginary * c.imaginary),
                -c.imaginary / (c.real * c.real + c.imaginary * c.imaginary));
    }

    public Complex add(Complex c) {
        return Complex.add(this, c);
    }

    public Complex subtract(Complex c) {
        return Complex.subtract(this, c);
    }

    public Complex multiply(Complex c) {
        return Complex.multiply(this, c);
    }

    public Complex divide(Complex c) {
        return Complex.divide(this, c);
    }

    public String toString() {
        return real + " + " + imaginary + "i";
    }

    public static String toString(Complex c) {
        return c.toString();
    }

}

public class NotMain {

    public static void main(String[] args) {
        Complex c1 = new Complex(1, 2);
        Complex c2 = new Complex(3, 4);
        System.out.println("c1 :              " + Complex.toString(c1));
        System.out.println("c2 :              " + Complex.toString(c2));
        System.out.println("Conjugate of c1:  " + Complex.toString(Complex.conjugate(c1)));
        System.out.println("Reciprocal of c1: " + Complex.toString(Complex.reciprocal(c1)));
        System.out.println("|c1|:             " + Complex.abs(c1));
        System.out.println("arg(c1):          " + Complex.arg(c1) + " radians");
        System.out.println("Addition:         " + Complex.toString(Complex.add(c1, c2)));
        System.out.println("Subtraction:      " + Complex.toString(Complex.subtract(c1, c2)));
        System.out.println("Multiplication:   " + Complex.toString(Complex.multiply(c1, c2)));
        System.out.println("Division:         " + Complex.toString(Complex.divide(c1, c2)));
    }

}
