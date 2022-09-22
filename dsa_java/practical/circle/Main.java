public class Main {

    public static void main(String[] args) {
        double radiusA = 10,
                radiusB = 7;

        Circle circleA = new Circle(radiusA),
                circleB = new Circle(radiusB);

        System.out.println("Circle A: " + circleA.toString());
        System.out.println("Circle B: " + circleB.toString());

        if (circleA.compareTo(circleB) > 0) {
            System.out.println("Circle A is bigger than Circle B");
        } else if (circleA.compareTo(circleB) < 0) {
            System.out.println("Circle B is bigger than Circle A");
        } else {
            System.out.println("Circle A and Circle B are equal");
        }
    }
}
