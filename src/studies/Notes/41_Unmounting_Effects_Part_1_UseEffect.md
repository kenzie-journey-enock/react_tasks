# Unmounting Effects - Part 1 - UseEffect

## Introduction
In this lesson, I deepened my understanding of unmounting effects, combining them with the concept of imperative selections from previous lessons. During this cycle, I worked on optimizing the behavior of a modal.

## Syntax
As mentioned before, an unmounting effect is characterized by having a function returned from the callback function provided as the first parameter.

```javascript
useEffect(() => {  
  return () => {
⁠    /* Effect */
  }
}, []);
```

## Main Uses
An important aspect of unmounting effects is that they are rarely exclusively for unmounting. Generally, the most common use is to suspend a behavior that might have been generated during mounting or updating. But what does that mean?

To understand this, I considered a component with an internal state or behavior during mounting or updating. However, when the component unmounts, that state or behavior should no longer exist.

### Examples:
- If the mount creates a connection, the unmount will undo that connection.
- If the mount adds an event, the unmount will remove that event.

Here's an example:

```javascript
useEffect(() => {
   const handleOutclick = (event) => {
      if(!modalRef.current?.contains(event.target)){
         setIsOpen(false);
      }     
   }    
 
   window.addEventListener("mousedown", handleOutclick);
 
   return () => {
      window.removeEventListener("mousedown", handleOutclick);
   }
}, [])
```

During mounting, an event is added to the window imperatively (which can’t be done declaratively). During unmounting, the reverse process happens, removing the event.

## Contextualization
I applied this concept to create the behavior shown in the video lesson:

```javascript
const modalRef = useRef(null);
    
useEffect(() => {
   const handleOutclick = (event) => {
      if(!modalRef.current?.contains(event.target)){
         setIsOpen(false);
      }     
   }    
 
   window.addEventListener("mousedown", handleOutclick);
 
   return () => {
      window.removeEventListener("mousedown", handleOutclick);
   }
}, [])

return (
      <div className={styles.modalOverlay} role="dialog">
         <div ref={modalRef} className={styles.modalBox}>
            <button
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

In this example, I combined an imperative selection with `useRef` to compare the "event.target" with the element in the reference, creating an "outclick" behavior that closes the modal when the user clicks outside the main window.

## Conclusion
In this lesson, I created an interesting behavior by combining concepts from previous lessons. In the next class, there will be a second example to further reinforce my knowledge.


[useEffect](https://react.dev/reference/react/useEffect).