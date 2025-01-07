# States: Perfomance

## Introduction  
In this lesson, I learned about a React feature that enhances performance in state management and offers additional benefits.

## Receiving the Current State Value as a Parameter in a Callback Function  
The `useState` setter function not only updates the state with the provided value but also supports a more advanced usage pattern. For example:

```javascript
setNoteList((noteList) => [...noteList, newNote]);  

setNoteList((noteList) => noteList.filter((note) => note.id !== removingId));  

setNoteList((noteList) =>  
   noteList.map((note) => {  
      if (note.id === editingId) {  
         return { ...note, ...editNote };  
      } else {  
         return note;  
      }  
   })  
);  
```

In these examples, I learned how to receive the current state value as a parameter in an arrow function. This approach allows me to reference the state without establishing a reactivity binding, which isn’t necessary in this context.  

This usage pattern subtly improves performance, and as applications scale, these details can make a significant difference.  

## Additional Benefits  
I also discovered other advantages of this approach, such as:  
- **Less verbose code**: By leveraging this feature, I can reduce the amount of props being passed around.  
- **Better state management**: The state isn’t tied to components that don’t need it, making the code cleaner and more maintainable.  

## Conclusion  
In this lesson, I explored a valuable feature that refines the performance of state management in React. From now on, it’s a great practice to adopt this approach in my projects. Happy learning! 🚀