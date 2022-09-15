#include <stdio.h>

int main() {
  int a, b;
  a = 3;
  b = 4;

  printf("Before Swap: %d | %d\n", a, b);

  a = a + b;
  b = a - b;
  a = a - b;

  printf("After Swap: %d | %d\n", a, b);
}