age = 25
if age >= 21:
    print("You get free beer")
if True:
    print("True")
else:
    print("False")

age = 25
if (age == 25):
    print(age)

name = "Preston"
if (name == "Preston"):
    print(name)
if (age <= 25):
    print(age)
if (age != 25):
    print(age)
if (age < 25):
    print(age)

if age >= 21:
    print("You get free beer")
else:
    print("Sorry no beer for you")

if age >= 21:
    print("You get free beer")
elif age < 18:
    print("What are you even doing here?")
else:
    print("Sorry no beer for you")

# Lists
# has to be same data types; mutable.
myList = []
animals = ["horse","chicken","goat"]
daysofweek= ["Monday","Tuesday","Wednesday","Thursday","Friday"]
numbers = [1, 2, 3, 4, 5]

animals[0] #would give you “horse”
animals[1] #would return “chicken”
daysofweek[2] #would return “Wednesday”


# List Slicing
numbers[0:2]
numbers[4:5]
numbers[3:5]
numbers[2:5]

# List Methods
list.insert(3, item)
list.extend([3, 4, 5])
list.pop()
list.index(item)
list.sort()
list.copy()

# Tuples
# immutable object; constant; parenthesis are optional.
(1, 2)
(1, "Sandhya", "Ram")
sandhya = 1, "Sandhya", "Ram"
sandhya = (1, "Sandhya", "Ram")
one = (1)  # one-sized tuple
() # zero-sized tuple
one, two, three = (1, 2, 3)
# Destructuring Assignment
sandhya = (1, "Sandhya", "Ram")
first_name = sandhya[1]
last_name = sandhya[2]

# For
names = ['George', 'W', 'Bush']
for name in names:
    print(name)

name = 'George W Bush'
for character in name:
    print(character)

for number in range(0, 10):
    print(number)

for number in range(0, 10, 2):
    print(number)

names = ['horse', 'cow', 'chicken', 'dog', 'cat', 'mouse', 'hippo', 'penguin', 'tiger', 'bear', 'lion']

for number in range(0, 10, 2):
    print(names[number])

# # while loops
count = 0
while count < 10:
    count += 1 #increment count
    print("The count is", count)
print("Done")

count = 0
while (count <= 10):
    print(count)
    print("Hello Preston")
    count = count + 1



