program PGCDDeMaN;

var M, N : integer;

begin
  write('Entrez le premier nombre : ');
  readln(M);
  
  write('Entrez le second nombre : ');
  readln(N);

  if (M <= 0) or (N <= 0) then
  begin
    writeln('Veuillez entrer un nombre positif');
    halt;
  end;

  while M <> N do 
  begin
    if M > N then
      M := M - N
    else
      N := N - M;
    end;

  writeln('Le PGCD est : ', M);       
end.    

    