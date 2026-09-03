import os

def displayrecords(path):
    if not os.path.exists(path):
        print("File is not found.")
        return
    with open(path, "r") as file:
        print(file.read())