import React from 'react'
import ContactUsForm from "../ContactPage/ContactUsForm"

const ContactFormSection = () => {
  return (
    <div className="mx-auto mt-9">
      <h1 className="text-center text-4xl font-semibold text-white">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-7">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-9 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};



export default ContactFormSection








