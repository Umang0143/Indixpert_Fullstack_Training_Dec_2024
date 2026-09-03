#include <stdio.h>

#define max_tickets 10

void display_tickets(int ticket_ids[], char passenger_names[][50], int cancelled[], int count) {
    int available = 0;

    printf("\nAvailable Tickets:\n");
    for (int i = 0; i < count; i++) {
        if (!cancelled[i]) {
            printf("Ticket ID: %d, Passenger: %s\n", ticket_ids[i], passenger_names[i]);
            available = 1;
        }
    }

    if (!available) {
        printf("No Available Tickets.\n");
    }
}

int cancel_ticket(int ticket_ids[], char passenger_names[][50], int cancelled[], int count, int ticket_id) {
    for (int i = 0; i < count; i++) {
        if (ticket_ids[i] == ticket_id && !cancelled[i]) {
            cancelled[i] = 1; 
            printf("Ticket ID %d has been cancelled successfully.\n", ticket_id);
            return 1;
        }        
    }
    printf("Ticket ID not found or already cancelled.\n");
    return 0;
}

int main() {
    int ticket_ids[] = {101, 102, 103};
    char passenger_names[][50] = {"Sunny Sony", "Mahak Saxena", "Dekkepak Verma"};
    int cancelled[] = {0, 0, 0}; 
    int ticket_count = 3;
    int choice, ticket_id;

    while (1) {
        printf("\n1. View Tickets\n2. Cancel Ticket\n3. Exit\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                display_tickets(ticket_ids, passenger_names, cancelled, ticket_count);
                break;
            case 2:
                printf("Enter Ticket ID to cancel: ");
                scanf("%d", &ticket_id);
                cancel_ticket(ticket_ids, passenger_names, cancelled, ticket_count, ticket_id);
                break;
            case 3:
                printf("Exiting the cancel system.\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }

    return 0;
}
