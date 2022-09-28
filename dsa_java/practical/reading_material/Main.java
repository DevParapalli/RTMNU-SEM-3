class ReadingMaterial {
    String title;
    int price; // cents/paisa
}

class Book extends ReadingMaterial {
    long iSBN; // 13 digits
}

enum Month {
    JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER
}

class Magazine extends ReadingMaterial {
    Month month;
}

class CompactDisc extends ReadingMaterial {
    int duration; // Seconds
}

public class Main {
    public static void main(String[] args) {
        System.out.println("Name of Article Price --");
        
        Book book = new Book();
        book.title = "The Alchemist";
        book.price = 25500;
        book.iSBN = 9788172234980L;
        System.out.println(book.title + "   " + book.price + " " + book.iSBN);
        
        Magazine magazine = new Magazine();
        magazine.title = "The Economist";
        magazine.price = 12500;
        magazine.month = Month.JANUARY;
        System.out.println(magazine.title + "   " + magazine.price + " " + magazine.month);
        
        CompactDisc cd = new CompactDisc();
        cd.title = "The Dark Side";
        cd.price = 50000;
        cd.duration = 361;
        System.out.println(cd.title + "   " + cd.price + " " + cd.duration);
    }
}

/*
Name of Article Price --
The Alchemist   25500 9788172234980
The Economist   12500 JANUARY
The Dark Side   50000 361 
*/