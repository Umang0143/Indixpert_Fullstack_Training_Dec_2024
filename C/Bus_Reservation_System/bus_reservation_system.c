#include <stdio.h>
#include <string.h>

#define MAX_BUSES 3
#define MAX_SEATS 50
#define MAX_USERS 5
#define MIN_PASSWORD_LENGTH 6
#define FARE_PER_SEAT 100

char busNumbers[MAX_BUSES][10] = {"101", "102", "103"};
char routes[MAX_BUSES][100] = {"Delhi to Jaipur", "Jaipur to Mumbai", "Mumbai to Pune"};
int bookedSeats[MAX_BUSES] = {0};

char usernames[MAX_USERS][10];
char passwords[MAX_USERS][10];
char address[MAX_USERS][30];
char mobileno[MAX_USERS][10];
int user_count = 0;

void signup();
void login();
void dashboard();
void bookSeat();
void cancelSeat();
void displayStatus();
int check_signup(char username[], char password[]);
int is_valid_password(char password[50]);
int is_valid_username(char username[50]);

int main() {
    int choice;
    do {
        printf("\n===== Bus Reservation System =====");
        printf("\n1. Sign up");
        printf("\n2. Login");
        printf("\n3. Exit");
        printf("\n==============================\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                signup();
                break;
            case 2:
                login();
                break;
            case 3:
                printf("Exiting.......\n");
                break;
            default:
                printf("Invalid choice. Try again!\n");
        }
    } while (choice != 3);
    return 0;
}

void signup() {
    if (user_count >= MAX_USERS) {
        printf("\nUser limit reached! Cannot sign up more users.\n");
        return;
    }
    char temp_username[50], temp_password[50];
    do{
        printf("Enter your username: ");
        scanf("%s", temp_username);
        if(!is_valid_username(temp_username)){
            printf("\nInvalid username! Must start with a letter and contain only alphanumeric characters. Try again.\n");
        }
    }while (!is_valid_username(temp_username));
    
    
    do {
        printf("Enter your password (min %d characters, at least one letter and one digit): ", MIN_PASSWORD_LENGTH);
        scanf("%s", temp_password);
        if (!is_valid_password(temp_password)) {
            printf("\nInvalid password! Try again.\n");
        }
    } while (!is_valid_password(temp_password));
    
    strcpy(usernames[user_count], temp_username);
    strcpy(passwords[user_count], temp_password);
    printf("\n===== Sign Up Successful =====\n");
    user_count++;
}

void login() {
    if (user_count == 0) {
        printf("\nPlease sign up first!\n");
        return;
    }
    char username[20], password[20];

    printf("Enter your username: ");
    scanf("%s", username);
    printf("Enter your password: ");
    scanf("%s", password);

    if (check_signup(username, password)) {
        printf("\n========== Login successful! ==========\n");
        printf("\nWelcome, %s.\n", username);
        dashboard();
    } else {
        printf("\nInvalid username or password!\n");
    }
}

void dashboard() {
    int option;
    do {
        printf("\n===== User Menu =====\n");
        printf("1. Book a ticket\n");
        printf("2. Cancel a ticket\n");
        printf("3. Check Bus Status\n");
        printf("4. Logout\n");
        printf("Enter your choice: ");
        scanf("%d", &option);
        
        switch (option) {
            case 1:
                bookSeat();
                break;
            case 2:
                cancelSeat();
                break;
            case 3:
                displayStatus();
                break;
            case 4:
                printf("\nLogging out...\n");
                return;
            default:
                printf("\nInvalid choice. Try again.\n");
        }
    } while (1);
}

void bookSeat() {
    char busNum[10];
    int seatsToBook;

    printf("Enter Bus Number to book a seat: ");
    scanf("%s", busNum);

    for (int i = 0; i < MAX_BUSES; i++) {
        if (strcmp(busNumbers[i], busNum) == 0) {
            printf("How many seats do you want to book? ");
            scanf("%d", &seatsToBook);

            if (seatsToBook <= 0) {
                printf("Invalid number of seats!\n");
                while(getchar() != '\n');
                return;
            }
            if (seatsToBook > (MAX_SEATS - bookedSeats[i])) {
                printf("Only %d seats are available. Please enter a valid number.\n", MAX_SEATS - bookedSeats[i]);
                return;
            }

            bookedSeats[i] += seatsToBook;
            printf("\n%d seats successfully booked in Bus %s!\n", seatsToBook, busNumbers[i]);
            printf("Total Fare: %d\n", seatsToBook * FARE_PER_SEAT);
            return;
        }
    }
    printf("Bus not found!\n");
}

void cancelSeat() {
    char busNum[10];
    int seatsToCancel;
    printf("Enter Bus Number to cancel a seat: ");
    scanf("%s", busNum);
    
    for (int i = 0; i < MAX_BUSES; i++) {
        if (strcmp(busNumbers[i], busNum) == 0) {
            printf("How many seats do you want to cancel? ");
            scanf("%d", &seatsToCancel);
            if (seatsToCancel <= 0 || seatsToCancel > bookedSeats[i]) {
                printf("Invalid number of seats to cancel!\n");
                while(getchar() != '\n');
                return;
            }
            bookedSeats[i] -= seatsToCancel;
            printf("\n%d seats successfully cancelled in Bus %s!\n", seatsToCancel, busNumbers[i]);
            return;
        }
    }
    printf("Bus not found!\n");
}

void displayStatus() {
    char busNum[10];
    printf("Enter Bus Number to check status: ");
    scanf("%s", busNum);
    
    for (int i = 0; i < MAX_BUSES; i++) {
        if (strcmp(busNumbers[i], busNum) == 0) {
            printf("\nBus Number: %s\n", busNumbers[i]);
            printf("Route: %s\n", routes[i]);
            printf("Total Seats: %d\n", MAX_SEATS);
            printf("Booked Seats: %d\n", bookedSeats[i]);
            printf("Available Seats: %d\n", MAX_SEATS - bookedSeats[i]);
            printf("Fare: %d\n", FARE_PER_SEAT);
            return;
        }
    }
    printf("Bus not found!\n");
}
       
int check_signup(char username[], char password[]) {
    for (int i = 0; i < user_count; i++) {
        if (strcmp(username, usernames[i]) == 0 && strcmp(password, passwords[i]) == 0) {
            return 1;
        }
    }
    return 0;
}

int is_valid_password(char password[50]) {
    int has_digit = 0, has_alpha = 0;
    if (strlen(password) < MIN_PASSWORD_LENGTH) return 0;
    for (int i = 0; password[i] != '\0'; i++) {
        if (password[i] >= '0' && password[i] <= '9') has_digit = 1;
        if ((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z')) has_alpha = 1;
    }
    return has_digit && has_alpha;
}

int is_valid_username(char username[50]) {
    if (strlen(username) < 3 || (username[0] >= '0' && username[0] <= '9')) return 0;
    for (int i = 0; username[i] != '\0'; i++) {
        if (!((username[i] >= 'a' && username[i] <= 'z') || (username[i] >= 'A' && username[i] <= 'Z') || (username[i] >= '0' && username[i] <= '9'))) return 0;
    }
    for (int i = 0; i < user_count; i++) {
        if (strcmp(usernames[i], username) == 0) {
            return 0;
        }
    }
    return 1;
}