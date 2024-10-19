import React from "react";
import PropTypes from "prop-types";

const ContactPerson = ({ name, position, phone, email }) => {
  return (
    <div className='contact-person'>
      <p className='contact-name'>{name}</p>
      <p className='contact-position'>{position}</p>
      <p className='contact-phone'>Телефон: {phone}</p>
      <p className='contact-email'>Email: {email}</p>
    </div>
  );
};

ContactPerson.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactPerson;
