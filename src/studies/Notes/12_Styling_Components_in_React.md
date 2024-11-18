# Styling Components in React

## Introduction  
In this lesson, I learned how to handle styling in React.

## Relating CSS Files to My Project  
To style a React application, I can use the CSS I'm already familiar with. However, there's an important difference: imports will be made in JSX files instead of HTML files.  

For example:

```jsx
import './App.css'

function App() {
  return (
    <div className="App">
      
    </div>
  )
}
```

When setting up a React project, example CSS files are included by default, and they are imported into `App.jsx` and `main.jsx` using a simple JavaScript import. I can use these files as a base, but React gives me great flexibility to organize my styles. I can create a separate folder for styles within the `src` folder and create individual style files for each component, among other possibilities.

It's important to note that importing a CSS file into a React component is enough to apply the desired styles in the project.

```jsx
import './style.css'
```

## Limitation of .css Files  
Even though React allows me to create as many CSS files as I want in my application, I must be aware that regular CSS files, even if imported only in specific components, will apply the styles across the entire project whenever that component is rendered. In the next lesson, I will learn about a feature called "module" that will help me handle this limitation more effectively.