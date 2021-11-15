const controller = require("../controllers/subscribe.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.post("/api/subscribe",controller.create_Subscribe); 
  app.get("/api/subscribe",controller.list_Subscribe);
 



 };
