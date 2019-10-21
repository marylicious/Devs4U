import React from 'react';
import {TextField, Button, Typography, Grid, Avatar, CssBaseline, FormControlLabel, Checkbox, Box, Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import {
  fade,
  withStyles,
} from '@material-ui/core/styles';

import logo from './images/fondoLogin.jpg';

//Quería importar esta librería para el símbolo del candado
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: '10px',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '500px',
    padding: '10px 12px',
    margin:'15px 5px'
    // Use the system font instead of the default Roboto font.
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({

    '@global': {
        body: {
          position: 'relative',
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          marginBottom: theme.spacing(4),
          backgroundImage: 'url(https://source.unsplash.com/weekly?water)',
          //No puedo colocar la imagen logo
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        color: "#ffff"
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      marginGrid: {
        marginTop: theme.spacing(5),
      },
      text:{
        color:"#ffff"
      },
      mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[0],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundColor: 'rgba(62, 58, 50, 0.8)',
      }
}));

function Copyright() {
    return (
      <Typography variant="body2" color="initial" align="center">
        {'Copyright © '}
          Devs4U
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Login = props => {

   const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
   
    const classes = useStyles();

    /*Funcion vincula el estado del componente con el valor de los campos*/
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log('Im fired login');
        axios.post('/login', values)
            .then((response) => {
                  console.log('login response',response)
            }, (error) => {
                console.log(error);
            });   
    };
    
    return(
      
        <Container component="main" maxWidth="sm">
        <CssBaseline />

        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src={logo}
                alt="background"
              />
            }

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
        
        {/* <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="outlined" color="inherit">
              Iniciar Sesión como Freelancer
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="inherit">
              Iniciar Sesión como Contratista
            </Button>
          </Grid>
        </Grid> */}

          <form className={classes.form} noValidate>
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              onChange={handleChange('email')}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange('password')}
            /> */}

            <FormControl >
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                Correo Electrónico
              </InputLabel>
              <BootstrapInput id="email" />
            </FormControl>
            <FormControl >
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                Contraseña
              </InputLabel>
              <BootstrapInput id="password" />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" className={classes.text}/>}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.text}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" className={classes.text}>
                  {"¿No tienes una cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
        </Paper>
        </main>
      </Container>



    );
}

export default Login;