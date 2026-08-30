program CalculPrixTTC;

uses crt;

function CalculerPrixTTC(prixHT, tva: Real): Real;
begin
  CalculerPrixTTC := prixHT + (prixHT * tva / 100);
end;

var
  prixHT, tva, prixTTC: Real;

begin
  clrscr;

  Write('Entrez le prix HT : ');
  ReadLn(prixHT);
  Write('Entrez le taux de TVA (en pourcentage) : ');
  ReadLn(tva);

  prixTTC := CalculerPrixTTC(prixHT, tva);

  WriteLn('Le prix TTC est : ', prixTTC:0:2);

  ReadLn;
end.
