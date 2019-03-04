from hasTimePassed import has_time_passed
from datetime import datetime
import threading  # thread library
from tkinter import *  # GUI library


def keep_standing_by_for_x_seconds(seconds):

    now = datetime.now().second
    while(not has_time_passed(now, int(seconds))):
        print('executing')
    print('finish')


def start_thread():
    t = threading.Thread(
        target=keep_standing_by_for_x_seconds, args=(input1.get()))
    t.start()


# creating window
window = Tk()
window.configure(background='#59A3F2')
window.geometry('500x600')
Label(window, text='how many seconds do you want this to execute?',
      background='#59A3F2').grid(row=0)
input1 = Entry(window)
input1.grid(row=0, column=1)
Button(window, text='Quit', command=window.quit).grid(
    row=3, column=0, sticky=W, pady=4)
Button(window, text='Show', command=start_thread).grid(
    row=3, column=1, sticky=W, pady=4)

mainloop()
