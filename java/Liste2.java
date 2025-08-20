import java.util.Scanner;
import java.util.ArrayList;



public class Liste2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> collection = new ArrayList<>();

        System.out.println("Entrez des éléments à stocker (tapez 'stop' pour finir) : ");

        while (true) {
            System.out.print("→ ");
            String saisie = scanner.nextLine();

            if (saisie.equalsIgnoreCase("stop")) {
                break;
            }

            collection.add(saisie);
        
        }
        System.out.println("\n🧾 Contenu de la collection :");
        for (int i = 0; i < collection.size(); i++) {
            System.out.println("- " + collection.get(i));
        }
    }
}
