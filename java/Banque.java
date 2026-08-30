import java.util.Scanner;

public class Banque {
    public static String nom() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Veuillez entrer votre nom : ");
        String nom = scanner.nextLine();
        return nom;
    }
    
    public static double montant(String x) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Bonjour " + x + " ,entrer le montant de votre premier depot : ");
        double montant = scanner.nextDouble();
        return montant;
    }

    public static String calcul(double y) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Voici votre solde bancaire " + y + " € ");
        System.out.print("Voulez vous retirer ou deposer quelques euros ?(Oui/Non) ");
        String Reponse = scanner.nextLine();
        if (Reponse.equalsIgnoreCase("Oui")) {
            System.out.print("Entrer (A) si deposer et (B) si retirer ");
            String Reponse2 = scanner.nextLine();
            if (Reponse2.equalsIgnoreCase("a")) {
                System.out.print("Entrer le montant à deposer : ");
                double depot = scanner.nextDouble();
            }
        }    
    } 

}