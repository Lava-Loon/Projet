program Bonjour;

var A: integer;

begin
  A := 1;

  repeat
    writeln(' Bonjour ');
    A := A + 1;
  until A > 10;
end.  