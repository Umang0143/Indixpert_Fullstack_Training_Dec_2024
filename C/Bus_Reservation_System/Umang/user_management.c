#include<stdio.h>
#include<string.h>

# define max_user 5
# define min_password_length 6
char usernames[max_user][10];
char passwords[max_user][10];
char address[max_user][30];
char mobileno[max_user][10];
int user_count = 0;

void signup();
void login();
void desbord();
int check_signup(char username[], char password[]);

int main()
{
    int choice;
    do{
        printf("\n=====Bus Reservation System=====");
        printf("\n1.Sign up");
        printf("\n2.Login");
        printf("\n3.Exit");
        printf("\n==============================\n");
        printf("Enter your choice:-");
        scanf("%d",&choice);
        switch(choice){
            case 1:
                signup();
                break;
            case 2:
                login();
                break;
            case 3:
                printf("Exiting.......");
                break;
            default:
                printf("Invalid choice.try again!");
        }
    }while(choice !=3);
    return 0;
}
void signup()
{
    if (user_count >= max_user) {
        printf("\nUser limit reached! Cannot sign up more users.\n");
        return;
    }
    printf("Enter your username:-");
    scanf("%s",&usernames[user_count]);
    
    do{
        printf("Enter your password:-",min_password_length);
        scanf("%s",&passwords[user_count]);
        if(strlen(passwords[user_count])<min_password_length){
            printf("\nPassword too short! Try again.\n");
        }
    }while (strlen(passwords[user_count])<min_password_length);
    
    printf("Enter your Address:-");
    scanf(" %[^\n]",&address[user_count]);
    
    do{
        printf("Enter your Mobile Number:-");
        scanf("%s",&mobileno[user_count]);
        if(strlen(mobileno[user_count]) !=10){
            printf("\nInvalid Mobile Number! Must be 10 digits.\n");
        }
    }while (strlen(mobileno[user_count]) !=10);
    
    printf("\n=====Sign Up Successful=====\n");
    printf("\nUsername:-%s", usernames[user_count]);
    printf("\nPassword:-%s", passwords[user_count]);
    printf("\nAddress:-%s", address[user_count]);
    printf("\nMobile Number:-%s", mobileno[user_count]);
    printf("\n==============================\n");
    user_count++;
}
void login()
{
    if(user_count==0)
    {
        printf("\npls first sign up\n");
        return ;
    }
    char username[20], password[20];

    printf("Enter your username: ");
    scanf("%s", username);

    printf("Enter your password: ");
    scanf("%s", password);

    if (check_signup(username, password)) {
        printf("\n==========Login successful!==========\n");
        printf("\n Welcome, %s.\n", username);
        desbord();
    } else {
        printf("\nInvalid username or password!\n");
    }
}

void desbord(){
    int option;
    do {
        printf("\n===== User Menu =====\n");
        printf("1. Book a ticket\n");
        printf("2. Cancel a ticket\n");
        printf("3. Check Bus Status\n");
        printf("4. Logout\n");
        printf("\n==============================\n");
        printf("Enter your choice:-");
        scanf("%d", &option);
        
        switch (option) {
            case 1:
            printf("\nTicket booking feature coming soon!\n");
            break;
            case 2:
            printf("\nTicket cancellation feature coming soon!\n");
            break;
            case 3:
            printf("\nBus status check feature coming soon!\n");
            break;
            case 4:
            printf("\nLogging out...\n");
            return;
            default:
            printf("\nInvalid choice. Try again.\n");
        }
    } while (1);
}
int check_signup(char username[], char password[]) {
    for (int i = 0; i < user_count; i++) {
        if (strcmp(username, usernames[i]) == 0 && strcmp(password, passwords[i]) == 0) {
            return 1;
        }
    }
    return 0;
}