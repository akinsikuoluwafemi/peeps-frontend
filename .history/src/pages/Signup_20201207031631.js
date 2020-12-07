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
import { DirectUpload } from "activestorage";


// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       firstName: "",
//       lastName: "",
//       password: "",
//       avatar: null,
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
//       avatar: e.target.files[0],
//     });
//   };

//   // fileUploadHandler = () => {
//   //   console.log("uploaded");
//   // };


//   handleSubmit = (e) => {
//     //  do stuff
//     e.preventDefault();
//     const { email, password, firstName, lastName, avatar } = this.state;
    

//   }


//   redirect = () => {
//     this.props.history.push('/feed')
//   }


//   render() {
//     const {  email, password, firstName, lastName, avatar } = this.state;
//     return (
//       <div >
       

//         <main>
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
//                     // style={{ display: "none" }}
//                     id="file"
//                     name="file"
//                     type="file"
//                     label="file"
//                     value={avatar}
//                     onChange={this.handleChange}
//                     fullWidth
//                   />

//                   {/* <Button
//                     style={{ marginTop: "10px" }}
//                     variant="contained"
//                     component="label"
//                     value={file}
//                     onChange={handleFile}
//                     onClick={this.fileUploadHandler}
//                   >
//                     Upload File
//                   </Button> */}


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
 
  useEffect(() => {
    document.title = "Sign up for | Peeps";

  }, [])

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState('');

  const [avatar, setAvatar] = useState({});
  const [lastUserId, setLastUserId] = useState(null);



  

  const history = useHistory();

  const { userData, setUserData } = useContext(UserContext);

  const { allRequest } = useContext(AllRequestContext);

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

  const handleAvatar = (event) => {
    setAvatar(event.target.files[0]);
    // setAvatar(inputRef.current.value);

    console.log(event.target.files[0]);
  }




  const uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if(error) {
        console.log(error)
      }else {


        const token = JSON.parse(localStorage.getItem("token"));

        let res = axios
          .patch(`http://localhost:3001/requests/${id}`, {
            ava
          }, {
            headers: {
              Authorization: `Basic ${token}`,
            },
          })
          .then(
            (response) => {
              console.log( response.data);
            },
            (error) => {
              console.log("Error", error);
            }
          );

        return res;



      }
    })
    


    // fetch('http://localhost:3001/rails/active_storage/direct_uploads', {
    


  }

  // const uploadPhoto = (file) => {
  //   const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
  //   upload.create((error, blob) => {
  //     if(error) {
  //       console.log(error)
  //     }else {
  //       console.log('there is no error')
  //     }
  //   })

  // }






  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
   

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      // avatar: inputRef.current.value
      // avatar: avatar
      
    };


    console.log(data);

    let res = await axios
      .post("http://localhost:3001/auth/signup", {
        auth: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        },
      })
      .then(
        (response) => {
          console.log(response.data);
          
          // uploadPhoto(avatar)

          setUserData({
            token: response.data.token.token,
            isLoggedIn: true,
            user: data,
          });
          localStorage.setItem("token", JSON.stringify(response.data.token.token));
          localStorage.setItem("user", JSON.stringify(data));
          uploadFile(avatar, response.data);

          setTimeout(() => {
            window.location.reload();
          }, 3500);
          history.push("/feed");
        },
        (error) => {
          console.log(error);
        }
      );

    return res;
    
  };

  const getLastUser = async () => {
    
  let res = await axios
    .get(`http://localhost:3001/getlast`)
    .then(
      (response) => {
        setLastUserId(response.data.id)
      },
      (error) => {
        
        console.log(error);


      }
    );

  return res;



  }


   getLastUser()


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
                      name="avatar"
                      onChange={handleAvatar}
                      type="file"
                      // value={avatar}
                      // ref={inputRef}
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
{/* 
                <button onClick={() => uploadPhoto(avatar)}>
                  upload
                </button> */}

             
                
              </div>
              <div class="col-lg-4  col-10"></div>
            </div>
          </section>
        </main>
      </div>

    );
  
}

export default Signup;
