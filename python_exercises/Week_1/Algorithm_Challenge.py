for count in range(1, 101):
    if (count % 3 == 0) and (count % 5 == 0):
        print("FizzBuzz")
    elif count
    
    def F(n):
    if n == 0: return 0
    elif n == 1: return 1
    else: return F(n-1)+F(n-2)
print(F(10))

for i in F(n):

total = 0

i, j = 1, 0

while j <= 4000000:
        if j % 2 == 0:
                total += j
        i, j = j, i + j

print(total)


num = 600851475143
factors = []

i = 2

while i <= num:
    if num % i == 0 :
        factors.append(i)
        num /= i == 1

print(factors)
print(max(factors))

