program CroissanceEntreTroisNombres;

var
  N: array[1..3] of integer;
  I, J, S: integer;

begin
  writeln('Entrez trois nombres : ');
  for I := 1 to 3 do
  begin
    Write('Nombre ', I, ' : ');
    ReadLn(N[I]);
  end;

  for I := 1 to 2 do
  begin
    for J := I + 1 to 3 do
    begin
      if N[I] > N[J] then
      begin
        S := N[I];
        N[I] := N[J];
        N[J] := S;
      end;
    end;
  end;
  for I := 1 to 3 do
  write(N[I], '  ');
end.        
