# What are Props 

## Introduction  
In recent lessons, I focused on creating, importing, exporting, and organizing components in a scalable way, based on architectural references. However, for true scalability and dynamism between components, I needed to understand an essential React feature: **props**.

## What Are Props?  
Props allow the transfer of data and functions from a parent component to a child component in React. They are passed as attributes to the child component and accessed via the `props` object. Props function similarly to parameters in JavaScript functions but have their own JSX-specific syntax.  

For example:  
**JavaScript Function with Parameters:**  
```javascript
function person(name, surname, age) {
   console.log(name, surname, age);
}
person("Alex", "Conder", 32);
```

**React Component with Props:**  
```javascript
const PersonCard = ({ name, surname, age }) => {
  return (
    <div>
      <span>
        <p>Olá, {name} {surname}</p>
        <p>Sua idade é {age} anos.</p>
      </span>
    </div>
  );
};
<PersonCard name="Alex" surname="Conder" age={32} />
```

## Destructuring  
Destructuring is a React mechanic that makes props easier to read and write. Without it, props are accessed through `props.propName`, which can be repetitive and harder to interpret. Destructuring condenses all props into an object and provides direct access to each one.  

Example without destructuring:  
```javascript
const PersonCard = (props) => {
  return (
    <div>
      <p>Olá, {props.name} {props.surname}</p>
      <p>Sua idade é {props.age} anos.</p>
    </div>
  );
};
```

Destructuring is not mandatory but highly recommended for cleaner syntax.

## Practical Application  
Using props makes components like `Input` dynamic, reusable, and adaptable:  
```javascript
const Input = ({ id, type, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  );
};
<Input id="name" type="text" label="Nome" />
<Input id="email" type="email" label="E-mail" />
<Input id="password" type="password" label="Senha" />
```

Props also enable logic-based behaviors within components. For example:  
```javascript
const PersonCard = ({ name, surname, age }) => {
  const isOlder = () => {
    if (age > 30) {
      console.log("A idade é superior a 30 anos.");
    } else {
      console.log("A idade é menor que 30 anos.");
    }
  };
  return (
    <div>
      <p>Olá, {name} {surname}</p>
      <p>Sua idade é {age} anos.</p>
    </div>
  );
};
```

## Props Compared to HTML Attributes  
Props work similarly to HTML attributes, enabling variations in behavior. For instance, changing the `src` attribute of an `<img>` tag alters the displayed image. Similarly, in the `Input` component, props like `id`, `type`, and `label` allow flexible customization.  

## Final Thoughts  
Props are fundamental for building versatile and scalable components in React. This lesson provided a solid foundation, and I’m excited to explore more advanced topics in upcoming lessons. 🌟