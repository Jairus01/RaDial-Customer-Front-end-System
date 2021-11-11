const mongoose = require('mongoose')

const sSubscribe = mongoose.Schema({
    company: String,
    service: String,
    startDate: String,
    endDate: String
})

const mSubscribe = mongoose.model('Subscribe',sSubscribe)

async function connect(){
    await mongoose.connect('mongodb://localhost:27017/testdb')
}

connect().then(()=>{
    console.log('subscribe CONNECTED!!!')
}).catch(err=>{
    console.error(err)
})

module.exports = {
    list: ()=>{
        return new Promise((resolve,reject)=>{
            mSubscribe.find({}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    load: (key)=>{
        return new Promise((resolve,reject)=>{
            mSubscribe.findOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newSubscribe = new mSubscribe(data)
            newSubscribe.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    delete: (key)=>{
        return new Promise((resolve,reject)=>{
            mSubscribe.deleteOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    update: (key,newdata)=>{
        return new Promise((resolve,reject)=>{
            mSubscribe.updateOne({_id:key},newdata).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}