# JSX

## **Introduction**
I began learning about JSX (JavaScript XML), a fundamental concept in React that combines HTML and JavaScript seamlessly. This integration removes the need for traditional DOM methods like `querySelector`, `appendChild`, and `innerHTML`. Instead of writing code imperatively, JSX encourages a declarative style.

I found it fascinating how JSX allows embedding JavaScript variables directly into an HTML-like structure using curly braces `{}`. For example:

```jsx
<li>
  <h2>{teacher.name}</h2>
  <span>Role: {teacher.job}</span>
  <span>Salary: {teacher.budget}</span>
</li>
```

Not only does JSX support variables, but it also integrates JavaScript logic (with some limitations that I’ll explore later).

## **Naming Differences**
One key thing I learned was that some HTML attributes have different names in JSX to avoid conflicts with native JavaScript properties. For instance:
- `for` becomes `htmlFor`
- `class` becomes `className`

## **DOM Methods vs. JSX**
I realized that JSX brings significant advantages over traditional DOM methods. Instead of using `innerText` or `innerHTML` to insert text into an element, JSX lets me simply place the variable where I want it rendered.

For example:
**Using Vanilla JavaScript:**
```javascript
const element = document.querySelector("li > h2");
const name = "Alex";

element.innerText = name;
```

**Using JSX:**
```jsx
const name = "Alex";

return (
  <li>
    <h2>{name}</h2>
  </li>
);
```

This approach feels much more intuitive and clean, combining logic and structure seamlessly.

## **Event Handling**
I also discovered that event handling in JSX is more straightforward. Instead of using `addEventListener`, I can directly attach event handlers using attributes like `onClick`:

```jsx
<li>
  <h2>{teacher.name}</h2>
  <span>Role: {teacher.job}</span>
  <span>Salary: {teacher.budget}</span>
  <button onClick={() => saveTeacher(teacher)}>Save Teacher</button>
</li>
```

This makes the code more readable and easier to manage.

## **Conclusion**
In this lesson, I gained foundational knowledge of JSX and how it merges HTML and JavaScript features. I’m excited to dive deeper into this syntax and explore more advanced features in the upcoming lessons! 🌟
