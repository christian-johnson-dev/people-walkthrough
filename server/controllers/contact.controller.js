const Contact = require("../models/contact.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

//*------------------CREATE------------------*//
module.exports.createContact = (request, response) => {
  Contact.create(request.body)
    .then((contact) => response.json(contact))
    .catch((err) => response.status(400).json(err));
};
