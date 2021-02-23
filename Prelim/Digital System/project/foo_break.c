extern int foo(int a, int b);

void init(void) {
    int a = 0;
    int b = 0;
    int c = foo(a,b);
    //set a breakpoint
    c=0;
}
