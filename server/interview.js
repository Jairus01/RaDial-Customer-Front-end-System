const mongoose = require('mongoose')

const Schedule = mongoose.Schema({
    name: String,
    date: String,
    startTime: String,
    endTime: String
})

const mSchedule = mongoose.model('Schedule',Schedule)

async function connect(){
    await mongoose.connect('mongodb://localhost:27017/testdb')
}

connect().then(()=>{
    console.log('schedule CONNECTED!!!')
}).catch(err=>{
    console.error(err)
})

module.exports = {
    list: ()=>{
        return new Promise((resolve,reject)=>{
            mSchedule.find({}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    load: (key)=>{
        return new Promise((resolve,reject)=>{
            mSchedule.findOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newSchedule = new mSchedule(data)
            newSchedule.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    delete: (key)=>{
        return new Promise((resolve,reject)=>{
            mSchedule.deleteOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
        
    },
    update: (key,newdata)=>{
        return new Promise((resolve,reject)=>{
            mSchedule.updateOne({_id:key},newdata).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}