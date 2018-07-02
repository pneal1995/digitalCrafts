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