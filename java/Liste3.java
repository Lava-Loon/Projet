import java.util.Scanner;
import java.util.LinkedList;

public class Liste3 {
    public static void main(String[] args) {
        LinkedList<String> collection = new LinkedList<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Entrer des éléments à stocker(Entrer 'stop' pour finir) : " );
        
        while (true) {
            System.out.print("→ ");
            String saisie = scanner.nextLine();

            if (saisie.equalsIgnoreCase("stop")) {
                break;
            }

            collection.add(saisie);
        }    
        
        System.out.println("\nEléments enregistrés : ");    
        for (int i = 0; i < collection.size(); i++) {
            System.out.println("- " + collection.get(i));
        }
        
        System.out.println("\nSouhaitez-vous supprimer un mot ? (oui/non)");
        String reponse = scanner.nextLine();

        if (reponse.equalsIgnoreCase("oui")) {
            System.out.print("Entrez le mot à supprimer : ");
            String motASupprimer = scanner.nextLine();

        if (collection.remove(motASupprimer)) {
            System.out.println("Le mot '" + motASupprimer + "' a été supprimé.");
        } else {
            System.out.println("Le mot n’a pas été trouvé dans la liste.");
        }
        }
        
        System.out.println("\nVoici la nouvelle liste : ");    
        for (int i = 0; i < collection.size(); i++) {
            System.out.println("- " + collection.get(i));
        }

    }   
}
