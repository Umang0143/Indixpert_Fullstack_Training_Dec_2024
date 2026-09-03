#include <stdio.h>

#define MAX_SEATS 50 


void displaySeats(int seats[]) {
    printf("Seats available:\n");
    for (int i = 0; i < MAX_SEATS; i++) {
        if (seats[i] == 0) {
            printf("Seat %d is available\n", i + 1);
        }
    }
}


void bookTicket(int seats[]) {
    int seatNumber;
    printf("Enter the seat number you want to book (1 to %d): ", MAX_SEATS);
    scanf("%d", &seatNumber);

    
    if (seatNumber < 1 || seatNumber > MAX_SEATS) {
        printf("Invalid seat number.\n");
    } else if (seats[seatNumber - 1] == 1) {
        printf("Sorry, seat %d is already booked.\n", seatNumber);
    } else {
        seats[seatNumber - 1] = 1;  
        printf("Seat %d has been successfully booked.\n", seatNumber);
    }
}

void cancelBooking(int seats[]) {
    int seatNumber;
    printf("Enter the seat number you want to cancel (1 to %d): ", MAX_SEATS);
    scanf("%d", &seatNumber);

    
    if (seatNumber < 1 || seatNumber > MAX_SEATS) {
        printf("Invalid seat number.\n");
    } else if (seats[seatNumber - 1] == 0) {
        printf("Seat %d is not booked yet.\n", seatNumber);
    } else {
        seats[seatNumber - 1] = 0;  
        printf("Seat %d has been successfully canceled.\n", seatNumber);
    }
}

int main() {
    int seats[MAX_SEATS] = {0};  
    int choice;

    while (1) {
        printf("\n**Ticket Booking System**\n");
        printf("\n1.choose your destination\n");
        printf("2. View available seats\n");
        printf("3. Book a seat\n");
        printf("4. Cancel a booking\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                destination();
            case 2:
                displaySeats(seats);
                break;
            case 3:
                bookTicket(seats);
                break;
            case 4:
                cancelBooking(seats);
                break;
            case 5:
                printf("Thank you for using the ticket booking system.\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}