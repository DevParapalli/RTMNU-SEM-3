#include <stdio.h>

#define MEMORY_SIZE 4
#define C_LANG 4

int usage_queue[MEMORY_SIZE+C_LANG] = {-1};
int useage_queue_length = 0;
int usage_pointer = 0;

int memory[MEMORY_SIZE+C_LANG] = {-1};
int memory_length = 0;
int memory_pointer = 0;

int page_faults = 0;

int pages[100];
int pages_pointer = 0;
int pages_length = 0;

void usage_queue_append(int x) {
    usage_queue[useage_queue_length] = x;
    useage_queue_length++;
}

void memory_append(int x) {
    memory[memory_length] = x;
    memory_length++;
}

int usage_queue_pop(int index){
    int i;
    int x = usage_queue[index];
    for(i=index; i<useage_queue_length; i++){
        usage_queue[i] = usage_queue[i+1];
    }
    usage_queue[useage_queue_length] = -1;
    useage_queue_length--;
    return x;
}

int memory_pop(int index){
    int i;
    int x = memory[index];
    for(i=index; i<memory_length; i++){
        memory[i] = memory[i+1];
    }
    memory[memory_length] = -1;
    memory_length--;
    return x;
}

int memory_index(int x){
    int i;
    for(i=0; i<memory_length; i++){
        if(memory[i] == x){
            return i;
        }
    }
    return -1;
}

int usage_queue_remove(int x){
    int i;
    for(i=0; i<useage_queue_length; i++){
        if(usage_queue[i] == x){
            return usage_queue_pop(i);
        }
    }
    return -1;
}

int main() {
    // Input pages
    printf("Enter the number of pages: ");
    scanf("%d", &pages_length);
    printf("Enter the pages: ");
    for(int i = 0; i < pages_length; i++) {
        scanf("%d", &pages[i]);
    }
    int page_faults = 0;
    for(int i=0; i < pages_length; i++) {
        int page = pages[i];
        int index = memory_index(page);
        if(index == -1) {
            if(memory_length < MEMORY_SIZE) {
                memory_append(page);
                usage_queue_append(memory_length-1);
                page_faults++;
            } else {
                int index = usage_queue_pop(0);
                memory[index] = page;
                usage_queue_append(index);
                page_faults++;
            }
        } else {
            index = memory_index(page);
            usage_queue_remove(index);
            usage_queue_append(index);
        }
    }
    printf("Page faults: %d", page_faults);
}
