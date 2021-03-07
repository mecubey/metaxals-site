#!/usr/bin/python2.7

import matplotlib.pyplot as plt
import numpy as np
import sys
import requests
import math
import string
from random import choice
from random import randint
import os

def plot_graph(x_start =  -5, x_stop = 5, amount_arg = 100000, pi_default = "default", equation = "x", y_start=-5, y_stop=5, og_eq="x"):

    fig = plt.figure()
    plt.grid(alpha=.4,linestyle='-')
    ax = plt.subplot(111)

    ax.spines['top'].set_color('none')
    ax.spines['bottom'].set_position('zero')
    ax.spines['left'].set_position('zero')
    ax.spines['right'].set_color('none')

    if pi_default == "false":
        x = np.linspace(x_start, x_stop, amount_arg)
    elif pi_default == "true":
        x = np.linspace(x_start * np.pi, x_stop * np.pi, amount_arg)
    y = np.array((eval(equation)))
    if("tan" in equation):
        y[:-1][np.diff(y) < 0] = np.nan
    plt.xticks([min(x), min(x)/2, max(x)/2, max(x)])
    plt.ylim(y_start, y_stop)
    plt.yticks([y_start, y_start, y_stop/2, y_stop])

    plt.axhline(y=0)
    plt.axvline(x=0)

    plt.xlabel('x', fontsize=10)
    plt.ylabel('y', rotation=0, fontsize=10)
    ax.xaxis.set_label_coords(1.05, 0)
    ax.yaxis.set_label_coords(0.5, 1.05)

    plt.tick_params(labelsize=10)

    ax.plot(x, y, label="y = "+og_eq)
    plt.legend(bbox_to_anchor=(0.7, 0))
    
    filename = ""
    p_characters = string.ascii_lowercase+string.ascii_uppercase+string.digits
    for i in range(randint(5, 10)):
        filename += choice(p_characters)
    filename += ".png"
    print(filename)
    plt.savefig("/data/www/images/math/" + filename)
    #os.chmod("/data/www/images/math/" + filename, 0o777)

plot_graph(int(sys.argv[1]), int(sys.argv[2]), 10000, sys.argv[5], sys.argv[6].replace("\\", ""), int(sys.argv[3]), int(sys.argv[4]), sys.argv[6].replace("\\", ""))
