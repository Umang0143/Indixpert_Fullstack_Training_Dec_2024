import json
import os
import Writelogs
import datetime
import Get_valid

def readfile(path):
    if os.path.exists(path):
        with open(path, "r") as file:
            try:
                return json.load(file)
            except Exception as b:
                data={"error":str(b) ,"date":datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
                Writelogs.writelogs(str(data))
                return []
    else:
        return []

def studentregistration(path):
    studentlistdata=readfile(path)
    studentdatadict={}
    qualificationlist=[]
    studentdatadict["Id"]=Get_valid.get_valid_number("Enter your Id:- ")
    studentdatadict["Name"]=Get_valid.get_valid_name("Enter your Name:- ")
    studentdatadict["Contact"]=Get_valid.get_valid_contact("Enter your Contact:- ")
    studentdatadict["Address"]=input("Enter your Address:- ")
    studentdatadict["Email"]=input("Enter your Email:- ")
    studentdatadict["Qualification"]=qualificationlist
        
    for q in range(1,10000):
        qualificationdict={}
        while True:
            ask_qualification=input("\nAdd qualification y or n :- ")

            if ask_qualification.lower() =="y":
                qualificationdict["name"]=input("Enter your qualification:- ")
                qualificationdict["passingyear"]=Get_valid.get_valid_number("Enter your passing year:- ")
                qualificationlist.append(qualificationdict)
                break
            elif ask_qualification.lower()=="n":
                break
            else:
                print("Invalid input! Please enter only 'y' or 'n'. ")
        if ask_qualification == "n":
            break
    studentlistdata.append(studentdatadict)
    datainput=json.dumps(studentlistdata,indent=4)

    with open(path,"w") as file:
        file.write(datainput)