import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  CssBaseline,
  Container,
  Link,
  Button,
  Paper,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Devs4U
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },

  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },

  button1: {
    marginRight: '350px'
  },
  button2: {
    margin: theme.spacing(1)
  },
  grid:{
    marginTop:"50px"
  }
}))

export default function CreateProject() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
    const handleDateChange = date => {
      setSelectedDate(date);
    };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="contractor"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
         
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h4" gutterBottom>
                Creación de Proyecto
              </Typography>
          <Grid container spacing={5} className={classes.mainGrid} className={classes.grid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Nombre del Proyecto:
              </Typography>
              <TextField variant="outlined" fullWidth id="nombre" />
              <Divider />

              <Typography variant="h6" gutterBottom>
                Descripción
              </Typography>
              <TextField variant="outlined" fullWidth id="descripcion" />
              

              {/*Si queda tiempo, poner más bonito los objetivos */}
              <Typography variant="h6" gutterBottom>
                Objetivos
              </Typography>
              <ul>
                <li><TextField variant="outlined" fullWidth id="obj1" /></li>
                <li><TextField variant="outlined" fullWidth id="obj2" /></li>
                <li><TextField variant="outlined" fullWidth id="obj3" /></li>
              </ul>

              <Typography variant="h6" gutterBottom>
                Etapas del Proyecto
              </Typography>
              <form className={classes.container} noValidate>
                <TextField
                  id="date1"
                  label="Abierto"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date2"
                  label="Ejecución"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <form className={classes.container} noValidate>
                <TextField
                  id="date3"
                  label="Revisión"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date4"
                  label="Finalizado"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>

              <Typography variant="h6" gutterBottom>
                Entregables (lo que debe entregarle el freelancer)
              </Typography>
              <TextField variant="outlined" fullWidth id="entregables" />
              <Divider />

              {/*Si queda tiempo, poner más bonito los objetivos */}
              <Typography variant="h6" gutterBottom>
                Datos Adicionales
              </Typography>
              <ul>
                <li><TextField variant="outlined" fullWidth id="datosA1" /></li>
                <li><TextField variant="outlined" fullWidth id="datosA2" /></li>
                <li><TextField variant="outlined" fullWidth id="datosA3" /></li>
              </ul>

              <Button
                variant="contained"
                color="primary"
                className={classes.button2}
                href="/project/manage/contractor">
                Crear
              </Button>
              <Button
                variant="contained"
                color="inherit"
                className={classes.button1}
                href="/project/manage/contractor">
                Cancelar
              </Button>
            </Grid>
            {/* End main content */}

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>     

              <Typography variant="h6" gutterBottom>
                Tipo de Proyecto
              </Typography>
              <TextField variant="outlined" fullWidth id="tipoProyecto" />

              <Typography variant="h6" gutterBottom>
                Tecnologías a Usar
              </Typography>
              <TextField variant="outlined" fullWidth id="tecnologías" />

              <Typography variant="h6" gutterBottom>
                Presupuesto
              </Typography>
              <TextField variant="outlined" fullWidth id="Presupuesto" />
            </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  )
}
