program SommeDeNombreImpairDeUnAN;

var N, I, S : integer;

begin
  S := 0;
  write('Entrez un nombre : ');
  readln(N);

  for I := 1 to N do
  begin
    if I mod 2 = 1 then
    S := S + I;
  end;

  writeln('La somme des nombres impairs de 1 à N est : ', S);
end.    
    
      
  