export const PYTHON_PRINT_HELLO = `
def fun():
    str = "hello";
    str += " hello";
    str += " hello";
    str += " hello";
    str += " hello";
    print(str)
    return str;
fun()
`;
export const PYTHON_PRINT_HELLO_LOOP = `
def fun():
    str = "";
    for i in range(5):
        str += "hello ";
    print(str)
    return str;
fun()
`;
export const PYTHON_PRIME_NUM = `
def func():
  num = 5
  prime = True

  if num <= 1:
    prime=False

  for i in range(2,num):
        if (num % i) == 0:
            prime = False 
            break
  if prime:
        ouput = "Enter a number: "+ str(num)+ " is a prime number";
  else:
        ouput = "Enter a number: "+ str(num)+ " is not a prime number";
  return ouput;
func()
`;
export const PYTHON_READ_FILE = `
def fun():
    file = open("tes.txt","w")
    L = ["This is Test File"]
    file.writelines(L)
    file = open("tes.txt","r+")
    return(file.read())
fun()
`;
export const PYTHON_PANDAS_QUERY = `
from pyodide.http import pyfetch
import pandas as pd

def async fun():
    download_url = "./data.csv"
    response = await pyfetch(download_url)
    response = await response.string()
    with open("data.csv", "w") as f_w:
        f_w.write(response)
    nba = pd.read_csv("data.csv")
    return(nba.head())
fun()
`;
export const PYTHON_SIMPLE_BAR_GRAPH = `
import matplotlib.pyplot as plt
from js import document

x = [1, 2, 3, 4, 5]
y = [5, 7, 3, 9, 2]

fig, ax = plt.subplots()
plt.bar(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Bar Graph')

def create_root_element2(self):
    return document.getElementById('playground-9')
fig.canvas.create_root_element = create_root_element2.__get__(
create_root_element2, fig.canvas.__class__)

fig.canvas.show()
`;
export const PYTHON_SIMPLE_LINE_GRAPH = `
import matplotlib.pyplot as plt
from js import document

x = [1, 2, 3, 4, 5]
y = [5, 7, 3, 9, 2]

fig, ax = plt.subplots()
plt.plot(x, y)
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Line Graph')

def create_root_element2(self):
    return document.getElementById('playground-10')
fig.canvas.create_root_element = create_root_element2.__get__(
create_root_element2, fig.canvas.__class__)

fig.canvas.show()
`;
export const PYTHON_SIMPLE_PIE_GRAPH = `
import matplotlib.pyplot as plt
from js import document

labels = ['A', 'B', 'C', 'D']
values = [20, 30, 40, 10]

fig, ax = plt.subplots()
plt.pie(values, labels=labels, autopct='%1.1f%%')
plt.title('Pie Chart')

def create_root_element2(self):
    return document.getElementById('playground-11')
fig.canvas.create_root_element = create_root_element2.__get__(
create_root_element2, fig.canvas.__class__)

fig.canvas.show()
`;