program PrixDeNPhotocopie;

var N, S : integer;

begin
  write('Entrez le nombre de photocopies : ');
  ReadLn(N);

  if (N >= 1) and (N <= 10) then
  begin
    S := N * 250;
  end
  else if (N > 10) and (N <= 20) then
  begin
     S := N * 200;
  end 
  else if N > 20 then
  begin
    S := N * 100;
  end; 

  WriteLn('La facture correspondante à ', N,' photocopies est ', S,' Ar');

  if N <= 0 then
  begin
    writeln('Arretez de vous moquer de nous');
  end;
end.    
