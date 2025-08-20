program MoyenneDeTroisNombre;

var nombre1, nombre2, nombre3: integer;
var resultat: real;

begin
   writeln(' Entrez le premier nombre ');
   readln(nombre1);

   writeln(' Entrez le second nombre ');
   readln(nombre2);

   writeln(' Entrez le dernier nombre ');
   readln(nombre3);

   resultat := (nombre1 + nombre2 + nombre3) / 3;
   writeln(' La moyenne de ', nombre1, ' ; ', nombre2, ' et ', nombre3, ' est : ',resultat:0:2); 
end.