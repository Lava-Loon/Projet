## Structure d'un programme : 
  '#include <stdio.h>
   int main() {
     // instructions

     return 0; 
   }'

## Créer un programme C :

  `#include <stdio.h>` : signifie Standard Input/Output .Permet d'utiliser notamment printf() et scanf()

  `main()` : point de depart du programme

  `return 0` : indique que le programme s'est terminé normalement

## Variables :

  `int` : nombre entier

  `float` : nombre decimal

  `double` : decimal plus precis

  `char` : caractère qui utilise des apostrophes

## Afficher avec printf() : 

  # Sans variable : 
    printf("texte");

  # Avec variable :
    int age = 17;
    printf("%d(format)", age);

## Format : 

  `%d` : int

  `%f` : float

  `%c` : char

  `%lf` : double

  `%s` : chaîne de caractères

## Scanf() : Récuperer une valeur entrée par l'utilisateur

  int age;

  scanf("%d", &age);

## & :

  age : valeur de age
  &age : adresse memoire de age

## Operateur de comparaison : 

  `=` : affectation
  `==` : égal à 
  `!=` : différent de
  `>` : supérieur à
  `<` : inférieur à
  `>=` : supérieur ou égal à
  `<=` : inférieur ou égal à
  `&&` : et
  `||` : ou
  `!` : non
  
## Boucle :

  for : for(initialisation; condition; modification){
          // code
        }  

  while : while (condition) {
            // code 
          }

  do while (execute au moins une fois puis teste) : do {
               // code 
             } while (condition)

## Tableau : 

  `int nombre[5] = {10, 20, 30, 40, 50};`

  indice :  0  1  2  3  4
  valeur : 10 20 30 40 50

