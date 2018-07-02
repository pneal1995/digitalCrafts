class Person:
    def __init__(self, name, email, phone): 
        self.name = name
        self.email = email
        self.phone = phone
        self.greeting_count = 0
        self.friends = []
        self.unique_greeted = []

    def greet(self, friend): 
        print("Hello {}, I am {}!".format(friend.name, self.name))
        self.greeting_count += 1
        self.unique_greeted.append(friend.name)
    
    def print_contact_info(self):
        print("{}'s email: {}, {}'s phone number: {}".format(self.name, self.email, self.name, self.phone)) 
    
    def add_friend(self, friend):
        self.friends.append(friend) 
    def num_friends(self):
        print(len(self.friends))
    
    def __str__(self): 
        return "Person: {}'s email is {}, and their phone number is {}.".format(self.name, self.email, self.phone)
    
    def num_unique_people_greeted(self):
        uniques = set(self.unique_greeted)
        uniques_greeted = list(uniques)
        print(len(uniques_greeted))


sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')


sonny.greet(jordan)

sonny.greet(jordan)

sonny.greet(jordan)

 

jordan.greet(sonny)

bill = Person('Bill', 'bob@yahoo.com', '236-897-9001')

jordan.greet(bill)


sonny.print_contact_info()


jordan.print_contact_info()



sonny.add_friend(jordan)

jordan.add_friend(sonny)

jordan.add_friend(bill)



sonny.num_friends()

jordan.num_friends()



print(sonny.greeting_count)

print(jordan.greeting_count)



print(sonny)

print(jordan)


sonny.num_unique_people_greeted()

jordan.num_unique_people_greeted()

    
# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year

#     def print_info(self):
#         print("{} {}".format(self.year, self.model))
    
# sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948", [], 0)
# jordan = Person("Jordan", "jordan@aol.com", "495-586-3456", [], 0)

# car = Vehicle('Nissan', 'Leaf', 2015)
# print(car.make, car.model, car.year)

# class Car:
#     def __init__(self, make, model, color):
#         self.model = model
#         self.make = make
#         self.color = color


# carl = Car('Mazda', 'CX-5', 'Grey')

# print(carl.make)