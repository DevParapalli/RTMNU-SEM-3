#include "stdio.h"

unsigned long long recurse_decimal_to_binary(unsigned long long x) {
  if (x == 0)
    return 0;
  if (x == 1)
    return 1;
  if (x % 2 == 0)
    return recurse_decimal_to_binary(x / 2) * 10 + 0;
  else
    return recurse_decimal_to_binary(x / 2) * 10 + 1;
}

unsigned long long recurse_binary_to_decimal(unsigned long long x) {
  if (x == 0)
    return 0;
  if (x == 1)
    return 1;
  if (x % 10 == 0)
    return recurse_binary_to_decimal(x / 10) * 2 + 0;
  else
    return recurse_binary_to_decimal(x / 10) * 2 + 1;
}

unsigned long long loop_binary_to_decimal(unsigned long long x) {
  // return binary_to_decimal(x / 10) + ((x % 10) * 2);
  unsigned long long res = 0;
  unsigned long base = 1;
  while (x > 0) {
    int rem = x % 10;
    res = res + rem * base;
    x = x / 10;
    base = base * 2;
  }
  return res;
}

unsigned long long loop_decimal_to_binary(unsigned long long x) {
    unsigned long long result = 0;
    unsigned long base = 1;
    while (x > 0) {
        int rem = x % 2;
        result = result + rem * base;
        x = x/2; 
        base = base * 10;
    }
    return result;
}



int main() {
  unsigned long long deci = 23;
  printf("Binary Repr. of %llu is %llu\n", deci, loop_decimal_to_binary(deci));

  unsigned long long bina = 10000111100101100;
  printf("Decimal Repr. of %llu is %llu\n", bina, recurse_binary_to_decimal(bina));
  return 0;
}
