import React, { Component, useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext, AllRequestContext } from "../ContextFile";
import { useForm } from 'react-hook-form';



// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       file: null,
//     };
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

 

//   handleFile = (e) => {
//     this.setState({
//       file: e.target.files[0],
//     });
//   };

//   fileUploadHandler = () => {
//     console.log("uploaded");
//   };
//   handleSubmit = (e) => {
//     //  do stuff
//     e.preventDefault();
//     const { email, password, firstName, lastName, file } = this.state;
    

//   }
//   redirect = () => {
//     // this.props.history.push('/')
//   }


//   render() {
//     const {  email, password, firstName, lastName, file } = this.state;
//     return (
//       <div style={{ display: "flex" }}>
//         <CssBaseline />

//         <NavigationDrawer />

//         <main style={{ flexGrow: "1" }}>
//           <div style={{ marginTop: "5rem" }}></div>

//           <section style={{ textAlign: "center" }}>
//             <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

//             <p className="h1 py-2">Sign Up</p>

           

//             <div class="row">
//               <div class="col-lg-4  col-10"></div>
//               <div class="col-lg-4 col-10    m-auto">
//                 <form onSubmit={this.handleSubmit}>
//                   <TextField
//                     id="firstName"
//                     name="firstName"
//                     type="firstName"
//                     label="Firstname"
//                     value={firstName}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <TextField
//                     id="lastName"
//                     name="lastName"
//                     type="lastName"
//                     label="Lastname"
//                     value={lastName}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />


//                   <TextField
//                     id="email"
//                     name="email"
//                     type="email"
//                     label="Email"
//                     value={email}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <TextField
//                     id="password"
//                     name="password"
//                     type="password"
//                     label="Password"
//                     value={password}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

                

//                   <br />

//                   <TextField
//                     style={{ display: "none" }}
//                     id="file"
//                     name="file"
//                     type="file"
//                     label="file"
//                     value={file}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   <Button
//                     style={{ marginTop: "10px" }}
//                     variant="contained"
//                     component="label"
//                     // value={file}
//                     // onChange={handleFile}
//                     onClick={this.fileUploadHandler}
//                   >
//                     Upload File
//                     {/* <input type="file" style={{ display: "none" }} /> */}
//                   </Button>
//                   <p className="py-2">
//                     already have an account? <Link to="/login">Login</Link>
//                   </p>
//                   {/* <br /> */}

//                   <Button
//                     variant="contained"
//                     color="primary"
//                     // className={classes.button}
//                     type="submit"
//                   >
//                     Submit
//                   </Button>
//                 </form>
//               </div>
//               <div class="col-lg-4  col-10"></div>
//             </div>
//           </section>
//         </main>
//       </div>
//     );
//   }
// }

// export default Signup;


const Signup =() =>  {
 
  const { register, handleSubmit } = useForm();


  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  const { allRequest } = useContext(AllRequestContext);
  console.log(allRequest);

  

  const handleFirstName = (e) => {
   setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    // setFile(e.target.files);
    console.log(e.target.files)
    console.log(typeof e.target.files[0]);

  }

  

  // const fileUploadHandler = () => {
  //   console.log("uploaded");
  // };

  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
    // history.push('/')
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      avatar: file
    };

    console.log(data);

  //  let res = await axios
  //     .post("http://localhost:3001/auth/signup", {
  //       auth: {
  //         first_name: firstName,
  //         last_name: lastName,
  //         email: email,
  //         password: password
  //       },
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //         console.log(response.data);
  //         setUserData({
  //           isLoggedIn: true,
  //           user: data
  //         });
  //         console.log(userData);
  //         localStorage.setItem("user", JSON.stringify(data));
  //         setTimeout(() => {
  //           window.location.reload();

  //         }, 3500);
  //         history.push("/");

  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );

  //   return res;

  };
    return (
      <div>
        <main>
          <div style={{ marginTop: "5rem" }}></div>

          <section style={{ textAlign: "center" }}>
            <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

            <p className="h1 py-2">Sign Up</p>

            <div class="row">
              <div class="col-lg-4  col-10"></div>
              <div class="col-lg-4 col-10    m-auto">
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    label="Firstname"
                    value={firstName}
                    onChange={handleFirstName}
                    fullWidth
                  />

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Lastname"
                    value={lastName}
                    onChange={handleLastName}
                    fullWidth
                  />

                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    fullWidth
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    fullWidth
                  />

                  <br />

                  {/* <TextField
                    // style={{ display: "none" }}
                    id="file"
                    name="file"
                    type="file"
                    label="file"
                    value={file}
                    onChange={handleFile}
                    fullWidth
                  /> */}
                  {/* 
                  <Button
                    style={{ marginTop: "10px" }}
                    variant="contained"
                    component="label"
                    value={file}
                    onChange={handleFile}
                    onClick={fileUploadHandler}
                  >
                    Upload File
                  </Button> */}

                  {/* <Button variant="contained" 
                    style={{ marginTop: "10px" }}
                  
                    component="label">
                    Upload File
                    <input value={file} onChange={handleFile} type="file" style={{ display: "none" }} />
                  </Button> */}
                  <input
                    name="picture"
                    value={file}
                    ref={register}
                    onChange={handleFile}
                    type="file"
                  />

                  <p className="py-2">
                    already have an account? <Link to="/login">Login</Link>
                  </p>
                  {/* <br /> */}

                  <Button
                    variant="contained"
                    color="primary"
                    // className={classes.button}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
              <div class="col-lg-4  col-10"></div>
            </div>
          </section>
        </main>
      </div>
    );
  
}

export default Signup;
