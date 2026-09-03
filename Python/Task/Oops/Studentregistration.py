import json

class Student:
    
    listdata=[]
    
    def __init__(self):
        pass
    
    def menu(self):
        print("1. Registration")
        print("2. Searching")
        print("0. Exit")
        choice=int(input("enter your choice:- "))
        
        students=Student()
        
        if choice == 0:
            print("Exit.....")
            exit()
    
        elif choice == 1:
            students.Registration()
     
        elif choice == 2:
            students.Searching()
    
    def Registration(self):
        
        studentdict={}

        studentdict["id"]=int(input("Enter your id:- "))
        studentdict["name"]=input("Enter your name:- ")
        studentdict["age"]=int(input("Enter your age:- "))
        studentdict["grade"]=input("Enter your grade:- ")

        students=Student()
        students.listdata.append(studentdict)

        option=input("Enter add more student choice y or n:- ")
        
        if option == "y":
            students.Registration()
        else:
            students.menu()
    
    def Searching(self):
        val=int(input("Enter your search id:- "))
        students=Student()
        for data in students.listdata:
            for key,value in data.items():
                if value==val:
                    print(json.dumps(data,indent=4))
        students.menu()

data=Student()
data.menu()