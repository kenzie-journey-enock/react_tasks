# State: Forms

## Introduction  
In this lesson, I learned how to manage forms using state in React.  

## Capturing Values  
One key purpose of managing forms with state in React is capturing user input to later use it in our logic. To achieve this, I learned to create a state for each field. For example, with fields like name, email, and password, I would define:  

```javascript
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```  

Using the `onChange` event, I can link the state update function to capture the input values dynamically:  

```javascript
<input type="text" onChange={(e) => setName(e.target.value)} />
```  

This logic works with other elements like `<textarea>` and `<select>`, but I need to ensure the initial state value matches the first available `<option>` for a `<select>` element:  

```javascript
const [example, setExample] = useState("option1");
```  

## Mirroring Values  
Beyond capturing values, I explored creating a reactive link between state and fields, which facilitates actions like resetting fields or loading initial values. To do this, I bind the `value` attribute of the field to its state:  

```javascript
<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
```  

## Example of a Reset Function  
I practiced implementing a reset function that clears the form fields by setting their states to empty strings:  

```javascript
const submit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
};
```  

For `<select>` elements, I reset the state to the value of the first option:  

```javascript
setExample("option1");
```  

## Conclusion  
In this lesson, I learned how to manage forms with state in React. Putting this concept into practice through exercises and projects is essential to reinforce my understanding.