for i in range(1, 201):
    if i%5==0 and i%7==0: print("FooBar")
    elif i%5==0: print("Foo")
    elif i%7==0: print("Bar")
    else: print(i)

for i in range(1, 201):
    p = ""
    if i%5==0:
        p+="Foo"
    if i%7==0:
        p+="Bar"
    if i%7!=0 and i%5!=0:
        p+=str(i)
    print(p)