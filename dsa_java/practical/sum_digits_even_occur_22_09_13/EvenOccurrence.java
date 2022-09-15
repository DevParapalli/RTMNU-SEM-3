import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;
public class EvenOccurrence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int choice = 0;
        List<Integer> numbers = new ArrayList<Integer>();

        while(choice != -1) {
            System.out.println("Enter Number: ");
            choice = scanner.nextInt();
            if(choice % 2 == 0 && choice != -1){
                numbers.add(choice);
            }
        }
        System.out.println("Occur Count: ");
        int occur_count = scanner.nextInt();

        try{
            System.out.println(numbers.get(occur_count + 1));
        }
        catch(Exception e) {
            System.out.println(-1);
        }

        scanner.close();
    }
}
