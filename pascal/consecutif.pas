program dixNombresConsecutif;

var N : array[1..10] of Integer;
var I : integer;
var S : Boolean;

begin
  writeln('Entrez dix nombres : ');
  for I := 1 to 10 do
  begin
    write('Nombre ', I,' : ');
    ReadLn(N[I]);
  end;
  
  S := True;
  for I := 1 to 9 do
  begin
    if N[I + 1] <> N[I] + 1 then
    begin
      S := False;
      Break;
    end;
  end;

  if S then
    writeln('Les nombres sont consecutifs')
  else
    writeln('Les nombres ne sont pas consecutifs');    
end.  



