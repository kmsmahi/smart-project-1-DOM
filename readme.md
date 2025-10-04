### 🟩 **Q.1: What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?  

**Ans:**  
- `getElementById(' ')` → Returns a **single element**. Selector type: only **id**.  
- `getElementsByClassName(' ')` → Returns an **HTMLCollection**. Selector type: only **class**.  
  → Need a loop to access a single element.  
- `querySelector(' ')` → Returns the **first element** matching any CSS selector (id, class, tag).  
- `querySelectorAll(' ')` → Returns a **NodeList** (all matching elements). Selector type: any CSS selectors (id, class, tag).

---

### 🟨 **Q.2: How do you create and insert a new element into the DOM?**

**Ans:**
```js
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
const mainDiv = document.getElementById('main');
mainDiv.appendChild(newDiv);


🟦 Q.3: What is Event Bubbling and how does it work?

Ans:
Event Bubbling is a mechanism in JavaScript where an event that occurs on a child element automatically propagates upward through its parent, grandparent, and all ancestor elements in the DOM hierarchy.
In other words, the event “bubbles up” from the innermost element that triggered it to the outermost elements.
For example, if a button inside a <div> is clicked, the click event first occurs on the button, then on the parent <div>, and continues to propagate up to the document level.

🟪 Q.4: What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple individual child elements, you add a single event listener to their common parent element.
This parent element listens for events that bubble up from its children, and you can identify which child triggered the event using the event.target property.

         Why it’s useful:

->Improves performance (fewer event listeners → less memory use).

->Easier to manage and maintain.

->Works for dynamically added elements.
->In short, event delegation takes advantage of event bubbling to make event handling more efficient and flexible.



🟥 Q.5: Difference between preventDefault() and stopPropagation()

Ans:

preventDefault() → Stops the browser’s default behavior (e.g., stopping a form submission or link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements.

