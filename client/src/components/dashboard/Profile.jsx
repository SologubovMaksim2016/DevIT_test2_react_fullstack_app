import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import { logoutAC } from "../../store/authReduser";
import {useDispatch, useSelector} from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import {makeStyles, Typography, Grid, Modal} from "@material-ui/core";
import {UserForm} from './UserForm'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "400px",
    backgroundColor: theme.palette.background.paper,
    border: "0px dotted #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  btn: {
    marginTop: "30px"
  },
  title: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    fontSize: "40px"
  },
  table: {
    marginTop: "30px",
    fontWweight: "600",
    fontSize: "26px"
  },
  col_name: {
    height: "50px",
    lineHeight: "50px",
    border: "1px solid grey",
    textAlign: "center",
  },
  data: {
    height: "50px",
    lineHeight: "50px",
    border: "1px solid grey",
    textAlign: "center",
  }  
}));

const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [modalStyle] =  useState(getModalStyle)
  const user = useSelector((store) =>{
    return store.users.user
  } )
  const [userModal, toggleUserModal] = useState(false)
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAC(user));
    history.push("/")
  };
  
  return (
      <>
        <Grid container justifyContent = {user.isAdmin ? "space-between" : "flex-end"} spacing={2}>
        {user.isAdmin && (
               <Button
                  style={{             
                    backgroundColor: "#00FF00",
                    padding: "18px 36px",
                    fontWeight: "700"
                  }}
                  onClick={() => toggleUserModal(true)}
                  className={classes.btn}
                  variant="contained"
                  color="inherit"
                >
                Create user  +
                </Button>
            )}         
          <Button
            className={classes.btn}
            variant={"contained"}
            color={"primary"}
            onClick={handleLogout}
          >
            <ExitToAppIcon />
          </Button>
        </Grid>
        <Typography
            className={classes.title}
            component="h4"
            variant="h4">
            Personal data
        </Typography>
        <Grid className={classes.table} container justifyContent="flex-end">
          <Grid  item xs={6}>
              <Typography
                  className={classes.col_name}
                  component="h1"
                  variant="h5">
                  Client Name
              </Typography>
              <Typography
                  className={classes.col_name}
                  component="h1"
                  variant="h5">
                  Client Surname
              </Typography>
              <Typography
                  className={classes.col_name}
                  component="h1"
                  variant="h5">
                  Client Email
              </Typography>
          </Grid>
          <Grid  item xs={6}>
               <Typography
                  className={classes.data}
                  component="h1"
                  variant="h5"
               >
                 {user && user.firstName}
              </Typography>
               <Typography
                  className={classes.data}
                  component="h1"
                  variant="h5">
                 {user && user.lastName}
              </Typography>
               <Typography
                  className={classes.data}
                  component="h1"
                  variant="h5">
                 {user && user.email}
              </Typography>
          </Grid>
      </Grid>
        <Modal
          open={userModal}
          onClose={() => toggleUserModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <UserForm toggleUserModal={toggleUserModal} />
          </div>
        </Modal>
      </>
  );
};
export default Profile
