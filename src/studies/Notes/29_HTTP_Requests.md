# HTTP Requests

## Introduction  
In this lesson, I learned about HTTP requests, a crucial concept that extends beyond React and applies to any application, regardless of the programming language used.  

## What is HTTP?  
HTTP (Hypertext Transfer Protocol) is a communication protocol used to transfer data across the World Wide Web. It facilitates communication between clients (such as web browsers) and servers that host resources like web pages, images, videos, and APIs. HTTP operates on a request-response model, where the client sends a request to the server, and the server responds with the requested data or information.  

## Request  
A request is essentially an application’s call to a server, and it consists of the following structure:  

- **HTTP Method**: Specifies the action the client wants to perform (e.g., GET, POST). Each method serves a different purpose.  
- **URL**: Identifies the resource being requested.  
- **Headers**: Additional information sent in the request, such as the type of content the client accepts.  
- **Request Body (Optional)**: Used in POST, PUT, and other methods to send data to the server.  

## Response  
The response is the server's feedback regarding the request. It can be successful or unsuccessful.  

- **Status Code**: Indicates the result of the request (e.g., 200 OK, 404 Not Found).  
- **Headers**: Additional information included in the response, such as the type of content returned by the server.  
- **Response Body (Optional)**: Contains the requested data or information. If an error occurs, it may include details about the issue.  

## Conclusion  
In this lesson, I learned what the HTTP protocol is and how it facilitates communication between clients and servers. Understanding the basics of HTTP is essential for building efficient and interactive web applications. In future lessons, I will explore handling HTTP requests in JavaScript and React.  

Tool for test: [Insomnia Documentation](https://insomnia.rest/).