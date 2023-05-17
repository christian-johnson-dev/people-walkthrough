const ContactController = require("../controllers/contact.controller.js");
module.exports = (app) => {
  app.get("/api", ContactController.index);
  app.post("/api/contact", ContactController.createContact);
};
