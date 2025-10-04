q.1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


ans :-> getElementById (' ') returns a single element,it's selector type is only ('id').
     -> getElementsByClassName (' ') returns a HTML collection,it's selector type is only ('class').Need a loop to get a single         element.... 
     -> querySelector(' ') returns first element matching any css selector, selector type: any css selectors(id,class,tag).
     -> querySelectorAll(' ') returns NodeList (all matching elements),selector type: any css selectors(id,class,tag).


q.2 : How do you create and insert a new element into the DOM?


ans :-> const newDiv=document.createElement('div');
        newDiv.textContent = 'Hello World!';
        const mainDiv=document.getElementById('main');
        mainDiv.appendChild(newDiv);


q.3 : What is Event Bubbling and how does it work? 

ans  :-> Event Bubbling is a mechanism in JavaScript where an event that occurs on a child element automatically propagates upward              through its parent, grandparent, and all ancestor elements in the DOM hierarchy. In other words, the event “bubbles up” from           the innermost element that triggered it to the outermost elements. For example, if a button inside a <div> is clicked, the             click event first occurs on the button, then on the parent <div>, and continues to propagate up to the document level.

q.4 : What is Event Delegation in JavaScript? Why is it useful?

ans  :-> Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple individual child elements,          you add a single event listener to their common parent element. This parent element listens for events that bubble up from          its children, and you can identify which child triggered the event using the event.target property.

         It is useful because it improves performance (fewer event listeners mean less memory use), makes the code easier to manage,          and allows you to handle events for elements that are added dynamically later. In short, event delegation takes advantage of          event bubbling to make event handling more efficient and flexible.



q.5 : Difference between preventDefault() and stopPropagation()?

ans  :-> preventDefault(): Use to stop default browser actions.
         stopPropagation():Use to  stop event bubbling.

