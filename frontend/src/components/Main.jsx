import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as R from 'ramda';

import ProfileSelectors from '../store/features/profile/selectors';
import ProfileOperations from '../store/features/profile/operations';
import Welcome from '../components/Common/Welcome';
import AdminDashboard from './Admin/dashboard';
import Dashboard from './dashboard/dashboard';
import ErrorPage from './Authentication/errorPage';
import FoodSupplyDashboard from './foodSupplyChain/foodSupplyDashboard';
import Login from './Common/Welcome';
import Navbar from './Common/navbar';
import DisasterBasedAnalysis from './foodSupplyChain/disasterBasedAnalysis'
import DisasterPerStateAnalysis from './foodSupplyChain/disasterPerState'
import { useEffect } from 'react';

//Create a Main Component
const Main = (props) => {
    const {
        route,
        user,
    } = useSelector(
        state => ({
            user: ProfileSelectors.user(state),
            route: ProfileSelectors.route(state),
        }),
        shallowEqual,
    );

    // Dispatch Operations
    const dispatch = useDispatch();
    const setRoute = ProfileOperations.dispatchSetRoute(dispatch);
    const getUser = ProfileOperations.dispatchGetUser(dispatch);

    // Effects
    // First time mount (Similar to Componentdidmount)
    useEffect(() => {
        getUser();
    }, []);

    /* When redux is updated, we change the actual page in the browser using the browser. */
    useEffect(() => {
        if (
            !R.isEmpty(route) && 
            !R.isNil(route) && 
            props.location.pathname != route /* Without this condition, same address is pushed twice and thus forward button disappears */
        ) {
            console.log(props.location.pathname, route, 'pushing into history');
            props.history.push(route);
        }
    }, [route]);

    const handleChange = () => {
        setRoute(props.location.pathname);
    };

    /* When back button is pressed in browser, the address is browser has changed, but we have to keep our Redux updated. */
    useEffect(() => {
        window.addEventListener('popstate', handleChange)
        return () => window.removeEventListener('popstate', handleChange)
    }, []);
    
	return (
			<div>
					{/*Render Different Component based on Route*/}
					<Navbar user={user} location={props.location.pathname} />
					{/* <Route path="/" component={Landing} /> */}
					<Switch>
                        <Route path="/welcome" component={Welcome} exact={true} />
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