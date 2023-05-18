import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactsList = (props) => {
  const { allContacts, setAllContacts } = props;
  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:8000/api/contact/${id}`)
      .then((response) => {
        console.log("Response: ", response);
        setAllContacts(allContacts.filter((contact) => contact._id !== id));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/contact")
      .then((response) => {
        console.log("Response: ", response);
        setAllContacts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>All Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.allContacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>
                {" "}
                <Link to={`/contact/${contact._id}`}>Details</Link> |{" "}
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link> |{" "}
                <span
                  onClick={(event) => {
                    deleteContact(contact._id);
                  }}
                >
                  Delete
                </span>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
