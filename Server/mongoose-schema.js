const mongoose = require('mongoose')

const sInterviewSchedule = mongoose.Schema({
    applicantName: String,
    date: Date,
    session: String
})

const sReceivedApplicant = mongoose.Schema({
   name: String,
   applied_position: String
})

const applicant_structure = mongoose.Schema({
	name: String,
	cv_path: String,
	photo: String,
	expertise: String,
	education_level: String,
	personality: String,
	working_experience: String,
	cv_taken: Boolean
});

const group = mongoose.Schema({
    date: String,
    time: String,
    name: String,
    session: String,
    status : String
    
})

const sgroup = mongoose.model('ScheduleGroup',group)


const mInterviewSchedule = mongoose.model('Interview-Schedules',sInterviewSchedule)
const mReceivedApplicant = mongoose.model('Received-applicants',sReceivedApplicant)
const applicant_model = mongoose.model("Applicants", applicant_structure);

module.exports = {
    listReceivedApplicant: ()=>{
        return new Promise((success,fail)=>{
            mReceivedApplicant.find({}).then(data=>{
                success(data)
            }).catch(err=>{
                fail(err)
            })
        })
    },
    listInterviewSchedule: ()=>{
        return new Promise((success,fail)=>{
            mInterview.find({}).then(data=>{
                success(data)
            }).catch(err=>{
                fail(err)
            })
        })
    },
    saveInterviewSchedule: (data)=>{
        return new Promise((resolve,reject)=>{
            let newInterview = new mInterviewSchedule(data)
            newInterview.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    listFullCV: () => {
		return new Promise( (resolve, reject) => {
			applicant_model.find( {} ).then( data => {
				resolve(data);
			} ).catch( error => {
				reject( error );
			} );
		} );
	},
	listFullCV_limit: ( n ) => {
		return new Promise( (resolve, reject) => {
			applicant_model.find( {} ).limit(n).then( data => {
				resolve(data);
				console.log("Limited results to " + n);
			} ).catch( error => {
				reject( error );
			} );
		} );
	},
	listPartialCVData: () => {
		return new Promise( (resolve, reject) => {
			// applicant_model.find( {} ).select("cv_path expertise education_level personality working_experience working_experience -_id").then( data => {
			applicant_model.find( {} ).select( {
				"expertise": 1,
				"education_level": 1,
				"personality": 1,
				"working_experience": 1,
				"_id": 0,
			} ).then( data => {
				resolve(data);
			} ).catch( error => {
				reject( error );
			} );
		} );
	},


    listSchedule: ()=>{
        return new Promise((resolve,reject)=>{
            sgroup.find({}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    loadSchedule: (key)=>{
        return new Promise((resolve,reject)=>{
            sgroup.findOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    saveSchedule: (data)=>{
        return new Promise((resolve,reject)=>{
            let newGroup = new sgroup(data)
            newGroup.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    }



}