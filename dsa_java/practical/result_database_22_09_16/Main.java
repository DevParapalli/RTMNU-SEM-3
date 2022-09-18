// package dsa_java.practical.result_database_22_09_16;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
// import java.util.Paths;
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

// import dsa_java.practical.result_database_22_09_16.Student;

public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException {
        // System.out.println(args);
        String sep = System.getProperty("file.separator");
        String databaseFileName = Paths.get(System.getProperty("user.dir"), "dsa_java", "practical",
                "result_database_22_09_16", "database.fmt").toString();
        // Read Database file, import into ArrayList
        List<Student> studentList = new ArrayList<Student>();
        try (
                BufferedReader databaseFile = new BufferedReader(
                        new FileReader(databaseFileName))) {
            String databaseLine = databaseFile.readLine();
            while (databaseLine != null) {
                // If the line is a comment, move on
                if (databaseLine.startsWith("//") || databaseLine.length() == 0) {
                    databaseLine = databaseFile.readLine();
                    continue;
                }

                try (Scanner readLine = new Scanner(databaseLine)) {
                    readLine.useDelimiter(":");
                    int roll = readLine.nextInt();
                    String name = readLine.next();

                    int[] marks = {
                            readLine.nextInt(), // S1
                            readLine.nextInt(), // S2
                            readLine.nextInt(), // S3
                            readLine.nextInt(), // S4
                            readLine.nextInt(), // S5
                    };

                    studentList.add(new Student(roll, name, marks));
                    databaseLine = databaseFile.readLine();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Get the students sorted by grade (descending)
        Collections.sort(studentList);
        Collections.reverse(studentList);

        for (Student student : studentList) {
            if (student.getGradePoint() >= 8) {
                System.out.println(student.toString());
            }
        }

    }
}
