# States: Managing Object List 1

## Introduction  
In this lesson, I deepened my understanding of managing lists with objects using states. The focus was on learning how to create a function to update individual items.  

## Update  
To update an item within a list, I learned that a non-mutating method is required, with the `map` method being the most suitable for this scenario. Interestingly, this is the same method used to dynamically render lists in JSX.  

### Example  
Here’s how the update function works:  

```javascript
const editNote = (editNote, editingId) => {
   const newNoteList = noteList.map((note) => {
      if (note.id === editingId) {
         return { ...note, ...editNote };
      } else {
         return note;
      }
   });
   setNoteList(newNoteList);
};
```  

The function compares the `editingId` parameter with the `id` of each object in the list. When a match is found, it uses the spread operator (`...`) to copy the existing data from the object while replacing the updated values with those provided in the `editNote` parameter. This approach ensures that the update is done immutably, preserving the state integrity.  

For example:  

```javascript
return { ...note, ...editNote };
```  

Here, the existing properties of the object (`note`) are retained, while the properties in `editNote` replace or add new values, thanks to the key hierarchy in JavaScript objects.  

**Key Insight:** If multiple keys with the same name exist in an object, JavaScript always keeps the last one provided.  

## Conclusion  
This lesson completed my understanding of front-end CRUD operations by teaching me how to implement an update functionality for a list of objects. By applying this knowledge in practice, I can reinforce what I’ve learned and further enhance my skills.