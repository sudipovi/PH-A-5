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
