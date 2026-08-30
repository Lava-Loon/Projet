program FactorielDUnNnombre;

var N, I, S: Integer;

begin
  writeln(' Entrez le nombre a factoriser ');
  readln(N);

  S := 1;
  I := 1;

  while I <= N do
  begin
    S := S * I;
    I := I + 1;
  end;
    writeln( N, '! : ', S);
end.      