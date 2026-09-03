import json

maindata=[]
data={}
skils=[]
qualificationdict={}
listdata=[]

data["student id"]=int(input("please anter your id:-"))
data["studentname"]=input("please anter your name:-")
data["experience"]=input("Enter your experience:-")

skils1=input("please enter your skils:-")
skils.append(skils1)

skils2=input("please enter your skils:-")
skils.append(skils2)

skils3=input("please enter your skils:-")
skils.append(skils3)

data["skils"]=skils

qualificationdict["name"]=input("please enter your qualificatino:-")
qualificationdict["pasingyear"]=int(input("please enter your pasing year:-"))
listdata.append(qualificationdict)

qualificationdict={}
qualificationdict["name"]=input("please enter your qualificatino:-")
qualificationdict["pasingyear"]=int(input("please enter your pasing year:-"))
listdata.append(qualificationdict)

data["qualification"]=listdata
maindata.append(data)

data={}
skils=[]
qualificationdict={}
listdata=[]

data["student id"]=int(input("please anter your id:-"))
data["studentname"]=input("please anter your name:-")
data["experience"]=input("Enter your experience:-")

skils1=input("please enter your skils:-")
skils.append(skils1)

skils2=input("please enter your skils:-")
skils.append(skils2)

skils3=input("please enter your skils:-")
skils.append(skils3)

data["skils"]=skils

qualificationdict["name"]=input("please enter your qualificatino:-")
qualificationdict["pasingyear"]=int(input("please enter your pasing year:-"))
listdata.append(qualificationdict)

data["qualification"]=listdata
maindata.append(data)

print(json.dumps(maindata,indent=4))