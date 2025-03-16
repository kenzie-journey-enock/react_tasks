# Parameters Axios

## Introduction  
I learned that Axios, like Fetch, supports direct parameters in the URL. However, Axios provides a cleaner way to handle query parameters by using an object in the configuration parameter. This approach makes the code more organized and adaptable to dynamic behaviors.  

## Example  
During the lesson, we built a category filter using the Fruit Fake API. The filter dynamically updates the request parameters based on user interaction. By integrating Axios with `useEffect`, the application automatically fetches new data whenever the category changes.

```javascript

const response = await api.get("/fruits", {
  params: {
    category: "red",
  }
});

```

The key learning here was how to combine query parameters with state management in React. Using `useState`, we stored the selected category and updated the request dynamically. The `useEffect` hook ensured that every time the category changed, a new API request was triggered, making the component reactive.

```javascript
import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    const getFruits = async () => {
        try {
          setLoading(true);
          const { data } = await api.get("fruits", {
              params: {
                category: category !== "" ? category : undefined,
              },
          });
          setFruitList(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
    };
    getFruits();
  }, [category]);

  return (
    <div className="App">
        <ul>
          <li>
              <button onClick={() => setCategory("")}>All</button>
          </li>
          <li>
              <button onClick={() => setCategory("red")}>Red</button>
          </li>
          <li>
              <button onClick={() => setCategory("yellow")}>Yellow</button>
          </li>
        </ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
              {fruitList.map((fruit) => (
                <li key={fruit.id}>
                    <h2>{fruit.name}</h2>
                    <p>{fruit.price}</p>
                </li>
              ))}
          </ul>
        )}
    </div>
  );
}

export default App;

``` 

## The Importance of Understanding APIs  
One of the most valuable takeaways was the importance of thoroughly analyzing the API before making requests. This includes:  
- Understanding the request body (is it required?).  
- Identifying query and path parameters.  
- Analyzing the expected success response.  
- Handling possible error responses.  
- Determining how to use the received data efficiently in the application.  

By asking these questions beforehand, I can now work more effectively with any API in future projects.  

[Axios Documentation](https://axios-http.com/). 🚀