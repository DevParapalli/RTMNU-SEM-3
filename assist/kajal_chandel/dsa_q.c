typedef struct array_single_int array_single_int;
struct array_single_int {
    int *data;
    int size;
    };



int productsAtNegativeTemp(array_single_int temp) {
    int answer;
    answer = 0;
    for(int i = 0; i < temp.size; i++){
        if(temp.data[i] < 0){
            answer++;
        }
    }

    return answer;
}

// 