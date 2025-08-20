program NombrePaireDePAN;

var P, I, N : Integer;

begin
  write('Entrez le premier nombre : ');
  readln(P);
  write('Entrez le dernier nombre : ');
  readln(N);

  writeln('Les nombres paires comprises entre ', P, ' à ', N, ' sont : ');

  for I := P to N do 
  begin
    if I mod 2 = 0 then
      begin
        write(I:3);
      end;  
  end;

  writeln;
  readln;
end.    