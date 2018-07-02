my_dictionary = {
    "Matt" : "Fisher", #keys : values
    "Travis" : "Ramos",
    "Eric" : "Ridenour",
    0 : 1,
    "Veronica" : "Lino"
}

# result = my_dictionary["Matt"] #returns key name
# result = my_dictionary.get("Matt1") #get function returns none when the key has no entry in the dict.
# result = "Matt1" in my_dictionary #returns a boolean
# print(result) #print corresponding result

# ## setting values

# my_dictionary["Matt"] = "Smith" 
# print(my_dictionary)

# keys = my_dictionary.keys()
# print(keys)

# values = my_dictionary.values()
# print(values)

# del my_dictionary["Veronica"] #delete things
# print(my_dictionary)

# for key, value in my_dictionary.items(): # for loop to set items
#     print(key)
#     print(value)

contact = [
    {
        'first_name': 'Phillip',
        'last_name': 'Guo',
        'email': 'phillip.guo@gmail.com',
        'phone':{
            'work': '837-494-3948'
            'cell': '234-897-4933'
        }
    },
    {
        'first_name': 'Mark',
        'last_name': 'Guzdial',
        'email': 'mark.guzdial@gatech.edu',
        'phone':{
            'work': '484-569-3466'
            'cell': '493-485-9845'
        }
    }
]

print(contact[0]["email"])
print(contact[0]["phone"]["cell"]) # returns first dictionary, phone value for cell
print(contact[1]["email"])
print(contact[1]["phone"]["work"]) # returns second dictionary, phone value for work

print(contact[0]["email"]) # 0 gives first contact, 1 gives second

my_dictionary["newKeyName"] = "hello world"
print(my_dictionary)
# contact[
#     {},
#     {}
# ]