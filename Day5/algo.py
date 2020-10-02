# Easy 1
def add_up(n):
    num_sum = 0
    for i in range(1, n+1):
        num_sum = i + num_sum
    return num_sum


print(add_up(13))

# Easy 2


def whichIsLarger(f, g):
    if f() > g():
        return "f"
    elif g() > f():
        return "g"
    elif f() == g():
        return "neither"


print(whichIsLarger(lambda: 5, lambda: 10))
print(whichIsLarger(lambda: 25, lambda: 25))
print(whichIsLarger(lambda: 10, lambda: 5))

# Medium 1
a = {}

def toArray(obj):
    array_list = []
    for i in range(0, len(obj)):
        key = list(obj.keys())[i]
        value = list(obj.values())[i]
        pair = [key, value]
        array_list.append(pair)
    return array_list

print(toArray(a))

#Medium 2
def change_enough(change, price):
    total_change = change[0]*.25 + change[1]*.1 + change[2]*.05 + change[3]*.01
    if total_change >= price:
        return True
    else:
        return False

print(change_enough([2, 100, 0, 0], 14.11))
print(change_enough([0, 0, 20, 5], 0.75))
print(change_enough([30, 40, 20, 5], 12.55))
print(change_enough([10, 0, 0, 50], 3.85))
print(change_enough([1, 0, 5, 219], 19.99))


#Medium 3
def numbers_war(num_list):
    even_sum = 0
    odd_sum = 0
    for i in range(0, len(num_list)):
        current_no = num_list[i]
        if current_no % 2 == 0:
            even_sum += current_no
        else:
            odd_sum += current_no
    if even_sum > odd_sum:
        final_no = even_sum - odd_sum
    else:
        final_no = odd_sum - even_sum
    return final_no

print(numbers_war([2, 8, 7, 5]))
print(numbers_war([12, 90, 75]))
print(numbers_war([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]))

#Hard
def oddish_or_evenish(num):
    digit_sum = 0
    num_string = str(num)
    for i in range(0,len(num_string)):
        digit_sum += int(num_string[i])
    if digit_sum % 2 == 0:
        return "Evenish"
    else: 
        return "Oddish"

print(oddish_or_evenish(43))
print(oddish_or_evenish(373))
print(oddish_or_evenish(4433))

#Very Hard
def fib_get(n, str_array):
    if n == 0:
        return str_array[0]
    elif n == 1:
        return str_array[1]
    else: 
        return fib_get(n-1, str_array) + fib_get(n-2, str_array)

def fib_str(n, str_array):
    final_string = f"{str_array[0]}"
    for i in range(1, n):
        final_string += f", {fib_get(i, str_array)}"
    return final_string



print(fib_str(5, ["e", "a"]))

#Very Hard 2
def factorial(n):
    number = 1
    for i in range(1, n+1):
        number *= i 
    return number

def alt_semi(n):
    alt = 0
    semi = 1
    for i in range(n, 0, -2):
        fact = factorial(i)
        alt += fact
    for i in range(n-1, 0, -2):
        fact = factorial(i)
        alt -= fact
    if n % 2 == 0:
        for i in range(2, n+1):
            if i % 2 == 0:
                semi *= i
    else:
        for i in range(2, n+1):
            if i % 2 != 0:
                semi *= i

    return alt - semi
     
print(alt_semi(1))
print(alt_semi(2))
print(alt_semi(3))