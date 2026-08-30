program NPuissanceP;

var N, P, I, S : Integer;
var R : real;
begin
  S := 1;

  Write('Entrez un nombre : ');
  ReadLn(N);

  Write('Entrez son exposant : ');
  ReadLn(P);

  if P >= 1 then
  begin
    for I := 1 to P do
    begin
      S := S * N;
    end;
    Writeln(N,' ^ ', P,' = ', S)
  end

  else if P = 0 then
  begin
    Writeln(N,' ^ ', P,' = 1');
  end 

  else
  begin
    for I := 1 to -P do
    begin
      S := S * N;
    end;
    R := 1 / S;
    Writeln(N,' ^ ', P,' = ', R:0:2);
  end;
end.            