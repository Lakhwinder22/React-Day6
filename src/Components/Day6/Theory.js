/*Question 1:
What is an event in react?
    An event is an action that could be triggered as a result of the user action or system 
generated event. For example, a mouse click, loading of a web page, pressing a key, window 
resizes, and other interactions are called events.
    React has its own event handling system which is very similar to handling events on DOM 
elements. The react event handling system is known as Synthetic Events. The synthetic event 
is a cross-browser wrapper of the browser's native event.
     Handling events with react have some syntactic differences from handling events on DOM. These are:
        1.React events are named as camelCase instead of lowercase.
        2.With JSX, a function is passed as the event handler instead of a string.
        
-----------------------------------------------------------------------------------------------------------

Question 2:
What is memory leak and how to overcome?
    A memory leak is a situation when a program allocates dynamic memory and then loses all 
pointers to that memory, therefor it can neither address nor free it. memory remains marked
as allocated, so it will never be returned when more memory is requested by the program.
   1.Memory leak occurs when programmers create a memory in heap and forget to delete it.
   2.Memory leaks are particularly serious issues for programs like daemons and servers which
    by definition never terminate.
   3.To avoid memory leaks, memory allocated on heap should always be freed when no longer needed.
   4.
   
-------------------------------------------------------------------------------------------------------

Question 3:
Do you prefer function-based or class component and why ?
    A functional component is just a plain JavaScript pure function that accepts props as an 
argument and returns a React element(JSX). A class component requires you to extend from 
React.
 Component and create a render function which returns a React element.
 Because they're lightweight, writing these simple components as functional components is 
pretty standard. If your components need more functionality, like keeping state, use classes 
instead.

------------------------------------------------------------------------------------------------

Question 4:
Explain reducer as pure function in redux?
    In Redux, a reducer is a pure function that takes an action and the previous state of the 
application and returns the new state. The action describes what happened and it is the 
reducer's job to return the new state based on that action

------------------------------------------------------------------------------------------------

Question 5:
Why do we use redux thunk?
    Redux Thunk is a middleware that lets you call action creators that return a function instead
 of an action object. That function receives the store's dispatch method, which is then used 
 to dispatch regular synchronous actions inside the function's body once the asynchronous 
 operations have been completed.
    Redux Thunk middleware allows you to write action creators that return a function instead 
 of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only 
 if a certain condition is met.
 
 ----------------------------------------------------------------------------------------------
 
 Question 6:
 What do you know about NPM?
    Npm stands for Node Package Manager. It is a package manager for the Node JavaScript 
platform.
    Npm is known as the world’s largest software registry. Open-source developers all over 
the world use npm to publish and share their source code.
 =>Npm consists of three components:
   1.The website allows you to find third-party packages, set up profiles, and manage your packages.
   2.The command-line interface or npm CLI that runs from a terminal to allow you to interact with npm.
   3.The registry is a large public database of JavaScript code.*/