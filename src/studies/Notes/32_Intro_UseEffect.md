# Intro UseEffect

## Introduction

I learned about the `useEffect` hook, which is essential for understanding the component lifecycle in React. This hook allows me to monitor and trigger actions at different stages: mounting, updating, and unmounting of a component. 

The `useEffect` hook has two main parameters: 
- A **callback function**: this is the function that runs during mounting and updating, and is also responsible for triggering unmounting functions.
- A **dependency array**: this array lists the states or variables that need to be watched to trigger updates. If the array is empty, the effect will run only on mounting and unmounting.

I realized the importance of each stage of the lifecycle, so here's a breakdown:

## Mounting Effect:
```js
useEffect(() => {
    console.log('Mounted.')
}, []);
```
In this case, the effect runs only once, when the component mounts. The empty dependency array ensures this.

## Updating Effect:
```js
const [counter, setCounter] = useState(0);

useEffect(() => {
    console.log('Updated.')
}, [counter]);
```
Here, the effect runs whenever the `counter` state changes. The array contains `counter` as a dependency, meaning the effect will trigger on every change to that state. The effect also runs during the component's initialization.

## Unmounting Effect:
```js
useEffect(() => {
    return () => {
      console.log('Unmounted.')
    }
}, []);
```
For unmounting, I return a function from the `useEffect` callback, which runs when the component is removed from the DOM.

Overall, the `useEffect` hook is quite powerful, and understanding the different scenarios—mounting, updating, and unmounting—will help me use it effectively in applications. I look forward to learning more about how these concepts fit into real-world scenarios.

For more details, [useEffect](https://react.dev/reference/react/useEffect).