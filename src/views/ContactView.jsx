import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/AuthReducers";

const ContactView = () => {
  let { state } = useLocation();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = React.useState(state.firstName);
  const [lastName, setLastName] = React.useState(state.lastName);
  const [contactType, setContactType] = React.useState(state.contactType);
  const [email, setEmail] = React.useState(state.email);
  const [phone, setPhone] = React.useState(state.phone);
  const [notes, setNotes] = React.useState(state.notes);
  const [id, setId] = React.useState(state.id);
  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => {
    dispatch(
      editContact({
        id: state.id,
        firstName,
        lastName,
        contactType,
        email,
        phone,
        notes,
      })
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        alignItems: "center",
        justifyItems: "start",
      }}
    >
      <h1>Contact Info</h1>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        disabled={!edit}
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        disabled={!edit}
      />
      <input
        value={contactType}
        onChange={(e) => setContactType(e.target.value)}
        disabled={!edit}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={!edit}
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={!edit}
      />
      <input
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        disabled={!edit}
      />
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        disabled={!edit}
      />
      <button onClick={() => setEdit(true)}>Edit</button>
      <button
        onClick={() => {
          handleEdit();
          setEdit(false);
        }}
      >
        Save Changes
      </button>
      <Link to="/">Home</Link>
      <br />
      <Link to="/AddContact">Add Contact</Link>
      <br />
      <Link to="/ContactList">Contact List</Link>
    </div>
  );
};
export default ContactView;
