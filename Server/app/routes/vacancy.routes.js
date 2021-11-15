const controller = require("../controllers/vacancy.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.post("/api/vacancy",controller.create_Vacancy); 
  app.get("/api/vacancy",controller.findAll_Vacancy); 
  app.get("/api/vacancy/:id",controller.findbyOwner); 


 };
