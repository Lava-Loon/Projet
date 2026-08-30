program DivisiondeDeuxnombres;

var
  nombre1, nombre2, resultat: real;

begin
  (* Demandez à l'utilisateur de saisir deux nombres *)
  writeln('Entrez le premier nombre : ');
  readln(nombre1);

  writeln('Entrez le second nombre : ');
  readln(nombre2);

  (* verifiez si le second nombre est zéro pour eviter la division par zéro *)
  if nombre2 = 0 then
  writeln('Erreur : division par zéro non permise.')
else
begin
  (* Calculez la division des deux nombres *)
  resultat:= nombre1 / nombre2;

  (* Affichez le resultat *)
  writeln('le resultat de ', nombre1:0:2, ' divisé par ', nombre2:0:2, ' est : ', resultat:0:2)

end;
end.
