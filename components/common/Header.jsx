import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import Nav from './Nav'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbarColor:{
      background: '#2E3B55',
    }
  }));



const Header = () => {
    const classes = useStyles();
    const [enquiry, setEnquiry] = React.useState({username: '',emailaddr: ''});
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [state, setState] = React.useState({
      openSnackBar: false,
      vertical: "top",
      horizontal: "center"
    });
  
    const { vertical, horizontal, openSnackBar } = state;

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (e) => {
      // alert('change');
      const name = e.target.name;
      const value = e.target.value;
      enquiry[name] = value;
      setEnquiry(enquiry);
    }

    const handleSend = (e) => {
      e.preventDefault();
      // alert(JSON.stringify(enquiry));
      if(enquiry.username === '' || enquiry.emailaddr === ''){
        setError(true);
        // alert('blank');
      }else{
        // alert('good to go');
        setError(false);
        setEnquiry({username: '',emailaddr: ''});
        setOpen(false); // to close dialog
        setState({ openSnackBar: true, vertical: 'top', horizontal: 'center' });
      }
    }

    const handleClick = (newState) => () => {
      setState({ openSnackBar: true, ...newState });
    };

    const handleSnackBarClose = () => {
      setState({ ...state, openSnackBar: false });
    };

    const preventDefault = (event) => event.preventDefault();


    return (
        <React.Fragment>
            <Nav />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Please fill your detail</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Just type your name and email and we will contact you soon.
              </DialogContentText>
              <br />
              <TextField
                variant="outlined"
                onChange={handleChange}
                autoFocus
                margin="dense"
                id="username"
                name="username"
                label="Your Name"
                type="text"
                fullWidth
                helperText={error && "Please enter your name"}
              /><br /><br />
              <TextField
                variant="outlined"
                onChange={handleChange}
                margin="dense"
                id="emailaddr"
                name="emailaddr"
                label="Your Email Address"
                type="email"
                fullWidth
                helperText={error && "Please enter your email"}

              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSend} color="primary">
                Send
              </Button>
            </DialogActions>
          </Dialog>

          {/* <Button onClick={handleClick({ vertical: "top", horizontal: "center" })}>
        Top-Center
      </Button> */}

          <Snackbar
            autoHideDuration={6000}
            anchorOrigin={{ vertical, horizontal }}
            open={openSnackBar}
            onClose={handleSnackBarClose}
            message="Thanks to contact."
            key={vertical + horizontal}
          />

        </React.Fragment>
    );
}

export default Header;

