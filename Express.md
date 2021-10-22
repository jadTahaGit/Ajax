<!-- Steps to create an Express aplication -->

npm install express
npm install express-generator -g
express jadProject
npm install
SET DEBUG=helloworld:\* | npm start

<!-- Express is on deufult on 3000 -->

                                          Internet & Web
                                        -----------------

## What is Internet? How does it work?

https://www.youtube.com/watch?v=7_LPdttKXPc

## Internet & Web:

As you might notice, when we browse the Web with a Web browser, we usually use the domain name to reach a website. Does that mean the Internet and the Web are the same thing? It's not that simple. As we saw, the Internet is a technical infrastructure which allows billions of computers to be connected all together. Among those computers, some computers (called Web servers) can send messages intelligible to web browsers. The Internet is an infrastructure, whereas the Web is a service built on top of the infrastructure. It is worth noting there are several other services built on top of the Internet, such as email and IRC.

## web page:

A document which can be displayed in a web browser such as Firefox, Google Chrome, Opera, Microsoft Internet Explorer or Edge, or Apple's Safari. These are also often called just "pages."
website
A collection of web pages which are grouped together and usually connected together in various ways. Often called a "web site" or a "site."
web server
A computer that hosts a website on the Internet.
search engine
A web service that helps you find other web pages, such as Google, Bing, Yahoo, or DuckDuckGo. Search engines are normally accessed through a web browser (e.g. you can perform search engine searches directly in the address bar of Firefox, Chrome, etc.) or through a web page (e.g. bing.com or duckduckgo.com).

## Hypertext Transfer Protocol (HTTP):

is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

---

                                            Server-side website programming:
                                            ---------------------------------

## Hosting files

First, a web server has to store the website's files, namely all HTML documents and their related assets, including images, CSS stylesheets, JavaScript files, fonts, and video.
Technically, you could host all those files on your own computer, but it's far more convenient to store files all on a dedicated web server because:
A dedicated web server is typically more available. (up and running)
Excluding downtime and systems troubles, a dedicated web server is always connected to the Internet.
A dedicated web server can have the same IP address all the time. This is known as a dedicated IP address. (not all ISPs provide a fixed IP address for home lines)
A dedicated web server is typically maintained by a third-party.
For all these reasons, finding a good hosting provider is a key part of building your website. Examine the various services companies offer. Choose one that fits your needs and budget. (Services range from free to thousands of dollars per month.)

## Host on your own Laptop:

https://makeawebsitehub.com/host-website-computer/

## Differene betweeen static & dynamic sites:

https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## Node:

With Node you can create a web server that listens for any kind of HTTP request on the URL http://127.0.0.1:8000/ — when a request is received, the script will respond with the string: "Hello World".
The code for that will be in HalloNode.js(Just to keep it up as a reference).

## Web Frameworks

Other common web-development tasks are not directly supported by Node itself. If you want to add specific handling for different HTTP verbs (e.g. GET, POST, DELETE, etc.), separately handle requests at different URL paths ("routes"), serve static files, or use templates to dynamically create the response, Node won't be of much use on its own. You will either need to write the code yourself, or you can avoid reinventing the wheel and use a web framework!

## Web Frameworks build on express:

https://expressjs.com/en/resources/frameworks.html

---

                                                       Express
                                                -------------------------

## Express

Write handlers for requests with different HTTP verbs at different URL paths (routes).
Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
Add additional request processing "middleware" at any point within the request handling pipeline.

## Express is minimalist (-> Middlewares)

While Express itself is fairly minimalist, developers have created compatible middleware packages to address almost any web development problem. There are libraries to work with cookies, sessions, user logins, URL parameters, POST data, security headers, and many more. You can find a list of middleware packages maintained by the Express team at Express Middleware (along with a list of some popular 3rd party packages).

## The Fucking thing I am searching for:

You will want to create your own modules, because this allows you to organize your code into manageable parts — a monolithic single-file application is hard to understand and maintain. Using modules also helps you manage your namespace, because only the variables you explicitly export are imported when you use a module.

## Using asynchronous APIs

setTimeout(function() {
console.log('First');
}, 3000);
console.log('Second');

## Using non-blocking asynchronous APIs is even more important on Node than in the browser because Node is a single-threaded event-driven execution environment. "Single threaded" means that all requests to the server are run on the same thread (rather than being spawned off into separate processes). This model is extremely efficient in terms of speed and server resources, but it does mean that if any of your functions call synchronous methods that take a long time to complete, they will block not just the current request, but every other request being handled by your web application.

## callback hell:

Using callbacks can be quite "messy" if you have a sequence of dependent asynchronous operations that must be performed in order because this results in multiple levels of nested callbacks. This problem is commonly known as "callback hell". This problem can be reduced by good coding practices (see http://callbackhell.com/), using a module like async, or even moving to ES6 features like Promises.

## Promises vs Lazy Evaluated Objects:

Both promises and "lazily evaluated objects" are forms of proxies. Proxy is the key word here. A proxy means "a placeholder for an actual object value"
A promise is a time constrained (temporal) proxy for a value. Some libraries like Kris Kowal's Q-Connection even let you proxy remote object with promises, and there is a lot of fascinating research (really!) about this use case in hostile conditions made by Mark Miller. This was actually the original motivation for promises (to deal with network latency).
A lazy evaluated object is a proxy for a value to postpone evaluation to the point you have to do it.

## Creating route handlers

In our Hello World Express example (see above), we defined a (callback) route handler function for HTTP GET requests to the site root ('/').
app.get('/', (req, res) => {
res.send('Hello World!')
});
The callback function takes a request and a response object as arguments. In this case, the method calls send() on the response to return the string "Hello World!" There are a number of other response methods for ending the request/response cycle, for example, you could call res.json() to send a JSON response or res.sendFile() to send a file. for more request functions https://expressjs.com/en/guide/routing.html#response-methods

## Other HTTP verbs as methods in the Express Aplication object:

checkout(), copy(), delete(), get(), head(), lock(), merge(), mkactivity(), mkcol(), move(), m-search(), notify(), options(), patch(), post(), purge(), put(), report(), search(), subscribe(), trace(), unlock(), unsubscribe()

## express.Router

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

## Using middleware

Middleware is used extensively in Express apps, for tasks from serving static files to error handling, to compressing HTTP responses. Whereas route functions end the HTTP request-response cycle by returning some response to the HTTP client, middleware functions typically perform some operation on the request or response and then call the next function in the "stack", which might be more middleware or a route handler. The order in which middleware is called is up to the app developer.

## Third Party Middleware:

Most apps will use third-party middleware in order to simplify common web development tasks like working with cookies, sessions, user authentication, accessing request POST and JSON data, logging, etc. You can find a list of middleware packages maintained by the Express team (which also includes other popular 3rd party packages). Other Express packages are available on the NPM package manager.
https://expressjs.com/en/resources/middleware.html

## Differene Between the Middleware and the Routehandlers:

You can write your own middleware functions, and you are likely to have to do so (if only to create error handling code). The only difference between a middleware function and a route handler callback is that middleware functions have a third argument next, which middleware functions are expected to call if they are not that which completes the request cycle (when the middleware function is called, this contains the next function that must be called).

## Serving static files

You can use the express.static middleware to serve static files, including your images, CSS and JavaScript (static() is the only middleware function that is actually part of Express). For example, you would use the line below to serve images, CSS files, and JavaScript files from a directory named 'public' at the same level as where you call node: app.use(express.static('public'));
https://expressjs.com/en/4x/api.html#express.static

## Handling errors

app.use(function(err, req, res, next) {
console.error(err.stack);
res.status(500).send('Something broke!');
});

These can return any content required, but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process!

Express comes with a built-in error handler, which takes care of any remaining errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to next() and you do not handle it in an error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.

## Using Databases:

In order to use these you have to first install the database driver using NPM. For example, to install the driver for the popular NoSQL MongoDB you would use the command:
$ npm install mongodb

//for mongodb version 3.0 and up
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/animals', function(err, client){
if(err) throw err;

let db = client.db('animals');
db.collection('mammals').find().toArray(function(err, result){
if(err) throw err;
console.log(result);
client.close();
});
});

## Using Databases via an Object Rational Mapper (ORM)

Another popular approach is to access your database indirectly, via an Object Relational Mapper ("ORM"). In this approach you define your data as "objects" or "models" and the ORM maps these through to the underlying database format. This approach has the benefit that as a developer you can continue to think in terms of JavaScript objects rather than database semantics, and that there is an obvious place to perform validation and checking of incoming data. We'll talk more about databases in a later article.

## Rendering data (views)

Template engines (referred to as "view engines" by Express) allow you to specify the structure of an output document in a template, using placeholders for data that will be filled in when a page is generated. Templates are often used to create HTML, but can also create other types of documents. Express has support for a number of template engines, and there is a useful comparison of the more popular engines here: Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More.

app.get('/', function(req, res) {
res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});

https://expressjs.com/en/4x/api.html#res.render

const express = require('express');
const path = require('path');
const app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(\_\_dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');

# File structure

Express makes no assumptions in terms of structure or what components you use. Routes, views, static files, and other application-specific logic can live in any number of files with any directory structure. While it is perfectly possible to have the whole Express application in one file, typically it makes sense to split your application into files based on function (e.g. account management, blogs, discussion boards) and architectural problem domain (e.g. model, view or controller if you happen to be using an MVC architecture).

In a later topic we'll use the Express Application Generator, which creates a modular app skeleton that we can easily extend for creating web applications.
