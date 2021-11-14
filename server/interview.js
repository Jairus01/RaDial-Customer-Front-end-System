const mongoose = require('mongoose')

const Schedule = mongoose.Schema({
    name: String,
    groupid: String,
    phone : String
})

const mSchedule = mongoose.model('interview',Schedule)

async function connect(){
    await mongoose.connect('mongodb://localhost:27017/testdb')
}

connect().then(()=>{
    console.log('interview CONNECTED!!!')
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
            mSchedule.find({groupid:key}).then(data=>{
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