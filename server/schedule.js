const mongoose = require('mongoose')

const group = mongoose.Schema({
    date: String,
    morningTime: String,
    afternoonTime: String
})

const sgroup = mongoose.model('ScheduleGroup',group)

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
            sgroup.find({}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    load: (key)=>{
        return new Promise((resolve,reject)=>{
            sgroup.findOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newService = new sgroup(data)
            newService.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
}