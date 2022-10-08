# Practical: Introduction to nodejs

## Aims

* Familiarisation with nodejs and server-side scripting with JavaScript
* Working with http


## Tasks

1. Starting with node on a lab PC (Windows or Linux) or your own machine.

  * If you don't already have nodejs installed on your machine then [install it](https://nodejs.org/en/download/)
  * Open Visual Studio Code
  * Create a new file called `hello.js` containing the line

  ```
  console.log("Hello world")
  ```

  then run it through the _Run_ menu, or the _Run and Debug_ option on the LHS navigator. See the [lecture notes](https://github.com/stevenaeola/progblack_lectures/tree/main/js_intro_node) for details. 
  
2. Running a simple web server with nodejs.

  * Read the tutorial and run the code at the [nodejs getting started tutorial](https://nodejs.org/en/docs/guides/getting-started-guide/)
  * What do you think will happen if you change the following?
      * the port number
      * the status code
      * the hostname
      * the filename
      * the content type
  * Make the changes and re-run the programme and see if you are correct. (Note that you stop the program with Ctrl-C.)


3. Read more about [http requests in node](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/). Try out the examples there. You may wish to refer to my [notes on http](https://github.com/stevenaeola/progblack_lectures/tree/main/http)

4. If you get all of this done you have time to look at some other related topics:
  * [Blocking vs non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
  * [Do not block the event loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
  * [How modules work in node](https://nodejs.org/api/modules.html)
