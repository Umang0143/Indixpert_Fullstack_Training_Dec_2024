def writelogs(input):
    with open("logs.txt", "a") as file:
        file.write(input + "\n")