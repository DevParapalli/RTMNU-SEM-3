package dsa_java.self;

import java.util.Scanner;

public class InputStuff {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        // Input a string 
        System.out.println("Enter a string");
        String s = scanner.next();

        // Input an integer
        System.out.println("Enter an integer");
        int i = scanner.nextInt();

        // Input a float
        System.out.println("Enter a float");
        float f = scanner.nextFloat();

        // Input a double
        System.out.println("Enter a double");
        double d = scanner.nextDouble();

        // Input a boolean
        System.out.println("Enter a boolean");
        boolean b = scanner.nextBoolean();

        System.out.println("String: " + s);
        System.out.println("Integer: " + Integer.toString(i));
        System.out.println("Float: " + Float.toString(f));
        System.out.println("Double: " + Double.toString(d));
        System.out.println("Boolean: " + Boolean.toString(b));

        // We don't need to do the toString thing for all, they are implicitly converted to strings.
        // System.out.println("Integer: " + i);
        // will work no problem.

        scanner.close();
    }
}