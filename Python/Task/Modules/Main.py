import Student_registration
import Student_details
import Search_student

studentdata=[]
def menu():
    print("==========Details==========")
    print("press 1. Registration")
    print("press 2. Details")
    print("press 3. Search")
    print("press 0. Exit")
    user_input()
    
def user_input():
    datalist=int(input("Enter your Choice :-"))
    
    if datalist == 1:
        data=Student_registration.registerstudent()
        studentdata.append(data)
        menu()

    elif datalist == 2:
        Student_details.details(studentdata)
        menu()

    elif datalist == 3:
        Search_student.studentsearch(studentdata)
        menu()

    elif datalist == 0:
        exit()

    else:
        print("invelid number")

menu()