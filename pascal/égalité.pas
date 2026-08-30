program EgaliteEntreDeuxTableaux;

var T1, T2: array[1..10] of Integer;
I: Integer;
N: Boolean;

begin
  Writeln('Entrez les dix premiers nombres');
  writeln;
  for I := 1 to 10 do
  begin
    Write('Nombre ', I,' : ');
    ReadLn(T1[I]);
  end;
  writeln;
  WriteLn('Entrez les dix second nombres');
  writeln;
  for I := 1 to 10 do
  begin
    write('Nombre ', I,' : ');
    ReadLn(T2[I]);
  end;  
 
  N := True;

  for I := 1 to 10 do
  begin
    if T1[I] <> T2[I] then
    begin
      N := False;
      Break;
    end;
  end;

  if N then
    writeln('Les dix premiers et seconds nombres sont égaux')
  else
    writeln('Les dix premiers et seconds ne sont pas égaux');
end.          


