# Fragment

## Introduction  
In JSX, unlike HTML, only a single root tag is allowed in a return or file. This restriction might lead us to believe that every component must have a single main element. However, this is not true thanks to a feature called "Fragment," which we explored in this lesson.  

## Fragment  
A Fragment in JSX is essentially an "invisible" tag that does not render anything in the DOM. It is useful when we need a component or return to include multiple root tags.  

For example:  
```jsx
export const Example = () => {
   return (
      <>
         <header>Header</header>
         <div>
            <p>Content</p>
         </div>
         <footer>Footer</footer>
      </>
   );
};
```  
Here, three main tags (header, div, and footer) are wrapped within a Fragment.  

## Syntactic Alternative  
In most applications, Fragments are represented as shown above. However, a more explicit syntax can also be used:  

```jsx
import { Fragment } from "react";

export const Example = () => {
   return (
      <Fragment>
         <header>Header</header>
         <div>
            <p>Content</p>
         </div>
         <footer>Footer</footer>
      </Fragment>
   );
};
```  
In this example, the `Fragment` component is explicitly imported from React. While the syntax is more verbose, the functionality remains identical to the shorthand version.  

## Conclusion  
In this lesson, I learned about Fragments and how they allow us to overcome JSX's syntactic limitation of having a single root element per component. Fragments make it possible to include multiple main tags without affecting the DOM. This understanding will help in writing cleaner and more flexible JSX code! 🚀