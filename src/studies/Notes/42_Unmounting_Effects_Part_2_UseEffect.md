# Unmounting Effects - Part 2 - UseEffect

## Introduction
In this lesson, I applied the same principles from the previous lesson to create another example, further optimizing the behavior of the modal we worked on earlier.

## Keydown Behavior
```javascript
const buttonRef = useRef(null);

useEffect(() => {
   const handleKeydown = (event) => {
      if(event.key === keyId){
         buttonRef.current?.click();
      }
   }

   window.addEventListener("keydown", handleKeydown);

   return () => {
      window.removeEventListener("keydown", handleKeydown);
   }
}, [])
```

```javascript
return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <button
               ref={buttonRef}
               className={styles.closeButton}
               onClick={() => setIsOpen(false)}
            >
               Close
            </button>
            {children}
         </div>
      </div>
);
```

In this example, I created a similar behavior, also using the imperative selector `useRef`. Just like in the previous example, the mount adds an event to the window, and the unmount removes that event. Now, my modal will close whenever the "Escape" key is pressed.

## Conclusion
With this lesson, I practiced and deepened my understanding of `useRef` and `useEffect`, making my modal even more optimized. Although the range of examples has been vast so far, it’s important to note that with these tools, I can create an even greater variety of behaviors. Therefore, I’ll continue practicing to improve further.

[useEffect](https://react.dev/reference/react/useEffect).