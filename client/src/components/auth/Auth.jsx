import React from "react";
import { useParams } from "react-router";
import classes from "./auth.module.css";
import {Container, CssBaseline, Avatar, Typography, Link, Grid} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {registration} from '../../store/asyncActions/registration'
import {useDispatch} from 'react-redux'
import {login} from '../../store/asyncActions/login'

const Auth = () => {
  const dispatch = useDispatch()
  const {type:formType} = useParams()
  const history = useHistory();

  const responseGoogle = async (response) => {
    const {
      givenName,
      familyName,
      email,
      googleId
    } = response.profileObj
    await dispatch(registration({
      firstName: givenName,
      lastName: familyName,
      email,
      password: googleId
    }))
    await dispatch(login({
      email,
      password: googleId
    }))
  }

  const responseFacebook = async (response) => {
    console.log(response);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {formType ===  "signup" ?
        <>
          <Typography
              className={classes.title}
              component="h1"
              variant="h5">
              SignUp
          </Typography>
          <SignUp />

          <Grid container justify="flex-end">
              <Grid item>
                  <Link variant="body2" onClick={() => history.push("signin")}>
                      Already have an account? Sign in
                  </Link>
              </Grid>
          </Grid>
        </>:
        <>
          <Typography
              className={classes.title}
              component="h1"
              variant="h5"
              >
             Signin
          </Typography>
          <SignIn />
          <Grid container>
              <Grid item>
              <Link variant="body2" onClick={() => history.push("signup")}>
                  Don't have an account? Sign Up
              </Link>
              </Grid>
          </Grid>
        </>
        }
        <div>
          <Grid container
                style={{   
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
          >
            <Grid item 
                  style={{                     
                    margin: "25px auto",
                    
                  }}>              
              <GoogleLogin
                clientId="361048924397-8v46cqj7iuiurg5mkdl5h1qpjiqgv781.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </Grid>
            <Grid item style={{ 
                    height: "25px",
                    transform: "scale(1.5)" , 
                    margin: "auto",
                  }}>                 
              <FacebookLogin
                appId="967489527170190"
                // autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />
            </Grid>
          </Grid>        
        </div>
      </div>
    </Container>
  );
};

  export default Auth;
