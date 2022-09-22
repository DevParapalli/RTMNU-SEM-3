import java.util.Scanner;

public class Student {
    public static void main(String[] args) {
        int[][] marks = new int[10][5];
        String[] name = new String[10];
        int[] rollno = new int[10];

        // double total = 0, avg;
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 10; i++) {
            System.out.print("Enter name of student" + (i + 1) + ":");
            name[i] = scanner.next();
            // System.out.print("Enter Marks of Subject" + (i + 1) + ":");
            for (int j = 0; j < 5; j++) {
                System.out.println("Subject Marks of " + (j + 1));
                marks[i][j] = scanner.nextInt();
            }
            System.out.print("Enter roll no. of student" + (i + 1) + ":");
            rollno[i] = scanner.nextInt();
        }

        System.out.println("Top Band Students");
        for (int i = 0; i < 10; i++) {
            int total = 0;
            for (int j = 0; j < 5; j++) {
                total += marks[i][j];
            }
            if (total > 500 * 0.8) {
                // Top Band Student
                System.out.println(name[i] + " " + rollno[i]);
            }
        }

        scanner.close();
    }

}