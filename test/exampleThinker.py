from tkinter import *  # importa a biblioteca de interface gráfica


def show_entry_fields():
    print("First Name: %s\n" % (e1.get()))


# cria uma janela
window = Tk()
window.configure(background='#EC5077')
window.geometry("500x500")
Label(window, text="time", background='#EC5077').grid(row=0)

e1 = Entry(window)
e1.grid(row=0, column=1)
Button(window, text='Quit', command=window.quit).grid(
    row=3, column=0, sticky=W, pady=4)
Button(window, text='Show', command=show_entry_fields).grid(
    row=3, column=1, sticky=W, pady=4)

mainloop()
