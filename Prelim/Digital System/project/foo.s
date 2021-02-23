        .syntax unified
        .global foo

        .text
        .thumb_func
foo:
        adds r0, r0, r1
        bx lr
