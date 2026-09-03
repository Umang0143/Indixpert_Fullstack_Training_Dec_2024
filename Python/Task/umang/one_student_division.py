data = {"studentid": 101, "hindi": 70, "english": 60, "math": 65, "science": 75}

total_marks = data["hindi"] + data["english"] + data["math"] + data["science"]

num_subjects = 4

average_marks = total_marks / num_subjects

if average_marks >= 60:
    division = "I Division"

elif average_marks >= 50:
    division = "II Division"

else:
    division = "Fail"

print("Student ID:", data["studentid"])
print("Total Marks:", total_marks)
print("Average Marks:", average_marks)
print("Division:", division)