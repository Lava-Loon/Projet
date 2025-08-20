program TableDUnNombre;

uses crt;

function TableDUnNombre(N: Integer): Integer;
var I, S: integer;
begin
  for I := 0 to 10 do
  begin
    S := N * I;
    writeln(N, ' x ', I, ' = ', S);
  end;
  TableDUnNombre := S;    
end;

var A: Integer;

begin
  Write('Veuillez entrer un nombre :');
  readln(A);
  
  writeln('Table de multiplication pour ', A, ' : ');
  TableDUnNombre(A);
  readln;
end.  


