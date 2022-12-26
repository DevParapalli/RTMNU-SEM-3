class S {
    static int i;
    static {
        System.out.println("A");
        i = 100;
    }
}

public class ClassTest1Question3 {
    static {
        System.out.println("B");
    }
    public static void main(String[] args) {
        System.out.println("C");
        System.out.println(S.i);
    }
}