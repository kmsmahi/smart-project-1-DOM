
### 🟩 Q1: What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Answer:**
- `getElementById(' ')` → Returns a **single element**. Selector type: only **id**.  
- `getElementsByClassName(' ')` → Returns an **HTMLCollection**. Selector type: only **class**.  
  → Need a loop to access a single element.  
- `querySelector(' ')` → Returns the **first element** matching any CSS selector (id, class, tag).  
- `querySelectorAll(' ')` → Returns a **NodeList** (all matching elements). Selector type: any CSS selectors (id, class, tag).

---

### 🟨 Q2: How do you create and insert a new element into the DOM?

**Answer:**
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
const mainDiv = document.getElementById('main');
mainDiv.appendChild(newDiv);

🟦 Q3: What is Event Bubbling and how does it work?

Answer:

#Event Bubbling is a mechanism where an event triggered on a child element propagates upward through its parent, grandparent, and ancestors.

#The event “bubbles up” from the inner element to the outermost elements in the DOM.

Example:
<div>
  <button>Click Me</button>
</div>
If the button is clicked, the event occurs on the button first, then bubbles up to the parent <div>, and then to the document.

🟪 Q4: What is Event Delegation in JavaScript? Why is it useful?

Answer:

#Event Delegation is a technique where you attach one event listener to a parent element instead of multiple listeners to its children.

#It listens for events from child elements using event bubbling and identifies the source with event.target.

Advantages:

#Reduces the number of event listeners (better performance).

#Easier to manage and maintain.

#Works for dynamically added elements.
Example:
document.getElementById('parent').addEventListener('click', function(e) {
  if (e.target.matches('.child')) {
    console.log('Child clicked!');
  }
});


🟥 Q5: Difference between preventDefault() and stopPropagation()

Answer:

preventDefault() → Stops the default browser action (e.g., prevents form submission or link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements.

Example:
document.getElementById('link').addEventListener('click', function(e) {
  e.preventDefault(); // Stop link from opening
  e.stopPropagation(); // Stop event from bubbling up
});

