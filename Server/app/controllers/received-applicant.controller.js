const db = require("../models");
const receivedApplicant = db.applicant;

exports.create_Applicant = (req, res) => {
  const applicant = new receivedApplicant({
    name: req.body.name,
    position_applied: req.body.position_applied
  });

   applicant.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Received application was added successfully!" });
  });
};
exports.findAll_Applicant = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    receivedApplicant.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


  