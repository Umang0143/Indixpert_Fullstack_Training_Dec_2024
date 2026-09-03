import time
def sliptime(data):
    for n in range(1,5):
        if data == 1:
            name=" "
        if data == 2:
            name=" "
        if data == 3:
            name=" "
        print("\rIn progress"+"." * n,end="")
        time.sleep(1)
    print(f"\n{name}")

    