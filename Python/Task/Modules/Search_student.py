def studentsearch(studentdata):
    ask_search=input("Student Name Search :- ")
    for i in range(len(studentdata)):
        if studentdata[i]["name"]== ask_search:
            print(studentdata[i])


