program SommeDePaN ;

var P, I, N, S: integer;

begin
  writeln(' Entrez le premier nombre ');
  readln(P);

  writeln(' Entrez le dernier nombre ');
  readln(N);

  I := P;
  S := 0;

  repeat
  S := S + I;
  I := I + 1;
  until I > N;
  writeln(' La somme S = ', S);
end.  


