const ContactController = require("../controllers/contact.controller.js");
module.exports = (app) => {
  app.post("/api/contact", ContactController.createContact);
  app.get("/api/contact", ContactController.getAllContacts);
  app.get("/api/contact/:id", ContactController.getOneContact);
  app.patch("/api/contact/:id", ContactController.updateContact);
  app.delete("/api/contact/:id", ContactController.deleteContact);
};
