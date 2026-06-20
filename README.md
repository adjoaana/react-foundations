React Learning Notes — Adjoa's README
Overview
These notes summarize everything I have learned so far about JavaScript and React. The goal is to understand React conceptually rather than memorizing code.

1. JavaScript Fundamentals
Variables
Variables store data.
JavaScriptlet count = 0;
Here:

let declares a variable.
count is the variable name.
0 is the initial value.


Functions
Functions perform actions.
JavaScriptfunction increase() {    count++;}
When increase() runs, the value of count increases by 1.

Events
Events allow users to interact with the application.
Example:
JavaScriptbutton.addEventListener("click", increase);
Meaning:

User clicks button
increase() runs


DOM Manipulation
The DOM (Document Object Model) represents the webpage.
To update what is displayed:
JavaScriptdocument.getElementById("count").innerText = count;
This changes the text shown on the page.

2. Building the Counter App in JavaScript
State
We stored the counter value in a variable.
JavaScriptlet count = 0;
This variable is the application's state.

Increasing the Counter
JavaScriptfunction increase() {    count++;    countText.innerText = count;}
Process:

User clicks button
Function runs
Variable changes
UI updates manually


Decreasing the Counter
JavaScriptfunction decrease() {    if (count > 0) {        count--;        countText.innerText = count;    }}
This prevents negative numbers.

Resetting the Counter
JavaScriptfunction reset() {    count = 0;    countText.innerText = count;}
Resets the counter back to zero.

Important JavaScript Lesson
JavaScript does not automatically update the UI.
This happens manually.
Workflow:
Plain TextChange Variable↓Manually Update DOM↓UI Changes

3. Why React Exists
React simplifies UI updates.
Instead of manually updating the DOM:
JavaScriptdocument.getElementById("count").innerText = count;
React updates the UI automatically.
Workflow:
Plain TextChange State↓React Detects Change↓React Updates UI

4. React State
State stores data that can change.

useState
JSXconst [count, setCount] = useState(0);
Breakdown:
count
The current state value.
Example:
JavaScriptcount = 0

setCount
Function provided by React.
Used to update state.
Example:
JSXsetCount(5);
Updates count to 5.

0
Initial value of the state.

State Example
JSXconst [name, setName] = useState("Adjoa");
Here:

name = current value
setName = state updater function
"Adjoa" = starting value


Why We Use setCount()
Incorrect:
JSXcount++;
React may not update the UI.
Correct:
JSXsetCount(count + 1);
Reason:
React only re-renders when state is updated using the setter function.

Important React Rule
Use:
JSXsetCount(...)
Not:
JSXcount++

5. Components
Components are reusable pieces of UI.
Example:
JSXfunction Greeting() {  return <h1>Hello!</h1>;}
Usage:
JSX<Greeting />
Output:
Plain TextHello!

Component Mental Model
Large applications are made of small components.
Example:
Plain TextApp├── Header├── Navigation├── MainContent├── Greeting└── Footer

6. Props
Props allow data to be passed from one component to another.

Example
JSX<Greeting name="Adjoa" />
Component:
JSXfunction Greeting(props) {  return <h1>Hello {props.name}</h1>;}
Output:
Plain TextHello Adjoa

Props Explained
Props work similarly to function parameters.
JavaScript:
JavaScriptfunction greet(name) {    return `Hello ${name}`;}
React:
JSX<Greeting name="Adjoa" />

Props vs State
Props

Passed from parent component
Read-only
Cannot be changed directly

Example:
JSX<Greeting name="Ama" />

State

Lives inside a component
Can change over time
Managed with useState

Example:
JSXconst [count, setCount] = useState(0);

7. Building a React Counter
State
JSXconst [count, setCount] = useState(0);

Increase Function
JSXfunction increase() {    setCount(count + 1);}

Decrease Function
JSXfunction decrease() {    if (count > 0) {        setCount(count - 1);    }}

Reset Function
JSXfunction reset() {    setCount(0);}

Displaying State
JSX<h1>{count}</h1>
The value inside {} is displayed.

Button Events
JSX<button onClick={increase}>    Increase</button>
React uses:
JSXonClick
instead of:
JavaScriptaddEventListener("click")

JavaScript vs React
JavaScript
Plain TextClick↓Function Runs↓Variable Changes↓DOM Updated Manually↓UI Changes

React
Plain TextClick↓Function Runs↓State Changes↓React Re-renders↓UI Updates Automatically

8. Arrays
Arrays store collections of data.
Example:
JavaScriptconst fruits = [  "Apple",  "Banana",  "Cherry",  "Orange"];

9. map()
One of the most important methods in React.
Example:
JavaScriptconst numbers = [1, 2, 3];const result = numbers.map(num => num + 1);
Result:
JavaScript[2, 3, 4]

What map() Does
Plain TextTake each item↓Transform it↓Return a new array

Rendering Lists in React
Example:
JSXconst fruits = [  "Apple",  "Banana",  "Cherry",  "Orange"];
Render:
JSX<ul>  {fruits.map((fruit, index) => (    <li key={index}>{fruit}</li>  ))}</ul>
Output:
Plain TextAppleBananaCherryOrange

What Is a Key?
React requires a key when rendering lists.
Example:
JSX<li key={index}>{fruit}</li>
Keys help React identify items efficiently.

Concepts Mastered So Far
JavaScript
✅ Variables
✅ Functions
✅ Events
✅ DOM Manipulation
✅ Conditionals
✅ Arrays
✅ Loops

React
✅ JSX
✅ Components
✅ Props
✅ State
✅ useState
✅ Event Handling
✅ onClick
✅ Rendering Data
✅ map()
✅ Rendering Lists

Current React Mental Model
Plain TextComponent =>  State => Functions => Props => JSX
Example:
Plain Text
User Clicks Button
↓
Function Runs
↓
State Updates
↓
React Re-renders
↓
UI Updates Automatically

Current Skill Level
I understand:

How React state works
Why React uses useState
How components are created
How props pass data
How lists are rendered with map()
How events work in React
How React differs from vanilla JavaScript


Next Topics To Learn
React

Forms and Inputs
Multiple State Variables
useEffect
Conditional Rendering
API Calls
React Router
Component Architecture


JavaScript

Objects
Destructuring
Array Methods
Async/Await
Fetch API


Personal Reminder
Do not memorize React. Understand the flow.
Plain TextState changes↓React notices↓React re-renders↓UI updates
Everything learned so far builds on that single idea. 🚀