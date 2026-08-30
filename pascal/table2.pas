program TableDeN;

var N, I: integer;

begin
  writeln(' Entrez le nombre a multiplier ');
  readln(N);

  I := -1;

  while I <= 9 do
  begin
    I := I + 1;
    S := N * I;
    writeln( N, 'x', I, '=', S:5);
    if (I mod 5 =0) then writeln;
  end;
end.    
