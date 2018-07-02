# # ## Exercise 1
# uwont = 34
# print('I am thinking of a number between 1 and 50.')
# while True:
#     guess = int(input("Take a guess. "))
#     if guess == uwont:
#         print("You got it. You're luckier than i thought...")
#         print("Next time won't be so easy.")
#         break
#     else:
#         print("Keep trying lol")

# # ## Exercise 2
# uwont = 34
# print('I am thinking of a number between 1 and 50.')
# while True:
#     guess = int(input("Take a guess. "))
#     if guess == uwont:
#         print("You got it. You're luckier than i thought...")
#         print("Next time won't be so easy.")
#         break
#     elif guess > uwont:
#         print('Guess something a little lower.')
#     elif guess < uwont:
#         print('Pump that number up. Your guess was too low.')
#     else:
#         print("Keep trying lol")

# # ## Exercise 3
# import random
# uwont = random.randint(1, 10)
# print('I am thinking of a number between 1 and 50.')
# while True:
#     guess = int(input("Take a guess. "))
#     if guess == uwont:
#         print("You got it. You're luckier than i thought...")
#         print("Next time won't be so easy.")
#         break
#     elif guess > uwont:
#         print('Guess something a little lower.')
#     elif guess < uwont:
#         print('Pump that number up. Your guess was too low.')
#     else:
#         print("Keep trying lol")

# ## Exercise 4
import random
uwont = random.randint(1, 50)
print('I am thinking of a number between 1 and 50.')
guess_tried = 0
guess = 0
while True:
    guess_left = 5 - guess_tried
    print('You have {} guesses left.'.format(guess_left))
    if guess_tried == 5:
        print("HA! You ran out of guesses. Good luck next time.")
        break
    guess_tried = guess_tried + 1
    guess = int(input("Take a guess. "))
    if guess == uwont:
        print("You got it. You're luckier than i thought...")
        print("Next time won't be so easy.")
        break
    elif guess > uwont:
        print('Guess something a little lower.')
    elif guess < uwont:
        print('Pump that number up. Your guess was too low.')
    else:
        print("Keep trying lol")

# ## Exercise 5
# import random
# uwont = random.randint(1, 50)
# guess_tried = 0
# guess = 0
# play_again = 'Y'
# while play_again == 'Y':
#     print('I am thinking of a number between 1 and 50.')
# while True:
#     guess_left = 5 - guess_tried
#     print('You have {} guesses left.'.format(guess_left))
#     if guess_tried == 5:
#         print("HA! You ran out of guesses. Good luck next time.")
#         break
#     guess_tried = guess_tried + 1
#     guess = int(input("Take a guess. "))
#     if guess == uwont:
#         print("You got it. You're luckier than i thought...")
#         print("Next time won't be so easy.")
#         break
#     else:
#         print("Keep trying lol")
# while True:
#     play_again = input("Do you dare to play again? (Y or N)")
#     if play_again != 'Y' and play_again != 'N':
#         print('Try typing one of the two characters I told you would work.')
#     else:
#         break
#     print

