#include<stdio.h>
#include<string.h>

#define MAX_SEATS 50 
#define MAX_BUSES 3
#define FARE_PER_SEAT 500

char busNumbers[MAX_BUSES][10] = {"101", "102", "103"};
char routes[MAX_BUSES][100] = {"Delhi to Jaipur", "Jaipur to Mumbai", "Mumbai to Pune"};
int bookedSeats[MAX_BUSES] = {50,50,50};

void dashboard();
void cancelTicket(int seats[]);

int main(){

    dashboard();
    return 0;
}
void dashboard(){
    int option;
    int seats[MAX_SEATS] = {0};
    do {
        printf("\n===== User Menu =====\n");
        printf("1. cancel a ticket\n");
        printf("2. Logout\n");
        printf("\n==============================\n");
        printf("Enter your choice:-");
        scanf("%d", &option);
        
        switch (option) {
            case 1:
            cancelTicket(seats);
            break;
            case 2:
            printf("\nLogging out...\n");
            return;
            default:
            printf("\nInvalid choice. Try again.\n");
        }
    } while (1);
}

void cancelTicket(int seats[]) {
    char busNum[10];
    int i, seatsToCancel;

    printf("Enter Bus Number to cancel a seat: ");
    scanf("%s", busNum);

    for (i = 0; i < MAX_BUSES; i++) {
        if (strcmp(busNumbers[i], busNum) == 0) {
            printf("How many seats do you want to cancel? ");
            scanf("%d", &seatsToCancel);

            if (seatsToCancel > bookedSeats[i]) {
                printf("Only %d seats are booked. Please enter a valid number.\n", bookedSeats[i]);
                return;
            }

            bookedSeats[i] -= seatsToCancel;
            printf("\n%d seats successfully cancelled in Bus %s!\n", seatsToCancel, busNumbers[i]);
            return;
        }
    }
}