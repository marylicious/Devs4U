import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ConsultPortfolio from './pages/ConsultPortfolio';
import ConsultProject from './pages/ConsultProject';
import RecContrasena from './pages/RecContrasena';
import EditProfile from './pages/EditProfile';
import RecContraMail from './pages/RecContraMail';
import EditProject from './pages/EditProject';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard'
import GestProject from './pages/GestProject'
import ConsultProfile from './pages/ConsultProfile'


import ProjectProcess from './pages/ProjectProcess';

/* TODO manejar los roles*/
function App() {

  return (
    <Router>
	    <Switch>

			{/*Login and Register*/}
			<Route exact path='/' render={ (props)=> <Login {...props}/>}/>
			<Route exact path='/register' render={ (props)=> <Registration {...props}/>}/>
			{/*Recuperar Contraseña*/}
			<Route exact path='/password/set' render={ ()=> <RecContrasena/>}/>
			<Route exact path='/password/recover' render={ ()=> <RecContraMail/>}/>
			{/* Dashboard */}
			<Route exact path='/dashboard/freelancer' render={ ()=> <Dashboard type="freelancer"/>}/>
			<Route exact path='/dashboard/contractor' render={ ()=> <Dashboard type="contractor"/>}/>
			{/*Profile*/}
				{/* Consultar Propio*/}
				<Route exact path='/profile/freelancer' render={ ()=> <ConsultProfile type="freelancer"/>}/>
				<Route exact path='/profile/contractor' render={ ()=> <ConsultProfile type="contractor"/>}/>
				{/* Consultar Anonimo */}
				<Route exact path='/developer/view/profile/freelancer' render={ ()=> <ConsultProfile type="developerDev"/>}/>
				<Route exact path='/developer/view/profile/contractor' render={ ()=> <ConsultProfile type="developerCont"/>}/>	
				<Route exact path='/contractor/view/profile/freelancer' render={ ()=> <ConsultProfile type="contractorDev"/>}/>
				<Route exact path='/contractor/view/profile/contractor' render={ ()=> <ConsultProfile type="contractorCont"/>}/>
				{/* Modificar */}
				<Route exact path='/profile/modify/free' render={ ()=> <EditProfile type="developer"/>}/>
				<Route exact path='/profile/modify/cont' render={ ()=> <EditProfile type="contractor"/>}/>
				<Route path={['/http:', '/https:']} component={props => {
					window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
					return null
				}}/>
			{/*Proyecto*/}
				{/* Crear */}
				<Route exact path='/project/create' render={ ()=> <CreateProject/>}/>
				{/* Modificar */}
				<Route exact path='/project/edit' render={ ()=> <EditProject/>}/>
				{/* Consultar */}
				<Route exact path='/project/manage/freelancer' render={ ()=> <GestProject type="developer"/>}/>
				<Route exact path='/project/manage/contractor' render={ ()=> <GestProject type="contractor"/>}/>
				{/* Consultar Proyecto Abierto */}
				<Route exact path='/project/freelancer/open' render={ ()=> <ConsultProject type="developerSP"/>}/>
				<Route exact path='/project/contractor/open' render={ ()=> <ConsultProject type="contractorSP"/>}/>
				{/* Consultar Proyecto Propio en Ejecución*/}
				<Route exact path='/project/freelancer' render={ ()=> <ConsultProject type="developerEj"/>}/>
				<Route exact path='/project/contractor' render={ ()=> <ConsultProject type="contractorEj"/>}/>
				{/* Consultar Proyecto Anonimo */}
				<Route exact path='/view/project/freelancer' render={ ()=> <ConsultProject type="developer"/>}/>
				<Route exact path='/view/project/contractor' render={ ()=> <ConsultProject type="contractor"/>}/>

			{/*Portafolio*/}	
				{/* Consultar Portafolio Propio */}
				<Route exact path='/portafolio' render={ ()=> <ConsultPortfolio type="developer"/>}/>
				{/* Consultar Portafolio Anonimo */}
				<Route exact path='/view/portafolio/contractor' render={ ()=> <ConsultPortfolio type="contractor"/>}/>
				<Route exact path='/view/portafolio/freelancer' render={ ()=> <ConsultPortfolio type="dev"/>}/>

			{/*Not Found*/}
			<Route component={NotFound} />

	    </Switch>
    </Router>
  );
}

export default App;
