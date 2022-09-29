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

public class Student {
    int rollNumber;
    String name;
    int[] marks;

    Student(int rollNumber, String name, int ...marks) {
        
        
        this.rollNumber = rollNumber;
        this.name = name;
        this.marks = marks;
    }


}
