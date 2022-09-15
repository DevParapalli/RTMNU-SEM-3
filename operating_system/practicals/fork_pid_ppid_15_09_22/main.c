#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

// Doesn't run on Windows


int main() {
    printf("[Original] ");
    unsigned pid = getpid();
    printf("PID: %u |", pid);
    unsigned ppid = getppid();
    printf("PPID: %u \n", ppid);

    fork();

    printf("[Forking] ");
    unsigned pid_2 = getpid();
    printf("PID: %u |", pid_2);
    unsigned ppid_2 = getppid();
    printf("PPID: %u \n", ppid_2);

    return 0;
}