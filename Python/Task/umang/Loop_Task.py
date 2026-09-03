user_data=[]

for n in range(1,6):

    student_dict={}
    
    print(f"---- Enter Student {n} Details ----")
    name=input("Enter student name : ")
    email=input("Enter student email address : ")
    mobile=input("Enter student mobile number : ")
    student_dict["Student name"]=name
    student_dict["Student email"]=email
    student_dict["Student mobile number"]=mobile
    user_data.append(student_dict)

print(user_data)