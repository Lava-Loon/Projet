import java.util.Scanner;

public class Calculatrice {
    public static void main(String[] args) {
        Scanner scanner= new Scanner(System.in);
        double nombre1, nombre2, resultat;
        char operation;

        System.out.println("Bienvenue dans la calculatrice !");
        System.out.print("Entrez un nombre : ");
        nombre1 = scanner.nextDouble();

        System.out.print("Entrez un second nombre : ");
        nombre2 = scanner.nextDouble();

        System.out.print("Choisissez une opération (+, -, *, /) : ");
        operation = scanner.next().charAt(0);

        switch (operation) {
            case '+':
                resultat = nombre1 + nombre2;   
                break;
            case '-':
                resultat = nombre1 - nombre2;
                break;
            case '*':
                resultat = nombre1 * nombre2;
                break;
            case '/':
                if (nombre2 != 0) 
                    resultat = nombre1 / nombre2;
                else {
                    System.out.println("Erreur : impossible de diviser un nombre par 0.");
                    return;
                }      
                break;
            default:
                System.out.println("Operation invalide !");
                return;                
        }

        System.out.println(nombre1 + " " + operation + " " + nombre2 + " = " + resultat);
    }

}