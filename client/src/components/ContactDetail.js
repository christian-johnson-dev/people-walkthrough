import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const ContactDetails = (props) => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/contact/${id}`)
      .then((response) => {
        console.log("Response: ", response);
        setContact(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Contact Details</h2>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export default ContactDetails;
