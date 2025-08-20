program VerifierParite;

uses crt;

procedure VerifierParite(Z: integer);
begin
  if Z mod 2 = 0 then
    writeln('Le nombre ', Z, ' est pair.')
  else
    writeln('Le nombre ', Z, ' est impair.');
end;

var N: integer;

begin
  clrscr;

  write('Entrez un nombre : ');
  ReadLn(N);

  VerifierParite(N);
end.   

