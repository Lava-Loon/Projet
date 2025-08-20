import java.util.Scanner; // Permet de lire ce que l'utilisateur tape au clavier

public class Tictactoe2 {

    // On crée une grille 3x3 vide, représentée par un tableau de caractères
    static char[][] board = {
        {' ', ' ', ' '},
        {' ', ' ', ' '},
        {' ', ' ', ' '}
    };

    // Le joueur actuel : on commence par 'X'
    static char currentPlayer = 'X';

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean gameEnded = false;

        // Boucle principale du jeu
        while (!gameEnded) {
            printBoard();

            int row, col;

            // Lire et valider la ligne
            while (true) {
                System.out.print("Joueur " + currentPlayer + ", entrez une ligne (1, 2 ou 3) : ");
                row = scanner.nextInt();
                if (row >= 1 && row <= 3) {
                    break;
                } else {
                    System.out.println("Entrée invalide. Veuillez entrer 1, 2 ou 3.");
                }
            }

            // Lire et valider la colonne
            while (true) {
                System.out.print("Joueur " + currentPlayer + ", entrez une colonne (1, 2 ou 3) : ");
                col = scanner.nextInt();
                if (col >= 1 && col <= 3) {
                    break;
                } else {
                    System.out.println("Entrée invalide. Veuillez entrer 1, 2 ou 3.");
                }
            }

            // Accéder à la bonne case du tableau (on retire 1 car index de tableau commence à 0)
            if (board[row - 1][col - 1] != ' ') {
                System.out.println("Cette case est déjà occupée. Choisissez une autre.");
                continue;
            }

            // Placer le symbole du joueur
            board[row - 1][col - 1] = currentPlayer;

            // Vérifier si le joueur a gagné
            if (checkWinner(currentPlayer)) {
                printBoard();
                System.out.println("Le joueur " + currentPlayer + " a gagné !");
                gameEnded = true;
            }
            // Vérifier si la grille est pleine
            else if (isBoardFull()) {
                printBoard();
                System.out.println("Match nul !");
                gameEnded = true;
            }
            // Sinon, changer de joueur
            else {
                currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
            }
        }
    }

    // Affiche la grille
    public static void printBoard() {
        System.out.println("_____________");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                System.out.print(board[i][j] + " | ");
            }
            System.out.println();
            System.out.println("_____________");
        }
    }

    // Vérifie si un joueur a gagné
    public static boolean checkWinner(char player) {
        for (int i = 0; i < 3; i++) {
            // Vérifier lignes
            if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
                return true;
            // Vérifier colonnes
            if (board[0][i] == player && board[1][i] == player && board[2][i] == player)
                return true;
        }

        // Vérifier diagonales
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
            return true;
        if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
            return true;

        return false;
    }

    // Vérifie si la grille est pleine
    public static boolean isBoardFull() {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[i][j] == ' ')
                    return false;
        return true;
    }
}
