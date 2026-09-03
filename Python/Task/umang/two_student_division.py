data = {"studentid": 101,
        "hindi": int(input("Enter your Hindi Marks:-")), 
        "english": int(input("Enter your English Marks:-")), 
        "math": int(input("Enter your Math Marks:-")), 
        "science": int(input("Enter your Science Marks:-"))}

data1 = {"studentid": 102,
        "hindi": int(input("Enter your Hindi Marks:-")), 
        "english": int(input("Enter your English Marks:-")), 
        "math": int(input("Enter your Math Marks:-")), 
        "science": int(input("Enter your Science Marks:-"))}

total_marks = data["hindi"] + data["english"] + data["math"] + data["science"]
num_subjects = 4
average_marks = total_marks / num_subjects

if average_marks >= 60:
    division = "I Division"

elif average_marks >= 50:
    division = "II Division"

else:
    division = "Fail"

print("=" * 30)
print("=" * 30)

print("Student ID:", data["studentid"])
print("Total Marks:", total_marks)
print("Average Marks:", average_marks)
print("Division:", division)

print("=" * 30)
print("=" * 30)

total_marks1 = data1["hindi"] + data1["english"] + data1["math"] + data1["science"]
num_subjects = 4
average_marks = total_marks1 / num_subjects

if average_marks >= 60:
    division = "I Division"

elif average_marks >= 50:
    division = "II Division"

else:
    division = "Fail"

print("Student ID:", data1["studentid"])
print("Total Marks:", total_marks1)
print("Average Marks:", average_marks)
print("Division:", division)


if total_marks > total_marks1:
    topper = data["studentid"]
    topper_marks = total_marks
elif total_marks1 > total_marks:
    topper = data1["studentid"]
    topper_marks = total_marks1

print("=" * 30)
print("========Topper Student========")
print("=" * 30)

print("Topper Student ID:", topper)
print("Topper Marks:", topper_marks)
print("Topper Average Marks:", average_marks)
print("Topper Division:", division)