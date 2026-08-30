import java.util.Scanner;

import java.util.ArrayList;

public class Etude {
    public static int nombreElève() {
    Scanner scanner = new Scanner(System.in);
    int nombre;
    do {
        System.out.print("Veuillez entrer le nombre d'élèves dans votre classe : ");
        nombre = scanner.nextInt();
        if (nombre < 1) {
            System.out.println("Nombre invalide ! Le nombre doit être au moins 1.");
        }
    } while (nombre < 1);
    return nombre;
}


    public static ArrayList<Eleve> nomElèves(int x) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Eleve> eleves = new ArrayList<>(); 
        System.out.println("Entrez le nom et l'age des élèves : ");
        for ( int i = 0 ; i < x ; i++ ){

            System.out.print("Elève n° " + (i + 1) + " : ");
            String nom = scanner.nextLine();
            
            System.out.print("Age de " + nom + " : ");
            int age = scanner.nextInt();
            scanner.nextLine();

            eleves.add(new Eleve(nom, age));

        }
    return eleves;
    }

    public static void Liste(ArrayList<Eleve> eleves) {
        System.out.println("\nListe des élèves :");
        for (Eleve e : eleves) {
            e.afficher();
        }
    }

    public static void main(String[] args) {
        int nb = nombreElève();
        ArrayList<Eleve> classe = nomElèves(nb);
        Liste(classe);
        
    }
}
