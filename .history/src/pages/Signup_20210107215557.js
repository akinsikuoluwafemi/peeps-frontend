import React, { useState, useEffect, useContext } from "react";
import HelpLogo from "../images/helpp.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext,  ErrorContext } from "../ContextFile";
import './search.scss';
import Footer from '../components/Footer';
import CircularProgress from "@material-ui/core/CircularProgress";
import { DirectUpload } from "activestorage";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Tour from '../components/Tour';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




export const Signup =() =>  {
 
  useEffect(() => {
    document.title = "Sign up for | Peeps";

  }, [])

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const [avatar, setAvatar] = useState({});
  const [loading, setLoading] = useState(false);

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
        return arr[1];
        
      }
      else if(firstName.length > 24){
        return arr[0];
        
      }
    };

  const displayLastNameErr = (arr) => {
    
    if (lastName.length === 0) {
      return arr[0];
    } else if (lastName.length < 4 && lastName.length > 0) {
      return arr[1];
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

  const { setUserData } = useContext(UserContext);

    
 const [open, setOpen] = React.useState(false);


 const handleClose = () => {
   setOpen(false);
 };

  

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

    // console.log(event.target.files[0]);
  }






  const uploadFile = (file, user) => {
    const upload = new DirectUpload(file, 'http://localhost:3001/rails/active_storage/direct_uploads')
    upload.create((error, blob) => {
      if(error) {
        // console.log(error)
      }else {
        let res = axios
          .patch(`http://localhost:3001/users/${user.user.id}`, {
            auth: {
              avatar: blob.signed_id,
            },
          })
          .then(
            (response) => {
              // console.log(response.data);

              setTimeout(() => {
                window.location.reload();
              }, 3500);
              history.push("/feed");
              handleClose()

            },

            (error) => {
              // console.log("Error", error);
            }
          );

        return res;

      }
    })
    


  }


  const handleSubmit = async (e) => {
    //  do stuff
    e.preventDefault();
    setLoading(true)
   

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };


    // console.log(data);

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
          // console.log(response.data);
          setOpen(true);


          uploadFile(avatar, response.data);

          setUserData({
            token: response.data.token.token,
            isLoggedIn: true,
            user: data,
          });
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.token.token)
          );
          localStorage.setItem("user", JSON.stringify(data));
              
          setError(false);
          setLoading(false);
        },
        (error) => {
          // console.log(error.response.data);
          // console.log(error);

          setError(true);
          setLoading(false);

          showAllErrors(error.response.data);
        }
      );

    return res;
    
  };




    return (
      <>
        <TransitionAlerts>
          <Tour />
        </TransitionAlerts>

        <div>
          <main>
            <div style={{ marginTop: "5rem" }}></div>

            <section style={{ textAlign: "center" }}>
              <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

              <p className="h1 py-2">Sign Up</p>

              <div className="row">
                <div className="col-lg-4  col-10"></div>
                <div className="col-lg-4 col-10    m-auto">
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
                      helperText={
                        error ? displayLastNameErr(lastNameErr) : null
                      }
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
                      helperText={
                        error ? displayPasswordErr(passwordErr) : null
                      }
                      error={error}
                      // required
                    />
                    <p className="mt-2">
                      Kindly attach a government verification ID Card
                    </p>
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
                      // disabled={loading}
                    >
                      Submit
                      {loading && (
                        <CircularProgress color="inherit" size="1rem" />
                      )}
                    </Button>
                  </form>

                  {/*  */}
                  <div>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-slide-title"
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle id="alert-dialog-slide-title">
                        {"Signin You in"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText
                          alignItems="center"
                          justify="center"
                          id="alert-dialog-slide-description"
                        >
                          <CircularProgress
                            style={{ color: "#4CAF4F" }}
                            size="6rem"
                          />
                        </DialogContentText>
                      </DialogContent>
                      {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary">
              Agree
            </Button>
          </DialogActions> */}
                    </Dialog>
                  </div>

                  {/*  */}
                </div>
                <div className="col-lg-4  col-10"></div>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  
}





export const TransitionAlerts = ({children}) => {
  
  
  return (
    <div style={{paddingRight: '0'} }  class="alert  alert-dismissible fade show" role="alert">
    <p className="text-center text-info">Welcome to the quick tour</p>
      {children}
      <button type="button" class="close text-white" data-dismiss="alert" aria-label="Close">
      <span className="text-white" aria-hidden="true">&times;</span>
    </button>
  </div>
  );
}
