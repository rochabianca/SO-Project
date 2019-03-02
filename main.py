from hasTimePassed import has_time_passed
from datetime import datetime
import threading  # thread library


def main():
    now = datetime.now().second
    while(not has_time_passed(now, 2)):
        print('executing')
    print('finish')


t = threading.Thread(target=main, args=())
t.start()

# when thread is finish
print('thread finish')
