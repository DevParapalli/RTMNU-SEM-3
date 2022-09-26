import java.util.Scanner;

public class Initials {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        // nextLine returns the entire line rather than individual words with next().
        String name = sc.nextLine();
        StringBuffer initials = new StringBuffer();
        String[] name_parts = name.split(" ", 0);
        System.out.print("Initials: ");
        for (int i = 0; i < name_parts.length; i++) {
            initials.append(Character.toUpperCase(name_parts[i].charAt(0)));
        }
        System.out.println(initials);
    }
}
