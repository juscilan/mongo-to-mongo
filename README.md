# mongo-to-mongo

## Using Node.js as NPM - Transfer MongoDB data


```
>npm i mongo-to-mongo --save

or

>yarn add mongo-to-mongo --save
```

```
>mongod
```

### Usage

```
'use strict'

const mtm = require('mongo-to-mongo')

const   dbs =  {
    dbFrom     :"mongodb://localhost/origin",
    dbTo       :"mongodb://localhost/destiny",
    flDrop     :"-d"
}

mtm.clone(dbs)
```

## Using  Using Nodejs REPL - Transfer MongoDB data

```
>npm install 
```

### or

```
>yarn install
```

### Run Mongod (localhost):

```
Run local mongod: 
>mongod
```


### Call in REPL (arguments):

```
>node app mongodb://localhost/origin mongodb://localhost/destiny
```

### or Call in REPL (arguments) and drop collections database destiny flag -d:

```
>node app mongodb://localhost/origin mongodb://localhost/destiny -d
```

### Test (Mocha)

```
>npm test
```

### System requeriments

Node version 7.6.0 +

MongoDB shell version: 3.0.7

MongoDB version v3.0.7



[juscilan.com](http://juscilan.com)






