#include <stdio.h>

int main() {
  int a;
  int b;

  printf("Entrez un nombre : ");
  scanf("%d", &a);

  printf("Entrez un autre nombre : ");
  scanf("%d", &b);

  printf("%d + %d = %d \n", a, b, a + b);

  return 0;
}