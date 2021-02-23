// lab2-gpio/heart.c
// Copyright (c) 2018 J. M. Spivey

#include "hardware.h"

/* delay -- pause for n microseconds */
void delay(unsigned n) {
    unsigned t = n << 1;
    while (t > 0) {
        // 500nsec per iteration at 16MHz
        nop(); nop(); nop();
        t--;
    }
}

void init(void) {
    GPIO_DIR = 0xfff0;
    while(1){
        GPIO_OUT=0x4000;
        delay(200000);
        GPIO_OUT=0;
        delay(1000000);
    }
}
