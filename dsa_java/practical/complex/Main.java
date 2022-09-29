abstract class Complex {
    double real;
    double imaginary;

    public static Complex add(Complex c1, Complex c2) {
        return new Complex(c1.real + c2.real, c1.imaginary + c2.imaginary);
    }
}

class Real extends Complex {
    double real;
    Real(double real) {
        this.real = real;
    }
}

public class Main {
    
}
