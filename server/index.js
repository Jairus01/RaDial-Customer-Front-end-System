const express = require("express");
// const db = require("./test_mongoose.js");
const db = require("./user_mongoose.js");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// add this to allow headers, then see app.get() don there, there's a new console.log
// remember to refresh nodejs :-)
app.use( (request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "DELETE, PUT, POST, PUT"); // just put in everything
	next();
} );

// app.get("/", (request, response) => {
	// console.log("Hello, database => angular app (GET)");
    // db.list().then( d => {
        // response.send( {data: d} );
    // } ).catch( err => {
        // response.send(err);
    // } );
// });

app.get("/full_cv_details", (request, response) => {
	console.log("GET: full cv details");
	// list => sth else
    db.listFullCV().then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});

app.get("/partial_cv_details", (request, response) => {
	console.log("GET: partial cv details");
	// list => sth else
    db.listPartialCVData().then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});

app.post("/", (request, response) => {
	console.log("Hello, database => angular app (POST)");
    newData = request.body; // this is the data from the POST request, .body will give the actual data ie without headers
    // we're using json by default
    db.save(newData).then( d => {
        response.send( {data: d} );
    } ).catch( err => {
        response.send(err);
    } );
});

app.delete("/", (request, response) => {
	console.log("Hello, database => angular app (DELETE)");
    let id = request.query["id"]; // parameter "id"
	console.log( id );
    db.delete(id).then( d => {
		console.log( d );
        // response.send(id + " has been deleted");
		response.send( {data:d} );
    } ).catch ( err => {
        response.send( err );
    } );
});

// this part is modified to create the communnication between the server and the client
// after this part is done, go back to modify books.component.ts as that's the page that is connecting to the db
app.put("/", (request, response) => {
	console.log("Hello, database => angular app (PUT)");
	let id = request.query["id"]; // from the url, this is the parameter
	let data = request.body; // actual data, pure json
	
	if ( id == undefined ) {
		response.send("Something's wrong with your id");
	} else {
		db.update(id, data).then( d => {
			response.send( {data: d} );
		} ).catch( err => {
			response.send(err);
		} );
	}
});

// app.listen(10565, () => {
    // console.log("Listening at port 10565...");
// });

app.listen( 8888, () => {
	console.log("Listening at port 8888...");
} );