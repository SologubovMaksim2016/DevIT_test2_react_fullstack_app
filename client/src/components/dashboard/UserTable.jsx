import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControlLabel,
  Switch,
  Button,
  Paper,
  makeStyles,
  Typography,
  Grid
} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {useDispatch, useSelector} from 'react-redux';
import {disableUser, removeUser} from '../../store/asyncActions/users';


const useStyles = makeStyles((theme) => ({
  switch: {     
    paddingRight: "20px",
    width: "300px"
  },
  title: {
    marginTop: "80px",
    background: "#fceb00",
    margin: "auto"
  },
  container: {
    background: "#f7f6cd",
    marginTop: "165px"
  }
}));

const UserTable = () => {  
  const { user : {isAdmin, isBlocked}, users } = useSelector(state => state.users) 
  const dispatch = useDispatch()
  const classes = useStyles()
  return (
    isBlocked?
    <Grid container className={classes.container} >
              <Typography
            className={classes.title}
            component="h4"
            variant="h4">
            WARNING!!!
        </Typography>
            <Typography
            className={classes.message}
            component="h4"
            variant="h4">
            Ваш аккаунт заблокирован за нарушение правил пользовагия сервисом.
        </Typography>
    </Grid>
    :
    <TableContainer component={Paper} className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            {isAdmin && (
              <>
                <TableCell align="right">Blocked</TableCell>
                <TableCell align="right">Action</TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(u => (
            <TableRow key={u.id}>
              <TableCell>{u.firstName}</TableCell>
              <TableCell>{u.lastName}</TableCell>
              {isAdmin && (
                <>
                  <TableCell align="right">
                    <Typography      
                        className={classes.switch}                  
                        component="h7"
                        variant="h7">
                        {u.isBlocked ? "Blocked" : "No blocked"} 
                    </Typography>
                    <FormControlLabel 
                      // label= {u.isBlocked ? "Blocked" : "No blocked"}                  
                      control={
                        <Switch
                          checked={u.isBlocked}
                          onChange={() => dispatch(disableUser(u.id, !u.isBlocked))}
                        />
                      }
                       />
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant={"contained"}
                      color={"secondary"}
                      onClick={() => dispatch(removeUser(u.id))}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
