import { useState } from "react";
import axios from "axios";
const ContactForm = (props) => {
  const { allContacts, setAllContacts } = props;

  //*--- useState hooks ---*//
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //*--- event handlers ---*//
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/contact", {
        firstName,
        lastName,
      })
      .then(
        (response) => {
          console.log("Response: ", response);
          setAllContacts([...allContacts, response.data]);
        },
        setFirstName(""),
        setLastName("")
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default ContactForm;
