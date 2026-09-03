import Choice_option

def Menu():

    while True:
        print("=" * 50)
        print("        Student Record Management System")
        print("=" * 50)
        print("1. Student Registration")
        print("2. Display All Records")
        print("3. Search Student")
        print("0. Exit")
        print("=" * 50)

        Choice_option.get_user_choice()      
Menu()