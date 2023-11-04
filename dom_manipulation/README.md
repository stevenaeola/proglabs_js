# Practical: Generating poetry with DOM manipulation

## Aims

* Familiarisation with standard functions in JavaScript
* Accessing and updating the Document Object Model


## Tasks

1. Preparation: look through the lists of methods JavaScript provides through the [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) objects.

2. Have a look at the file _button.html_ included in this directory of the repository. You are going to explore what happens when you change the file, and write a question about the effect of the change on PeerWise. If you haven't already registered for PeerWise then have a look at the [practical on HTML and CSS](../html_css/README.md) which includes instructions. You should already have a local copy of the forked version of the repository, if not then follow the instructions there. You will have to include any changes made from the original repository by 
```
git pull upstream main
```
Now make a change to the file that has a useful, interesting, beautiful or surprising result. Commit and push your change to your forked repository, then make a pull request to the original repo. Add a PeerWise question about the effect of your change. Answer some questions other people have written too.

3. Write an HTML page with associated client-side JavaScript to generate a random sentence in English (or another language if you prefer). The sentence should take the form

  > The _adjective_ _noun_ _verb_ _adverb_.

  or the equivalent structure in the language you choose. Here _adjective_ should be randomly selected from a list of adjectives (e.g. blue, tall, furry) that you define in your JavaScript code. You should also define a list of nouns, verbs and adverbs to choose from. If you want help choosing some words you could look at <https://www.getrandomthings.com/random-verbs.php> or other similar sites. An example generated sentence would be

  > The blue dog eats lazily.

  Your page should include a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) which, when clicked, causes the sentence text to appear inside another part of the page (which starts off being empty). Use the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method to add a method that is called when the button gets a _click_ event. You will need to identify the button element using an _id_ attribute. Then you can select the button element via its _id_ with either the [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) method or the more general [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method.

  To place the sentence in another part of the page, define a _div_ element that starts off with no content, and update its content via JavaScript by selecting it (again with _getElementById_ or _querySelector_) and setting the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property.

  To choose a random element of your array you can use [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) combined with [Math.floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Some JavaScript libraries e.g. [lodash](https://lodash.com/) provide methods for doing things like this easily (in this case with [sample](https://lodash.com/docs/4.17.11#sample)). It's a matter of taste whether you prefer to work with native functions like _Math.random_ or write shorter code with libraries that need to be imported.

  Remember to check the JavaScript console in your browser to look for any error messages. If your code is not working as expected you can debug it using messages via [console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) or [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

4. Adapt your example so that instead of having the words predefined in the JavaScript code, they are typed in by the user. Do this with four separate [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) inputs: one for adjectives; one for nouns; etc. You will need to give each _textarea_ a different _id_. You can access the value in most form elements (like _textarea_) using the _value_ property (a bit like the _innerHTML_ property we used before). You will need to take the string input by the user and break it into an array of words - there is a method in the [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) prototype which does this for you.

5. Extend your work to generate a poem (maybe a [haiku](https://www.poetryfoundation.org/learn/glossary-terms/haiku-or-hokku) or a [limerick](https://www.poetryfoundation.org/learn/glossary-terms/limerick)). You could also take inspiration from <https://www.poem-generator.org.uk> or <https://www.song-lyrics-generator.org.uk/>. Generate it randomly in your JavaScript. Maybe you could make the page look pretty too with good HTML and CSS.


