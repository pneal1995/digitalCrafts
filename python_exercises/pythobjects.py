class Person:
    def __init__(self, name, email, phone, friends, count): 
        self.name = name
        self.email = email
        self.phone = phone
        self.count = 0
        self.friends = []

    def greet(self, friend): 
        print("Hello {}, I am {}!".format(friend.name, self.name))
        self.greeting_count()
    def greeting_count(self):
        self.count += 1
        print(self.count)
    def __reset_count(self):
        self.count = 0

    # def num_unique_people_greeted(self):
    #     print( len(self.count)
        
    
    def print_contact_info(self):
        print("{}'s email: {}, {}'s phone number: {}".format(self.name, self.email, self.name, self.phone)) 
    
    def add_friend(self, friend):
        self.friends.append(friend) 
    def num_friends(self):
        print(len(self.friends) - 1)
    
    def __str__(self): 
     return "Person: {}'s email is {}, and their phone number is {}.".format(self.name, self.email, self.phone)
    
class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print("{} {}".format(self.year, self.model))
    
sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948", [], 0)
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456", [], 0)

car = Vehicle('Nissan', 'Leaf', 2015)
print(car.make, car.model, car.year)


sonny.print_contact_info()
jordan.print_contact_info()

jordan.friends.append(sonny)
jordan.add_friend(sonny)
sonny.add_friend(jordan)

jordan.num_friends()
