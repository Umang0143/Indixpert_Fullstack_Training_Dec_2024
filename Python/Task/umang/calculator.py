def get_valid_number(subject):
    while True:
        number = input(f"Enter your {subject} number:- ")
        if number.isdigit():
            return int(number)
        print("Invalid number! Only digits are allowed.")
        
def get_valid_choise():
    ask_search=input("Add more Search y or n :- ")
    if ask_search.lower() == "y":
        menu()
    else:
        print("Exit")
        exit()

def add(first_number,second_number):
    print("=" * 30)
    print("sum:-",first_number + second_number)
    print("=" * 30)
    get_valid_choise()

def sub(first_number,second_number):
    print("=" * 30)
    print("subtrect:-",first_number - second_number)
    print("=" * 30)
    get_valid_choise()

def mul(first_number,second_number):
    print("=" * 30)
    print("Multiplication:-",first_number * second_number)
    print("=" * 30)
    get_valid_choise()

def divi(first_number,second_number):
    if second_number == 0:
        print("Error: Division by zero is not allowed.")
    else:
        print("=" * 30)
        print("Divition:-",first_number / second_number)
        print("=" * 30)
    get_valid_choise()

def get_valid_option():
    while True:
        try:
            data = int(input("Please select an option (0-4): "))
            if data in [0, 1, 2, 3, 4]:
                break
            else:
                print("Invalid option! Please select a valid number (0-4).")
        except Exception as a :
            print("Invalid input! Please enter a number between 0 and 4.")
    
    if data == 0:
        print("Exiting... Goodbye!")
        exit()

    print("=" * 30)
    first_number=get_valid_number("first")
    second_number=get_valid_number("second")
    
    if data == 1:
        add(first_number,second_number)
        
    elif data == 2:
        sub(first_number,second_number)
        
    elif data == 3:
        mul(first_number,second_number)
        
    elif data == 4:
        divi(first_number,second_number)

def menu():
    print("=" * 30)
    print("**********Calculator**********")
    print("1. Press for Addition")
    print("2. Press for Subtraction")
    print("3. Press for Multiplication")
    print("4. Press for Division")
    print("0. Press for Exit")
    print("=" * 30)
    print("=" * 30)
    get_valid_option()

menu()