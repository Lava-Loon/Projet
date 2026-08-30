import java.util.Scanner;

public class Methode {
    public static String hello() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Comment vous vous appelez :");
        String nom =  scanner.nextLine();

        System.out.println("Bonjour " + nom + " ! ");
        return nom;
    }
    public static void âge() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Quel âge as-tu : ");
        String âge = scanner.nextLine();

        System.out.println("Wow, tu as déja " + âge + " ans ! ");

    }
    public static void main(String[] args) {
        hello();
        âge();
    }
}
