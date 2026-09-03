class Table:
    
    def __init__(self):
        pass
    
    def get_table(self):
        number=int(input("Enter your number:- "))
        for n in range(1,11):
            print(f"{number} * {n} = {number*n}")
    
    def factorial(self):
        num=int(input("Enter your number:- "))
        fact=num
        for n in range(num-1,1,-1):    # (start, stop, step(decrement karna he )) 
            num *=n
        print(f"factoril {fact} = {num}")

data=Table()
data.get_table()
data.factorial()