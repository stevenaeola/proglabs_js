# Practical: Testing APIs with Postman and jest

## Aims

* Understanding different methods of testing
* Manual testing with Postman
* Automated unit testing with jest
* Based on the [lecture]
* This is for server-side testing only. Client-side testing is more complicated and beyond the scope of the module (and the assignment)

## Tasks


1. Choose an API you are interested in at <https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/> or <https://apipheny.io/free-api/>. Check that it works if you follow the link!

2. Choose a REST GET method from the API and test it my forming a URL that you can type directly into the browser

3. Register at <https://www.postman.com/> and look at the [documentation](https://learning.postman.com/docs/introduction/overview/). You can choose to install the desktop app on your own machine if you
wish, but it's often simpler to use the [web app](https://learning.postman.com/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app). You will also have to install the [Postman Desktop Agent](https://learning.postman.com/docs/getting-started/basics/about-postman-agent/#postman-desktop-agent) for full access, particularly if you want to test your own code. 
If you need to run the Postman agent but can't install it, try the [Postman Cloud Agent](https://learning.postman.com/docs/getting-started/basics/about-postman-agent/)

4. Create a Collection in Postman and within it create the same GET request you made in the browswer

5. If the API you are using has a POST method then try writing a postman request for it. You will have to take care to match the encoding of variables in the body. In the [lecture][] we had a JSON-encoded raw body.

If your API does not have a POST method then try creating a temporary one via <https://www.postb.in/>. Semd that a POST method via POSTMAN.

6. Within a node project [install jest](https://jestjs.io/docs/getting-started). Then create and run one or more jest tests for the GET method(s) in the API you have chosen. Follow the example in the [lecture][] - you will need to install the `supertest` package. Include a test for what happens when things go wrong e.g. a malformed request or a wrong url.

[lecture]: https://github.com/stevenaeola/proglectures_js/blob/main/nodejs_testing/README.md

