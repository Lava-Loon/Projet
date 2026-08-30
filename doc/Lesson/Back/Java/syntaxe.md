public class NomDeClasse { ... } : Définit une classe, le plan de construction d'un objet (ou le conteneur du programme principal).

public static void main(String[] args) { ... } : Le point d'entrée du programme. C'est ici que l'exécution commence.

System.out.println("...") : Affiche du texte dans la console (terminal) et revient à la ligne.

System.out.print("...") : Affiche du texte sans revenir à la ligne.

Scanner scanner = new Scanner(System.in) : Crée un outil pour lire ce que l'utilisateur tape au clavier.

scanner.nextInt() / .nextDouble() / .nextLine() : Lit un entier, un nombre à virgule ou une ligne de texte entrée par l'utilisateur.

int / double / String / char : Types de variables (Entier, Nombre à virgule, Texte, Caractère unique).

switch(variable) { case x: ... break; } : Structure de contrôle remplaçant plusieurs "if", utile pour tester une variable contre plusieurs valeurs (ex: menu calculatrice).

for (int i = 0; i < N; i++) { ... } : Boucle "pour", exécute le code N fois.

this.variable : Mot-clé désignant "moi-même" (l'objet courant). Utilisé pour différencier une variable de classe d'un paramètre portant le même nom.

new NomDeClasse() : Crée une nouvelle instance (un nouvel objet) à partir d'une classe.

extends JFrame : Héritage. Signifie que notre classe EST une fenêtre graphique (hérite de toutes les fonctionnalités de JFrame).

implements ActionListener : Interface. Promesse que notre classe contient une méthode `actionPerformed` pour réagir aux événements (clics).

JButton : Un bouton cliquable dans une interface graphique Swing.

JOptionPane.showMessageDialog(...) : Affiche une petite fenêtre pop-up de dialogue (pour dire "Gagné !" par exemple).

setLayout(new GridLayout(...)) : Organise les composants en grille (lignes/colonnes).

super() : Appelle le constructeur de la classe parente.
