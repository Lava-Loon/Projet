program ValeurAbsolueDUnNombre;

var nombre, resultat: integer;

begin
  writeln(' Entrez un nombre ');
  readln(nombre);

  if (nombre < 0) then
  begin
    resultat := -nombre;
    writeln(' La valeur absolue de ', nombre, ' est : ', resultat)
  end  
  else
  begin
    resultat := nombre;
  writeln(' La valeur absolue de ', nombre, ' est : ', resultat)
  end;
end.     
    