## Setting up the development environment ##

This project uses [gulp](http://gulpjs.com) and other
[npm](https://www.npmjs.com) tools to build the source files into html, css,
javascript, and all the other components components required to run the
Shadowrun tools. Some of the gulp plugins rely on Ruby gems, and this project
uses bundler to manage them. You'll also need to have Ruby and
[bundler](http://bundler.io) installed. If you don't already have npm and
gulp installed, please follow the instructions at their respective websites.

Once you have npm and bundler installed, you can do the following to pull down
all the development dependencies.
1. `npm update --dev`
2. `bundle install`

## Building and checking sources ##

### Source types ###
The gulpfile provides one task for each type of source transformation it
performs.

- `sass`: transforms SASS sources into css outputs
- `jsx`: transforms React source files into Javascript, including limited
transforms from ES6 into ES5 for browser compatibility.

### Task actions ###
Each of source types provides a subset of the following actions, which are
appended to the task name, separated with a single colon.

- `compile`: performs the transformation
- `lint`: lints the source files
- `test`: runs any tests on the source (and possibly the output) files

Each of the actions is also provided as a task of its own that performs the
action on all source types.

### Global tasks ###
There are some actions that are larger in scope. These are given their own
task.

- `build`: compiles and checks all of the source types

### Watching ###
Almost every task (including tasks paired with an action) can be appended with
`:watch` to run the task whenever its sources change.
