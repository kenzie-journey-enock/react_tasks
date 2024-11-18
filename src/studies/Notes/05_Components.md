# Components

## Introduction  
In this lesson, I explored the foundational concepts of React Components, which are the building blocks for creating user interfaces in React. Components enable us to break down complex interfaces into smaller, reusable pieces, simplifying development and maintenance.  

## React Components  
React Components are independent and reusable elements that form the user interface. They allow us to move away from large, monolithic HTML files, enabling the structure of interfaces to be divided into smaller, modular files.  

## Componentization  
A component can represent a single visual element, such as a button or image, or encompass a more complex structure, including multiple elements and business logic. Components can also follow a hierarchy, a concept that will be covered in more detail in future lessons.  

## Creating Components  
React components are written in JavaScript and often use JSX syntax. A functional component is a JavaScript function that returns JSX, as shown below:  
```jsx
function Component() {  
   return <div>Some JSX output</div>;  
}
```  
Components can also include JavaScript logic within their function before the JSX return:  
```jsx
function Component() {  
   function example() {  
      console.log("Hello, world!");  
   }  

   return (  
      <div>  
         <button onClick={example}>Hello, world!</button>  
      </div>  
   );  
}
```  
When the JSX return spans multiple lines, it's best practice to wrap it in parentheses (`()`).  

## Naming Conventions  
By convention, the names of components must start with an uppercase letter. This avoids conflicts with native HTML tags when importing components into other parts of the application.  

## Using Arrow Functions  
Both standard JavaScript functions and arrow functions can be used to define components. Here's an example using an arrow function:  
```jsx
const Component = () => {  
   const example = () => {  
      console.log("Hello, world!");  
   };  

   return (  
      <div>  
         <button onClick={example}>Hello, world!</button>  
      </div>  
   );  
};
```  

## Conclusion  
This lesson gave me a solid introduction to React Components and how they are written and used. I'm excited to continue learning about their hierarchy and advanced features in upcoming lessons. 😊