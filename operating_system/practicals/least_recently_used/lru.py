USAGE_QUEUE = []
MEMORY = []
MEMORY_SIZE = 4
PAGE_FAULT = 0
PAGE_HITS = 0
PAGES = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]

if __name__ == "__main__":
    for page in PAGES:
        if page not in MEMORY:
            if len(MEMORY) < MEMORY_SIZE:
                MEMORY.append(page)
                USAGE_QUEUE.append(len(MEMORY)-1)
                PAGE_FAULT = PAGE_FAULT + 1
            else:
                index = USAGE_QUEUE.pop(0)
                MEMORY[index] = page
                USAGE_QUEUE.append(index)
                PAGE_FAULT = PAGE_FAULT + 1
        else:
            index = MEMORY.index(page)
            USAGE_QUEUE.remove(index)
            USAGE_QUEUE.append(index)
            PAGE_HITS = PAGE_HITS + 1


    print(f"MEMORY: {MEMORY}")
    print(f"PAGE FAULTS: {PAGE_FAULT}")
    print(f"PAGE HITS: {PAGE_HITS}")

