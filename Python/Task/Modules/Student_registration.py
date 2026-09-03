def get_valid_name():
    name = input("Enter your student name (Only alphabets):- ")
    if name.isalpha():
        return name
    else:
        print("Invalid name! Only alphabets are allowed.")
        return get_valid_name()

def registerstudent():
    studentdata={}
    studentdata["id"]= int(input("Enter your Id:- "))
    studentdata["name"]=get_valid_name()
    studentdata["contect"]=int(input("Enter your contect number:- "))
    studentdata["email"]=input("Enter your email id:- ")
    studentdata["address"]=input("Enter your address:- ")
    return studentdata