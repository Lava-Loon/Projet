program SigneDunNombre;

var n: real;

begin
  writeln(' Entrez un nombre ');
  readln(n);

  if (n > 0) then
  begin
    writeln(' Votre nombre est positif ');
  end  
  else if (n < 0) then
  begin
    writeln(' Votre nombre est negatif ');
  end  
  else
  begin
    writeln(' Votre nombre est nul ');
  end;  
end.
