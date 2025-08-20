program EchangeEntreDeuxNombres;

var A, B: integer;

begin
  write('Entrez la valeur de A : ');
  ReadLn(A);
  write('Entrez la valeur de B : ');
  ReadLn(B);

  writeln('Avant l''echange : A = ', A,', B = ', B);
  A := A + B;
  B := A - B;
  A := A - B;

  writeln('Après l''échange : A = ', A,', B = ', B);

  ReadLn;
end.  