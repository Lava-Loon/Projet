program SommeDePaN;

var
  P, N, i, S: Integer;

begin
  writeln('Entrez la valeur de P :');
  readln(P);
  writeln('Entrez la valeur de N :');
  readln(N);

  S := 0;
  i := P;

  while i <= N do
  begin
    S := S + i;
    i := i + 1;
  end;
  writeln('La somme S de ', P, ' à ', N, ' est : ', S);
end.
