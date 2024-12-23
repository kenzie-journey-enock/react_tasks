# SASS: Installation and Basic Usage

## Introduction  
I learned about SASS, a widely used CSS preprocessor in the industry. It includes all existing CSS features and additional tools that make styling easier and more scalable.

## Installation  
I discovered that SASS can be used with various frameworks or even Vanilla projects. To use it in a React project, I need to install it as a dependency with the command:  
```bash  
npm install sass  
```  
After installation, I should check the `package.json` file to confirm it was added correctly.

## Usage  
Using SASS is straightforward after installation. I create style files similar to CSS, but with the `.scss` file extension. For example:  

**style.scss:**  
```scss  
.exampleList {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
       border: 1px solid;
       padding: 2rem;
       background: white; 
    }
}
```

## CSS Modules  
I learned that SASS is compatible with CSS modules, allowing for scoped styles by using `.module.scss` files. Here's an example:  

**style.module.scss:**  
```scss  
.header {
    padding: 1rem;
    background: black;

    nav {
        ul {
            display: flex;
            gap: 1rem;
            list-style: none;

            li {
                border-left: 3px solid;
                padding: 1rem;
                color: white;
            }
        }
    }
}
```  

**component:**  
```jsx  
import styles from "./style.module.scss";

export const Example = () => {
    return (
        <header className={styles.header}>
            Header
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};
```

## Nesting  
One of the features I explored is nesting selectors within others, resulting in cleaner syntax. Here's a comparison:  

**SASS:**  
```scss  
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**CSS:**  
```css  
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

## Referencing the Same Element in Selectors  
For pseudo-selectors like `:hover` or `:placeholder` within nesting, I learned to use the `&` symbol to refer to the same element. For example:  
```scss  
button {
   &:hover {
     filter: saturate(1.1);
   }
}
```

## Conclusion  
This lesson taught me how to install and use SASS in a React project. I understood its similarity to regular CSS and explored basic features like nesting and CSS modules. I'm excited to dive into more advanced SASS features in future lessons. 🚀