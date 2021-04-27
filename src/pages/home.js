import React, {useState, useEffect } from 'react'
import Axios from 'axios'

import Grid from '@material-ui/core/Grid'

import Blast from '../components/Blast'


const Home = () => {
  const [blasts, setBlasts] = useState()


  useEffect(() => {
    Axios
    .get('https://us-central1-socialmediaclone-f5653.cloudfunctions.net/api/blasts')
    .then((res) => {
      console.log(res)
      setBlasts(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  let recentBlastsMarkup = blasts? (
    blasts.map((blast) => <Blast blast={blast}/>)
  ) : <p>Loading...</p>

  return (
<Grid container spacing={10}>
  <Grid item sm={8} xs={12}>
    {recentBlastsMarkup}
  </Grid>
  <Grid item sm={4} xs={12}>
    <p>Profile...</p>
  </Grid>
</Grid>
  )
}

export default Home

