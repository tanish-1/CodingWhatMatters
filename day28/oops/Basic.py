# OOP

class PlayerCharacter:
    membership = True
    def __init__(self, name='user123', age=0):  # constructor
        if(age > 18):
            self.name = name
            self.age = age
    def shout(self):
        print(f'my name is {self.name}')
        return 'done'

player1 = PlayerCharacter('Tom',19)
# player2 = PlayerCharacter('Tom', 21)
# print(player1.name)
# print(player1.run())
# help(list)
player1.shout()
print(player1.membership)



