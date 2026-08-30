program PGCDDeDeuxNombres;

uses crt;

function PGCDDeDeuxNombres(M, N: Integer):Integer;

begin
  while M <> N do
  begin
    if M > N then
      M := M - N
    else
      N := N - M;
    PGCDDeDeuxNombres := M;  
  end;
end;

var A, B: Integer;

begin
  clrscr;
  
  write('Entrez le premier nombre : ');
  readln(A);

  Write('Entrez le second nombre : ');
  readln(B);
  
  writeln('Le PGCD entre ', A,' et ', B,' est : ',PGCDDeDeuxNombres(A, B));
  
  readln;
end.  
  