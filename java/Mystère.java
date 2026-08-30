import java.util.Scanner;
import java.util.Random;

public class Mystère {
    public static void joueur() {
        Scanner scanner = new Scanner(System.in);

        Random random = new Random();

        System.out.print("Entrer un nombre entre 1 à 100 : ");

        int nombre1 = scanner.nextInt();
        int S = random.nextInt(100) + 1;
        int I = 0;

        while (nombre1 != S) { 
            I++;

            if (nombre1 < S) {
                System.out.print("Trop petit.Essayez encore : ");

                nombre1 = scanner.nextInt();
            }
            else {
                System.out.print("Trop grand.Essayez encore : ");

                nombre1 = scanner.nextInt();
            }
        }
        System.out.println("Après " + I + " tentatives,vous avez réussi à trouver le nombre " + S );

        System.out.print("Voulez vous continuer à jouer ? Cliquez 0 si oui et 1 si non : ");
        int réponse = scanner.nextInt();

        while (réponse != 0 && réponse != 1) {
            System.out.print("Veuillez entrer le nombre 0 si oui et 1 si non mais non un autre nombre : ");
            réponse = scanner.nextInt();
        }
        if (réponse == 0) {
            joueur();
        }
        else {   
        }
    }
    public static void main(String[] args) {
        joueur();
    }
}