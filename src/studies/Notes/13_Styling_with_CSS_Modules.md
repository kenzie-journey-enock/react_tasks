# Styling with CSS Modules

## Introduction
In larger projects with multiple components, managing CSS class names becomes challenging, often leading to conflicts. To address this, React offers a way to isolate styling through CSS Modules.

## Using CSS Modules
Using CSS Modules is straightforward. Instead of creating a `.css` file, we create a `.module.css` file. The syntax inside the file remains the same as regular CSS, but it's recommended to use camelCase for naming classes in the `.module` file.

Example:

```css
.exampleList{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
```

The main change occurs when we import the module file into a React component and apply the `className` to the components and HTML elements:

```javascript
import styles from './style.module.css';

export const ExampleList = () => {
    return(
        <ul className={styles.exampleList}>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
        </ul>
    )
}
```

## Unique Class Naming
Unlike a regular `style.css` file, when inspecting the elements in the browser using DevTools, we will notice that the classes are named differently than what appears in the `.module.css` file. A unique combination of characters is added to the class names, which modularizes the CSS and prevents styles from leaking into other parts of the application.

## Conclusion
In this lesson, I learned about CSS Modules and how this feature can help in creating scalable styles. To solidify this concept, applying it in tasks and assignments will be extremely beneficial. I wish you happy learning!