abstract class Complex {
    double real;
    double imaginary;
    public abstract Complex add(Complex c);
    public abstract Complex subtract(Complex c);
    public abstract Complex multiply(Complex c);
    public abstract Complex divide(Complex c);
    public abstract double abs();
    public abstract double arg();
    public abstract Complex conjugate();
    public abstract Complex reciprocal();
    public abstract String toString();
}

class ComplexNumber extends Complex {

    ComplexNumber(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    public Complex add(Complex c) {
        return new ComplexNumber(this.real + c.real, this.imaginary + c.imaginary);
    }

    public  Complex subtract(Complex c) {
        return new ComplexNumber(this.real - c.real, this.imaginary - c.imaginary);
    }

    public Complex multiply(Complex c) {
        // (a+ib)*(c+id) = (ac-bd) + i(ad+bc)
        return new ComplexNumber(
            this.real * c.real - this.imaginary * c.imaginary,
            this.real * c.imaginary + this.imaginary * c.real);
    }

    public Complex divide(Complex c) {
        // (a+ib)/(c+id) = (ac+bd)/(c^2+d^2) + i(bc-ad)/(c^2+d^2)
        return new ComplexNumber(
            (this.real * c.real + this.imaginary * c.imaginary) / (c.real * c.real + c.imaginary * c.imaginary),
            (this.imaginary * c.real - this.real * c.imaginary) / (c.real * c.real + c.imaginary * c.imaginary));
    }

    public double abs() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }

    public double arg() {
        return Math.atan2(this.imaginary, this.real);
    }

    public Complex conjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }

    public Complex reciprocal() {
        return new ComplexNumber(this.real / (this.real * this.real + this.imaginary * this.imaginary),
            -this.imaginary / (this.real * this.real + this.imaginary * this.imaginary));
    }

    public String toString() {
        return this.real + " + " + this.imaginary + "i";
    }

}

public class Main {

    public static void main(String[] args) {
        Complex c1 = new ComplexNumber(1, 2);
        Complex c2 = new ComplexNumber(3, 4);

        System.out.println("c1 + c2 = " + c1.add(c2));
        System.out.println("c1 - c2 = " + c1.subtract(c2));
        System.out.println("c1 * c2 = " + c1.multiply(c2));
        System.out.println("c1 / c2 = " + c1.divide(c2));
        System.out.println("|c1|    = " + c1.abs());
        System.out.println("arg(c1) = " + c1.arg());
        System.out.println("-c1-    = " + c1.conjugate());
        System.out.println("1/c1    = " + c1.reciprocal());


    }

}
