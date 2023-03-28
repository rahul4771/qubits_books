const sqlContent = {
    title: 'SQL BASICS',
    id_1: 'createTable',
    heading_1: 'Create the table',
    desc_1: 'To create a table in SQL, you can use the following syntax:',
    code_format_1: 'CREATE TABLE table_name ( column_name1 data_type constraint, column_name2 data_type constraint, ... );',
    example_desc_1: 'For example, to create a table called "students" with columns for "id", "name", and "age", you would use the following SQL statement:',
    example_code_1: 'CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(255) NOT NULL, age INT);',
    example_result_1: '',
    id_2: 'insertData',
    heading_2: 'Insert data',
    desc_2: 'To insert data into the table, you can use the following syntax:',
    code_format_2: 'INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);',
    example_desc_2: 'For example, to insert a student with an id of 1, a name of "John Smith", and an age of 20 into the "students" table, you would use the following SQL statement:',
    example_code_2: `INSERT INTO students (id, name, age) VALUES (1, 'John Smith', 12);
INSERT INTO students (id, name, age) VALUES (2, 'Fahed Khan', 13);
INSERT INTO students (id, name, age) VALUES (3, 'Maryiam Sulfi', 13);
INSERT INTO students (id, name, age) VALUES (4, 'De Paul Mathew', 12);`,
    example_result_2: '',
    id_3: 'selectTable',
    heading_3: 'Select and display the data',
    desc_3: 'To display the data in the table, you can use the SELECT statement.',
    code_format_3: 'SELECT * FROM table_name;',
    example_desc_3: 'For example, to display all the data in the "students" table, you would use the following SQL statement:',
    example_code_3: 'SELECT * FROM students;',
    example_result_3: '',
    id_4: 'filterData',
    heading_4: 'Filter Data',
    desc_4: 'To select a specific student with a specific ID from a table in SQL, you can use the following syntax:',
    code_format_4: 'SELECT * FROM table_name WHERE column_name = value;',
    example_desc_4: 'For example, to select the student with an ID of 1 from the "students" table, you would use the following SQL statement:',
    example_code_4: 'SELECT * FROM students WHERE id = 1;',
    example_result_4: '',
    id_5: 'error',
    heading_5: 'Use a pre-defined table to load data from. The table will be served from the webserver...',
    example_code_5 : 'select * from users;',
}

export default sqlContent;