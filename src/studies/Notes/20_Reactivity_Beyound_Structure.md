# Reactivity Beyound Structure

## Introduction  
In this lesson, I delved deeper into the concept of reactivity. I learned that beyond spontaneous updates to our structures when a state changes, the same phenomenon also impacts logical structures tied to that state.

## Examples  

### Number List  
For example, given the following state:  
```javascript
const [numberList, setNumberList] = useState([1, 2, 3]);  
```  
And a calculation of the total linked to it:  
```javascript
const total = numberList.reduce((prevValue, number) => {  
    return prevValue + number;  
}, 0);  
```  
When we update the state, such as adding a new number to the list, the total is automatically updated due to reactivity.  

### Teacher List  
Next, I explored reactivity with a list of objects:  
```javascript
const [teacherList, setTeacherList] = useState([  
   {  
      name: "Enock",  
      job: "React Instructor",  
      budget: 7000,  
   },  
]);  
```  
If a filter is tied to this state:  
```javascript
const javascriptTeachers = teacherList.filter(teacher => teacher.job === "JavaScript Instructor");  
```  
Adding a new object to the list not only updates the list but also ensures that the filter dynamically incorporates the new addition.

## Conclusion  
In this lesson, I saw examples of reactivity in the logical components of an application. I learned that any connection to the state inherently triggers reactivity. To solidify this understanding, it’s essential to practice by applying these concepts in activities, deliverables, and even personal projects.