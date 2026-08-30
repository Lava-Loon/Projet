program NombresDeChiffresDeN;

var N : real; 
var I : integer;

begin
  write('Entrez un nombre : ');
  readln(N);
  I := 0;

  write(N:0:2, ' contient ');

  while N >= 1 do

  begin
    N := N / 10;
    I := I + 1;
  end;

  writeln(I, ' chiffres ');
end.  

  
  
    

  
