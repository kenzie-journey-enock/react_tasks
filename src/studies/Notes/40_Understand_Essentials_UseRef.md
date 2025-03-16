# Understand Eseentials UseRef

## Introduction

So far, I’ve learned that React is declarative, and I've been able to build various features using this syntax model. However, there are situations where I’ll need to use imperative programming.

In this lesson, I was introduced to the `useRef` hook in React. This hook allows me to store values that won’t be affected by re-renders, unlike `useState`.

The focus of this lesson was to explore how to use `useRef` to interact with elements imperatively.

## Using `useRef` for Imperative Interaction with Elements

```javascript
import { useRef } from "react";

function App() {
  const elementRef = useRef(null);  

  return (
    <div className="App">
      <button onClick={() => console.log(elementRef.current)}>Debug</button>
      <h1 ref={elementRef}>Example</h1>
    </div>
  );
}

export default App;
```

To use `useRef`, the first step is to import it into the desired file, just like any other React hook (e.g., `useState`, `useEffect`). Once imported, I assign it to a constant and call it as a function, passing `null` as the first parameter.

The `null` value is necessary because the reference will only be applied after the component mounts.

Next, to link this reference to an element, I simply use the `ref` attribute, which is available on any React element or component.

This creates a reference object with a `current` key, which will store the selected element or component.

## Conclusion

Although React generally prioritizes the declarative model, using `useRef` has shown me that in certain situations, I need to use more imperative approaches. In future lessons, I will further explore how to combine declarative and imperative models and examine situations where unmounting effects occur.

[React useRef](https://react.dev/reference/react/useRef)