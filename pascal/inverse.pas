    program InverserChiffres;

var
  N, chiffre, inverse: LongInt;

begin
  writeln('Entrez un entier positif :');
  readln(N);
  
  if N < 0 then
  begin
    writeln('Erreur : veuillez entrer un entier positif.');
    halt;
  end;

  inverse := 0;

  while N <> 0 do
  begin
    chiffre := N mod 10;      
    inverse := inverse * 10 + chiffre; 
    N := N div 10;
  end;

  writeln('Le nombre inversé est : ', inverse);
end.
