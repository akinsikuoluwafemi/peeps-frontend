import React, { Component, useState, useEffect, useRef, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext, AllRequestContext } from "../ContextFile";
import { useForm } from 'react-hook-form';
import './search.scss';
import {DirectUpload} from 'activestorage';



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
 


  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');
  const [avatar, setAvatar] = useState({});


  // dropzone component
  const [selectedImage, setSelectedImage] = useState(null);

  

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);

  const { allRequest } = useContext(AllRequestContext);
  console.log(allRequest);

  const inputRef = useRef()
  

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

  const handleFile = (event) => {
    setFile(inputRef.current.value);
    console.log(event.target.files[0])
    setAvatar(event.target.files[0]);
    console.log(inputRef.current.value);

  }

  console.log(avatar.name);
    console.log(avatar.size);
  


  

  // const fileUploadHandler = () => {
  //   console.log("uploaded");
  // };

  // const handleSubmit = async (e) => {
  //   //  do stuff
  //   e.preventDefault();
  //   // history.push('/')
  //   const data = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     email: email,
  //     password: password,
  //     avatar: file,
  //   };

  //   console.log(data);

  //   //  let res = await axios
  //   //     .post("http://localhost:3001/auth/signup", {
  //   //       auth: {
  //   //         first_name: firstName,
  //   //         last_name: lastName,
  //   //         email: email,
  //   //         password: password
  //           // avatar: file,

  //   //       },
  //   //     })
  //   //     .then(
  //   //       (response) => {
  //   //         console.log(response);
  //   //         console.log(response.data);
  //   //         setUserData({
  //   //           isLoggedIn: true,
  //   //           user: data
  //   //         });
  //   //         console.log(userData);
  //   //         localStorage.setItem("user", JSON.stringify(data));
  //   //         setTimeout(() => {
  //   //           window.location.reload();

  //   //         }, 3500);
  //   //         history.push("/");

  //   //       },
  //   //       (error) => {
  //   //         console.log(error);
  //   //       }
  //   //     );

  //   //   return res;
  // };




  const uploadFile = (file, user) => {
    const upload = new DirectUpload(
      file,
      "http://localhost:3001/rails/active_storage/direct_uploads"
    );

    upload.create((error, blob) => {
       console.log(blob);
      
      if (error) {
        console.log(error);
      } else {
        console.log("there is no error");
      }
    });

    console.log(upload);
  };



  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
    // history.push('/')
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      // avatar: {
      //   byte_size: avatar.name,
      //   url: "",
      //   name: avatar.size,
      // },
      avatar: file
    };

    const formUserImage = new FormData(e.target);

    if (selectedImage !== null) {
      formUserImage.append('avatar')
    }

    console.log(data);

    let res = await axios
          .post("http://localhost:3001/auth/signup", {
            auth: {
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
              avatar: data,

            },
          })
          .then(
            (response) => {
              console.log(response);
              console.log(response.data);
              setUserData({
                isLoggedIn: true,
                user: data
              });
              uploadFile(data, response.data);
              console.log(userData);
              localStorage.setItem("user", JSON.stringify(data));
              setTimeout(() => {
                window.location.reload();

              }, 3500);
              history.push("/");

            },
            (error) => {
              console.log(error);
            }
          );

        return res;
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
                    required
                  />

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Lastname"
                    value={lastName}
                    onChange={handleLastName}
                    fullWidth
                    required
                  />

                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    fullWidth
                    required
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    fullWidth
                    required
                  />

                  <br />

                  <div className=" m-auto">
                    <input
                      placeholder="Upload File"
                      className="custom"
                      style={{ marginTop: "10px" }}
                      name="picture"
                      onChange={handleFile}
                      value={file}
                      type="file"
                      ref={inputRef}
                      accept=".pdf, .png, .jpg"
                      required
                      multiple={false}
                    />
                  </div>

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
