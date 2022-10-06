#include <stdio.h>

void find_waiting_time(int proc_list[], int num_proc, int burst_time[], int waiting_time[]) {
    waiting_time[0] = 0;

    for(int i = 1; i < num_proc; i++) {
        waiting_time[i] = waiting_time[i - 1] + burst_time[i-1]; 
    }
}

void find_turnaround_time(int proc_list[], int num_proc, int burst_time[], int waiting_time[], int turnaround_time[]) {
    // Turnaround time is the time it takes from process generation to obtaining the result

    for(int i = 0; i < num_proc; i++) {
        turnaround_time[i] = burst_time[i] + waiting_time[i];
    }
}


void show(int proc_list[], int num_proc, int burst_time[]) {
    int wt[num_proc], tat[num_proc], total_wait = 0, total_turnaround = 0;

    find_waiting_time(proc_list, num_proc, burst_time, wt);
    find_turnaround_time(proc_list, num_proc, burst_time, wt, tat);

    printf("ID\tBurst\tWait\tTurnaround\n");
    for(int i = 0; i < num_proc; i++) {
        printf("%i\t%i\t%i\t%i\n", proc_list[i], burst_time[i], wt[i], tat[i]);
        total_wait += wt[i];
        total_turnaround += tat[i];
    }
    printf("Average Waiting Time : %.2f\n", (float)total_wait/num_proc);
    printf("Average Turnaround Time: %.2f\n", (float)total_turnaround/num_proc);
}


int main() {
    int proc[] = {1, 2, 3, 4, 5};
    int num_proc = sizeof(proc) / sizeof(proc[0]);
    // Burst time is the time a CPU needs to finish a task
    int burst_time[] = {32, 32, 128, 128, 64};

    show(proc, num_proc, burst_time);
}

/*
ID      Burst   Wait    Turnaround
1       32      0       32
2       32      32      64
3       128     64      192
4       128     192     320
5       64      320     384
Average Waiting Time : 121.60
Average Turnaround Time: 198.40
*/