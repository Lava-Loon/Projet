program PariteEntreDixNombres;

var N : array[1..10] of integer;
var I, Np, Ni : integer;

begin
  writeln('Veulliez entrer dix nombre : ');
  for I := 1 to 10 do
  begin
    write('Nombre ', I, ': ');
    readln(N[I]);
  end;
  
  Ni := 0;
  Np := 0;
  for I := 1 to 10 do
  begin
    if N[I] mod 2 = 0 then
    begin
      Np := Np + 1;
    end
    else
    begin
      Ni := Ni + 1;
    end  
  end;   
  write('Les nombres pairs sont ', Np);
  writeln(' et les nombres impairs sont ', Ni);
end.    
        