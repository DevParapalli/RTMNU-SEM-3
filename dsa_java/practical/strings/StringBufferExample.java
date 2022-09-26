import java.util.Scanner;

public class StringBufferExample {
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        
        StringBuffer original = new StringBuffer();
        StringBuffer output = new StringBuffer();
        
        // original.append(sc.next());
        original.append("GCOEN");

        System.out.println("Original String: " + original);

        // charAt method return the char at a value
        output.append(original.charAt(0));
        output.append(original.charAt(original.length() - 1));
        // Start is included, end is not, returns a string.
        output.append(original.substring(1, original.length() - 1));

        System.out.println(output);
    }
}
