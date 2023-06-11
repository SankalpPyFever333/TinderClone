import axios from 'axios';
// Axios is a popular JavaScript library that is used to make HTTP requests from a web browser or Node.js. It provides a simple and intuitive API for sending HTTP requests and handling responses.

const instance = axios.create({
      baseURL:"http://localhost:8001"
})

// That baseURL is prepend with every url. 

// axios.create() is used to create axios instance with default setting like base URL, default header etc.
// default header are sent with every request made. common usecase is giving: 
// "Content-type":"application/json"
// you can give other values to it based on type of content you want to send.


export default instance;


