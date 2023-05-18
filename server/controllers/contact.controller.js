const Contact = require("../models/contact.model");

//*------------------ CREATE ------------------*//
module.exports.createContact = (request, response) => {
  Contact.create(request.body)
    .then((contact) => response.json(contact))
    .catch((err) => response.status(400).json(err));
};

//*------------------ READ ALL ------------------*//
module.exports.getAllContacts = (request, response) => {
  Contact.find()
    .then((contacts) => {
      response.json(contacts);
      console.log(contacts);
    })
    .catch((err) => {
      response.json(err);
      console.log(err);
    });
};

//*------------------ READ ONE ------------------*//
module.exports.getOneContact = (request, response) => {
  Contact.findById({ _id: request.params.id })
    .then((contact) => {
      response.json(contact);
      console.log(contact);
    })
    .catch((err) => {
      response.json(err);
      console.log(err);
    });
};

//*------------------ UPDATE ------------------*//
module.exports.updateContact = (request, response) => {
  Contact.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedContact) => {
      response.json(updatedContact);
      console.log(updatedContact);
    })
    .catch((err) => {
      response.status(400).json(err);
      console.log(err);
    });
};

//*------------------ DELETE ------------------*//
module.exports.deleteContact = (request, response) => {
  Contact.findByIdAndDelete({ _id: request.params.id })
    .then((deletedContact) => {
      response.json(deletedContact);
      console.log(deletedContact);
    })
    .catch((err) => {
      response.json(err);
      console.log(err);
    });
};
