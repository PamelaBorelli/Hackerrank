# The provided code stub reads and integer, , from STDIN. For all non-negative integers , print .

if __name__ == '__main__':
    n = int(input())

    if n> 0:
        for x in range(0, n):
            print (x **2)