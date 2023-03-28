const chapter1 = {
  HEADING_1: `Loops in Python`,
  CONTENT_1: `Most of the actions in this world occur repeatedly. For example, if you have to walk one kilometer to reach a mall, you put your left and right foot forward, alternatively, to cover the distance. You repeatedly put each of your feet forward, one by one, a number of times until you reach the mall. Similarly in programming, you need to repeat a set of code multiple times more often than not. Loops help us to reduce this process of repetition. `,
  CONTENT_2: `In Python, the for loop is used to iterate over a sequence such as a list or string and other iterable objects such as a range.`,
  CONTENT_3: `Using a `,
  CONTENT_3_1: `for`,
  CONTENT_3_2: ` loop, we can iterate over each item in the sequence and execute the same set of commands for each item. This way we can automate and repeat tasks in an efficient manner.`,
  CONTENT_4: `Print the `,
  CONTENT_4_1: `Hello`,
  CONTENT_4_2: ` statement five times by repeating the statements. `,
  CONTENT_5: `Write a program to get the same output using a for loop.`,
  CONTENT_6: `Here `,
  CONTENT_6_1: `range(5)`,
  CONTENT_6_2: ` returns a list of numbers from 0 to 4, that is, five elements. Therefore it  repeats five times. So the `,
  CONTENT_6_3: `for`,
  CONTENT_6_4: ` loop executes the `,
  CONTENT_6_5: `print(Hello)`,
  CONTENT_6_6: ` statement five times.`,
  HEADING_2: `Prime Number`,
  CONTENT_7: `A natural number greater than 1 that can only be divided by 1 or the number itself is a prime number. Given below is a list of the first few prime numbers, in an increasing order:`,
  CONTENT_8: `2, 3, 5, 7, 11, 13, 17, 19, 23,...`,
  CONTENT_9: `Let’s write a program to check if a number is prime or not.`,
  HEADING_3: `File I/O`,
  CONTENT_10: `Now let's learn how to read and write to a file`
}
const chapter2 = {
  HEADING_4: `Introduction to Pandas`,
  CONTENT_11: `Pandas is a python library used for working with large data sets. It has all the relevant tools for cleaning, exploring and manipulating data. It is an integral part of data science.`,
  CONTENT_12: `Lets explore a data set using pandas. The first step is to load the data from a csv file into a pandas data frame. Pandas allows us to see a summary of the loaded data using the head function.`,
  HEADING_5: `Visualizing data using matplotlib`,
  CONTENT_13: `Simple Bar Graph using matplotlib.`,
  CONTENT_14: `Simple Line Graph using matplotlib.`,
  CONTENT_15: `Simple Pie Chart using matplotlib`,
};

export default { chapter1, chapter2 };