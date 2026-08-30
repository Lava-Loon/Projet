program FactorielDUnNombre;

var 
  N, I, S: integer;

begin
  writeln('Entrez un nombre à factoriser:');
  readln(N);
    
  S := 1;

  for I := 1 to N do
  begin
    S := S * I;
  end;

  writeln('Le factoriel de ', N, ' est: ', S);
end.
