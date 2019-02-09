# Practical: Routing in nodejs with express

## Aims

* Understanding routing with express
* Implementing REST GET methods
* HTML forms
* Implementing REST POST methods


## Tasks

1. Make sure you are familiar with npm, running nodejs programs and sending requests via a
   browser. If not, look at the [intro to node practical](../node_intro/). 

2. Create a new project by creating a new folder/directory and executing `npm init`. This will
   create a `package.json` file in the directory (accept all the defaults). In a new file
   called hello.js put the following program, which uses [express](https://expressjs.com/) to send a
   very simple message: 

    ```
    var express = require('express')
    var app = express()

    app.get('/', function(req, resp){
       resp.send('Hello world')
    })

    app.listen(8090)
    ```

    Try running this with
    
    ```
    node hello.js
    ```

    For this to work you will need to install the module `express` which you do with
    
    ```
    npm install express
    ```
    
    This will add `express` to the dependencies listed in `package.json` and put the express module,
    and all its dependencies in the `node_modules` directory, which it will create. It will also
    create a `package-lock.json` file which records the exact version of the packages that you are
    using. If you are using git then you would usually add package.json to git, but not
    `node_modules`. It is common to add `node_modules` to your `.gitignore` file so that `git status` will
    not report any changes to it. Once your project is complete if you want to share it with others you only need to circulate the files
    you have written, plus `package.json` and `package-lock.json`. The contents of `node_modules`
    are rebuilt just by using `npm install`. Try that now: delete the `node_modules` directory and
    then run `npm install` to reinstate it.
    
    Start your web service with
    
    ```
    node hello.js
    ```
    
    Access the service via your web browser at the URL `http://127.0.0.1:8090`. What happens if you try
    to access at `http://127.0.0.1:8090/hello.js`? Note that the path in the URL after the server is
    controlled entirely by the paths defined in express. This is different to the simple server you set
    use using `http` in the [intro to node practical](../node_intro/), which responded to all requests
    on the relevant port.
    
    Lastly, edit your package.json file so that the `scripts` section looks like this:
    
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node hello.js"
    },
    ```
    
    This has added the `start` script so that you can run your program simply with
    
    ```
    npm start
    ```
    
    This is not a big saving now, but it is a good idea to do this in case you change how you
    start your program (e.g. using [nodemon](https://www.npmjs.com/package/nodemon)) or if you have
    more than one server script and it is not obvious which one to use.


3. Now read about [routing with express](https://expressjs.com/en/guide/routing.html) and do the following

    * Add another GET route with a different path with another `app.get` definition that gives a
      different message (you could make this a wildcard if you wished)
    * Change this second route so that it takes a route parameter (i.e. a path with a : in it), see
      the section called _route parameters_ in [routing with
      express](https://expressjs.com/en/guide/routing.html). Extract this value from `req.params`
      within the handler function and send it back. Have a look at the first handler function in the
      [example on random numbers][random] in the [lecture][] if you're not
      sure. Test this out by sending a an appropriate browser request like
      <http://127.0.0.1:8090/wave/everybody>: this should say something like `waving at everybody`

4. Next you are going to access a variable encoded in a query string (i.e. the bit after the ? in
   the URL).
   
     * Add another GET route to your server, this time with no route parameter. Extract any _person_
     in the query string by accessing `req.query.person`. This is similar to the second handler
     function in the [example on random numbers][random]. Test it out with a request something like
     `http://127.0.0.1:8090/w?person=bob`
         
     * Build an HTML page (probably called `index.html`) with a
     [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form). The `action` attribute
     of the form is the URL of where it gets submitted (your node page). You also need to include
     an [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) with the `name`
     attribute set to the the name of the variable to be submitted (in this case `person`). You
     might like to include a
     [submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit) button,
     although the form will submit if you hit enter on a text input. 
     Load the `index.html` page into your web browser, by using `open with` from the file
     navigator. For now we are not serving the HTML page through our web server. 
     When you submit the form, you
     should get response from the web page. Note that form is simply creating the URL for a GET request.


5.   Make your GET request do something more interesting than just printing out the parameter: use the
   parameter as a search key. Firstly you need some data. I have provided some potato recipes for
   you, based on a response that I got from <http://www.recipepuppy.com/> which provides a
   searchable open database of recipes. The data is from this request:
   <http://www.recipepuppy.com/api/?i=potato>. The format is JSON (JavaScript Object Notation),
   which is basically the same syntax that JavaScript uses for object literals (although there are
   [some small
   differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON),
   most notably that object keys must be written in quotes). So [this file](./potato_recipes.json) contains a list (array) of
   objects.
   
     In nodejs you can use `require` for modules, but also for JSON data, so you can simply write
   
     ```
     var recipes = require('./potato_recipes.json');
     ```
   
     Make this a global variable (not usually a great idea), i.e. not defined inside any function, so
    that it is accesible from all of your handlers. 
   
     Do this with a new project (new directory, run `npm init` again) and define an endpoint (i.e. a route)
   which takes a query string parameter that is used as a search key, returning only those recipes
   that match. If you need help, then you can look at [working with
   objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) and
   [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
   in JavaScript. It doesn't really matter what you called your server script, but `hello.js` is
   unusual: people often call it either server.js or index.js. 

6.  GET methods are for reading data without changing state, whereas POST methods are for changing
   state. Officially, according to
   [REST](https://en.wikipedia.org/wiki/Representational_state_transfer), POST is only for adding new
   entries, and PUT or PATCH should be used for updating entries. But in practice many APIs,
   including e.g. [twitter](https://developer.twitter.com/en/docs/api-reference-index), use POST for
   updates too.
   
    * Create a new HTML form page called `update.html` by copying your `index.html` (or if you want you can include two separate
     forms inside the same HTML page). Add a `method='POST'` attribute to the form (the default
     method for forms is GET). If you submit this now (try it) you will get an error, because your
     server is not handling post request. 
     
    * Change your server to have a route `new` which is accessed via POST, with something like
    ```
       app.post('new', function( ...){ ...});
    ```
      Link it up to your web page and get it going like it was before, except via POST. Notice that
   the URL no longer includes the query string: the form data is now submitted via the request body.
   
    * Make your server add a a new recipe to the collection. Firstly add relevant fields to the form
     in `update.html`, then update the server script so that it collects the values from the
     request, creates an object with those values in the correct properties, and adds it to the list
     of recipes with
     [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push). This
     data will stay only as long as the server is running. To extract variables from the body
     (i.e. POST variables) you will need to use the
     [body-parser](https://www.npmjs.com/package/body-parser) package. More recent versions of
     express include this by default, but you may have to `npm install body-parser`. This is known
     as _express middleware_ i.e. something that plugs into express to handle particular types of
     requests. For now you just need to include this in your server code:
     ```
     var bodyParser = require('body-parser');
     app.use(bodyParser.urlencoded({ extended: false }));
     ```
     Once this is done you can access POST variables in a request with `req.body.var_name`, just
     like you did with route and query values.
     
     
    * Test out your POST method: have two tabs open, one for adding recipes and another for searching.


7. The potato recipes were extracted from a one-off request that was made to an API. You could do
   this 'live' in your server code, perhaps using a package like
   [request](https://www.npmjs.com/package/request). This is one of the extensions for the [second
   assignment](https://github.com/stevenaeola/gitpitch/tree/master/prog/assessment_2_prog_1819). Have
   a look through the directories of APIs listed there, and see if any of them could work with a
   web-site that you would like to build.

[lecture]: https://github.com/stevenaeola/gitpitch/tree/master/prog/js_intro_node/README.md
[random]: https://github.com/stevenaeola/gitpitch/blob/master/prog/js_intro_node/express_parameters.js
