const mongoose = require('mongoose')

const sInterview = mongoose.Schema({
    applicantName: String,
    date: Date,
    startTime: String,
    endTime: String,
})

const sReceivedApplicant = mongoose.Schema({
    name: String,
    applyFor: String
})


const mFlower = mongoose.model('Interview-Schedules',sInterview)
const mReceivedApplicant = mongoose.model('Received-applicants',sReceivedApplicant)

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Radial-Blue-Collar-Server')
    console.log('yay connected')
}

connect().then(()=>{
    console.log('CONNECTED!!')
}).catch(err=>{
    console.error(err)
})

module.exports = {
    list: ()=>{
        return new Promise((success,fail)=>{
            mFlower.find({}).then(data=>{
                success(data)
            }).catch(err=>{
                fail(err)
            })
        })
    },
    listReceivedApplicant: ()=>{
        return new Promise((success,fail)=>{
            mReceivedApplicant.find({}).then(data=>{
                success(data)
            }).catch(err=>{
                fail(err)
            })
        })
    },
    listx: ()=>{
        let data = [{data:'nodata'}]
        mFlower.find({}).then(d=>{
            data = d
        }).catch(err=>{
            return err
        })
        return data
    },
    load: (key)=>{},
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newFlower = new mFlower(data)
            newFlower.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    delete: (key)=>{
        return new Promise((resolve,reject)=>{
            mFlower.deleteOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
        
    },
    update: (key,newdata)=>{
        return new Promise((resolve,reject)=>{
            mFlower.updateOne({_id:key},newdata).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}