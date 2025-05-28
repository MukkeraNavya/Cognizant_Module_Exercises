import java.util.ArrayList;
import java.util.Scanner;

public class StudentList {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<>();
        String name;

        System.out.println("Enter student names (type 'done' to finish):");
        while (!(name = sc.nextLine()).equalsIgnoreCase("done")) {
            students.add(name);
        }

        System.out.println("Student Names:");
        for (String student : students) {
            System.out.println(student);
        }

        sc.close();
    }
}