program AfficherBonsoir;

var
  compteur: integer;

begin
  compteur := 1;
  
  while compteur <= 10 do
  begin
    writeln('Bonsoir');
    compteur := compteur + 1;
  end;
end.
