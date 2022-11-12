import java.util.Scanner;

class IncorrectRollNumberException extends Exception {
    public IncorrectRollNumberException(String s) {
        super(s);
    }
}

class NameTooShortException extends Exception {
    public NameTooShortException(String s) {
        super(s);
    }
}

class InvalidMarksException extends Exception {
    public InvalidMarksException(String s) {
        super(s);
    }
}

class Student {
    int rollNumber;
    String name;
    int[] marks;

    Student(int rollNumber, String name, int ...marks) throws IncorrectRollNumberException, NameTooShortException, InvalidMarksException {
        
        System.out.println("Student("+rollNumber+", "+name+", ...marks)");

        if (rollNumber < 0) {
            throw new IncorrectRollNumberException("Roll number cannot be negative");
        }
        this.rollNumber = rollNumber;
        
        if (name.length() < 3) {
            throw new NameTooShortException("Name should be at least 3 characters long");
        }
        this.name = name;

        for (int i = 0; i < marks.length; i++) {
            if (marks[i] < 0 || marks[i] > 100) {
                throw new InvalidMarksException("Marks should be between 0 and 100");
            }
        }
        this.marks = marks;
    }


}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of students: ");
        int numberOfStudents = sc.nextInt();
        Student[] students = new Student[numberOfStudents];
        for (int i = 0; i < numberOfStudents; i++) {
            System.out.println("Enter the roll number and name" + (i + 1) + ": ");
            int rollNumber = sc.nextInt();
            String name = sc.nextLine();
            System.out.println("Enter the number of subjects: ");
            int numberOfSubjects = sc.nextInt();
            int[] marks = new int[numberOfSubjects];
            for (int j = 0; j < numberOfSubjects; j++) {
                System.out.println("Enter the marks of subject " + (j + 1) + ": ");
                marks[j] = sc.nextInt();
            }
            students[i] = new Student(rollNumber, name, marks);
            
        }
        //print the details of the students
        for (Student s: students) {
            System.out.print(s.rollNumber + " " + s.name + " ");
            for (int m: s.marks) {
                System.out.print(m + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
