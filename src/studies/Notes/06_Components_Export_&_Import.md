# Components: Export and Import

## Introduction  
I learned how to establish relationships between components when building interfaces using React. This is achieved through JavaScript's `export` and `import` features, which allow modularization and the reuse of code across files.

## Export and Import  
### Key Concepts  
JavaScript supports a modular structure, letting us divide code into multiple files and link them via exports and imports. This concept was demonstrated using a component in React.  

- **Export**: Exports one or more elements from a file, allowing them to be imported into others using standard syntax.  
  Example:  
  ```javascript
  export const Component = () => { 
    const example = () => { 
      console.log("Hello World"); 
    }; 

    return ( 
      <div> 
        <button onClick={example}>Hello, World!</button> 
      </div> 
    ); 
  }; 
  ```  

- **Export Default**: Exports a single default value from a file, also importable using standard syntax.  
  Example:  
  ```javascript
  const Component = () => { 
    const example = () => { 
      console.log("Hello World"); 
    }; 

    return ( 
      <div> 
        <button onClick={example}>Hello, World!</button> 
      </div> 
    ); 
  }; 

  export default Component; 
  ```

### Importing Components  
Once exported, components can be imported into other files using slight variations depending on the export method:  

- **Export Default**:  
  ```javascript
  import Component from "./components/Component";
  ```  

- **Export (Named Export)**:  
  ```javascript
  import { Component } from "./components/Component";
  ```

### Rendering Components  
After importing, components can be rendered in JSX just like HTML tags.  

Example:  
```javascript
import Component from "./components/Component";

const App = () => { 
  return ( 
    <div className="App"> 
      <Component /> 
    </div> 
  ); 
}; 

export default App; 
```

In this case, the `Component` is rendered inside the `App` component, which is conventionally the main component of React applications.

## Conclusion  
I learned how to divide and organize components using `export` and `import`. This foundational knowledge allows flexibility in creating as many components as needed for scalable applications. I’m eager to explore more about organizing and structuring components in upcoming lessons. 🎉