import React, { Component, useState, useEffect, useRef, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext, AllRequestContext, HelperTextContext, ErrorContext } from "../ContextFile";
import './search.scss';
import Footer from '../components/Footer'
import { DirectUpload } from "activestorage";




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

  let { helperMessage, setHelperMessage } = useContext(HelperTextContext);
  let { error, setError } = useContext(ErrorContext);


  const [emailErr, setEmailErr] = useState([]);
  const [firstNameErr, setFirstNameErr] = useState([]);
  const [lastNameErr, setLastNameErr] = useState([]);
  const [passwordErr, setPasswordErr] = useState([]);

    const showAllErrors = (arr) => {
      let emailErr = arr.filter((item) => item.includes("Email"));
      setEmailErr(emailErr);

      let firstNameErr = arr.filter((item) => item.includes("First"));
      setFirstNameErr(firstNameErr);

      let lastNameErr = arr.filter((item) => item.includes("Last"));
      setLastNameErr(lastNameErr);

      let passwordErr = arr.filter((item) => item.includes("Password"));
      setPasswordErr(passwordErr);
    };

    const displayFirstNameErr = (arr) => {
      if (firstName.length === 0) {
        return arr[0];
      }
      else if(firstName.length > 0 && firstName.length < 4){
        return arr[0];
        
      }
      else if(firstName.length > 24){
        return arr[0];
        
      }
    };

  const displayLastNameErr = (arr) => {
    if (lastName.length === 0) {
      return arr[0];
    } else if (lastName.length < 4 && lastName.length > 0) {
      return arr[0];
    } else if (lastName.length > 24) {
      return arr[0];
    }
  };

   const displayEmailErr = (arr) => {
     if (email.length === 0) {
       return arr[0];
     }else if(email.length > 255){
       return arr[0];
     }
      else {
       return arr[1];
     }
   };

  const displayPasswordErr = (arr) => {
     if (password.length === 0) {
       return arr[0];
     }
  }
  

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

    console.log(event.target.files[0]);
  }




  const uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if(error) {
        console.log(error)
      }else {
        let res = axios
          .patch(`http://localhost:3001/users/${user.user.id}`, {
            auth: {
              avatar: blob.signed_id,
            },
          })
          .then(
            (response) => {
              console.log(response.data);

              setTimeout(() => {
                window.location.reload();
              }, 3500);
              history.push("/feed");
            },
            (error) => {
              console.log("Error", error);
            }
          );

        return res;

      }
    })
    


  }


  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
   

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      
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
          
          uploadFile(avatar, response.data);

          setUserData({
            token: response.data.token.token,
            isLoggedIn: true,
            user: data,
          });
          localStorage.setItem("token", JSON.stringify(response.data.token.token));
          localStorage.setItem("user", JSON.stringify(data));
          setError(false);


        },
        (error) => {
         showAllErrors(error.response.data)
          console.log(error.response.data);
          setError(true);




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
                    helperText={
                      error ? displayFirstNameErr(firstNameErr) : null
                    }
                    error={error}

                    // required
                  />

                  <TextField
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Lastname"
                    value={lastName}
                    onChange={handleLastName}
                    fullWidth
                    helperText={error ? displayLastNameErr(lastNameErr) : null}
                    error={error}
                    // required
                  />

                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    fullWidth
                    helperText={error ? displayEmailErr(emailErr) : null}
                    error={error}
                    // required
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handlePassword}
                    fullWidth
                    helperText={error ? displayPasswordErr(passwordErr) : null}
                    error={error}
                    // required
                  />


                  <small style={{ color: "#2196F3" }}>
                    Accepts only (PDF, JPG and PNG FILES)
                  </small>

                  <div className=" m-auto">
                    <input
                      placeholder="Upload File"
                      className="custom"
                      style={{ marginTop: "10px" }}
                      name="avatar"
                      onChange={handleAvatar}
                      type="file"
                      accept=".pdf, .png, .jpg"
                      // required
                      multiple={false}
                    />
                  </div>

                  <p className="py-2">
                    already have an account? <Link to="/login">Login</Link>
                  </p>
                  {/* <br /> */}

                  <Button
                    style={{ background: "#4CAF4F" }}
                    variant="contained"
                    color="secondary"
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
