//palindrome


#include<stdio.h>
#include<string.h>

int main(){

    char a[50],rev[50];
    int i,cnt=0,len;

    


    printf("enter the string::\n");
    scanf("%s",&a);

    len=strlen(a);
    

    //printf("\n\nthe entered string is::%s",a);
    for(i=0;i<len/2;i++){
        if(a[i]==a[len-i-1])
            cnt++;
    }

    if(cnt==i)
        printf("the enterd string is palindrome");
    else
        printf("not palindrome");
}