#include <stdio.h>

#define MEMORY_SIZE 4


int usage_queue[MEMORY_SIZE] = {-1};
int usage_pointer = 0;

int memory[MEMORY_SIZE] = {-1};
int memory_pointer = 0;

int page_faults = 0;

int pages[100];
int pages_count = 0;

void append_page(int page) {
    pages[pages_count] = page;
    pages_count++;
}







int main() {
    // Input pages
    printf("Enter the number of pages: ");
    scanf("%d", &pages_count);
    for(int i = 0; i < pages_count; i++) {
        printf("Enter page %d: ", i);
        scanf("%d", &pages[i]);
    }
    for(int i=0; i < pages_count; i++) {
        
    }
}
