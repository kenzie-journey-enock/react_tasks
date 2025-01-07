# States: Managing Object List 1

## Introduction

In this learning cycle, I explored the management of object lists using states, a common model in programming. 
The focus was on practicing CRUD functionalities:

- **Create**: Adding new objects  
- **Read**: Reading and displaying data  
- **Update**: Editing existing objects  
- **Delete**: Removing objects  

## Examples

I started by creating a state to store an object list. 
The initial list was predefined but could also be empty:

```javascript
const noteListData = [
   { title: "Example 1", text: "Sample content" },
   { title: "Example 2", text: "Sample content" },
];

const [noteList, setNoteList] = useState(noteListData);
```

To display data, I used dynamic rendering with the `map` method:

```javascript
<ul>
   {noteList.map((note, index) => (
      <li key={index}>
         <h3>{note.title}</h3>
         <p>{note.text}</p>
      </li>
   ))}
</ul>
```

## Addition

To add new items to the list, I learned to avoid mutable methods like `push`, using instead a combination of the spread operator and `setNoteList`:

```javascript
const addNote = (note) => {
    const newNoteList = [...noteList, note];
    setNoteList(newNoteList);
};
```

This approach ensures immutability while creating new lists with added items.

## Unique IDs

Unique identifiers were essential for managing items during updates and deletions. I used JavaScript's `crypto.randomUUID()` to assign unique IDs:

```javascript
const addNote = (note) => {
    const newNote = { ...note, id: crypto.randomUUID() };
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
};
```

## Removal

To remove items, I applied the `filter` method, creating a logic to exclude the specified item by ID:

```javascript
const removeNote = (removingId) => {
    const newNoteList = noteList.filter((note) => note.id !== removingId);
    setNoteList(newNoteList);
};
```

This non-mutable solution effectively updates the list by excluding the targeted object.

## Conclusion

In this lesson, I learned how to read, add, and remove objects from a list while maintaining state management best practices. This foundational knowledge sets the stage for more advanced lessons to come. Excited to keep learning! 😊