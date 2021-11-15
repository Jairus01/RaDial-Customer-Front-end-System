const db = require("../models");
const Vacancy = db.vacancy;
const User = db.user;

exports.create_Vacancy = (req, res) => {
  const vacancy = new Vacancy({
    
    company_name: req.body.company_name,
    company_location: req.body.company_location,
    job_desc: req.body.job_desc,
    job_title: req.body.job_title,
    age: req.body.age,
    work_exp: req.body.work_exp,
    edu_level: req.body.edu_level,
    personalities: req.body.personalities,
    daily_budget: req.body.daily_budget,
    start_date:req.body.start_date,
    close_date:req.body.close_date,
    status:req.body.status,
    owner:req.body.owner,
  });

   vacancy.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Vacancy was added successfully!" });
  });
};

exports.findAll_Vacancy = (req, res) => {
    Vacancy.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vacancy."
        });
      });
  };

  exports.findbyOwner = (req, res) => {

    Vacancy.find()
      .then(data => {
        res.send(data);
       
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };  
  