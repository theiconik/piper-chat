import {useContext} from 'react'
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SocketContext from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "5px solid #6fdfb8",
    borderTopRightRadius: "40px",
    borderBottomLeftRadius: "40px",
    margin: "10px",
  },
}));

const VideoPlayer = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.gridContainer}>
        {/* Our Own Video */}
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              style={{ fontFamily: "Prime-Light", color:"#15353c",}}
              gutterBottom
            >
              The Iconik
            </Typography>
            <video ref={null} muted playsInline className={classes.video} />
          </Grid>
        </Paper>

        {/* User's Video */}
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              style={{ fontFamily: "Prime-Light", color:"#15353c", }}
              gutterBottom
            >
              Server
            </Typography>
            <video ref={null} playsInline className={classes.video} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
