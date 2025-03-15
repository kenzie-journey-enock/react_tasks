# Requests Fetch

## Introduction  
In this lesson, I learned about `fetch`, a global JavaScript method used for making asynchronous requests.  

## Promise  
Before using `fetch` effectively, I needed to understand **Promises**. A **Promise** represents the eventual success or failure of an asynchronous operation. Since HTTP requests are asynchronous, JavaScript treats them as Promises.  

## Async / Await  
JavaScript offers multiple ways to handle Promises, but I focused on `async/await`, which improves both readability and performance.  
- **`async`**: Declares an asynchronous function.  
- **`await`**: Pauses execution until a Promise resolves.  

For example:  
```javascript
const example = async () => {  
  await new Promise((resolve) => {  
    setTimeout(() => resolve("foo"), 300);  
  });  
  console.log("Executed after the Promise resolves");  
};
```  

## Fetch  
I learned that `fetch` is used for making HTTP requests and always returns a Promise. Combining it with `async/await` ensures proper execution flow.  

Example:  
```javascript
const getFruits = async () => {  
  const response = await fetch("https://fruit-fake-api.onrender.com/fruits");  
  const json = await response.json();  
  console.log(json);  
};
```  
This function fetches data from an API and ensures the console log runs only after the request completes.  

## JSON Method  
Most HTTP responses return data in **JSON format**. To convert it into a JavaScript object, I use `response.json()`, which also returns a Promise:  
```javascript
const json = await response.json();
```  

## Conclusion  
I learned how to use `fetch` to make HTTP requests in JavaScript and handle responses properly with `async/await`. To deepen my understanding of Promises, I can check the official MDN documentation:  
🔗 [MDN Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  