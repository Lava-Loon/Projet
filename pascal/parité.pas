program PairOuImpair;

var
  n: integer;

begin
  writeln('Entrez un nombre entier : ');
  readln(n);

  if n mod 2 = 0 then
  begin
    writeln('Le nombre ', n, ' est pair.');
  end
  else
  begin
    writeln('Le nombre ', n, ' est impair');
  end;
  
  end. 