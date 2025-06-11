li = [1,2,3,4]
amazon_cart = ['noteBooks', 'sungGlass']
print(amazon_cart[1])
stri = 'hello'[0:4]
print(stri)
amazon_cart2 = [
    'notebooks',
    'sunglasses',
    'toys',
    'graps',
]
print(amazon_cart2[::2])
amazon_cart2[0] = 'laptop'
print(amazon_cart2)

# matrix

matrix = [
    [1,2,3],
    [7,8,9],
    [6,4,5]
]
print(matrix[0][1])
basket = [1,2,3,4]
basket.append(100)
basket.insert(3,10)
new_list = basket.remove(4)
print(new_list)
print(basket)

alpha = ['a', 'b', 'c','x', 'd', 'e']
print(sorted(alpha))
alpha.reverse()
print(alpha[::-1])
# print(alpha.index('d',0,4))

# print(alpha.count('d'))
# print(list(range(1, 101)))

new_sentence = ' '.join(['hi','my','name','is','JOJO'])
print(new_sentence)

a,b,c,*other,d = [1,2,3,4,5,6,7]

print(a)
print(b)
print(c)
print(other)
print(d)
li = []
print(li)

obj = [
    {
    'a' : [1,2,3],
    'b' : 'hello',
    'c' : True
},
    {
        'a': [4,5,6],
        'b': 'bye',
        'x' : True
    }
]
print(obj[0])