import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ContactUpdate = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [contact, setContact] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/contact/${id}`)
      .then((response) => {
        console.log("Response: ", response);
        // setContact(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateContact = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:8000/api/contact/${id}`, {
        firstName,
        lastName,
      })
      .then((response) => {
        console.log("Response: ", response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={updateContact}>
        <p>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </p>
        <p>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </p>
        <button>Update Contact</button>
      </form>
    </div>
  );
};

export default ContactUpdate;
