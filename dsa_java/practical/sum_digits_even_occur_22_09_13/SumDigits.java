// package dsa_java.practical.sum_digits_22_09_13;

import java.util.Scanner;
public class SumDigits {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Number: ");
        // Input Integer
        int number = scanner.nextInt();
        int sum_of_digits = 0;
        while (number > 0) {    
            sum_of_digits += number % 10;
            number /= 10;
        }

        System.out.println("Sum of Digits: " + sum_of_digits);

        scanner.close();
    }
}