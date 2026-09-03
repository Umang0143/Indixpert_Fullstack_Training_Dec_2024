
#include <stdio.h>
#include <stdlib.h>

// Function to log out the user
void logout() {
    printf("\nLogging out...\n");
    
    // Simulate logout process
    printf("You have been successfully logged out.\n");
    

    exit(0); // Exits the program after logout
}

// Example main function to test logout
int main() {
    printf("User is logged in...\n");
    
    // Simulate user action to log out
    logout();

    return 0; 
}