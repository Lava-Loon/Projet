import java.util.Scanner;

public class Tableau {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Entrez le nombre de joueurs que vous voulez : ");
        int nombresdejoueurs = scanner.nextInt();
        
        if (nombresdejoueurs < 1) {
            System.out.println("Nombre invalide ! Arrêt du programme.");
            return;
        }
    
        String[] joueurs = new String[nombresdejoueurs];
        scanner.nextLine();

        for (int i = 0 ; i < nombresdejoueurs; i++) {
            System.out.print("Entrez le nom du joueur n° " + (i + 1) + " : ");
            joueurs[i] = scanner.nextLine();
        }

        System.out.println("Voici la liste des joueurs : ");
        for (int i = 0 ; i < nombresdejoueurs; i++) {
            System.out.println("-Joueur n°" + (i + 1) + " : " + joueurs[i]);
        } 
    }
}
