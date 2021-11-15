const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8889"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
});

const db2 = require('./mongoose-schema')

app.get('/api/received-applicant2',(req,res)=>{
  console.log('hi someone accessed me received applicant')
  db2.listReceivedApplicant().then(d=>{
      res.send({data:d})
  }).catch(err=>{
      res.send(err)
  })
})

app.post('/api/interview-schedule', (req,res)=>{
  console.log('someone saving data interview')
  newData = req.body
  console.log(newData)

  db2.saveInterviewSchedule(newData).then(d=>{
      res.send({data:d})
  }).catch(err=>{
      res.send(err)
  })
})

app.get("/full_cv_details", (request, response) => {
	console.log("GET: full cv details");
	// list => sth else
    db2.listFullCV().then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});

app.get("/full_cv_details_limit", (request, response) => {
	let n = request.query["n"];
	console.log("GET: full cv details with limit of " + n);
    db2.listFullCV_limit( n ).then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});

app.get("/partial_cv_details", (request, response) => {
	console.log("GET: partial cv details");
	// list => sth else
    db2.listPartialCVData().then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});



app.get('/schedule',(req,res) =>{
  db2.listSchedule().then(d=>{
       res.send({data:d})
   }).catch(err=>{
       res.send(err)
   })
})

app.post('/schedule', (req,res)=>{
  newData = req.body
  db2.saveSchedule(newData).then(d=>{
      res.send({data:d})
  }).catch(err=>{
      res.send(err)
  })
})






// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/received-applicant.routes")(app);
require("./app/routes/vacancy.routes")(app);
require("./app/routes/subscribe.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
