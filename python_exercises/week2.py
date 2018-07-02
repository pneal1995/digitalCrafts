# class MyClass:
#       def SayHello():
#         print("Hello there!")
# MyClass.SayHello()

# class Person:
#   def greet (self): #all instance methods have atleast one argument, self
#     print("Hello")

# me = Person() #instantiating object
# me.greet()

# matt = Person()
# matt.greet()

# class MyClass:
#     def __init__(self):
#       print("Upon Initialization: Hello!")
#     def instance_method(self): #instanced method with self argument
#       print("hello instance")
#     def class_method(): #class method, no argument
#       print("Hello class method!")

# digitalCrafts = MyClass()

# digitalCrafts.instance_method()

# MyClass.class_method()
# test.class_method()

# class MyClass:
#     Greeting = ""
#     def SayHello(self):
#             print("Hello {0}".format(self.Greeting))
# MyClass.Greeting = "Zelda"
# # MyClass.SayHello()
# test = MyClass()
# test.SayHello()
# test2 = MyClass()
# test.SayHello()

class Person:
  #global variable
  GlobalPerson = "Zelda"
  def __init__ (self, name):
    self.name = name
    print(name)
  def greet (self, friend):
    print("Hello {} and {} and {}".format(self.name, friend, self.GlobalPerson))

matt = Person("Fisher")
matt.greet("Travis")

person1 = Person("Hussein")
person1.greet("Skyler")

Person.GlobalPerson = "Eric"
matt.greet("Travis")
person1.greet("Skyler")