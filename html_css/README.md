# Practical: HTML and CSS

## Aims

* Familiarisation with basic web functionality: HTML and CSS
* Publishing web sites with gitpages

## Tasks

### Learn about HTML 

If you are not already familiar with HTML, read up about it on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML). We are not going to be looking in detail at HTML5 features such as HTML5 forms, canvas, multimedia etc but feel free to have a look.

###  Learn about CSS

Similarly you need familiarity with CSS on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) including selectors and combinators, but not CSS3 specific features.

### Investigate, Make a question


#### Make a change and a Pull Request

If you would rather work with somebody else to do this, that is fine.

Now that you have some familiarity with HTML and CSS, have a look at the file <./styling-lists.html> which comes from the [MDN tutorial](https://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html). 

- First, fork this repository <https://github.com/stevenaeola/proglabs_js> on github and clone it to your local machine. [Set the upstream remote](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork) to be my original repository
- _Optional_ If you would like to, then make a feature branch to work on. See the [lecture notes](https://github.com/stevenaeola/progblack_lectures/tree/main/git_branch) for details. You shouldn't create an issue on my repository for this
- Within your local copy make some changes to the _styling-lists.html_ file, and/or add one or more new files within the *html_css* directory. Perhaps you can investigate until you find a change that has a useful, interesting, beautiful or surprising result. You can see the result of your change by opening the local file with a web browser
- Commit and push your change to your forked repo (if you are using a feature branch you will have to name the branch explicitly with your push command)
- [Make a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) (PR) from your update fork (and optionally branch) to the main branch of my repo

#### PeerWise Registration

During this term we will sometimes be using PeerWise as a place for you to create, share and evaluate formative assessment questions with your classmates. Start by visiting PeerWise here:

http://peerwise.cs.auckland.ac.nz/at/?dur_uk

If you have not used PeerWise before, just click the "Registration" link and follow the prompts. All you need to do is choose a user name and a password for your PeerWise account.

If you have used PeerWise before, simply log in and then select "Join course" from the Home menu.

To access our course, "Prog Black 2022", you will need to enter two pieces of information:

1) Course ID = 25353
2) Identifier = Please enter your CIS username

Once you have registered you should be able to see at least one unanswered question. See if you can answer it. To look at the detail of a pull request, follow the link and look at the 'Files changed' tab.

#### Write a question

Think of a multiple choice question about the change you have proposed. It might be about 

- how the page looks
- whether this is the only/best way to do something
- whether the page is still valid HTML

Don't worry if your question is similar to another one that you have already seen. Practice makes perfect! Add your question to PeerWise under Your questions > Create new question

Don't forget to include a link to the pull request you have made!

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

  Make a copy of your HTML page and change it so that it uses either [bootstrap](http://getbootstrap.com/) or [an alternative](https://classpert.com/blog/top-bootstrap-alternatives). If you've used one of them before then try another one. You should have to change very little of the HTML content, only the CSS classes referred to. Use templates that are provided in the documentation where relevant.

### Make it mobile-friendly

If you have time, make your page responsive for mobiles, by using 
  * a navbar (collapsible)
  * a grid layout for content
 Look in the documentation for examples of use.
