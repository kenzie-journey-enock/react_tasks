# Styled Components: Global Styles vs Point Styles

## Introduction  
As a developer striving for scalability in my projects, I learned the importance of organizing styles effectively. This involves classifying styles into two main categories: global styles and local (or scoped) styles.

[Styled Components documentation](https://styled-components.com/docs)
---

## Global Styles  
Global styles are applied throughout the entire project. These include resets, color palettes, and styling for frequently used components like buttons, typography, and inputs. 

### `createGlobalStyle`  
I discovered how `createGlobalStyle` in Styled Components enables me to apply global styles, much like a non-modular CSS file would. Here's an example of how I applied global styles:  

```javascript
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   /* Additional global styles */
`;
```

To make these styles effective, I rendered the `GlobalStyle` component at the top of my component tree, such as in `App.jsx`:

```javascript
import { GlobalStyle } from "../path/example/global";

export const App = () => {
   return (
      <div className="App">
         <GlobalStyle />
         {/* Other components */}
      </div>
   );
};
```

### Organizing Global Fragments  
For reusable style elements, such as buttons or typography, I learned to create a `styles` folder in `src`, with files like `button.js` or `typography.js`. This approach uses the `styled` method from Styled Components, keeping my styles modular and reusable.

---

## Local Styles  
Local styles are applied to individual components or specific areas of the application. They are used for unique or non-repetitive styling needs, typically for pages or more complex component structures.  

### Organization  
I organized these styles within a `style.js` file, placed in the same folder as the corresponding component:  

```
/Component
  /index.jsx  /* Component logic */
  /style.js   /* Scoped styles */
```

---

## Conclusion  
Balancing global and local styles can make styling workflows more efficient and improve code maintainability. This structure allows me to experiment, optimize, and adapt the styling model to suit the specific needs of any application.  
