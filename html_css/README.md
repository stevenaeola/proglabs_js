# Practical: HTML and CSS

## Aims

* Familiarisation with basic web functionality: HTML and CSS
* Publishing web sites with gitpages

## Tasks

### Learn about HTML 

If you are not already familiar with HTML, read up about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) or look at the resources on [The Odin Project](https://www.theodinproject.com/courses/web-development-101/lessons/html-and-css-basics). We are not going to be looking in detail at HTML5 features such as HTML5 forms, canvas, multimedia etc but feel free to have a look.

###  Learn about CSS

Similarly you need familiarity with CSS on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) or [The Odin Project](https://www.theodinproject.com/courses/web-development-101/lessons/html-and-css-basics) including selectors and combinators, but not CSS3 specific features.


### Write a document

Write a one-page HTML document about the application of computing that you think makes the best contribution to society. You should include
  * A heading which includes text on a coloured background
  * A list
  * Some hyperlinks
  * A consistent, but non-default font
  * All style information in a separate CSS file
  You can view, test and develop your page by accessing the page from within your file browser: it will launch a web browser and access via the `file:` scheme rather than the `http:` scheme that you use for web pages hosted on the internet (see the [list of URI schemes](https://en.wikipedia.org/wiki/List_of_URI_schemes) if you're interested to find out more).


### Publish your document

Publish your web page by using [gitpages](https://pages.github.com/). To do this you will need to create a repository with a specific name, add your files to it and then push them to github. For full instructions see how to [work with GitHub pages](https://help.github.com/en/github/working-with-github-pages), in particular [creating a GitHub pages site](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site) - but call your base file `index.html` rather than `index.md`.

The name of the repository you choose is important: it should be `<user>.github.io` where `<user>` is your GitHub username. To get your files associated with this repository you can either:
  * `git clone` the repository into your local machine then move your files into the (empty) clone; or
  * `git init` within the directory holding your files, then [set the GitHub repo as the remote](https://help.github.com/en/github/using-git/adding-a-remote) and `git pull`.

In either case you will need to `git commit` your changes and `git push` them to the remote repository to get them to appear on the gitpages site.
  
### Use a framework

  Make a copy of your HTML page and change it so that it uses either [bootstrap](http://getbootstrap.com/) or [Semantic UI](https://semantic-ui.com/). If you've used one of them before then try the other one. You should have to change very little of the HTML content, only the CSS classes referred to. Use templates that are provided in the documentation where relevant.

### Make it mobile-friendly

If you have time, make your page responsive for mobiles, by using 
  * a navbar (collapsible)
  * a grid layout for content
 Look in the documentation for examples of use.
