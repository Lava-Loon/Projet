program LongueurChaine;

uses crt;

function NombreDeCaracteres(chaine: String): Integer;
begin
  NombreDeCaracteres := Length(chaine);
end;

var
  T: String;
  L: Integer;

begin
  clrscr;

  Write('Entrez une chaîne de caractères : ');
  ReadLn(T);

  L := NombreDeCaracteres(T);

  WriteLn('La chaîne "', T, '" contient ', L, ' caractère(s).');

  ReadLn;
end.
