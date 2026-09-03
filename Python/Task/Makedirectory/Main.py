import Even_number_folder
import Odd_number_folder

path="D:\Indixpert 2025\indixpert_python\makdir"
def menu():
    while (True):
        print("press 1. Even")
        print("press 2. Odd")
        print("press 0. Exit")
        optionchoice()

def optionchoice():
    choice= int(input("Choice number:- "))
    number=int(input("How many folders to make:- "))
    if number > 1 and number <=20:
        if choice in (0,1,2):
            for i in range(1,number):
                if choice == 1:
                    Even_number_folder.even(path,i)
                if choice == 2:
                    Odd_number_folder.odd(path,i)
    elif choice == 0:
        print("Exit....")
        exit()
    else:
        print("Invalid Number......")
        exit()
menu()