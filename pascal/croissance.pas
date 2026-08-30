program CroissanceDeDixNombres;

var
  N : array[1..10] of integer;
  I, J, S : integer;

begin
  writeln('Entrez dix nombres');
  for I := 1 to 10 do
  begin
    write('Nombre ', I, ' : ');
    readln(N[I]);
  end;

  for I := 1 to 9 do
  begin
    for J := I + 1 to 10 do
    begin
      if N[I] > N[J] then
      begin
        S := N[I];
        N[I] := N[J];
        N[J] := S;
      end;
    end;
  end;

    writeln('Voici le tableau trié en ordre croissant');
    for I := 1 to 10 do
    begin
      write(N[I]:5);
      if (I mod 5 = 0) then writeln
    end;

  readln;
end.             
        
