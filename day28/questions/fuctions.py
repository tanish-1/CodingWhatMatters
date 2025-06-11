def say_hello():
    print('hello')

say_hello()

def super_func(*args , **kwargs):
    print(args)
    print(kwargs)
    total = 0
    for item in kwargs.values():
        total +=item
    return sum(args) + total

print(super_func(1,2,3,4,5,num1= 5, num2= 10))

#Rule for params: params, *args , default parameter , **kwargs
# def func(name , *args , i='hi', **kwargs):
#     pass