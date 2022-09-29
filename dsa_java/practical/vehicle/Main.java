interface Moveable {
    void start();
    void stop();
    void turn(double angle);
    void accelerate(double speed);
    void decelerate(double speed);
}

abstract class Vehicle implements Moveable {
    String engineNumber;
    String chassisNumber;
}

class Car extends Vehicle {
    Car(String engineNumber, String chassisNumber) {
        this.engineNumber = engineNumber;
        this.chassisNumber = chassisNumber;
    }
    public void start() {
        System.out.println("Car started");
    }

    public void stop() {
        System.out.println("Car stopped");
    }

    public void turn(double angle) {
        System.out.println("Car turned at " + angle + " degrees");
    }

    public void accelerate(double speed) {
        System.out.println("Car accelerated to " + speed + " kmph");
    }

    public void decelerate(double speed) {
        System.out.println("Car decelerated to " + speed + " kmph");
    }

    public void steering(double angle) {
        System.out.println("Car steering at " + angle + " degrees");
    }
}

class Airplane extends Vehicle {
    Airplane(String engineNumber, String chassisNumber) {
        this.engineNumber = engineNumber;
        this.chassisNumber = chassisNumber;
    }
    public void start() {
        System.out.println("Airplane started");
    }

    public void stop() {
        System.out.println("Airplane stopped");
    }

    public void turn(double angle) {
        System.out.println("Airplane turned at " + angle + " degrees");
    }

    public void accelerate(double speed) {
        System.out.println("Airplane accelerated to " + speed + " kmph");
    }

    public void decelerate(double speed) {
        System.out.println("Airplane decelerated to " + speed + " kmph");
    }

    public void steering(double angle) {
        System.out.println("Airplane steering at " + angle + " degrees");
    }

    public void wings(double angle) {
        System.out.println("Airplane wings at " + angle + " degrees");
    }
}

class Boat extends Vehicle {
    Boat(String engineNumber, String chassisNumber) {
        this.engineNumber = engineNumber;
        this.chassisNumber = chassisNumber;
    }
    public void start() {
        System.out.println("Boat started");
    }

    public void stop() {
        System.out.println("Boat stopped");
    }

    public void turn(double angle) {
        System.out.println("Boat turned at " + angle + " degrees");
    }

    public void accelerate(double speed) {
        System.out.println("Boat accelerated at " + speed + " kmph");
    }

    public void decelerate(double speed) {
        System.out.println("Boat decelerated at " + speed + " kmph");
    }

    public void steering(double angle) {
        System.out.println("Boat steering at " + angle + " degrees");
    }

    public void propeller(int rpm) {
        System.out.println("Boat propeller at " + rpm + " rpm");
    }
}



public class Main {
    public static void main(String[] args) {
        Car car = new Car("123456789", "987654321");
        Airplane airplane = new Airplane("123456789", "987654321");
        Boat boat = new Boat("123456789", "987654321");

        car.start();
        car.stop();
        car.turn(90);
        car.accelerate(100);
        car.decelerate(50);
        car.steering(45);

        airplane.start();
        airplane.stop();
        airplane.turn(90);
        airplane.accelerate(100);
        airplane.decelerate(50);
        airplane.steering(45);
        airplane.wings(45);

        boat.start();
        boat.stop();
        boat.turn(90);
        boat.accelerate(100);
        boat.decelerate(50);
        boat.steering(45);
        boat.propeller(1000);
    }
}
