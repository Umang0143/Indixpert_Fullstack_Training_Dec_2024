import os
import json
import datetime
import Writelogs
import Get_valid

def Qualification(path):
    if not os.path.exists(path):
        return "File not found."

    with open(path, "r") as file:
        students = json.load(file)

    while True:
        print("=" * 50)
        print("       Search Student by Qualification Info")
        print("=" * 50)
        print("1. Search by Qualification")
        print("2. Search by Passing Year")
        print("0. Exit")
        print("=" * 50)
        try:
            choice = int(input("Please select an option (0-2): "))
            if choice in [0, 1, 2]:
                break
            else:
                print("\nInvalid option! Please select a valid number (0-2).\n")
        except Exception as c :
            print("Invalid input! Please enter a digits")
            details={"error":str(c) ,"date":datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
            Writelogs.writelogs(str(details))

    if choice == 0:
        print("\nExiting for Searching!")
        return True
    
    if choice == 1:
        user="name"
        uservalue = input("Enter your Qualification:- ")
    
    if choice == 2:
        user="passingyear"
        uservalue = Get_valid.get_valid_number("Enter your Year:- ")

    found = False

    for listdata in students:
        for key,value in listdata.items():
            if key == "Qualification":
                for qual in value:
                    if qual[f"{user}"]==uservalue:
                        print(json.dumps(listdata,indent=4))
                        found = True
                        break
    if not found:
        print(f"\nNo student found with {user} = '{uservalue}'. Please try again.\n")