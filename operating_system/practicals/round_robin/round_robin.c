#include <stdio.h>

#define T_QUANT 2

typedef struct Process {
    int pid;
    int arrival_time;
    int burst_time;
    int waiting_time;
    int turnaround_time;
    int remaining_time;
    int exit_time;
} proc;


int is_all_done(proc processes[], int num_proc) {
}

int main() {
    int queue[100] = {0};
    for(int i = 0; i < 100; i++) {
        queue[i] = -1;
    }
    proc processes[] = {
        {0, 0, 5, 0, 0, 0, 0},  // index 0
        {1, 1, 3, 0, 0, 0, 0},  // index 1
        {2, 2, 1, 0, 0, 0, 0},  // index 2
        {3, 3, 2, 0, 0, 0, 0},  // index 3
        {4, 4, 3, 0, 0, 0, 0}   // index 4
    };
    int num_proc = sizeof(processes) / sizeof(proc);

    for (int i = 0; i < num_proc; i++) {
        processes[i].remaining_time = processes[i].burst_time;
    }

    int cpu_time_counter = 0;
    int process_queue_counter = 0;
    int tq_counter = 0;

    int is_done = 0;

    int current_running_pid=-1;
    while (!is_done) {
        // check arrivals
        for (int i = 0; i < num_proc; i++) {
            // check if CPU time equals process's arrival time
            if (cpu_time_counter == processes[i].arrival_time) {
                // add process to queue
                queue[process_queue_counter] = processes[i].pid;
                process_queue_counter++;
            }
        }
        // if tq is up, select next process
        if (cpu_time_counter%T_QUANT == 0) {
            
        }
        // else, reduce time for process by 1,
        processes[queue[process_queue_counter]].remaining_time -= 1;
        // increment cpu_time by 1
        cpu_time_counter++;

        for (int i = 0; i < num_proc; i++) {
            if (processes[i].remaining_time != 0) {
                is_done = 0;
                break;
            }
            else {is_done = 1;}
        }
        
    }
}