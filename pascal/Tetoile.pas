program TriangleDEtoiles;

var N, I, J : integer;

begin
  write('Entrez un nombre : ');
  readln(N);

  if N <= 0 then
  begin
    writeln('Veuillez entrer un nombre positif et non nul');
    halt;
  end;
  // R := N + N - 1;
  for I := 1 to N do
  begin
    for J := 1 to N * 2 - 1 do
    begin
      if (J >= (N - I + 1)) and (J <= (N + I - 1)) then
      begin
        write('*');
      end
      else
      begin
        write(' ');
      end;
    end;
    writeln;
  end;
end.    
      