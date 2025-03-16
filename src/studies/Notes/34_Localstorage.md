# Localstorage

## Introduction
I learned about **localStorage**, a JavaScript API that allows storing data persistently in the user's browser. This means that even if the browser is closed or the computer is restarted, the saved data remains accessible. This is useful for storing user preferences, settings, and other important information. However, **localStorage is not a database**, so it should not be used for storing sensitive data.

## Storing, Deleting, and Reading Data
I explored the different operations that can be performed with localStorage:  

- **Storing Data:**  
  ```javascript
  localStorage.setItem("@EXAMPLE", "Example");
  ```  
- **Deleting Data:**  
  ```javascript
  localStorage.removeItem("@EXAMPLE");
  ```  
- **Clearing All Data:**  
  ```javascript
  localStorage.clear(); // This removes all stored keys, so it should be used with caution.
  ```  
- **Reading Data:**  
  ```javascript
  localStorage.getItem("@EXAMPLE");
  ```  

## Working with Arrays and Objects  
Since **localStorage only supports string values**, when dealing with arrays and objects, **JSON conversion** is required:  

- **Storing Objects:**  
  ```javascript
  const object = { id: 1, name: "Enock" };
  localStorage.setItem("@EXAMPLE", JSON.stringify(object));
  ```  
- **Reading Objects:**  
  ```javascript
  const example = localStorage.getItem("@EXAMPLE");
  console.log(JSON.parse(example));
  ```  
  The `JSON.stringify` method converts objects into JSON format before storing them, while `JSON.parse` is used to convert the stored JSON string back into a usable JavaScript object.

## Conclusion  
This lesson helped me understand how to use localStorage in JavaScript to store, retrieve, and remove data efficiently. I also learned the importance of **handling JSON format** when working with complex data types. Moving forward, I will explore how to integrate localStorage into React applications.  

[MDN Web Docs - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)