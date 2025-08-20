program SuperioriteEntreDixNombre;

var N : array[1..10] of integer;
I, S : integer;

begin
  writeln('Entrez 10 nombres');
  for I := 1 to 10 do
  begin
    write('Nombre ', I, ' : ');
    readln(N[I]);
  end;

  S := N[1];

  for I := 2 to 10 do
  begin
    if N[I] > S then
    S := N[I];
  end;

  writeln('Le plus grand nombre est : ', S);

  readln;
end.    
