import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Common/Landing';
import AdminDashboard from './Admin/dashboard';
import Dashboard from './dashboard/dashboard';
import ErrorPage from './Authentication/errorPage';
import FoodSupplyDashboard from './foodSupplyChain/foodSupplyDashboard';
import Login from './Common/Welcome';
import Navbar from './Common/navbar';
import DisasterBasedAnalysis from './foodSupplyChain/disasterBasedAnalysis'
import DisasterPerStateAnalysis from './foodSupplyChain/disasterPerState'

//Create a Main Component
const Main = (props) => {
    
	return (
			<div>
					{/*Render Different Component based on Route*/}
					<Navbar />
					<Route path="/" component={Landing} />
					<Switch>
                        
						<Route path="/login" component={Login} exact={true} />
						<Route path="/dashboard" component={Dashboard} exact={true} />
						<Route path="/admin/dashboard" component={AdminDashboard} exact={true} />

						<Route path="/food-supply-chain" component={FoodSupplyDashboard} exact={true} />
						<Route path='/food-supply-chain-disaster' component={DisasterBasedAnalysis} exact={true} />
						<Route path='/food-supply-chain-disaster-state' component={DisasterPerStateAnalysis} exact={true} />

						<Route component={ErrorPage} />
					</Switch>
			</div>
	);
};
//Export The Main Component
export default Main;