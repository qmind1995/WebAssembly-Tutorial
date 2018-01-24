#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <iostream>
#include <emscripten/emscripten.h>

// pass simple int param
int8_t EMSCRIPTEN_KEEPALIVE printIntParam(int8_t s) {
    return s;
}

// pass an array float
float EMSCRIPTEN_KEEPALIVE addNums (float *buffer, int bufSize) {
    float total = 0;
    for (int i=0; i<bufSize; i++) {
        total+= buffer[i];
    }

    return total;
}

// pass an JS.Object
uint8_t EMSCRIPTEN_KEEPALIVE  *addOneForAllAtts(uint8_t * objString){
	return NULL;
}

int main(){
	printIntParam(1);
	return  0;
}