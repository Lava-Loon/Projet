program SaisirEtAfficherTableau;

uses crt;

var 
  Tableau: array[1..10] OF Integer;
  I: Integer;

begin
  clrscr;
  writeln(' Veuillez saisir 10 entiers : ');

  for I := 1 to 10 do
  begin
    writeln('Nombre ', I, ': ');
    readln(Tableau[I]);
  end;

  writeln;
  writeln('Les entiers saisis sont :');

  for I := 1 to 10 do
  begin
    write(Tableau[I]:5);
    if (I mod 5 = 0) then writeln;
  end;

end.    
