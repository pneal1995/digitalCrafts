# string1 = "hello"
# print(string1.upper())

# s = "hello everybody."
# s = s[:1].upper() + s[1:]
# print(s)

# s1 = "hello world"
# s1 = s1[::-1]
# print(s1)

# word = input('The word: ').upper()

# # A => 4
# # E => 3
# # G => 6
# # I => 1
# # O => 0
# # S => 5
# # T => 7

# word = word.replace('A', '4')
# word = word.replace('E', '3')
# word = word.replace('G', '6')
# word = word.replace('I', '1')
# word = word.replace('O', '0')
# word = word.replace('S', '5')
# word = word.replace('T', '7')

# print(word)

word = input('The word: ')

long_vowels = ['oo', 'ee', 'uu', 'aa', 'ii']

result = ''
for i in range(len(word)):
    twoletters = word[i:i+2]
    if twoletters in long_vowels:
        result += word[i] * 4
    else:
        result += word[i]

print(result)


# cipher = "lbh zhfg hayrnea jung lbh unir yrnearq"

# alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

# print(alphabet)
# position = 0
# newPosition = 0
# finalString = " "

# for cipherLetter in cipher :
#     if cipherLetter.isspace() == False :
#         positon = alphabet.index(cipherLetter)
#         newPostion =  position - 13
#         if newPosition < 0 :
#             newPosition = 26 + newPosition
#         finalString = finalString + alphabet[newPosition]
# print(finalString)


# str1 = "this is a string example...wow exam exam exam!!!"
# str2 ="exam";
# if str1.find(str2) >= 0 :
#     print(str1.replace(str2, "aaaaaaa")
    
# print(str1.find(str2))

# number = [0, 1, 2, 3, 4, 6, 9, 12]

#     in range(0,10):
#     print(outerIndex)
#     for innerIndex in range(0,10):
#         print("outerIndex: {} innerIndex {}".format(outerIndex))