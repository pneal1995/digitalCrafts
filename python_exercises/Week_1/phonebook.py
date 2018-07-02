# def phonebook():
my_phonebook = [
    {},
    {}
]

print("""
Electronic Phone Book 
===================== 
1. Look up an entry 
2. Set an entry 
3. Delete an entry 
4. List all entries 
5. Quit
""")
while True:
    answer = int(input("What do you want to do (1-5)? "))
    # if answer == 1:
    #     lookup = input("Name: ")
    #     # if 
    #     print("Found entry for", lookup, ":")
    #     break
    # elif answer == 2:

    if answer == 3:
        remove = input("Name: ")
        del my_phonebook
        print("Deleted entry for:", remove) 
        break
    # elif answer == 4:
        
    # elif answer == 5:
        


