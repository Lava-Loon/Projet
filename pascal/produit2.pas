program ProduitDeuxNombres;

var nombre1, nombre2, produit: integer;

begin
  writeln(' Entrez le premier nombre ');
  readln(nombre1);

  writeln(' Entrez le second nombre ');
  readln(nombre2);

  produit := nombre1 * nombre2;

  if (produit < 0) then
  begin
    writeln(' Le produit de ', nombre1, ' et ',nombre2, ' est negatif : ', produit);
  end
  else if (produit > 0) then  
  begin
    writeln(' Le produit de ', nombre1, ' et ', nombre2, ' est positif : ', produit);
  end
  else
  begin
    writeln(' Le produit de ', nombre1, ' et ', nombre2, ' est nul : ', produit);
  end;
  end.    