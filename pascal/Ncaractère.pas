program CompterCaractere;

uses crt;

function CompterCaractere(Ch: String; C: char): Integer;
var I, N: Integer;
begin
  N := 0;
  for I := 1 to Length(Ch) do
  begin
    if Ch[I] = C then
      N := N + 1;
  end;
  CompterCaractere := N;
end;

var
  Cdc: String;
  Z: char;
  R: Integer;

begin
  clrscr;
  Write('Entrez une chaine de caractères : ');
  ReadLn(Cdc);
  Write('Entrez le caractère à chercher : ');
  ReadLn(Z);

  R := CompterCaractere(Cdc, Z);

  WriteLn('Le caractère "', Z, '" apparait ', R, ' fois dans la chaine.');
  ReadLn;
end.  
      
        
    