import random

data=random.randint(1,10)

user_input=input("enter your number:-")

if user_input.isdigit():
    data1 = int(user_input)

    if 1 <= data1 <= 10:
        print("Random Number:", data)
        if data==data1:
            print("Congratulation you are the winner.")
        else:
            print("indixpert is the winner.")
    else:
        print("Invalid input! Please enter a number between 1 and 10.")
else:
      print("Invalid input! Please enter a valid number.")