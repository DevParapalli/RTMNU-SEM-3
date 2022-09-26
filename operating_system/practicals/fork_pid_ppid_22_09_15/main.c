#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

void parent_main() {
  printf("[Parent] \n");
  unsigned pid = getpid();
  printf("PID: %u | ", pid);
  unsigned ppid = getppid();
  printf("PPID: %u \n", ppid);
}

void child_main() {
  printf("[Child] \n");
  unsigned pid = getpid();
  printf("PID: %u | ", pid);
  unsigned ppid = getppid();
  printf("PPID: %u \n", ppid);
}

int main() {
  int pid;

  pid = fork();

  if (pid == -1) {
    printf("Creation of child process is unsuccessful, Exiting...");
    return 0;
  } else if (pid == 0) {
    child_main();
  } else {
    parent_main();
  }

  return 0;
}
