# Practical: Using fetch for client-server interaction

## Aims

* Understanding asynchronous requests and AJAX
* Serving HTML pages with `express.static`
* Using JavaScript promises
* Working with exceptions: `throw`, `try` and `catch`

## Tasks

1. Make sure you are familiar with serving GET requests from nodejs and accessing them through an HTML form. If not, look at the [previous practical][]. 

2. Read through the [lecture][] (watch with Encore if that helps)
   and set up an client-side page with an empty `div` and a button,
   with appropriate `id` attributes (see the lecture notes and example
   code). Add client-side JavaScript with this code - change the URL
   parameter in the `fetch` function to point to your nodejs script,
   and make sure the `id`s match.

```
window.addEventListener('click', function(event){
  fetch('http://127.0.0.1:8090/list')
   .then(response => response.text())
   .then(body =>
      document.getElementById('content').innerHTML=body)
});
```
  If you load this web page directly from the browser then you should
  get a browser error message talking about CORS. To make this work
  you need to serve the HTML page through your nodejs server. The best
  way to do this is to create a subdirectory in your project called
  `client` or `public` or whatever and serve requests for that
  statically (i.e. send the file directly rather than have it executed
  as a program within the server). Do this by adding a line like this
  to your server
  
  ```
  app.use(express.static('client'));
  ```
  
  See the [example code from the
  lecture](https://github.com/stevenaeola/progblack_lectures/tree/main/js_fetch/server.js)
  to see how I did this. You can also check out the example
  client-side code in the [lecture][] to see how to piece it together.
  
  Once this is all done you should be able to click in the web page to
  fetch content from your web service into your web page.
  
3. Read about [JavaScript
   promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). Adapt
   your client-side code so that it deals with unavailability of the
   web service appropriately, using the promises `.catch`
   function. Test it by stopping your web service after you have
   loaded your HTML page.
   
4. Perhaps surprisingly, 404 responses don't count as an error. Add
   functionality to your first `.then` function to see if the response
   is OK by examining `response.ok` and dealing with that
   appropriately, maybe with an `alert` message. You can either write
   the function directly into the handler or, perhaps better, `throw
   new Error("...")` which is then dealt with in the `.catch`
   code. [Read about
   throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).
   
5. Adapt your client-side code so that it uses the `async`/`await`
   style with an exception
   [`try-catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
   (rather than the promise `.catch`, 
   which is different). See the async example in the [lecture][].
   
6. The same-origin policy does not allow your web page to make `fetch`
   requests to sites outside the domain the web page came from
   originally. However your server-side code is free to make requests
   wherever it likes. You can use the [node-fetch
   package](https://www.npmjs.com/package/node-fetch) to use the same
   style of coding in your server as you have just learnt to do in the
   client. 
   
   [lecture]: https://github.com/stevenaeola/progblack_lectures/tree/main/js_fetch
[previous practical]: https://github.com/stevenaeola/proglabs_js/tree/main/node_routing/
