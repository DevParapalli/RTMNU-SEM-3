
import numbers


def main() :
    choice = 0;
    numbers = []
    while choice != -1:
        choice = int(input('Input Number: '))
        if choice % 2 == 0:
            numbers.append(choice)
    
    occur_count = int(input("Enter Occur: "))
    try :
        print(f"{numbers[occur_count - 1]}")
    except KeyError:
        print(-1)
        

if __name__ == "__main__":
    main()