import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Tictactoe extends JFrame implements ActionListener {

    private JButton[][] buttons = new JButton[3][3];
    private char currentPlayer = 'X';

    public Tictactoe() {
        setTitle("Tic Tac Toe");
        setSize(400, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 3));

        // Créer les 9 boutons
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                buttons[i][j] = new JButton("");
                buttons[i][j].setFont(new Font("Arial", Font.BOLD, 60));
                buttons[i][j].addActionListener(this);
                add(buttons[i][j]);
            }
        }

        setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        JButton buttonClicked = (JButton) e.getSource();

        // Si la case est vide
        if (buttonClicked.getText().equals("")) {
            buttonClicked.setText(String.valueOf(currentPlayer));
            buttonClicked.setEnabled(false);

            if (checkWinner()) {
                JOptionPane.showMessageDialog(this, "Le joueur " + currentPlayer + " a gagné !");
                resetBoard();
                return;
            }

            if (isBoardFull()) {
                JOptionPane.showMessageDialog(this, "Match nul !");
                resetBoard();
                return;
            }

            // Changer de joueur
            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        }
    }

    private boolean checkWinner() {
        // Vérifie les lignes, colonnes et diagonales
        for (int i = 0; i < 3; i++) {
            if (match(buttons[i][0], buttons[i][1], buttons[i][2])) return true;
            if (match(buttons[0][i], buttons[1][i], buttons[2][i])) return true;
        }
        return match(buttons[0][0], buttons[1][1], buttons[2][2]) ||
               match(buttons[0][2], buttons[1][1], buttons[2][0]);
    }

    private boolean match(JButton b1, JButton b2, JButton b3) {
        return !b1.getText().equals("") &&
               b1.getText().equals(b2.getText()) &&
               b2.getText().equals(b3.getText());
    }

    private boolean isBoardFull() {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (buttons[i][j].getText().equals("")) return false;
        return true;
    }

    private void resetBoard() {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++) {
                buttons[i][j].setText("");
                buttons[i][j].setEnabled(true);
            }
        currentPlayer = 'X';
    }

    public static void main(String[] args) {
        new Tictactoe();
    }
}
