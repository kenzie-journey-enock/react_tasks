# Modals React

## Introduction

In this lesson, I learned how to build a simple modal behavior in React, which will serve as a foundation for more advanced behaviors, such as unmounting effects with `useEffect`, in future lessons.

## Avoiding the `<dialog>` Element

I discovered that in React, it's not recommended to use the native HTML `<dialog>` element as we might in vanilla JavaScript. This is because the `<dialog>` element's functionality is primarily based on toggling its display using the `display` attribute. Instead, React encourages conditional rendering to manage the presence of components in the DOM. citeturn0search2

## Creating the Modal Component

I began by creating a basic `Modal` component and controlling its visibility using React's state. Here's how I implemented it:

```jsx
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
```

In this implementation, I used the `useState` hook to manage the `isOpen` state, which determines whether the modal is displayed. When the button is clicked, `setIsOpen(true)` is called, rendering the `Modal` component. citeturn0search4

## Enhancing the Modal Component

To make the modal more flexible, I modified it to accept children and a `setIsOpen` function as props. This allows for dynamic content and control over the modal's visibility from parent components. Here's the updated `Modal` component:

```jsx
export const Modal = ({ children, setIsOpen }) => {
  return (
    <div className="modal-overlay" role="dialog">
      <div className="modal-box">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
```

In this version, the modal receives `children` and `setIsOpen` as props, enabling it to render dynamic content and providing a way to close the modal from within. citeturn0search5

## Styling the Modal

For styling, I used CSS modules to scope styles locally to the component. Here's an example of how I styled the modal:

```css
.modal-overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
}

.modal-box {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: #fff;
}

.close-button {
  position: absolute;
  top: 0;
  left: 0;
}
```

These styles create a full-screen overlay with a centered modal box, providing a basic yet effective modal appearance. citeturn0search4

## Improving Semantics

To enhance accessibility, I added the `role="dialog"` attribute to the modal's main `div`. This informs assistive technologies that the element is a dialog, improving the user experience for individuals relying on such tools. citeturn0search9

## Conclusion

Through this lesson, I developed a foundational understanding of creating modals in React using conditional rendering and state management. This knowledge will be instrumental as I explore more advanced topics, such as unmounting effects with `useEffect`, in subsequent lessons.