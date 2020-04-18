
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from "react-router-dom";
import { register } from '../../services/User';

function SignUp(props) {
  const classes = useStyles();
  const [loader, setLoader] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [name, setName] = useState("")

  const handleChange = (e,type) =>{
    console.log(e.target.value)
    if(type == "email"){
      setEmail(e.target.value)
    }
    else if(type == "password"){
      setPassword(e.target.value)
    }
    else if(type == "name"){
      setName(e.target.value)
    }
    else{
      setAge(e.target.value)
    }
  }


  const handleSignUp = () =>{
    register('/add', {
      "name":name,
      "age":age,
      "email":email,
      "password":password
    })
    .then(res => {
      if(res.status == 200){
        setLoader(false)
        props.history.push("/")
      }
      console.log(res);
    })
    .catch(err => {
      setLoader(false)
      alert("Did not found user!")
      console.log(err);
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSignUp()
            setLoader(true)
          }}
          className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e)=>handleChange(e, "name")}
                autoComplete="Name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e)=>handleChange(e, "age")}
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="Age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>handleChange(e, "email")}
                type="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>handleChange(e, "password")}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            {loader ? <CircularProgress color="secondary" size={20} />
              :
              "Sign Up"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp)