import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;

public class Liste4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<String> noms = new ArrayList<>();

        System.out.println("Entrez des noms (tapez 'stop' pour terminer) :");

        while (true) {
            System.out.print("→");
            String nom = scanner.nextLine();
            
            if (nom.equalsIgnoreCase("stop")) {
                break;
                
            }
            
            noms.add(nom);
        }

        System.out.println("\nVoici la liste des noms saisis :");
        for (int i = 0; i < noms.size(); i++) {
            System.out.println("-" + noms.get(i)); 
        }
    
        scanner.close();
    }
}
