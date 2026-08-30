program NombreNulleEnArriere;

var 
  N: array[1..10] of integer;
  I, J, K: integer;

begin
  J := 0;
  K := 0;

  writeln('Entrez dix nombres :');
  for I := 1 to 10 do
  begin
    write('Nombre ', I, ' : ');
    ReadLn(N[I]);
  end;

  for I := 1 to 10 do
  begin
    if N[I] <> 0 then
    begin
      write(N[I], ' ');
    end
    else
    begin
      J := J + 1;
    end;
  end;

  for K := 1 to J do
  begin
    write('0 ');
  end;
end.       




      