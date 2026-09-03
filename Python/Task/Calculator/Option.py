import time
import Addition
import Subtraction
import Multiplication
import Division

def get_valid_number(prompt):
    while True:
        num = input(prompt)
        if num.isdigit():
            return int(num)
        else:
            print("only digits are available")

def choise():
    number=get_valid_number("Enter your choise number(0 to 4) :- ")
    print("=" * 30)
    if number in (1,2,3,4):
        First=get_valid_number("Enter your first number :- ")
        Second=get_valid_number("Enter your seconde number :- ")

        if number == 1:
            for n in range(1,5):
                print("\rIn Progress"+"." * n,end="")
                time.sleep(1)
            Addition.sum(First,Second)
            return True

        elif number == 2:
            for n in range(1,5):
                print("\rIn Progress"+"." * n,end="")
                time.sleep(1)
            Subtraction.sub(First,Second)
            return True

        elif number == 3:
            for n in range(1,5):
                print("\rIn Progress"+"." * n,end="")
                time.sleep(1)
            Multiplication.multy(First,Second)
            return True

        elif number == 4:
            for n in range(1,5):
                print("\rIn Progress"+"." * n,end="")
                time.sleep(1)
            Division.devi(First,Second)
            return True

    elif number == 0:
            print("Exit......")
            exit()
    else:
        print("Number is invelid......")