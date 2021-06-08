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

1 bis) With Express generator
```
npm install -g express-generator
express --no-view ws1_app
cd ws1_app
npm i
npm run start
```