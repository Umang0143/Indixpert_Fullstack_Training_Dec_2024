#include<stdio.h>
#include<string.h>

#define MAX_SEATS 50 
#define MAX_BUSES 3
#define FARE_PER_SEAT 500

char busNumbers[MAX_BUSES][10] = {"101", "102", "103"};
char routes[MAX_BUSES][100] = {"Delhi to Jaipur", "Jaipur to Mumbai", "Mumbai to Pune"};
int bookedSeats[MAX_BUSES] = {0};

void dashboard();
void displayStatus();

int main(){

    dashboard();
    return 0;
}
void dashboard(){
    int option;
    int seats[MAX_SEATS] = {0};
    do {
        printf("\n===== User Menu =====\n");
        printf("1. Display Status\n");
        printf("2. Logout\n");
        printf("\n==============================\n");
        printf("Enter your choice:-");
        scanf("%d", &option);
        
        switch (option) {
            case 1:
            displayStatus();
            break;
            case 2:
            printf("\nLogging out...\n");
            return;
            default:
            printf("\nInvalid choice. Try again.\n");
        }
    } while (1);
}
void displayStatus() {
    char busNum[10];
    int i,seatsToBook;
    printf("Enter Bus Number to check status: ");
    scanf("%s", busNum);
    
    for (i = 0; i < MAX_BUSES; i++) {
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