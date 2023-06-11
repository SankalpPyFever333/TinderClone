// In package.json file, we had add the "type":"module" bcoz we want to use ES6 i.e use import instead of require() for using the module.
// added "start":"node server.js", when we run it using "npm start" , it will run the server.js which is the entry point of application.

import express from "express";
import mongoose from "mongoose";

import Card from "../tinder-backend/dbCards.js";

import Cors from 'cors';
// It is used to enable CORS for all routes  in the express application. 

// firsly , app config
// then , Middleware
// then, DB config

// then, API Endpoints
// Listener

// above steps I have to do for the backend.

// App config

const app = express();
const port = process.env.PORT || 8001
// process.env.PORT is an environment variable that is commonly used to specify the port number that the server should listen on. 

// process.env.PORT means it will go to environment variables, there it will use the PORT variable value and if value is not set, then it return undefined.

// we had used || operator, if there is undefined from the variable, then it will use 8001.


// setting connection with mongodb:

const connection_url =
  "mongodb+srv://sankalppandey696:YX25CAd9x65m1BOS@cluster0.opn7epm.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
//  app.use(express.json()) is a middleware function that is used to parse incoming JSON data. It is part of the Express.js framework and allows you to handle JSON data sent in the request body.

// When data is sent in the form json, it will parse through it and make avaialble for the route that is sent through POST method.

app.use(Cors());



// API endpoint

// get() is ued for downloading the data
app.get("/",(req,res)=>{
      res.status(200);
      res.send("Hello, we are building tinder");
});

app.post("/tinder/cards", (req,res)=>{
      const dbCard = req.body;
      // create() is used to create a new docoument. It will take a object here(dbcard), and its data get stored in that newly created document. This object should have all the properties specified in the collection schema.

      Card.create(dbCard)
      .then((data)=>{
            res.status(201).send(data);
      })
      .catch((error)=>{
            res.status.send(error);
      })

})

// find() methods is used to retrieve document from the mongoDB collection.


// find method returns a Query object

app.get("/tinder/cards", (req,res)=>{

      Card.find({}).then((result)=>{
            res.status(200).send(result);
      })
      .catch((error)=>{
            res.status(500).send(error);
      })
});

// Postman API:
      // It is a tool for developing and testing API. with this, we can create, manage and execute API request making it easier to develop and test.

      // in tetsing, it allows to test various types of request like PUT, GET, POST, DELETE etc. 




// listener:

app.listen(port,()=>{
      console.log(`listening on localhost: ${port}`);
});


// DB config:

mongoose.connect(connection_url, {
      // useNewUrl nd useCreateIndex are not supported. Don't use
      useunifiedTopology: true,
})
// connecting mongoose library with mongoDb


