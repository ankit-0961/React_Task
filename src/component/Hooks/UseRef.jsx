import React, { useRef, useState } from "react";

const UseRef = () => {
  const firstNameRef = useRef(null);
  const LastNameRef = useRef(null);
  const emailRef = useRef(null);
  const PhoneRef = useRef(null);

  const [errors, setErrors] = useState({
    FirstNameErr: "",
    LastNameErr: "",
    emailErr: "",
    PhoneNumberErr: "",
  });

  const handleForm = (e) => {
    e.preventDefault();

    let FirstNameErr = "";
    let LastNameErr = "";
    let emailErr = "";
    let PhoneNumberErr = "";

    const firstName = firstNameRef.current.value.trim();
    const lastName = LastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = PhoneRef.current.value.trim();

    if (firstName.length < 3) {
      FirstNameErr = "firstname should be contain Three  char";
    }
    if (lastName.length < 1) {
      LastNameErr = "lastname should be contain one  char";
    }
    if (!email.includes("@")) {
      emailErr = "email should includes @";
    }
    if (phone.length !== 10) {
      PhoneNumberErr = "phone number  should be 10 char";
    }
    setErrors({
      FirstNameErr,
      LastNameErr,
      emailErr,
      PhoneNumberErr,
    });
  };

  // firstname should be contain 3  char
  // lastname should be greater than 1 char
  // email should be having @ in between in this sentence
  // phonenumber should be in 10 integers only

  return (
    <div>
      {/* <h2>UseRef</h2> */}
      <form action="#" onSubmit={handleForm}>
        <div className="mb-2">
          <label>FirstName</label>
          <input
            type="text"
            name="FirstName"
            ref={firstNameRef}
            className="Form control"
            placeholder="Enter FirstName"
          />
          {errors.FirstNameErr && (
            <p className="text-danger">{errors.FirstNameErr}</p>
          )}
        </div>
        <div className="mb-2">
          <label>LastName</label>
          <input
            type="text"
            name="LastName"
            ref={LastNameRef}
            placeholder="Enter LastName"
          />
          {errors.LastNameErr && (
            <p className="text-danger">{errors.LastNameErr}</p>
          )}
        </div>

        <div className="mb-2">
          <label>Email Address</label>
          <input
            type="email"
            name="Email"
            ref={emailRef}
            placeholder="Enter Your Email"
          />
          {errors.emailErr && <p className="text-danger">{errors.emailErr}</p>}
        </div>
        <div className="mb-2">
          <label>PhoneNumber</label>
          <input
            type="number"
            name="PhoneNumber"
            ref={PhoneRef}
            placeholder="PhoneNumber"
          />
          {errors.PhoneNumberErr && (
            <p className="text-danger">{errors.PhoneNumberErr}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;
