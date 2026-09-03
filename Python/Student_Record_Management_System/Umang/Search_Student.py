import os
import json
import datetime
import Writelogs
import Get_valid

def searchstudent(path):
    if not os.path.exists(path):
        return "File not found."

    with open(path, "r") as file:
        students = json.load(file)
    while True:
        print("=" * 40)
        print("       Search By Options")
        print("=" * 40)
        print("1. Search by ID")
        print("2. Search by Name")
        print("3. Search by Contact Number")
        print("4. Search by Address")
        print("5. Search by Email ID")
        print("0. Exit Searching Area")
        print("=" * 40)

        try:
            choice = int(input("Please select an option (0-5): "))
            if choice in [0, 1, 2, 3, 4, 5]:
                break
            else:
                print("\nInvalid option! Please select a valid number (0-5).\n")
        except Exception as c :
            print("Invalid input! Please enter a digits")
            details={"error":str(c) ,"date":datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
            Writelogs.writelogs(str(details))
    
    if choice == 0:
        print("\nExiting for Searching!")
        return True
    if choice == 1:
        user="id"
        uservalue = str(Get_valid.get_valid_number("Enter your ID:- "))
    if choice == 2:
        user="name"
        uservalue = Get_valid.get_valid_name("Enter your Name:- ")
    if choice == 3:
        user="contact"
        uservalue = Get_valid.get_valid_contact("Enter your Contect:- ")
    if choice == 4:
        user="address"
        uservalue = input("Enter Your Address:- ")
    if choice == 5:
        user="email Id"
        uservalue = input("Enter your Email Id:- ")

    found=False

    for listdata in students:
        for key,value in listdata.items():
            if str(value).lower()== str(uservalue).lower():
                print(json.dumps(listdata,indent=4))
                found=True
    if not found:
        print(f"\n No student found with {user} = '{uservalue}'. Please try again.\n")