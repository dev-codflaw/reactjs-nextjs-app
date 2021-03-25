import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

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
    },
    linkStyle:{
        color: 'white',
        // textDecoration: 'none',
        textTransform: 'uppercase'
    },

  }));

  
const Nav = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="fixed" className={classes.navbarColor}>
            <Container maxWidth="lg">
                <Toolbar>
                <Typography className={classes.title}>
                    <Link href="/" color="inherit">CODFLAW</Link>
                </Typography>
                <span style={{ marginLeft: '.5rem' }} >
                  <Link href="/latest" color="inherit">Latest</Link>

                </span>
              <span style={{ marginLeft: '.5rem' }} >
                <Link href="/about" color="inherit">About</Link>

              </span>
              <span style={{ marginLeft: '.5rem' }}>
               <Link href="/category"  color="inherit">Category</Link>

              </span>
              {/* <span style={{ marginLeft: '.5rem' }}>
              <Link href="/posts"  color="inherit">Posts</Link>

              </span> */}
                {/* <Button onClick={handleClickOpen} color="inherit">Contact</Button> */}
                </Toolbar>
            </Container>
        </AppBar>
    </div>
  )
}

export default Nav