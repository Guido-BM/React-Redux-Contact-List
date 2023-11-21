import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ContactView = () => {
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contact);
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Contact Info</h1>
      <h2>
        {state.firstName} {state.lastName}
      </h2>
      <h2>{state.contactType}</h2>
      <h2>{state.email}</h2>
      <h2>{state.phone}</h2>
      <h2>{state.notes}</h2>
      <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
    </div>
  );
};
export default ContactView;
