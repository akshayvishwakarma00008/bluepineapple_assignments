#include<stdio.h>

int main(){
    int a[100][100],b[100][100],mul[100][100];
    int i,j,r,c,k;

    printf("enter the rows for matrix:");
    scanf("%d",&r);

    printf("enter the coloumns for matrix:");
    scanf("%d",&c);

    printf("enter the values of matrix-1\n");
    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            printf("row-%d:,coloumn-%d:",i,j);
            scanf("%d",&a[i][j]);

        }
    }

   

    printf("\nenter the values of matrix-2\n");
    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            printf("row-%d:,coloumn-%d:",i,j);
            scanf("%d",&b[i][j]);

        }
    }


    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            mul[i][j]=0;
            for(k=0;k<c;k++){
                mul[i][j] = mul[i][j]+(a[i][k]*b[k][j]);
            }
        }
    }


    printf("\nthe multiplication of two matrix is-\n\n");
    for(i=0;i<r;i++){
        for(j=0;j<c;j++){
            printf("%d\t",mul[i][j]);
        }
        printf("\n");
    }


}