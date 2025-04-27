# Custom Hooks

## Introduction  
In this lesson, I learned about a very important concept in React: **creating custom hooks**. This is a powerful feature widely used by many React libraries. To get hands-on experience, I converted the keydown and outclick behaviors I had previously built into scalable custom hooks.

## What is a Custom Hook?  
I understood that a custom hook is essentially reusable logic written in a JavaScript function that can use native React hooks (like `useEffect`, `useState`, etc.) or even other custom hooks. A key point is that a custom hook returns a logical set of values—**not JSX**, unlike components.

This allows complex logic to be encapsulated and reused across different components, which improves code **modularity** and **reusability**.

Example:
```js
export const useExample = () => {
⁠  /* some logic */
  return someValue;
}
```

## Prefix "use"  
I also learned that a custom hook must start with the prefix **"use"**. This is a required naming convention in React.

## Why Use Custom Hooks?  
By converting logic into hooks, it becomes **highly scalable** and avoids repetitive code. It also enables logic to be reused in multiple scenarios throughout the app, making it easier to **maintain** and **expand** the project.

## Examples  

### useOutclick  
We created a `useOutclick` hook that listens for clicks outside a referenced element and triggers a callback. Instead of hardcoding actions like `setIsOpen(false)`, I now pass a **generic callback** as a parameter, making the hook reusable in different situations.

```js
export const useOutclick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (callback) callback();
      }
    }

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    }
  }, []);

  return ref;
}
```

### useKeydown  
Similarly, I created a `useKeydown` hook that listens for a specific key press. The key is passed as `keyId`, and the behavior is handled through a callback function, again making it **scalable and reusable**.

```js
export const useKeydown = (keyId, callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === keyId) {
        if (callback) callback(ref.current);
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    }
  }, []);

  return ref;
}
```

## Conclusion  
This extra lesson helped me realize the power of custom hooks in React. By encapsulating and reusing logic, I can make my projects **more scalable and maintainable**. This concept will definitely be a key part of how I structure future React applications. 🚀
