# Montage Effects UseEffect

## Introduction
In this lesson, I learned about mount effects in React. It’s essential to have a good understanding of the component lifecycle before diving into this topic.

## Syntax
I was introduced to the basic syntax of the `useEffect` hook, specifically the mount effect, which has an empty dependency array (`[]`). This means the effect runs once when the component is first mounted, i.e., when the component is rendered to the actual DOM.

```javascript
useEffect(() => {
  /* effect */
}, []);
```

## Main Uses
The most common use of `useEffect` is to synchronize a component with an external system. In mount effects, this often involves tasks like API requests (which I focused on), setting up WebSocket connections, and other interactions with external systems.

## Consuming an API
I learned how to use `useEffect` to make API requests when a component mounts. The example below demonstrates how to fetch data from an external API.

```javascript
import { useEffect } from 'react';

const Component = () => {
   useEffect(() => {
     fetch('https://urlexemplo.com')
     .then((response) => response.json())
     .then((response) => /* desired behavior after the request */);
   }, []);

   return /* ... */
}
```

To make the code more readable, I also learned how to use asynchronous functions:

```javascript
import { useEffect } from 'react';

const Component = () => {
   useEffect(() => {
     async function loadData() {
         const response = await fetch('https://urlexemplo.com');
         const json = await response.json();
         /* desired behavior after the request */
     }
     loadData();
   }, []);

   return /* ... */
}
```

I understood that while mount effects are frequently used for requests, they are not required to make a request in React. They simply determine when the request should occur.

## Conclusion
In this lesson, I learned the most common uses of mount effects. To solidify the knowledge, it’s highly recommended to apply it in the upcoming activities.

For more details, [useEffect](https://react.dev/reference/react/useEffect).