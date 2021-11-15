const db = require("../models");
const Subscribe = db.subscribe;

exports.create_Subscribe = (req, res) => {
  const subscribe = new Subscribe({
    service_name:req.body.service_name,
    start_date:req.body.start_date,
    end_date:req.body.end_date,
    user_id:req.body.user_id,
  });

  subscribe.save(err => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.send({ message: "Subscribe was added successfully!" });
  });
};
exports.list_Subscribe = (req, res) => {
    const service_name = req.query.service_name;
    var condition = service_name ? { service_name: { $regex: new RegExp(service_name), $options: "i" } } : {};
  
    Subscribe.find(condition)
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
  