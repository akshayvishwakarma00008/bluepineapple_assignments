//total occurance of a digit in a number

#include<stdio.h>

void occurance(int n)
{
    int cnt=0,cnt1=0,cnt2=0,cnt3=0,cnt4=0,cnt5=0,cnt6=0,cnt7=0,cnt8=0,cnt9=0;
    int q;

    while(n>0){
        q = n%10;
        n=n/10;
        
        if(q==0)
            cnt++;
        
        if(q==1)
            cnt1++;

        if(q==2)
            cnt2++;

        if(q==3)
            cnt3++;

        if(q==4)
            cnt4++;

        if(q==5)
            cnt5++;

        if(q==6)
            cnt6++;

        if(q==7)
            cnt7++;

        if(q==8)
            cnt8++;

        if(q==9)
            cnt9++;

        
       

    }

    printf("the occurances of the digit in the number is\n");
    printf("1 => %d times\n",cnt1);
    printf("2 => %d times\n",cnt2);
    printf("3 => %d times\n",cnt3);
    printf("4 => %d times\n",cnt4);
    printf("5 => %d times\n",cnt5);
    printf("6 => %d times\n",cnt6);
    printf("7 => %d times\n",cnt7);
    printf("8 => %d times\n",cnt8);
    printf("9 => %d times\n",cnt9);
    printf("0 => %d times\n",cnt);
}

int main()
{
    int n;
    printf("Enter the number");
    scanf("%d",&n);

    occurance(n);
}