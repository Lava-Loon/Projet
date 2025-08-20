program PariteEntreDixNombres;

var 
  T: array[1..10] of Integer;
  I, sommePairs, sommeImpairs: Integer; 

begin
  sommePairs := 0;
  sommeImpairs := 0;

  Writeln('Entrez dix nombres :');
  for I := 1 to 10 do
  begin
    Write('Nombre ', I, ' : ');
    ReadLn(T[I]);
  end;

  for I := 1 to 10 do
  begin  
    if T[I] mod 2 = 0 then
      sommePairs := sommePairs + T[I]
    else
      sommeImpairs := sommeImpairs + T[I];
  end;

  Write('La somme des éléments pairs est : ', sommePairs, ' (');
  for I := 1 to 10 do
    if T[I] mod 2 = 0 then
      Write(T[I], ' ');
  Writeln(')');

  Write('La somme des éléments impairs est : ', sommeImpairs, ' (');
  for I := 1 to 10 do
    if T[I] mod 2 <> 0 then
      Write(T[I], ' ');
  Writeln(')');

  Writeln('La différence entre la somme des pairs et des impairs est : ', sommePairs - sommeImpairs);
end.
