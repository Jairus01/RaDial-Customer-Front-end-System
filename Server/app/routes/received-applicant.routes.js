const controller = require("../controllers/received-applicant.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.post("/api/received-applicant",controller.create_Applicant); 
  app.get("/api/received-applicant",controller.findAll_Applicant);
 



 };
