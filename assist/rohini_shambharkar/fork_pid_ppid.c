#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
  int pid;
  pid = fork();
  if (pid == -1) {
    printf("Process is unsuccessful!");
    return 0;
  }
  if (pid == 0) {
    // After the execution of the Parent process this part will be executed.
    printf("\n CHILD PROCESS IS UNDER EXECUTION");
    printf("\n Process id of the CHILD PROCESS is %d", getpid());
    printf("\n Process id of a PARENT PROCESS is %d", getppid());
  } else {
    // First this part will be executed as the replica is not created yet.
    printf("\n PARENT PROCESS IS UNDER EXECUTION");
    printf("\n Process id of PARENT PROCESS is %d", getpid());
    printf("\n Process id of a CHILD PROCESS is %d", pid);
    printf("\n Process id of parent of a parent is %d", getppid());
  }
}