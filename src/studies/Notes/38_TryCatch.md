# Try Catch

## Introduction  
In this lesson, I reinforced my understanding of why the async function model is the best approach for handling requests. It provides better readability and scalability, helping to avoid the infamous "promise callback hell." To further refine this process, I learned about the try-catch structure.  

## The try-catch  
I explored the try-catch structure, a native JavaScript feature that allows for intelligent error handling. It works similarly to `.then().catch()` but is more suited to asynchronous functions. The `try` block attempts to execute code, and if an error occurs, execution jumps to the `catch` block, where the error can be handled.  

For example, in an async function that fetches data from an API, the request and state update occur inside `try`, and if something goes wrong, the error is logged in `catch`. This ensures that the application doesn't break unexpectedly.  

## Finally  
I also learned about the `finally` block, which enhances the try-catch structure by ensuring that specific instructions run regardless of whether the request succeeds or fails. In a practical example, I saw how setting a loading state before making an API request and disabling it afterward improves user experience. This guarantees that the loading indicator is updated correctly, even if an error occurs.  

## Conclusion  
This lesson deepened my understanding of error handling in asynchronous JavaScript functions. Using `try-catch-finally`, I can write cleaner and more reliable code while improving the user experience when dealing with API requests.

```javascript
import axios from "axios";

async function fetchData() {
   try {
      console.log("Fetching data...");
      const response = await axios.get("https://api.example.com/data");
      console.log("Data received:", response.data);
   } catch (error) {
      console.error("Error fetching data:", error.message);
   } finally {
      console.log("Request completed.");
   }
}

fetchData();

```

🔗 Reference: [MDN try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)