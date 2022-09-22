import java.util.logging.Logger;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;


public class Main {
    public static void main(String[] args) {
        List <Employee> employeeList = new ArrayList<Employee>();
        
        // Create a list of employees
        employeeList.add(new Employee(0, 50000, new Address(0, "E", "F", 5), "E"));
        employeeList.add(new Employee(1, 10000, new Address(1, "A", "B", 1), "A"));
        employeeList.add(new Employee(2, 20000, new Address(2, "B", "C", 2), "B"));
        employeeList.add(new Employee(3, 30000, new Address(3, "C", "D", 3), "C"));
        employeeList.add(new Employee(4, 40000, new Address(4, "D", "E", 4), "D"));
        employeeList.add(new Employee(5, 50000, new Address(5, "E", "F", 5), "E"));
        employeeList.add(new Employee(6, 10000, new Address(6, "A", "B", 1), "A"));
        employeeList.add(new Employee(7, 20000, new Address(7, "B", "C", 2), "B"));
        employeeList.add(new Employee(8, 30000, new Address(8, "C", "D", 3), "C"));
        employeeList.add(new Employee(9, 40000, new Address(9, "D", "E", 4), "D"));
        
        System.out.println("Employee ID | Salary | PinCode | Name | Tax");
        System.out.println("=============================================");
        for(Employee employee:employeeList) {
            System.out.println("Employee " + employee.getId() + "  | " + employee.getTakeHomeSalary() + "  | " + employee.getAddress().getPinCode() + "       | " + employee.getName() + "    | " + (employee.getTotalSalary() - employee.getTakeHomeSalary()));
        }
    }
}
