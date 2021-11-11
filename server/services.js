const mongoose = require('mongoose')

const sService = mongoose.Schema({
    service: String,
    price: Number,
    description: String
})

const mService = mongoose.model('Service',sService)

async function connect(){
    await mongoose.connect('mongodb://localhost:27017/testdb')
}

connect().then(()=>{
    console.log('service CONNECTED!!!')
}).catch(err=>{
    console.error(err)
})

module.exports = {
    list: ()=>{
        return new Promise((resolve,reject)=>{
            mService.find({}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    load: (key)=>{
        return new Promise((resolve,reject)=>{
            mService.findOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newService = new mService(data)
            newService.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    delete: (key)=>{
        return new Promise((resolve,reject)=>{
            mService.deleteOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    update: (key,newdata)=>{
        return new Promise((resolve,reject)=>{
            mService.updateOne({_id:key},newdata).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}