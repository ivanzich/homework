<<<<<<< HEAD
#SF-WDI-26 Homework submission

Homework will be turned in to your fork of this repository daily.

##Setup

To set up your initial homework repository do the following:

* fork this repo to create a copy of it on your github account
* clone the forked repo from your github account onto your computer inside your `dev/` directory
* `cd` into the newly cloned repo on your computer
* `mkdir **GIT-USER-NAME**`
* `cd **GIT-USER-NAME**`
* `echo "#**YOUR NAME**'s Homework repo" > README.md` to set up your repo's README
* `git add -A` to stage your changes
* `git commit -m "inital commit"` to have git save your changes
* `git push origin master` to put your changes up on github!

**GIT-USER-NAME** should be replaced with your actual git user name (must be exact)

**YOUR NAME** should be your actual name.



##Submit homework

Each day you will submit your homework by doing the following from within your homework repo on your computer:

* copy any required files into your homework repo directory as instructed in homework writeup
* `git add -A` to stage all your changes
* `git commit -m "homework commit"` to have git save the changes -- feel free to add to the commit message if you'd like
* `git push origin master` to put the changes up on github
* go to your homework repo's page on your account on github.com
* create a pull request according to the guidelines below

####Pull request details

(Must be in this format)

**Title:** `w##d##`

Replace ## with week and day number (eg w01d02  = homework for week 1 day 2)

**Message:**

```
comfort: #
completeness: #

Message about your experience goes here
```

Replace the `#`s next to comfort and completness with a number (1 - 5) to represent how comfortable you are with the topic and how much of the assignment you were able to complete.  A 1 is the lowest (least comfortable / very little complete), and a 5 is the highest (most comfortable / fully complete).
=======
# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Todo App - Test Driven RESTful JSON API

By the end of the challenges, **you should have:**
  * A JSON API with a full set of RESTful routes, so you can CRUD (and search!):
      - _Create_ a new todo (`todos#create`)
      - _Read_/fetch a list of todos (`todos#index`)
      - _Read_/fetch a specific todo by id (`todos#show`)
      - _Update_ a specific todo by id (`todos#update`)
      - _Delete_ a specific todo by id (`todos#destroy`)
      - Bonus: Search for todos by title (`todos#search`)

## Getting Started

1. Fork this repo, and clone it into your `dev` folder on your local machine.
2. Follow the instructions to setup your test suite (below)
3. Run the tests, and try to make the _red_ (failing) tests turn _green_ (passing). Then move on to bonuses.

## Test Driven Development (TDD)
For this challenge, we'll be testing our JSON API using a testing framework called [Mocha](http://mochajs.org/) and assertion library called [Chai](http://chaijs.com/).

The tests have already been written for us! Our goal is to try to understand the **test output** so that we can write _server-side code_ that will make the *red* (failing) tests turn *green* (passing).

The tests will help guide our development process, and keep us focused on our end goal: a RESTful, full-CRUD, JSON API.

#### Test Setup
From inside your cloned directory, run:

``` bash
npm install -g mocha    # globally install the mocha test framework
npm install             # download package.json dependencies for this project
```

Next, run your server:
``` bash
node server.js
# or better yet
nodemon server.js
# or just
nodemon
```

Finally, _open a new teminal tab/window_, and run the test suite (you'll need to switch back and forth between your server output and your test output a lot):
``` bash
mocha test/todosTest.js
# or just
mocha
```

> Your server _must_ be running in order for the Mocha tests to be able to make API requests to your API endpoints.

By the end of this assignment you'll hopefully see this glorious output:

    Todos API
      GET /api/todos (index)
        ✓ should respond with status 200 - Success
        ✓ should respond with a JSON object
        ✓ should respond with a JSON object containing a list of todos
        ✓ todo objects should have properities: _id, description, task
      GET /api/todos/:id (show)
        ✓ should respond with status 200 - Success
        ✓ should respond with JSON
        ✓ should fetch one specific todo by _id
      POST /api/todos (create)
        ✓ should respond with status 200 - Success
        ✓ should respond with JSON
        ✓ should respond with the new todo object
        ✓ should assign an _id to the new todo object
      DELETE /api/todos/:id (destroy)
        ✓ should respond with 200 or 204 on success
        ✓ should delete one specific todo from the list of todos
      PUT /api/todos/:id (update)
        ✓ should respond with status 200 - Success
        ✓ should respond with JSON
        ✓ should update the fields on one specific todo
      GET /api/todos/search (search)
        ✓ should list all todos that contain the search term in their title

But for starters you'll see output that looks like this:

    0 passing (84ms)
    9 failing

    1) Todos API GET /api/todos (index) should respond with status 200:

        Uncaught AssertionError: expected 404 to equal 200
        + expected - actual

        -404
        +200

> You can think of each failing test as being like a trail of breadcrumbs. If you pay close attention to the error messages, it should give you a clue about what to do next!

Why is the server responding with status `404 - Not Found` when we try to `GET /api/todos`?

Take a look at `server.js` and see if you can figure it out!

## Bonuses
1. Build a way for a user to search for todos. You'll need:
    * A new html page called `views/search.html` that's served from your application.
        * Make sure to connect it to `styles/main.css` and `scripts/main.js`!
    * Can you consume the `/api/search` endpoint and display search results on the page? Can you get it to work with queries the user enters into an input field?

2. Build a way for a user to mark a todo as "done". You'll need:
  * A styling change on the client to indicate the todo is "done" (this should be persistent if the user refreshes the page)
  * A request (AJAX) to mark the todo as done (update it) on the server

## Submission

* As you make code changes, commit frequently and push to GitHub.
* Submit this lab as a pull request from your fork to the original repo.
>>>>>>> 405abad87cf6206125970ce5154306b46716b17c
