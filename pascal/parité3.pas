program PariteEntreDixNombres;

var T, T1, T2 : array[1..10] of integer;
var I, J1, J2 : integer;

begin
  J1 := 0;
  J2 := 0;

  Writeln('Entrez dix nombres :');
  for I := 1 to 10 do
  begin
    Write('Nombre ', I,' : ');
    ReadLn(T[I]);
  end;

  for I := 1 to 10 do
  begin  
    if T[I] mod 2 = 0 then
    begin
      J1 := J1 + 1;
      T1[J1] := T[I];
    end
    else
    begin
      J2 := J2 + 1;
      T2[J2] := T[I];
    end;
  end;

  WriteLn('Les nombres pairs sont : ');
  for I := 1 to J1 do
    write(T1[I], ' ');
  writeln;

  WriteLn('Les nombres impairs sont ; ');
  for I := 1 to J2 do
    Write(T2[I], ' ');
  WriteLn;
end.        

      
        