const mongoose = require("mongoose");

const applicant_structure = mongoose.Schema({
	name: String,
	cv_path: String,
	photo: String,
	expertise: String,
	education_level: String,
	personality: String,
	working_experience: String,
});

const applicant_model = mongoose.model("Applicants", applicant_structure);

async function connect() {
	await mongoose.connect("mongodb://127.0.0.1:27017/job_applicants");
}

connect().then( () => {
	console.log("Connected to db for Rajang Web App :)");
} ).catch( error => {
	console.err( error );
} );

module.exports = {
	// GET
	listFullCV: () => {
		return new Promise( (resolve, reject) => {
			applicant_model.find( {} ).then( data => {
				resolve(data);
			} ).catch( error => {
				reject( error );
			} );
		} );
	},
	listPartialCVData: () => {
		return new Promise( (resolve, reject) => {
			applicant_model.find( {} ).then( data => {
				resolve(data);
			} ).catch( error => {
				reject( error );
			} );
		} );
	},
	
	// POST, add data
	save: (data) => {
		return new Promise( (resolve, reject) => {
			let job_applicant = new applicant_model(data);
			job_applicant.save().then( data => {
				resolve( data );
			} ).catch( error => {
				reject( error );
			} );
		} );
	}
	
};