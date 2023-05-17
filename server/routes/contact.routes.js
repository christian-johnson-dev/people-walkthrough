const ContactController = require("../controllers/contact.controller");
module.exports = (app) => {
  app.get("/api", ContactController.index);
};
