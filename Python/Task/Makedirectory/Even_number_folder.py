import os
def even(path,i):
    if i%2==0:
        name="umang"
        folder=path + fr"\\{name}{i}"
        os.mkdir(folder)