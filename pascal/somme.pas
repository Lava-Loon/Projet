program Somme;

var I, S: integer;

begin
  I := 1;
  S := 0;

  while I <= 10 do
  begin
    S := S + I;
    I := I + 1;
  end;
  writeln(' la somme S = ', S);
end.    
