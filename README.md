# Step 1 

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

# Step 2

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

