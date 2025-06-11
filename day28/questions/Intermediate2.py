# Dictionary
obj = {
    'basket': 45,
    'greet': 78,
    'age': 20,
}
user = dict(name='john')
print(user)
print(obj.get('age',55))

print('basket' in obj)
print('basket' in obj.keys())
print('basket' in obj.values())
print(obj.items())
obj.update({'ages': 65})
print(obj)

# tuple

my_tuple = (1,2,3,4)
x,y,z,*other = (1,2,3,4,5)
print(3 in my_tuple)
new_tuple = my_tuple[1:4]
print(my_tuple)
print(new_tuple)
print(other)
print(my_tuple.count(2))
print(len(my_tuple))


# set
my_list = [1,2,3,4,5,5]
my_set = {1,2,3,4,5,5}
my_set.add(100)
my_set.add(2)
print(my_set)

my_list2 = [1,2,3,4,4]

print(set(my_list2))
print(1 in my_set)

new_set = my_set.copy()

my_set2 = {1,2,3,4,5}
your_set = {4,5,6,7,8,9,10}

print(my_set2.difference(your_set))
# print(my_set2.discard(5))
# print(my_set2)
# print(my_set2.difference_update(your_set))
# print(my_set2)

print(my_set2.intersection(your_set))
# or
print(my_set & your_set)
print(my_set.isdisjoint(your_set)) # to find common

print(my_set2.union(your_set))
# or
print(my_set2 | your_set)

