//Question 1:
/*Difference between Axios and fetch?
Axios - Axios is a Javascript library used to make HTTP requests 
        from node.js or XMLHttpRequests from the browser and it 
supports the Promise API that is native to JS ES6. It can be used 
intercept HTTP requests and responses and enables client-side 
protection against XSRF. It also has the ability to cancel 
requests.

Fetch - The Fetch API provides a fetch() method defined on the 
        window object. It also provides a JavaScript interface 
for accessing and manipulating parts of the HTTP pipeline (requests and responses). 
The fetch method has one mandatory argument- the URL of the resource to be fetched.
 This method returns a Promise that can be used to retrieve the response of the 
 request. 
 
Differences:
Axios-
1.Axios is a stand-alone third party package that can be easily installed.
2.Axios’ data contains the object.
3.Axios has the ability to intercept HTTP requests.
4.Axios has wide browser support.
5.Axios allows cancelling request and request timeout.
Fetch-
1.Fetch is built into most modern browsers; no installation is required as such.
2.Fetch’s body has to be stringified.
3.Fetch, by default, doesn’t provide a way to intercept requests.
4.Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).
5.Fetch does not. */

//Question-2:
/*What is UseEffect Hook ?(Implementation)?
The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)
*/

//Question-3:
/*What is UseState Hook ?(Implementation)
The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.*/