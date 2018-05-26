import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './App.js'
import Dashboard from './Dashboard.js'
import TabHome from './components/TabHome.js'
import TabSearch from './components/TabSearch.js'
import TabProfile from './components/TabProfile.js'
import TabBackup from './components/TabBackup.js'
import TabFilter from './components/TabFilter.js'
import TabBilling from './components/TabBilling.js'


const Main = () => (
	<Router>
	<div>
		<Route exact path="/" component={Home} />
		<Route path="/dashboard" component={DashHome} />
		<Route path="/dashboard/home" render={()=><TabHome />} />
		<Route path="/dashboard/search" render={()=><TabSearch />} />
		<Route path="/dashboard/profile" render={()=><TabProfile />} />
		<Route path="/dashboard/backup" render={()=><TabBackup />} />
		<Route path="/dashboard/filter" render={()=><TabFilter />} />
		<Route path="/dashboard/billing" render={()=><TabBilling />} />
	</div>
	</Router>
);

const Home = () => (
	<App />
);

const DashHome = () => (
	<div>
		<Dashboard />
	</div>
);


export default Main;