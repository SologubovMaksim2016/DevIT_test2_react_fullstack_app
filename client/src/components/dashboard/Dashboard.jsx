import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchMe, fetchUsers} from '../../store/asyncActions/users';
import {Grid, Container} from "@material-ui/core";
import UserTable from "./UserTable";
import Profile from "./Profile";
import {useHistory} from 'react-router-dom'

const Dashboard = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      await Promise.all([dispatch(fetchUsers(history)), dispatch(fetchMe(history))])
      setLoading(false)
    }
    fetchData()
  }, [dispatch])

  return <Container>
    {
      loading
        ? <p>Loading</p>
        : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <UserTable />
            </Grid>
            <Grid item xs={6}>
              <Profile />
            </Grid>
          </Grid>
        )
    }
    </Container>;
};

export default Dashboard;
