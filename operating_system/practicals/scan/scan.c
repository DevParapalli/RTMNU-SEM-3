#define REQ_SIZE 8
#define DISK_SIZE 200
// #define HEAD 50

#include <stdio.h>
#include <stdlib.h>

int seek_count = 0, distance = 0, cur_track = 0, left[DISK_SIZE], left_size = 0, right[DISK_SIZE], right_size = 0, seek_seq[DISK_SIZE], seek_size = 0;

int qsortcmp(const void * a, const void * b) {
    return (*(int*)a - *(int *)b);
}

void append_elem_to_arr(int arr[], int * length, int elem) {
    arr[*length] = elem;
    (*length)++;
}


void SCAN(int arr[], int head, char direction) {

    if (direction == 'L') 
    {
        append_elem_to_arr(left, &left_size, 0);
    }
    else if (direction == 'R')
    {
        append_elem_to_arr(right, &right_size, DISK_SIZE-1);
    }
    
    for(int i = 0; i < REQ_SIZE; i++) {
        if (arr[i] < head) {
            append_elem_to_arr(left, &left_size, arr[i]);
        }
        else if (arr[i] > head)
        {
            append_elem_to_arr(right, &right_size, arr[i]);
        }
        
    }

    qsort(left, left_size, sizeof(int), qsortcmp);
    qsort(right, right_size, sizeof(int), qsortcmp);

    int run = 2;
    while(run != 0) {
        if (direction == 'L')
        {
            for(int i = left_size - 1; i >= 0; i--) {
                cur_track = left[i];
                append_elem_to_arr(seek_seq, &seek_size, cur_track);
                seek_count += abs(cur_track - head);
                head = cur_track;
            }
            direction = 'R';
        }
        else if (direction == 'R')
        {
            for(int i = 0; i < right_size;i++) {
                cur_track = right[i];
                append_elem_to_arr(seek_seq, &seek_size, cur_track);
                seek_count += abs(cur_track - head);
                head = cur_track;
            }
            direction = 'L';
        }     
        run -= 1;   
    }

    printf("Total Seek Operations = %d.\n", seek_count);
    printf("Seek Sequence :- ");
    for(int i = 0; i < seek_size; i++) {
        printf("%d ", seek_seq[i]);
    }
}

int main(int argc, char const *argv[])
{
    int arr[REQ_SIZE] = {
        176, 79, 34, 60, 92, 11, 41, 114
    };
    int head = 50;
    char direction = 'L';

    if (direction == 'L')
    {
        printf("We are moving in LEFT direction.");
    }
    else
    {
        printf("We are moving in RIGHT direction.");
    }
    
    SCAN(arr, head, direction);

    return 0;
}
