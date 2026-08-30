program NoteSurVingt;

var nombre: real;

begin
  writeln(' Entrez votre note ');
  readln(nombre);

  if (nombre >= 0) and (nombre <= 9.99) then
  begin
    writeln(' Votre note est non valide ');  
  end
  else if (nombre <= 20) and (nombre >= 10) then
  begin
    writeln(' Votre note est valide ');
  end
  else
    writeln(' Votre note n est pas compris entre 0 a 20 ');
  end.   
      