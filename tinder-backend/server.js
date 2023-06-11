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
      // create() is used to create a new docoument. It will take a object here(dbcard), adn its data get stored in that newly created document. This object should have all teh properties specified in the collection schema.

      // second argument to it is callback, if error is occured, err object will be passed otherwise data will be passed.

      // during the creation of document, if err is not null or undefined, it means some error had occured and that will be passed to the ffirst argument of teh callback.

      // if err is null or undefined, it means document successfuly created and passed to the second argument of callback.

      // Card.create(dbCard,(err,data)=>{
      //       if(err){
      //             res.status(500).send(err);
      //             // 500 shows internal server error
      //       }
      //       else{
      //             res.status(201).send(data);
      //             // everything is fine and we send the data
      //       }
      // })

      Card.create(dbCard)
      .then((data)=>{
            res.status(201).send(data);
      })
      .catch((error)=>{
            res.status.send(error);
      })

})

// just like find() method, create also do not accepts callback. So change it to promise.



// post() is an uploading method.

// find() methods is used to retrieve document from the mongoDB collection.

// find() also takes an object as a first arg which act as query. see below:
// find({name:"mskn"},callback)

// Above syntax is not used after the v6+ versions of mongo.

// now, find method returns a Query object

app.get("/tinder/cards", (req,res)=>{
      
      // Card.find({},(err,data)=>{
      //   // The data parameter, or commonly named result, holds the retrieved data from the query. This will typically be an array of documents matching the specified conditions. You can access and work with this data within the callback function.
      //   if (err) {
      //     res.status(500).send(err);
      //   } else {
      //     res.status(200).send(data);
      //   }
      // });
      
      // Above syntax of find() method is outdated.

      Card.find({}).then((result)=>{
            res.status(200).send(result);
      })
      .catch((error)=>{
            res.status(500).send(error);
      })
});


// learn about POSTMAN API more.

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

// Now make database schema in other file. it is dbCards.js file.


// You can notice that every time when you run your server, you get error that IP address is not allowed to access the database even if you had added the IP last time. This is so bcoz application hosted on a cloud service or platform, IP address of application server changes dynamically.

