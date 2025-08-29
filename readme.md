1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementByID is used for selecting a single element with the element ID. it returns an element object representing the element whose id property is matched.
getElementsByClassName returns an array like object of all elements which have the given class name.
querySelector returns the first element which matches the specified CSS selector. If No matches found it retuens Null.
querySelectorAll() returns Nodelist representing a list of documnet's element that matches the specified grop of selector.

2. How do you create and insert a new element into the DOM?

For creating an element we have to use document.createElemnet()
for example, let new_div = document.createElement("p"); // creates a paragraph element

For inserting a element we can can use 2 method
method 1: appendChild()
example: let parent_element = document.getElementById("oldParent").appendChild(new_div);

method 2: insertBefore() this will add new element before a specific node

3. What is Event Bubbling and how does it work?

Event Bubbling is a process where a event like a click on a specific element and it goes up to the document part. which is known as Bubbling.
for example, we have a DOM tree:
DOM -> Body -> Div -> ul -> listed items
now I clicked on a listed item. the code will work like:
listed items -> ul -> Div -> Body -> DOM.
now thats how Event bubbling works.

4. What is Event Delegation in JavaScript? Why is it useful?

When we use fewer event listeners and perform similer events based on the logic. the idea is we can use a single event listener into the parent element instead of using them in many child elements.
It is useful for clean code. and easier to maintain. instead of using event listener 100 times we can use them 1 time and get the same output. Thats why Event Delegation is useful

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is used for preventing the default action of an event
stopPropagation() it is used for preventing event from bubbling
