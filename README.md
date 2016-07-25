## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Gulp - Gulp is used to build the project and automate project tasks.

```bash
$ npm install gulp -g
```

* Grunt - (Optional) You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process.

```bash
$ npm install -g grunt-cli
```

## Downloading School-Management-System

### Cloning The GitHub Repository
The recommended way to get MEAN.js is to use git to directly clone the School-Management-System repository:

```bash
$ git clone https://github.com/NitinSatpal/School-Management-System.git
```


### Downloading The Repository Zip File
Another way is to download a zip copy. You can also do this using the `wget` command:


## Quick Install
Once you've downloaded the School-Management-System repository and installed all the prerequisites,

The first thing you should do is install the Node.js dependencies.

To install Node.js dependencies you're going to use npm. In the application folder run this in the command-line:

```bash
$ npm install
```

This command does a few things:
* It will install the dependencies needed for the application to run.
* Finally, when the install process is over, run following command:

```bash
$ bower install
```

## Running Your Application

The MEAN.JS project integrates both Grunt and Gulp as build tools and task automation, but Grunt will be deprecated in favor of Gulp.
While you are free to use both of them directly, we have wrapped Gulp tasks with npm scripts so that regardless of the build tool running the project is transparent to you.

Run your application using grunt:
```bash
$ grunt
```

If some error comes, they can be safely ignored by running the following command:

```bash
$ grunt --force
```
