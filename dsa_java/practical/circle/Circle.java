public class Circle implements Comparable<Circle> {
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
