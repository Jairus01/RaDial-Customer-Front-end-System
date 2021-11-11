const { response } = require('express')
const express = require('express')
const { get } = require('mongoose')
const dbinterview = require('./interview')
const dbservice = require('./services')
const dbsubscribe = require('./subscribe')
const dbschedule = require('./schedule')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/service',(req,res) =>{
   dbservice.list().then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/service/:id',(req,res) =>{
    let id = req.params['id']
    dbservice.load(id).then(d=>{
         res.send({data:d})
     }).catch(err=>{
         res.send(err)
     })
 })
app.post('/service', (req,res)=>{
    newData = req.body
    dbservice.save(newData).then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.delete('/service',(req,res)=>{
    let id = req.query['id']
    dbservice.delete(id).then(d=>{
        res.send({data:d})
    }).catch(err =>{
        res.send(err)
    })
})
app.put('/service',(req,res)=>{
    let id = req.query['id']
    let data = req.body
    if(id== undefined) {
        res.send('bad id')
    }
    else { 
        dbservice.update(id,data).then(data=>{
            res.send(d)
        }).catch(er=>{
            res.send(err)
        })
    }
})
app.listen(8888,()=>{
    console.log('I am listening at port 8888')
})

app.get('/interview',(req,res) =>{
    dbinterview.list().then(d=>{
         res.send({data:d})
     }).catch(err=>{
         res.send(err)
     })
 })
 app.post('/interview', (req,res)=>{
     newData = req.body
     dbinterview.save(newData).then(d=>{
         res.send({data:d})
     }).catch(err=>{
         res.send(err)
     })
 })
 app.delete('/interview/',(req,res)=>{
     let id = req.query['id']
     dbinterview.delete(id).then(d=>{
         res.send({data:d})
     }).catch(err =>{
         res.send(err)
     })
 
 })
 app.get('/interview/:id',(req,res) =>{
    let id = req.params['id']
    dbinterview.load(id).then(d=>{
         res.send({data:d})
     }).catch(err=>{
         res.send(err)
     })
 })
 app.put('/interview/:id',(req,res)=>{
    let id = req.query['id']
    let data = req.body
    if(id== undefined) {
        res.send('bad id')
    }
    else { 
        dbinterview.update(id,data).then(data=>{
            res.send(d)
        }).catch(er=>{
            res.send(err)
        })
    }
})
 app.post('/subscribe', (req,res)=>{
    newData = req.body
    dbsubscribe.save(newData).then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
/********** */
app.post('/schedule', (req,res)=>{
    newData = req.body
    dbschedule.save(newData).then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/schedule',(req,res) =>{
    dbschedule.list().then(d=>{
         res.send({data:d})
     }).catch(err=>{
         res.send(err)
     })
 })