# Styled Components: Props in Styled Components

## Introduction  
I learned that, just like logical components in React, styled components also support props. This makes it possible to create more dynamic and versatile visual components based on React's logic. Here's how it works:

- **Passing Props:** Props are passed to styled components just like they are for logical components, e.g., `<StyledComponent backgroundColor="#FFF" />`.  
- **Receiving Props:** Inside a styled component, props can be accessed using template literals with `${}`. A callback function, like `(props) =>`, is used to retrieve the prop value. Alternatively, props can be destructured, e.g., `background: ${({ backgroundColor }) => backgroundColor};`.  

[Styled Components Documentation](https://styled-components.com/docs)

## CSS with Conditional Styles  
I discovered how the ability to use JavaScript within template literals adds significant flexibility to styled components. Props can enable conditional styling, and the `css` helper in Styled Components allows us to define different styles based on prop values.

- **Example:**  
  By analyzing the value of a prop (`componentStyle`), we can conditionally apply one of two different style sets:  
  - If `componentStyle` is `"one"`, apply a blue background and border.  
  - If `componentStyle` is `"two"`, apply a red background and box-shadow.  

```jsx
<StyledButton componentStyle="one" />
<StyledButton componentStyle="two" />
```

```javascript
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ componentStyle }) => {
    if (componentStyle === "one") {
      return css`
        background: blue;
        border: 1px solid rgba(0, 0, 0, 0.25);
      `;
    } else if (componentStyle === "two") {
      return css`
        background: red;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
      `;
    }
  }}
`;
```

This approach demonstrates how CSS and JavaScript can blend seamlessly, a hallmark of advanced Styled Components usage. It opens the door to using any conditional structures or methods supported by JavaScript for styling purposes.

## Conclusion  
This exploration of Styled Components taught me the basics of integrating JavaScript and CSS to create flexible and dynamic designs. To deepen my understanding, I plan to explore the Styled Components documentation further, as it is filled with helpful examples for mastering the library. 
