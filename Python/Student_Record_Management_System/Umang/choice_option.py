import Student_Registration
import Display_Records
import Search_Student
import Search_Qualification
import datetime
import Sliptime
import Writelogs

path=r"D:\Indixpert 2025\Student_Record_Management_System\Umang\Studentdeta.json"

def get_user_choice():
    
    while True:
        try:
            choice = int(input("Please select an option (0-3): "))
            if choice in [0, 1, 2, 3]:
                break
            else:
                print("\nInvalid option! Please select a valid number (0-3).\n")
        except Exception as a :
            print("\nInvalid input! Please enter a digits\n")
            details={"error":str(a) ,"date":datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
            Writelogs.writelogs(str(details))
    
    if choice == 0:
        print("\nExiting... Goodbye!\n")
        exit()
    
    if choice == 1:
        Student_Registration.studentregistration(path)
        Sliptime.sliptime(choice)
    
    if choice == 2:
        Sliptime.sliptime(choice)
        Display_Records.displayrecords(path)
    
    if choice == 3:
        Sliptime.sliptime(choice)
        print("=" * 40)
        print("       Student Record Search Menu")
        print("=" * 40)
        print("1. Search student by basic details")
        print("2. Search student by qualification")
        print("0. Exit")
        print("=" * 40)
        while True:
            try:
                choice = int(input("Please select an option (0-2): "))
                if choice in [0, 1, 2]:
                    break
                else:
                    print("\nInvalid option! Please select a valid number (0-2).\n")
            except Exception as d :
                print("\nInvalid input! Please enter a digits\n")
                details={"error":str(d) ,"date":datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
                Writelogs.writelogs(str(details))
            
        if choice == 0:
            print("Exit")
            exit()
        if choice == 1:
            Sliptime.sliptime(choice)
            Search_Student.searchstudent(path)
        if choice == 2:
            Sliptime.sliptime(choice)
            Search_Qualification.Qualification(path)