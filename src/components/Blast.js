import React from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// MUI Imports
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


const styles = {
  card: {
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
}


const Blast = (props) => {
  const { classes, blast: {body, createdAt, userImage, userName, blastId, likeCount, commentCount} } = props
  dayjs.extend(relativeTime)
  return (
    <>
    <Card className={classes.card} key={blastId}>
      <CardMedia image={userImage} title="Profile image" alt="Profile Image" className={classes.image}/>
      <CardContent className={classes.content}>
        <Typography variant="h5" component={Link} to={`/users/${userName}`} color='primary'>{userName}</Typography>
        <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>

    </Card>

    </>
  )
}

export default withStyles(styles)(Blast)
