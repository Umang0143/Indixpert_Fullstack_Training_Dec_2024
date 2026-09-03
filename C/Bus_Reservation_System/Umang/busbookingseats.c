#include<stdio.h>
#include<string.h>

#define MAX_SEATS 50 
#define MAX_BUSES 3
#define FARE_PER_SEAT 500

char busNumbers[MAX_BUSES][10] = {"101", "102", "103"};
char routes[MAX_BUSES][100] = {"Delhi to Jaipur", "Jaipur to Mumbai", "Mumbai to Pune"};
int bookedSeats[MAX_BUSES] = {0};

void dashboard();
void bookTicket(int seats[]);

int main(){

    dashboard();
    return 0;
}
void dashboard(){
    int option;
    int seats[MAX_SEATS] = {0};
    do {
        printf("\n===== User Menu =====\n");
        printf("1. Book a ticket\n");
        printf("2. Logout\n");
        printf("\n==============================\n");
        printf("Enter your choice:-");
        scanf("%d", &option);
        
        switch (option) {
            case 1:
            bookTicket(seats);
            break;
            case 2:
            printf("\nLogging out...\n");
            return;
            default:
            printf("\nInvalid choice. Try again.\n");
        }
    } while (1);
}
void bookTicket(int seats[]) {
    char busNum[10];
    int i, seatsToBook;

    printf("Enter Bus Number to book a seat: ");
    scanf("%s", busNum);

    for (i = 0; i < MAX_BUSES; i++) {
        if (strcmp(busNumbers[i], busNum) == 0) {
            printf("How many seats do you want to book? ");
            scanf("%d", &seatsToBook);

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