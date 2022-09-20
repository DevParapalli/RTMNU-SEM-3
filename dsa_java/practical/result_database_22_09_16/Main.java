// package dsa_java.practical.result_database_22_09_16;

import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Paths;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;


public class Main {
    public static void main(String[] args) throws IOException, FileNotFoundException {
        String databaseFileName = Paths.get(System.getProperty("user.dir"), "database.fmt").toString();
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

        List<Student> topBandStudent = new ArrayList<Student>();

        // Create list of top band students
        for (Student student : studentList) {
            if (student.getGradePoint() >= 8.0) {
                topBandStudent.add(student);
            }
        }
        
        // Print the top band students
        System.out.println("Roll.  Name [S1, S2, S3, S4, S5] Grade");
        for (Student student : topBandStudent) {
            System.out.println(student);
        }
    }
}
