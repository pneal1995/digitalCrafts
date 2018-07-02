## exercise 1
name = input('What is your name?')
sentence = "Hello " + name
print(sentence)

## exercise 2
name = input('What is your name?')
print ("HELLO {}!".format(name.upper()))

## exercise 3
print("Please fill in the blanks below: ____(name)____ loves to ____(verb)____ with his ____(favorite pet)____.")
name = input('What is name?')
verb = input('What is verb?')
fav_pet = input('What is favorite pet?')
sentence = name + " loves to " + verb + " with his " + fav_pet
print(sentence)

## exercise 4
days_of_week = ['sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday']
day = int(input('Day (0-6)?'))
print({}.format(day))

## exercise 5

## exercise 6
c = input("What is the temperature in Celsius? ")
f = (c * 1.8) + 32
print(str(f))

## exercise 7 "{:.2f}".format(amount)
bill = int(input("Total bill amount?"))
servicelvl = input("Level of service?")

# exercise 8
total_bill = float(input("Total bill amount? "))
service = input("Level of service? ")
good = float(0.20 * total_bill)
decent = float(0.15 * total_bill)
terrible = float(0.10 * total_bill)
good_bill = float(good + total_bill)
decent_bill = float(decent + total_bill)
terrible_bill = float(terrible + total_bill)
if service == "good":
    print("Tip amount: {:0.2f}".format(good))
    print("Total amount: {:0.2f}".format(good_bill))
elif service == "decent":
    print("Tip amount: {:0.2f}".format(decent))
    print("Total amount: {:0.2f}".format(decent_bill))
elif service == "terrible":
    print("Tip amount: {:0.2f}".format(terrible))
    print("Total amount: {:0.2f}".format(terrible_bill))

# exercise 9
n = 1
while n <= 10:
    print(n)
    n += 1


formatter = "{} {} {} {} {} {} {} {} {} {}" # bad way of doing it
print(formatter.format(1, 2, 3, 4, 5, 6, 7, 8, 9 , 10)) # bad way of doing it

# exercise 10
num_coins = 0
print("You have {} coins.".format(num_coins))
while True:
switch = input("Do you want another? (yes/no) ")
    if switch == "yes":
        num_coins +=1
        print("You have {} coins.".format(num_coins))
    elif switch == 'no' :
        switch = input("Do you want another? (yes/no) ")
print("Adios.")