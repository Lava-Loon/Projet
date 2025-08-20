program TableDeN;

var N, I, S: Integer;

begin
  writeln(' Entrez le nombre a multiplier ');
  readln(N);

  I := 0;
  

  repeat
  S := N * I;
  writeln(N, 'x', I, '=', S);
  I := I + 1;
  until I > 10;
end.  
