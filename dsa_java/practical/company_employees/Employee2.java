public class Employee2 {
    private int id = 0;
    private int basicSalary = 0;
    private String name = "";
    // private Address address;
    private int apartmentNumber;
    private String apartmentName;
    private String roadName;
    private int pinCode;

    public Employee(int id,String name, int basicSalary, int apartmentNumber, String apartmentName, String roadName, int pinCode) {
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

    // public Address getAddress() {
    //     return address;
    // }

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