#include<stdio.h>

int sum(int a,int b){
    return a+b;
}
int subtract(int a,int b){
    return a-b;
}
int multiply(int a,int b){
    return a*b;
}
int div(int a,int b){
    return a/b;
}
int option(int n,int a,int b)
{
    if(n==1){
        sum(a,b);
        printf("sum=%d\n",sum(a,b));
    }
    else if(n==2){
        subtract(a,b);
        printf("subtract=%d\n",subtract(a,b));
    }
    else if(n==3){
        multiply(a,b);
        printf("multiply=%d\n",multiply(a,b));
    }
    else if(n==4){
        div(a,b);
        printf("div=%d\n",div(a,b));
    }
    else if(n==5){
        printf("Exit");
    }
}
int desboard()
{
    int a,b,n;   
    while(1)
    {
        printf("\n");
        printf("Enter your option:-");
        scanf("%d",&n);
        if(n==5){
            option(n,0,0);
            break;
        }
        printf("Enter your first Number:-");
        scanf("%d",&a);
        printf("Enter your second number:-");
        scanf("%d",&b);
        option(n,a,b);
    }
}
int main()
{
    printf("1.press for Sum\n");
    printf("2.press for Subtract\n");
    printf("3.press for Multiplication\n");
    printf("4.press for Division\n");
    printf("5.press for Exit\n");
    desboard();
    printf("\n");
    return 0;
}