import java.util.Scanner;

public class Nom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez votre nom :java ");

        String N = scanner.nextLine();

        System.out.println("Bonjour, " + N + "!");

        scanner.close();
    }
}    