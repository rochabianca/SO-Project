from datetime import datetime  # library to get the system time

# verify if the system time now is the same as the initial time + the final time inputed


def has_time_passed(initial_time, final_time):
    if(datetime.now().second == (initial_time + final_time)):
        return True
    else:
        return False
