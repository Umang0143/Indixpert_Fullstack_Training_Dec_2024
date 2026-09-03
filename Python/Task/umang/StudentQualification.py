import json
listdata=[]

def get_valid_name():
    name = input("Enter your student name (Only alphabets):- ")
    if name.isalpha():
        return name
    else:
        print("Invalid name! Only alphabets are allowed.")
        return get_valid_name()

for n in range(1,10000):
    studentdata={}
    qualificationlist=[]
    studentdata["id"]= n+100
    studentdata["name"]=get_valid_name()
    studentdata["contect"]=int(input("Enter your contect number:- "))
    studentdata["email"]=input("Enter your email id:- ")
    studentdata["address"]=input("Enter your address:- ")
    studentdata["qualification"]=qualificationlist
    
    for q in range(1,10000):
        qualificationdict={}
        qualificationdict["name"]=input("Enter your qualification:- ")
        qualificationdict["passingyear"]=input("Enter your passing year:- ")
        qualificationlist.append(qualificationdict)
        ask_qualification=input("Add more qualification y or n :- ")
        if ask_qualification.lower() =="y":
            continue
        else:
            break
    listdata.append(studentdata)
    ask_student=input("Add more Student y or n :- ")
    if ask_student.lower() == "y":
        continue
    else:
        break
print(json.dumps(listdata,indent=4))

for s in range(1,100000):
    qualification_search=input("Enter qualification to search :- ")
    if qualification_search.isalnum():
        found=False
        for d in listdata:
            for j in d.keys():
                if j == 'qualification':
                    qual_dct = d[j]
                    for i in range(len(qual_dct)):
                        if qual_dct[i]["name"] == qualification_search:
                            print(d["name"])
                            found=True
        if not found:
            print("no student found with this qualification.")
        ask_search=input("Add more Search y or n :- ")
        if ask_search.lower() == "y":
            continue
        else:
            break
    else:
        print("Enter valid qualification")