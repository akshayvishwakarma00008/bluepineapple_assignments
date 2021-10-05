// to print all perfect 
#include<stdio.h>
int main()
{

    int n,i,j,sum=0,val;

    printf("Enter the max range:");
    scanf("%d",&n);

    for(i=1;i<=n;i++)
    {
        
        for(j=1,sum=0;j<i;j++)
        {
            
            val = i%j;
            if(val == 0)
            {
                sum = sum+j;
            }
        //printf("%d\t",sum);
        }
        if(sum==i)
            printf("%d\t",i);
        

    }   
   return 0;

}