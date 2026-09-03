#include <stdio.h>
#include <string.h>

// Function to check if the input is a valid number
int isValidNumber(char str[]) {
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return 0; // Invalid number
        }
    }
    return 1; // Valid number
}

int main() {
    int busNumber;
    char sourceCity[50], destinationCity[50];
    int totalSeats, availableSeats;
    float fare;

    // Input bus number
    printf("Enter bus number: ");
    while (1) {
        if (scanf("%d", &busNumber) != 1) {
            printf("Invalid input. Please enter a valid bus number: ");
            while(getchar() != '\n'); // Clear the input buffer
        } else {
            break;
        }
    }

    // Input source city
    printf("Enter source city: ");
    while (1) {
        if (scanf("%s", sourceCity) != 1) {
            printf("Invalid input. Please enter a valid source city: ");
            while(getchar() != '\n'); // Clear the input buffer
        } else {
            break;
        }
    }

    // Input destination city
    printf("Enter destination city: ");
    while (1) {
        if (scanf("%s", destinationCity) != 1) {
            printf("Invalid input. Please enter a valid destination city: ");
            while(getchar() != '\n'); // Clear the input buffer
        } else {
            break;
        }
    }

    // Input total seats
    printf("Enter total number of seats: ");
    char totalSeatsInput[10];
    while (1) {
        scanf("%s", totalSeatsInput);
        if (isValidNumber(totalSeatsInput)) {
            totalSeats = atoi(totalSeatsInput);
            if (totalSeats <= 0) {
                printf("Total seats must be a positive number. Please try again: ");
            } else {
                break;
            }
        } else {
            printf("Invalid input. Please enter a valid number for total seats: ");
        }
    }

    // Input available seats
    printf("Enter available seats: ");
    char availableSeatsInput[10];
    while (1) {
        scanf("%s", availableSeatsInput);
        if (isValidNumber(availableSeatsInput)) {
            availableSeats = atoi(availableSeatsInput);
            if (availableSeats < 0 || availableSeats > totalSeats) {
                printf("Available seats must be between 0 and total seats. Please try again: ");
            } else {
                break;
            }
        } else {
            printf("Invalid input. Please enter a valid number for available seats: ");
        }
    }

    // Input fare
    printf("Enter fare: ");
    while (1) {
        if (scanf("%f", &fare) != 1 || fare <= 0) {
            printf("Invalid input. Please enter a valid fare: ");
            while(getchar() != '\n'); // Clear the input buffer
        } else {
            break;
        }
    }

    // Display bus information
    printf("\nBus Information:\n");
    printf("Bus Number: %d\n", busNumber);
    printf("Source City: %s\n", sourceCity);
    printf("Destination City: %s\n", destinationCity);
    printf("Total Seats: %d\n", totalSeats);
    printf("Available Seats: %d\n", availableSeats);
    printf("Fare: %.2f\n", fare);

    return 0;
}