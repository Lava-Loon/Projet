program ProduitDeuxNombres;

var
  nombre1, nombre2, produit: real;

begin
  writeln('Entrez le premier nombre : ');
  readln(nombre1);
  
  writeln('Entrez le second nombre : ');
  readln(nombre2);

  produit := nombre1 * nombre2;

  writeln('Le produit de ', nombre1, ' et ', nombre2, ' est : ', produit);
end.


