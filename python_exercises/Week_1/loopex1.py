# for x in range(1, 10):
#     print(x, end = ' ')

# start = int(input("Start from: "))
# end = int(input("End on: "))

# for x in range(start, (end + 1)):
#     print(x, end = ' ')

# a = "***** "
# print(a*5)

# number = int(input("How big is the square? "))

# for i in range(number):
#     print('*' * number)

# import sys
# width = int(input("Width? "))
# height = int(input("Height? "))

# for i in range(0, height):
#     print('*' * width)


# xr = 4
# for x in range(0,xr):
#     s = xr - x - 1
#     st = x * 2 + 1
#     print(' ' * s + '*' * st)

xr = int(input("Height? "))
for x in range(0,xr):
    s = xr - x - 1
    st = x * 2 + 1
    print(' ' * s + '*' * st)

# def multi():
#     num = int(input("Enter your number"))
#     lim = int(input("Enter limit of table"))
#     a = num
#     for b in range(1, lim+1):
#         print('{} * {} = {}'.format(a, b, a*b))
# multi()