import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import { withRouter } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { auth } from '../../services/contacts';

function SignIn(props) {
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleChange = (e,type) =>{
    console.log(e.target.value)
    if(type == "email"){
      setEmail(e.target.value)
    }
    else{
      setPassword(e.target.value)
    }
  }


  const handleSignIn = () =>{
    auth('/auth', {
      "email":email,
      "password":password
    })
    .then(res => {
      if(res.status == 200){
        setLoader(false)
        props.history.push("/signup")
      }
      console.log(res);
    })
    .catch(err => {
      setLoader(false)
      alert("Did not found user!")
      console.log(err);
    })
  }

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(e)=>{
          e.preventDefault()
          handleSignIn()
          setLoader(true)
        }} className={classes.form}>
          <TextField
            onChange={(e)=>handleChange(e, "email")}
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e)=>handleChange(e, "pass")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
              {loader ? <CircularProgress color="secondary" size={20} />
              :
              "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignIn)