program EchangeEntiers;

var
  A, B, temp: integer;

begin
  writeln('Entrez le premier entier : ');
  readln(A);

  writeln('Entrez le second entier : ');
  readln(B);

  writeln('Avant l''echange : A = ', A, ', B = ', B);

  temp :=A;
  A := B;
  B :=temp;

  writeln('Après l''echange : A = ', A, ', B = ', B);


end.

