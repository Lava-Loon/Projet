# Java Basics

## Structure de base
```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

## Types de données
- Primitifs : `int` (entier), `double` (décimal), `boolean` (vrai/faux), `char` (caractère)
- Objets : `String` (texte), `Integer` (wrapper), `List` (liste)

## Structures de contrôle
- `if (condition) { ... } else { ... }`
- `for (int i = 0; i < 10; i++) { ... }`
- `for (String s : liste) { ... }` (boucle for-each)
- `while (condition) { ... }`

## Programmation Orientée Objet (POO)
- **Classe** : Modèle pour créer des objets.
- **Objet** : Instance d'une classe.
- **Héritage** (`extends`) : Une classe hérite des propriétés d'une autre.
- **Interface** (`implements`) : Contrat que les classes doivent respecter.
- **Polymorphisme** : Capacité d'un objet à prendre plusieurs formes.

## Collections
- `ArrayList<String> liste = new ArrayList<>();` : Liste dynamique
- `HashMap<String, Integer> map = new HashMap<>();` : Dictionnaire clé-valeur
- `HashSet<String> set = new HashSet<>();` : Ensemble unique (pas de doublons)

## Streams (Java 8+)
Permet de traiter des collections de manière fonctionnelle.
```java
List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");

noms.stream()
    .filter(nom -> nom.startsWith("A")) // Filtre
    .map(String::toUpperCase)           // Transforme
    .forEach(System.out::println);      // Action finale
```

## Gestion des exceptions
```java
try {
    // Code risqué
} catch (Exception e) {
    // Gestion de l'erreur
} finally {
    // Code toujours exécuté
}
```

## Méthodes String utiles
- `str.length()`: Longueur de la chaîne
- `str.toUpperCase()` / `toLowerCase()`: Majuscule / Minuscule
- `str.contains("mot")`: Vérifie si le mot est présent
- `str.startsWith("prefix")` / `endsWith("suffix")`: Vérifie le début/fin
- `str.replace("a", "b")`: Remplace les caractères
- `str.split(",")`: Découpe la chaîne en tableau selon le séparateur
- `str.trim()`: Enlève les espaces au début et à la fin

## Modificateurs d'accès
- `public`: Accessible de partout
- `private`: Accessible uniquement dans la classe
- `protected`: Accessible dans le package et les classes filles
- `static`: Appartient à la classe (pas besoin d'instancier l'objet pour l'utiliser)
- `final`: Ne peut pas être modifié (constante ou classe non héritable)

## Switch (Nouvelle syntaxe Java 12+)
```java
String resultat = switch (jour) {
    case "Lundi", "Mardi" -> "Travail";
    case "Samedi", "Dimanche" -> "Repos";
    default -> "Inconnu";
};
```
```
