#include <stdio.h>
void main() {
    int i, j, n = 5, r = 3;
    printf("Number of Process = %d", n);
    printf("Number of types of Resources = %d", r);
    int resource_allocated[5][3] = {
        {0, 1, 0},
        {2, 0, 0},
        {3, 0, 2},
        {2, 1, 1},
        {0, 0, 2}},
        resource_Max[5][3] = {
            {7, 5, 3}, 
            {3, 2, 2}, 
            {9, 0, 2}, 
            {2, 2, 2}, 
            {4, 3, 3}}, 
        total_resources[3] = {10, 5, 7}, allocated_total[3] = {0, 0, 0}, resource_available[r], resource_needed[n][r], f[n], flag, completed = n;
    for (i = 0; i < n; i++) {
        f[i] = 0;
        for (j = 0; j < r; j++) {
            resource_needed[i][j] = resource_Max[i][j] - resource_allocated[i][j];
            allocated_total[j] += resource_allocated[i][j];
        }
    }
    for (j = 0; j < r; j++) {
        resource_available[j] = total_resources[j] - allocated_total[j];
    }
    for (i = 0; i < n; i++) {
        flag = 0;
        if (f[i] == 0) {
            for (j = 0; j < r; j++) {
                if (resource_needed[i][j] > resource_available[j]) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                for (j = 0; j < r; j++) {
                    resource_available[j] += resource_allocated[i][j];
                }
                f[i] = 1;
                completed--;
                if (completed > 0)
                    printf("P%d -> ", i);
                else
                    printf("P%d", i);
            }
        }
        if (completed > 0 && i == n - 1)
            i = -1;
    }
}