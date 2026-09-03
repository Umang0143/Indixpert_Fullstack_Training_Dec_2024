class Student:
    
    def __init__(self):
        pass
    
    def display_info(self):
        print("name:- ",self.name)
        print("age:- ",self.age)
        print("grade:- ",self.grade)
    
    def registration(self):
        self.name=input("Enter your name:- ")
        self.age=int(input("Enter your age:- "))
        self.grade=input("Enter your grade:- ")

data=Student()
data.registration()
data.display_info()

data1=Student()
data1.registration()
data1.display_info()