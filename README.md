# Introduction

> :warning: ** This project is just a skeleton or guide for some parts of the workshop. ** Please refer to your implementation or correction to have full support nd syntax

# Part 1

## Step 1 

You can use express generator to create the projet.
Express generator can app templating or other advanced features in the project (like the Router, which is very useful) 
But using express manually is ok too as we have a very small app to create for now. It can also show you how to build elements from scratch. 

1) From scratch
```
mkdir ws1_app
cd ws1_app
npm i express
```
Créer un fichier app.js pour initialiser le serveur http via express.

Créer la commande start dans le package.json

```
npm run start
```

1 bis) With Express generator
```
npm install -g express-generator
express --no-view ws1_app
cd ws1_app
npm i
npm run start
```

## Step 2 to 7

Install nodemon in order to have automatic reload

```
npm i --save-dev nodemon
```

> :warning: ** nodemon doesnt support ES6 modules from scratch **

ES6 is not yet supported by nodemon runtime by default (ESModules supported since node 14). You can integrate it like this to nodemon:

```
npm i esm && npm i -D nodemon
```

In your package.json, add this to scripts:

```
"start:dev": "nodemon -r esm app.js"
```

Create a sensors.js file in order to put all controller logic. Create your route inside using Express Router object.

Load routing from sensors.js in your app.js main file

> :warning: **if you generate your project from scratch, dont forget to use body parser middleware to allow node to ready body correctly for your json post request ** (see http://expressjs.com/en/resources/middleware/body-parser.html)


# Part 2

We use mongoose to create MongoDB schema models to use in our app.
If we don't need schema models, we can use a simple MongoDB JS driver.
If we want to use a relationnal database we can use another ORM (Sequelize, Loopback DATA API, etc..)

Create a .env file to store your config
```
npm install dotenv
```


With Moongoose:
How to synchronize js object models with schema data models? (see https://hackernoon.com/how-to-link-mongoose-and-typescript-for-a-single-source-of-truth-94o3uqc)


# Part 3 

If you start a project from scratch, you can use **  typescript-node-starter i ** (see https://github.com/microsoft/TypeScript-Node-Starter#getting-started)

Otherwise you can install typescript manually

Then you can rename files with .ts extension

When importing your modules, dont sepecify the file extension, allowing js or compiler to load the correct file automaatically

Use @types packages for all the libraries in your package.json. Most of the libraries out there support TS, and in this process I suggest migrating them one by one (by just adding @types/<package_name> in your package.json file).

Add a typescript config file, which can be created using the tsc --init command in you CLI.

resource: https://www.freecodecamp.org/news/how-to-add-typescript-to-a-javascript-project/