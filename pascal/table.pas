program TableDeN;

var N, I, S: Integer;

begin
  writeln(' Entrez le nombre a multiplier ');
  readln(N);

  for I := 0 to 10 do
  begin
    S := N * I;
    write(N, 'x', I, '=', S,'  ');
    if (I mod 3 = 0) then writeln;
  
  end;
end.