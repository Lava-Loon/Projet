program ValeurAbsolue;

uses crt;

function ValeurAbsolue(A: Integer): Integer;

begin
  if A < 0 then
    ValeurAbsolue := -A
  else
    ValeurAbsolue := A;
end;

var N: Integer;

begin
  clrscr;
   
  Write('Veuillez entrer un nombre : ');
  ReadLn(N);

  Write('La valeur absolue de ', N,' est : ');

  N := ValeurAbsolue(N);

  WriteLn(N);

  ReadLn;
end.  