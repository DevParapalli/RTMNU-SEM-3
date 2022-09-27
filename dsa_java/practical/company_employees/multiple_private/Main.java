import java.util.logging.Logger;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;


public class Main {
    public static void main(String[] args) {
        List<Employee> employeeList = new ArrayList<>();

        // Create a list of employees
        employeeList.add(new Employee(0, "Name A", 50000, 0, "Apartment E", "Road F", 500004));
        employeeList.add(new Employee(1, "Name B", 10000, 1, "Apartment A", "Road B", 100004));
        employeeList.add(new Employee(2, "Name C", 20000, 2, "Apartment B", "Road C", 200004));
        employeeList.add(new Employee(3, "Name D", 30000, 3, "Apartment C", "Road D", 300004));
        employeeList.add(new Employee(4, "Name E", 40000, 4, "Apartment D", "Road E", 400004));
        employeeList.add(new Employee(5, "Name F", 50000, 5, "Apartment E", "Road F", 500004));
        employeeList.add(new Employee(6, "Name G", 10000, 6, "Apartment A", "Road B", 100004));
        employeeList.add(new Employee(7, "Name H", 20000, 7, "Apartment B", "Road C", 200004));
        employeeList.add(new Employee(8, "Name I", 30000, 8, "Apartment C", "Road D", 300004));
        employeeList.add(new Employee(9, "Name J", 40000, 9, "Apartment D", "Road E", 400004));

        System.out.println("Employee ID | Salary | PinCode | Name   | Tax");
        System.out.println("==============================================");
        for (Employee employee : employeeList) {
            System.out.println("Employee " + employee.getId() + "  | " + employee.getTakeHomeSalary() + "  | "
                    + employee.getAddress().getPinCode() + "  | " + employee.getName() + " | "
                    + (employee.getTotalSalary() - employee.getTakeHomeSalary()));
        }
    }
}
