// import React, { Component } from "react";
// import { GrValidate } from "react-icons/gr";

// class Icons extends Component {
//   constructor() {
//     super();
//   }
//   state = {
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     FirstNameErr: "",
//     LastNameErr: "",
//     EmailErr: "",
//     PhoneNumberErr: "",
//   };
//   ChangeHandler = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleForm = (e) => {
//     e.preventDefault();

//     let FirstNameErr = "";
//     let LastNameErr = "";
//     let EmailErr = "";
//     let PhoneNumberErr = "";

//     if (this.state.FirstName.length < 3) {
//       FirstNameErr = "FirstName should contains in 3 char";
//     } else {
//       FirstNameErr = (
//         <span className="icons">
//           <GrValidate />
//         </span>
//       );
//     }
//     if (this.state.LastName.length < 1) {
//       LastNameErr = "lastName should contains in 1 char";
//     }
//     if (!this.state.Email.includes("@")) {
//       EmailErr = "Email should includes @";
//     }
//     if (this.state.PhoneNumber.length !== 10) {
//       PhoneNumberErr = " PhoneNumber should be exactly 10";
//     }
//     if (FirstNameErr || LastNameErr || EmailErr || PhoneNumberErr) {
//       this.setState({ FirstNameErr, LastNameErr, EmailErr, PhoneNumberErr });
//     } else {
//       return this.setState({
//         FirstName: "",
//         LastName: "",
//         Email: "",
//         PhoneNumber: "",
//         // FirstNameErr,
//         // LastNameErr,
//         // EmailErr,
//         // PhoneNumberErr,
//       });
//     }
//   };
//   render() {
//     const iconStyle = {
//       position: "relative",
//       left: "50px",
//       bottom: "20px",
//       color: "green",
//     };
//     return (
//       <div className="container">
//         <h2>ContactUs</h2>
//         <form action="#" onSubmit={(e) => this.handleForm(e)}>
//           <div className="mb-2">
//             <label>FirstName</label>
//             <input
//               type="text"
//               name="FirstName"
//               placeholder="Enter FirstName"
//               value={this.state.FirstName}
//               onChange={(e) => this.ChangeHandler(e)}
//             />
//             {this.state.FirstNameErr && (
//               <p className="text-danger">{this.state.FirstNameErr}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label>LastName</label>
//             <input
//               type="text"
//               name="LastName"
//               placeholder="Enter LastName"
//               value={this.state.LastName}
//               onChange={(e) => this.ChangeHandler(e)}
//             />
//             {this.state.LastNameErr && (
//               <p className="text-danger">{this.state.LastNameErr}</p>
//             )}
//           </div>

//           <div className="mb-2">
//             <label>Email Address</label>
//             <input
//               type="email"
//               name="Email"
//               placeholder="Enter Your Email"
//               value={this.state.Email}
//               onChange={(e) => this.ChangeHandler(e)}
//             />
//             {this.state.EmailErr && (
//               <p className="text-danger">{this.state.EmailErr}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label>PhoneNumber</label>
//             <input
//               type="Number"
//               name="PhoneNumber"
//               placeholder="PhoneNumber"
//               value={this.state.PhoneNumber}
//               onChange={(e) => this.ChangeHandler(e)}
//             />
//             {this.state.PhoneNumberErr && (
//               <p className="text-danger">{this.state.PhoneNumberErr}</p>
//             )}
//           </div>
//           <button type="submit" className="btn btn-primary">
//             submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Icons;
import React, { Component } from "react";
import { FaCheck } from "react-icons/fa";

class Icons extends Component {
  constructor() {
    super();
  }
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    FirstNameErr: "",
    LastNameErr: "",
    EmailErr: "",
    PhoneNumberErr: "",
  };

  ChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleForm = (e) => {
    e.preventDefault();

    let FirstNameErr = "";
    let LastNameErr = "";
    let EmailErr = "";
    let PhoneNumberErr = "";

    if (this.state.FirstName.length < 3) {
      FirstNameErr = "FirstName should contain at least 3 characters";
    }
    if (this.state.LastName.length < 1) {
      LastNameErr = "LastName should contain at least 1 character";
    }
    if (!this.state.Email.includes("@")) {
      EmailErr = "Email should include @";
    }
    if (this.state.PhoneNumber.length !== 10) {
      PhoneNumberErr = "PhoneNumber should be exactly 10 digits";
    }

    this.setState({ FirstNameErr, LastNameErr, EmailErr, PhoneNumberErr });

    if (!FirstNameErr && !LastNameErr && !EmailErr && !PhoneNumberErr) {
      this.setState({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
      });
    }
  };

  render() {
    const iconStyle = {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "green",
    };

    return (
      <div className="container">
        <h2>Contact Us</h2>
        <form action="#" onSubmit={(e) => this.handleForm(e)}>
          {/* FirstName */}
          <div className="mb-2" style={{ position: "relative" }}>
            <label>FirstName</label>
            <input
              type="text"
              name="FirstName"
              placeholder="Enter FirstName"
              value={this.state.FirstName}
              onChange={(e) => this.ChangeHandler(e)}
              className="form-control"
            />
            {this.state.FirstName &&
              this.state.FirstName.length >= 3 &&
              !this.state.FirstNameErr && (
                <span style={iconStyle}>
                  <FaCheck />
                </span>
              )}
            {this.state.FirstNameErr && (
              <p className="text-danger">{this.state.FirstNameErr}</p>
            )}
          </div>

          {/* LastName */}
          <div className="mb-2" style={{ position: "relative" }}>
            <label>LastName</label>
            <input
              type="text"
              name="LastName"
              placeholder="Enter LastName"
              value={this.state.LastName}
              onChange={(e) => this.ChangeHandler(e)}
              className="form-control"
            />
            {this.state.LastName &&
              this.state.LastName.length >= 1 &&
              !this.state.LastNameErr && (
                <span style={iconStyle}>
                  <FaCheck />
                </span>
              )}
            {this.state.LastNameErr && (
              <p className="text-danger">{this.state.LastNameErr}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-2" style={{ position: "relative" }}>
            <label>Email Address</label>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              value={this.state.Email}
              onChange={(e) => this.ChangeHandler(e)}
              className="form-control"
            />
            {this.state.Email &&
              this.state.Email.includes("@") &&
              !this.state.EmailErr && (
                <span style={iconStyle}>
                  <FaCheck />
                </span>
              )}
            {this.state.EmailErr && (
              <p className="text-danger">{this.state.EmailErr}</p>
            )}
          </div>

          {/* PhoneNumber */}
          <div className="mb-2" style={{ position: "relative" }}>
            <label>PhoneNumber</label>
            <input
              type="number"
              name="PhoneNumber"
              placeholder="PhoneNumber"
              value={this.state.PhoneNumber}
              onChange={(e) => this.ChangeHandler(e)}
              className="form-control"
            />
            {this.state.PhoneNumber &&
              this.state.PhoneNumber.length === 10 &&
              !this.state.PhoneNumberErr && (
                <span style={iconStyle}>
                  <FaCheck />
                </span>
              )}
            {this.state.PhoneNumberErr && (
              <p className="text-danger">{this.state.PhoneNumberErr}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Icons;
