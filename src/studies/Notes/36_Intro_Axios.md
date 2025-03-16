# Intro Axios

## Introduction  
I learned that Axios is a promise-based HTTP client that helps with making HTTP requests. It is an excellent alternative to the native Fetch API and is compatible with various frameworks, including React, which I am currently studying.  

## Axios vs Fetch  
By comparing Axios to Fetch, I noticed key differences:  
- Axios automatically converts responses to JSON, unlike Fetch.  
- It offers global configurations, making projects more scalable and maintainable.  
- The response object in Axios is more detailed for both successful and failed requests.  
- The backend response is stored in the `data` property.  

## Installation  
To use Axios in a React project, I learned that I need to install it using:  

```sh
npm install axios
```  
This command must be executed in the project folder containing `package.json`, which manages dependencies.  

## Global Configuration  
Setting a global Axios configuration is not mandatory but is highly recommended for better project maintainability. I created a `services` folder inside `src` and an `api.js` file to centralize configurations:  

```javascript
import axios from "axios";

export const api = axios.create({
    baseURL: "https://fruit-fake-api.onrender.com/",
    timeout: 8000,
});
```  

Here, I defined:  
- `baseURL`: Avoids repeating the API URL in every request.  
- `timeout`: Defines the maximum wait time for a request (in milliseconds).  

## GET Requests  
To make GET requests, I imported the `api` instance and used it inside a React component:  

```javascript
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
   const [fruitList, setFruitList] = useState([]);

   useEffect(() => {
      const getFruits = async () => {
         const { data } = await api.get("/fruits");         
         setFruitList(data);
      };
      getFruits();
   }, []);

   return (
      <div className="App">
         <ul>
            {fruitList.map(fruit => (
               <li key={fruit.id}>{fruit.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
```  

I used the `useEffect` hook to trigger the request when the component mounts, applying `async/await` for asynchronous execution. Axios simplifies data handling by returning results inside the `data` property.  

## Conclusion  
This lesson introduced me to Axios and its advantages over Fetch. I now understand how to install, configure, and make requests with Axios in a React project. I look forward to learning more advanced use cases in future lessons.  

🔗 [Axios Documentation](https://axios-http.com/)