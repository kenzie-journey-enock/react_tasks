# Update Effects UseEffect

## Introduction  
Today, I learned more about update effects in React, specifically how the `useEffect` hook triggers a callback function whenever one of its dependencies updates.  

## Syntax  
The update `useEffect` is defined by a dependency list:  

```jsx
useEffect(() => {
  /* effect */
}, [dep1, dep2, dep3]);
```  

This means that the effect runs every time one of the dependencies changes.  

## How It Works  
I understood that an update effect monitors a set of variables and executes a side effect whenever a change occurs.  

For example:  

```jsx
const App = () => {
   const [counter, setCounter] = useState(0);

   useEffect(() => {⁠
      console.log("The counter changed.");
   }, [counter])
}
```  

Here, every time `counter` updates, the function inside `useEffect` runs, logging "The counter changed." to the console. Additionally, the function executes once when the component mounts, meaning an update effect is also a mount effect.  

## Main Uses  
Update effects can be applied in various scenarios, including:  

### Pagination  
I saw an example where `useEffect` was used to fetch data based on a changing page number.  

```jsx
const Component = () => {
   const [page, setPage] = useState(1);
  
   useEffect(() => {⁠
      async function loadDataFromPage() {
         const response = await fetch(`https://exampleurl.com/?page=${page}`);
         const json = await response.json();
         /* desired behavior after the request */
      }
      loadDataFromPage();
   }, [page])
}
```  

Whenever `page` changes, a new request is made to fetch data for the selected page.  

### Synchronization with LocalStorage  
I also learned how to sync state with `localStorage`, ensuring data persistence.  

```jsx
const Component = () => {
   const localCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : []
   );

   useEffect(() => {⁠
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
   }, [cartList])
}
```  

This ensures that when the application reloads, the cart list remains stored.  

## Conclusion  
Today, I gained a deeper understanding of the update `useEffect` and its practical applications. To solidify my learning, practicing these concepts is essential. The examples provided serve as a foundation, but `useEffect` is not limited to these cases—I can use it in many other scenarios as needed.


[useEffect](https://react.dev/reference/react/useEffect).