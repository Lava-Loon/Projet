program MoyenneDeDixNombres;

var N: array[1..10] of real;
I: integer;
S, M: real;

begin
  S := 0.0;

  writeln('Entrez dix nombres :');
  for I := 1 to 10 do
  begin
    write('Nombre', I,' : ');
    readln(N[I]);
    S := S + N[I];
  end;

  M := S / 10;
  writeln('La moyenne des notes est : ', M:0:2);

  readln;
end.  

  