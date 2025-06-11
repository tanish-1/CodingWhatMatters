class User:
    def sign_in(self):
        print('logged in')

class Wizard(User):
    def __init__(self,name,power):
        self.name = name
        self.power = power

    def attack(self):
        print(f'attack with magic {self.power}')

class Archer(User):
    def __init__(self,name,arrow):
        self.name = name
        self.arrow = arrow

    def check_arrows(self):
        print(f'attack archer {self.arrow}')


class HybridBorg(Wizard,Archer):
    def __init__(self,name,power,arrow):
        Archer.__init__(self,name,arrow)
        Wizard.__init__(self, name, power)


wizard1 = Wizard('John',100)
# archer1 = Archer()

print(isinstance(wizard1,User))
print(wizard1.sign_in())
print(wizard1)
hb1 = HybridBorg('John',50,100)
print(hb1.check_arrows())
print(hb1.attack())
print(hb1.sign_in())