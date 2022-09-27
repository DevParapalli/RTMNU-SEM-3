class Employee {
    private int id;
    private int basicSalary;
    private String name;
    private int apartmentNumber;
    private String apartmentName;
    private String roadName;
    private int pinCode;

    public Employee(int id, String name, int basicSalary, int apartmentNumber, String apartmentName, String roadName,
            int pinCode) {
        this.id = id;
        this.basicSalary = basicSalary;
        this.apartmentNumber = apartmentNumber;
        this.apartmentName = apartmentName;
        this.roadName = roadName;
        this.pinCode = pinCode;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getApartmentNumber() {
        return apartmentNumber;
    }

    public String getApartmentName() {
        return apartmentName;
    }

    public String getRoadName() {
        return roadName;
    }

    public int getPinCode() {
        return pinCode;
    }

    public int getTotalSalary() {
        return basicSalary + // Basic Salary
                (basicSalary * 20 / 100) + // House Rent Allowance
                (basicSalary * 45 / 100);// Dearness Allowance

    }

    public int getTakeHomeSalary() {
        return getTotalSalary() - (basicSalary * 7 / 100); // Profession Tax
    }
}

public class Main2 {
    public static void main(String[] args) {
        Employee[] employeeList = {
                new Employee(0, "Name A", 50000, 0, "Apartment E", "Road F", 500004),
                new Employee(1, "Name B", 10000, 1, "Apartment A", "Road B", 100004),
                new Employee(2, "Name C", 20000, 2, "Apartment B", "Road C", 200004),
                new Employee(3, "Name D", 30000, 3, "Apartment C", "Road D", 300004),
                new Employee(4, "Name E", 40000, 4, "Apartment D", "Road E", 400004),
                new Employee(5, "Name F", 50000, 5, "Apartment E", "Road F", 500004),
                new Employee(6, "Name G", 10000, 6, "Apartment A", "Road B", 100004),
                new Employee(7, "Name H", 20000, 7, "Apartment B", "Road C", 200004),
                new Employee(8, "Name I", 30000, 8, "Apartment C", "Road D", 300004),
                new Employee(9, "Name J", 40000, 9, "Apartment D", "Road E", 400004)
        };

        System.out.println("Employee ID | Salary | PinCode | Name   | Tax");
        System.out.println("==============================================");

        for (int i = 0; i < employeeList.length; i++) {
            System.out.println(
                    "Employee " + employeeList[i].getId() + "  | " + employeeList[i].getTakeHomeSalary() + "  | "
                            + employeeList[i].getPinCode() + "  | " + employeeList[i].getName() + " | "
                            + (employeeList[i].getTotalSalary() - employeeList[i].getTakeHomeSalary()));
        }
    }
}
