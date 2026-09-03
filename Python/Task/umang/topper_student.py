import json

listdata=[]
topper=None

def get_valid_name():
    name = input("Enter your student name (Only alphabets): ")
    if name.isalpha():
        return name
    else:
        print("Invalid name! Only alphabets are allowed.")
        return get_valid_name()
    
def get_valid_marks(subject):
        while True:
            marks = int(input(f"Enter your {subject} marks (0-100): "))
            if 0 <= marks <= 100:
                return marks
            else:
                print("Invalid input! Marks should be between 0 and 100. Please enter again.")

for n in range(1,3):
    studentdata={}
    markslist=[]
    studentdata["id"]= int(input("Enter student id:-"))
    studentdata["name"]=get_valid_name()
    studentdata["marks"]=markslist
    
    marksdict={}
    marksdict["hindi"]= get_valid_marks("hindi")
    marksdict["english"]= get_valid_marks("english")
    marksdict["maths"]= get_valid_marks("maths")
    marksdict["science"]= get_valid_marks("science")
    
    total_marks = sum(marksdict.values())
    percentage = (total_marks / len(marksdict))

    marksdict["total_marks"] = total_marks
    marksdict["percentage"] = percentage
    markslist.append(marksdict)

    studentdata["total_marks"] = total_marks
    studentdata["percentage"] = percentage
    if topper is None or percentage > topper["percentage"]:
        topper=studentdata

    listdata.append(studentdata)
print(json.dumps(listdata,indent=4))

print("=" * 30)
print("=" * 30)

if topper:
    print("\n==========Topper Details========== ")
    print(json.dumps(topper, indent=4))