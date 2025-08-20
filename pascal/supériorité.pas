program Superi
eurEntreTroisNombres;

var nombre1, nombre2, nombre3: integer;

begin
  writeln(' Entrez le premier nombre :');
  readln(nombre1);

  writeln(' Entrez le second nombre :');
  readln(nombre2);

  writeln(' Entrez le dernier nombre :');
  readln(nombre3);

  if (nombre1 >= nombre2) and (nombre1 >= nombre3) then
  begin
    writeln(' Le plus grand nombre est : ',nombre1);
  end
  else if (nombre2 >= nombre1) and (nombre2 >= nombre3) then
  begin
    writeln(' Le plus grand nombre est : ',nombre2);
  end
  else 
  begin
    writeln(' Le plus grand nombre est : ',nombre3);
  end;
end.    

  