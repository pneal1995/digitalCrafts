# exercise 1
# a = [0, 1, 2, 3, 4, 5] 
# # a = range(6)
# b = sum(a)
# print(b)

# exercise 2
# list = [0, 1, 2, 3, 4, 5]

# print(max(list))

# exercise 3
# list = [0, 1, 2, 3, 4, 5]

# print("Given the numbers:")
# print(list)
# print("Which is the smallest?\nI'll tell you.")
# print(min(list))

# exercise 4
# list = [0, 1, 2, 3, 4, 5]

# print("Given the numbers:")
# print(list)
# print("Which are the even integers?\nI'll tell you.")

# for x in range(5):
#     if (x % 2 == 0):
#         print(x)

# exercise 5
# list = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

# print("Given the numbers:")
# print(list)
# print("Which are greater than zero?\nI'll tell you.")

# for x in list:
#     if (x > 0):
#         print(x)

# exercise 6
# firstlist = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
# print(firstlist)
# print("Here's our new list: ")
# for x in firstlist:
#     if (x > 0):
#         print(x)

# exercise 7
# list = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
# print(list)
# print("turns into this when we multiply by 5: ")
# for numbers in list:
#     print(numbers *5)

# exercise 8, 9

# multiplication
# addition

# exercise 10
# x = [[3,5,9],[2,3,6],[4,8,1]]
# y = [[1,4,7],[2,5,3],[6,7,2]]

# r = []

# for i in range(len(x)):
#     n = []
#     for j in range(len(x)):
#         z = 0
#         for k in range(len(x)):
#             xx = x[k]
#             yy = y[j]
#             z += xx[j] * yy[k]
#         n.append(z)
#     r.append(n)

# print(r)

# exercise 11
# a = ['a', 'a', 'd', 'b', 'c', "5", "5"]
# def f1(seq):
#     set = Set(seq)
#     return list(set)
# f1(a)
