class Circle implements Comparable<Circle> {
    private double radius;
    public Circle(double radius) {
        this.radius = radius;
    }
    public double getRadius() {
        return radius;
    }
    public double getArea() {
        return Math.PI * radius * radius;
    }
    public double getCircumference() {
        return 2 * Math.PI * radius;
    }
    @Override
    public int compareTo(Circle c) {
        return Double.compare(this.getArea(), c.getArea());
    }
    @Override
    public String toString() {
        return "Radius: " + radius + " Area: " + getArea() + " Circumference: " + getCircumference();
    }
}

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
