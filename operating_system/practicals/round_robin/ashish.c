#include <stdio.h>
void main() {
    int n, i, j, y, tq, total_time = 0, time = 0, k, x, z;
    float avg_tat = 0, avg_wt = 0;
    printf("Number of Process = ");
    scanf("%d", &n);
    k = n;
    int arrival_time[2 * n], burst_time[2 * n], exit_time[2 * n], waiting_time[2 * n], turnaround_time[2 * n], temp1[2 * n], temp2[2 * n], a[2 * n];
    for (i = 0; i < n; i++) {
        a[i] = i;
        printf("\nArrival time of process %d = ", i + 1);
        scanf("%d", &arrival_time[i]);
        temp1[i] = arrival_time[i];
        printf("Burst time of process %d = ", i + 1);
        scanf("%d", &burst_time[i]);
        temp2[i] = burst_time[i];
        total_time += burst_time[i];
    }
    printf("\nTime Quantum = ");
    scanf("%d", &tq);
    while (total_time > 0) {
        for (i = 0; i < n; i++) {
            if (arrival_time[i] <= time && burst_time[i] <= tq) {
                time += burst_time[i];
                total_time -= burst_time[i];
                x = a[i];
                exit_time[x] = time;
                burst_time[i] = 0;
            } else if (arrival_time[i] <= time && burst_time[i] > tq) {
                time += tq;
                total_time -= tq;
                burst_time[i] -= tq;
                z = i;
                for (y = 0; y < n; y++) {
                    if (arrival_time[y] > time) {
                        x = y;
                        for (j = n; j > n - x + 1; j--) {
                            arrival_time[j] = arrival_time[j - 1];
                            a[j] = a[j - 1];
                            burst_time[j] = burst_time[j - 1];
                        }
                        arrival_time[x] = arrival_time[z];
                        a[x] = a[z];
                        burst_time[x] = burst_time[z];
                        n++;
                        break;
                    } else if (y == n - 1) {
                        arrival_time[y + 1] = arrival_time[z];
                        a[y + 1] = a[z];
                        burst_time[y + 1] = burst_time[z];
                        n++;
                        break;
                    }
                }
            }
        }
    }
    printf("\nProcess No.  Arrival Time  Burst Time  Turn-around Time  Waiting Time\n");
    for (j = 0; j < k; j++) {
        turnaround_time[j] = exit_time[j] - temp1[j];
        waiting_time[j] = exit_time[j] - temp1[j] - temp2[j];
        printf("   %d\t\t %d\t\t %d\t\t%d\t\t%d\n", j + 1, temp1[j], temp2[j], turnaround_time[j], waiting_time[j]);
    }
    for (j = 0; j < k; j++) {
        avg_tat += turnaround_time[j];
        avg_wt += waiting_time[j];
    }
    printf("\nAverage Turn-Around Time = %0.2f", avg_tat / k);
    printf("\nAverage Waiting Time = %0.2f", avg_wt / k);
}