import java.util.Scanner;

public class Calculatrice2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double nombre2, nombre1, resultat;
        char operation;

        System.out.print("Entrez un nombre : ");
        nombre1 = scanner.nextDouble();

        System.out.print("Entrez un second nombre : ");
        nombre2 = scanner.nextDouble();

        System.out.print("Choisissez une opération (+, -, *, /) : ");
        operation = scanner.next().charAt(0);

        resultat = calculer(nombre1, nombre2, operation);

        System.out.println(nombre2 + " " + operation + " " + nombre1 + " = " + resultat);
    }

    public static double calculer(double nombre1, double nombre2, char op) {
        switch (op) {
            case '+':
                return nombre1 + nombre2;
            case '-':
                return nombre1 - nombre2;
            case '*':
                return nombre1 * nombre2;
            case '/':
                if (nombre2 != 0)
                    return nombre1 / nombre2;
                else {
                    System.out.println("Erreur : division par zéro !");
                    return 0;
                }
            default:
                System.out.println("Opération invalide !");
                return 0;
        }
    }
}
