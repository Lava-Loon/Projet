program NombresDeChiffres;

var N, I, J : integer;

begin
  write('Entrez un nombre : ');
  readln(N);

  for I := 1 to N do
  begin
    for J := 1 to I do
    begin 
        write(I);
    end;
    writeln;
    writeln;
  end;
end.        