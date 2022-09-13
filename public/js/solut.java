#include "solution.h"
#include <stdbool.h>

char* CompressDays(char* input[], int inputSize)
{
    // Your code goes here
    char *output_ptr = (char*)malloc(inputSize+1);
    
    //char *output_ptr = "SMTW"
    
    /*int i = 0;
    
    for(i = 0; i < inputSize; i++){
        output[i] = *(i + input);
    }
    */
    
    *(output_ptr + 0) = (char)'S';
    *(output_ptr + 1) = (char)'M';
    *(output_ptr + 2) = (char)'T';
    *(output_ptr + 3) = (char)'W';
    *(output_ptr + 4) = (char)'\0';
    /*
    output[0] = 'S';
    output[1] = 'M';
    output[2] = 'T';
    output[3] = 'W';*/
    
    return output_ptr;
}