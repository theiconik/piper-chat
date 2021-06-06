import { useContext, useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    height: "80%",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState("");

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container className={classes.gridContainer}>
          {/* Grid 1 */}
          <Grid item xs={12} md={6} className={classes.padding}>
            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: "Prime-Light" }}
            >
              Account Info
            </Typography>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              inputProps={{
                style: { fontFamily: "Prime-Light", color: "white" },
              }}
              InputLabelProps={{
                style: { fontFamily: "Prime-Light", color: "white" },
              }}
            />

            <CopyToClipboard text={me} className={classes.margin}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#89a2a1" }}
                fullWidth
                startIcon={<Assignment fontSize="large" />}
              >
                Copy your ID
              </Button>
            </CopyToClipboard>
          </Grid>

          {/* Grid 2 */}
          <Grid item xs={12} md={6} className={classes.padding}>
            <Typography
              gutterBottom
              variant="h6"
              style={{ fontFamily: "Prime-Light" }}
            >
              Make Call
            </Typography>
            <TextField
              label="ID To Call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              fullWidth
              inputProps={{
                style: { fontFamily: "Prime-Light", color: "white" },
              }}
              InputLabelProps={{
                style: { fontFamily: "Prime-Light", color: "white" },
              }}
            />

            {callAccepted && !callEnded ? (
              <Button
                variant="contained"
                style={{ color: "white", backgroundColor: "red" }}
                fullWidth
                onClick={leaveCall}
                className={classes.margin}
                startIcon={<PhoneDisabled fontSize="large" />}
              >
                {" "}
                Hang Up
              </Button>
            ) : idToCall.length ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "#6fdfb8" }}
                fullWidth
                onClick={() => callUser(idToCall)}
                className={classes.margin}
                startIcon={<Phone fontSize="large" />}
              >
                Call
              </Button>
            ) : (
              <Button
                variant="contained"
                disabled
                style={{ backgroundColor: "#6fdfb8" }}
                fullWidth
                onClick={() => callUser(idToCall)}
                className={classes.margin}
                startIcon={<Phone fontSize="large" />}
              >
                Call
              </Button>
            )}
          </Grid>
        </Grid>
        {children}
      </form>
    </Container>
  );
};

export default Options;
