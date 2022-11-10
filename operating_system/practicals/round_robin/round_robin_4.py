from pprint import pprint

PROCESSES = [
    # (arrival_time, burst_time, remaining_time, exit_time, waiting_time, TURNAROUND_TIME)
    [0, 5, 5, 0, 0, 0],
    [1, 3, 3, 0, 0, 0],
    [2, 1, 1, 0, 0, 0],
    [3, 2, 2, 0, 0, 0],
    [4, 3, 3, 0, 0, 0],
]

QUEUE = []

TIME_QUANTUM = 2

TIME_COUNT = 0

WAITING_TIME = 0

TURNAROUND_TIME = 0

if __name__ == "__main__":
    
    TOTAL_TIME = sum([x[1] for x in PROCESSES])
    
    while TOTAL_TIME != 0:
        # traverse all the processes
        for i in range(len(PROCESSES)):
            # proc[i][2] here refers to remaining_time for each process i.e "i"
            if PROCESSES[i][2] <= TIME_QUANTUM and PROCESSES[i][2] >= 0:
                TIME_COUNT += PROCESSES[i][2]
                TOTAL_TIME -= PROCESSES[i][2]
                # the process has completely ended here thus setting it's remaining time to 0.
                PROCESSES[i][2] = 0 
            elif PROCESSES[i][2] > 0:
                # if process has not finished, decrementing it's remaining time by time_quantum
                PROCESSES[i][2] -= TIME_QUANTUM
                TOTAL_TIME -= TIME_QUANTUM
                TIME_COUNT += TIME_QUANTUM
            if PROCESSES[i][2] == 0 and PROCESSES[i][3] != 1:
                # if remaining time of process is 0
                # and 
                # individual waiting time of process has not been calculated i.e flag
                WAITING_TIME += TIME_COUNT - PROCESSES[i][0] - PROCESSES[i][1]
                TURNAROUND_TIME += TIME_COUNT - PROCESSES[i][0]
                # flag is set to 1 once wait time is calculated
                PROCESSES[i][3] = 1 
    print("\nAvg Waiting Time is ", (WAITING_TIME * 1) / len(PROCESSES))
    print("Avg Turnaround Time is ", (TURNAROUND_TIME * 1) / len(PROCESSES))
    
    pprint(PROCESSES)
