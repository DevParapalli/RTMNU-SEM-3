import java.util.Arrays;

public class Student implements Comparable<Student> {
    int studentRollNumber = 0;
    String studentName = "";
    // MAX MARKS : 100 per subject 
    int[] studentMarks = {0, 0, 0, 0, 0};
    double studentGrade = 0;

    public Student(int roll, String name, int[] marks) {
        studentRollNumber = roll;
        studentName = name;
        studentMarks = marks;

        // Calc Grade
        int total_marks = 0;       
        for (int i : marks) {
            total_marks += i;
        }

        studentGrade = total_marks / 50.0;
    }

    // @Override
    public String toString() {
        return  studentRollNumber + " " + studentName + "  " + Arrays.toString(studentMarks) + " " + studentGrade;
    }

    // @Override
    public String toFileString() {
        return studentRollNumber + ":" + studentName + ":" + studentMarks[0] + ":" + studentMarks[1] + ":" + studentMarks[2] + ":" + studentMarks[3] + ":" + studentMarks[4];
    }

    public double getGradePoint() {
        return studentGrade;
    }

    @Override
    public int compareTo(Student s) {
        return Double.compare(this.studentGrade, s.getGradePoint());
    }
}

// ROLL:NAME:S1:S2:S3:S4:S5