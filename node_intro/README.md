# Practical: Introduction to nodejs

## Aims

* Familiarisation with nodejs and server-side scripting with JavaScript
* Working with http


## Tasks

1. Starting with node on dude (or your own machine).

  * On dude first of all run nodeJS via the app hub to set up the paths etc. You can close the window that appears when you do this.
  * Start a Command Prompt from the start menu
  * Use `cd` and `mkdir` to get to an appropriate place in the file system. Don't forget that Windows uses backslashes for directory delimiters.
  * In a new directory initialise create a file `hello.js` which contains the line

  ```
  console.log("Hello world")
  ```

  then run it with `node hello.js`. See the [lecture notes](https://github.com/stevenaeola/gitpitch/tree/master/prog/js_intro_node) for details. 

2. Running a simple web server with nodejs.

  * Read the tutorial and run the code at the [nodejs getting started tutorial](https://nodejs.org/en/docs/guides/getting-started-guide/)
  * What do you think will happen if you change the following?
      * the port number
      * the status code
      * the hostname
      * the filename
      * the content type
  * Make the changes and re-run the programme and see if you are correct. (Note that you stop the program with Ctrl-C.)


3. Read more about [http requests in node](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/). Try out the examples there. You may wish to refer to my [notes on http](https://github.com/stevenaeola/gitpitch/tree/master/prog/http)

4. If you get all of this done you have time to look at some other related topics:
  * [Blocking vs non-blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
  * [Do not block the event loop](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
  * [How modules work in node](https://nodejs.org/api/modules.html)
