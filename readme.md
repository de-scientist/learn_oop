# **Introduction to `fetch` and HTTP Requests﻿**



* **fetch is a built-in JavaScript function that allows your code to communicate with other computers (servers) over the internet.**



* **It helps your code send and receive data from websites or APIs (Application Programming Interfaces).**



* **Similarly, fetch sends a request to a website (server), and the server responds with some data.**



### **HTTP Request**

**﻿public**
**HTTP (HyperText Transfer Protocol) is how computers communicate over the web.**

**There are different types of requests:**

* **GET: a computer asks for data (e.g., "Give me a list of users").**
* **POST: a computer sends data to be created on the server (e.g., "Create a new user, here are the details...").**
* **PUT: a computer requests for data updates (e.g., "Change the first name of John to Jack")**
* **DELETE: a computer requests for data to be deleted (e.g., "Delete information about John")**
* **Most websites you visit send and receive data using HTTP requests in the background.**



### **Making a simple fetch request﻿**

* **Let's make a simple fetch request to get data from a public API (a website that shares data).**



* **We'll use jsonplaceholder.typicode.com, which gives fake user data.**



**Explanation:**



* **fetch("https://jsonplaceholder.typicode.com/users/1") Asks the server for user data (GET request).**



### **Using async await for easier syntax﻿**

* **Instead of using .then(), we can use async/await for a cleaner approach.**



#### **Handling Errors﻿**

* **Sometimes, things go wrong (e.g., no internet, server issues). You should always handle errors**
