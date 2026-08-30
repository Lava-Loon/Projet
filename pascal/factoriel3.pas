program FactorielDeN;

var N, I, S: Integer;

begin
  writeln(' Entrez le nombre a factoriser ');
  readln(N);

  S := 1;
  I := 1;

  repeat
  S := S * I;
  I := I + 1;
  until I > N;
  writeln(N, '! = ', S);
end.  