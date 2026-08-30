import java.util.ArrayList;

public class Liste {
    public static void main(String[] args) {
        ArrayList<String> joueurs = new ArrayList<>();
        
        joueurs.add("Naivo");
        joueurs.add("Koto");
        joueurs.add("Bema");

        System.out.println("Voici la liste des joueurs : " + joueurs);
    }
}