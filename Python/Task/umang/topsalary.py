user_input=input("enter salary 1:-")
salary2=int(input("enter salary 2:-"))
salary3=int(input("enter salary 3:-"))
salary4=int(input("enter salary 4:-"))

if user_input.isdigit():
    salary1 = int(user_input)

    salaries=[salary1,salary2,salary3,salary4]

    if (salary1 < 10000 or salary1 >100000 or
        salary2 < 10000 or salary2 >100000 or
        salary3 < 10000 or salary3 >100000 or
        salary4 < 10000 or salary4 >100000):
        print("Error: salaries must be betweeen 10000 and 1 lac")
    else:
        sorted_salary=sorted(salaries,reverse=True)
        print("top 2 salaries")

        print(sorted_salary[0])
        print(sorted_salary[1])
else:
    print("Invalid input! Please enter a valid number.")