//book management system 

#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct node{
    char info[50];
    struct node *next;
};

struct node * lib = NULL;




void insert(char *bname){
    //printf("iam in insert\n and book name is-%s",bname);

    struct node *p,*q;
    p=(struct node *)malloc(sizeof(struct node));

   strcpy(p->info,bname);
    p->next=NULL;

    if(lib == NULL){
        lib=p;
        //printf("book entered sucessfully\n");
    }

    else{
        q=lib;

        while(q->next != NULL){
            q=q->next;
            
        }
        q->next=p;
        p->next=NULL;
    }
}



void display(){

    printf("\n\n");
    struct node *p;
    int i;

    if(lib == NULL){
        printf("The library is empty!!!!!!!\n");
    }



    p=lib;
    i=1;
    printf("S.no\tName\n");
    while(p != NULL){
      
        printf("%d\t%s\n",i,p->info);

        p=p->next;
        i++;
    }

   
}


void count(){

    printf("\n\n");
    struct node *p;
    int i;

    if(lib == NULL){
        printf("The library is empty!!!!!!!\n\n");
    }



    p=lib;
    i=0;
    while(p != NULL){
        p=p->next;
        i++;
    }

    printf("Total - Books = %d\n\n",i);

}


void delete(){
    struct node *p;
    if(lib == NULL){
        printf("!!!!!!!!No Books To Delete!!!!!!!!");
    }

    if(lib->next == NULL){
        free(lib);
        lib=NULL;
    }
    else{
       
        for(p=lib;p->next->next != NULL;p=p->next)
        {
            p=p->next;
        }
        free(p->next);
        p->next=NULL;
    }
}

int main(){

    int choice;
    char bname[50];

    while(1){

        printf("*************************BOOK MANAGEMANT SYSTEM***********************************\n\n");
        printf("1.Enter book name\n\n");
        printf("2.View all books in data base\n\n");
        printf("3.total books in database\n\n");
        printf("4.Delete recent entry\n\n");
        printf("5.Exit\n\n");
        printf("Enter your choice::");
        scanf("%d",&choice);
        printf("\n\n");
       

        switch(choice){
            case 1:  
                    printf("\n\n\nEnter book name::");
                    scanf("%s",&bname);
                    insert(bname);
                    break;

            case 2:  
                    display();
                    break;

            case 3:  
                    count(); 
                    break;

            case 4:  
                    delete(); 
                    break;

            case 5: exit(1); 
                    break;
        }
        
    }

   

}