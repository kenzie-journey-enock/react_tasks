# Component Lifecycle

I learned that React is a highly performant tool, and one of the key concepts to understand, though often invisible in the early stages of learning, is the **component lifecycle**. Components in React go through four stages during their life: initialization, mounting, updating, and unmounting. These stages occur repeatedly as the application runs.

### Initialization
In this phase, the component is not visible on the screen yet, but all variables (like constants and states) are initialized. For example, this is when a `useState` variable is set and its initial value is assigned.

### Mounting
During this phase, the component's structure is created based on the initialization. This is when the HTML we see rendered in the browser is built.

### Updating
This phase happens when a state or variable associated with the component changes. It's visible when a state is updated, and the rendered HTML changes as a result.

### Unmounting
This is when the component is "removed" from the screen. Unlike just hiding the component, React completely removes its HTML. This can be observed through conditional rendering, where components not matching the condition are unmounted.

Understanding the component lifecycle is essential because it provides a foundation for understanding how the `useEffect` hook works, which we will learn about in upcoming lessons.

[React lifecycle](https://www.w3schools.com/react/react_lifecycle.asp)