package dsa_java.self;

public class GalToLitTable {
    public static void main(String[] args) {
        double gallons, liters;
        int counter = 0;

        for(gallons = 0; gallons <= 100; gallons++,counter++) {
            liters = gallons * 3.7854;
            System.out.println(gallons + " gallons is " + liters + " liters.");
            if (counter % 10 == 0) {
                System.out.println();
            }
        }
    }
}
