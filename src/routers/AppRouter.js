import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase } from '../firebase/firebase-config';
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {

	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged( (user)=>{

			if (user?.uid) {
				dispatch( login( user.uid, user.displayName ));
				setIsLoggedIn(true);
			}
			else{
				setIsLoggedIn(false);
			}
			setChecking(false);
				
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return(
			<h1>Espere...</h1>
		)
	}

	return (
		<Router>
			<div>
				<Switch>

					<PublicRoute	
						path='/auth'
						component={ AuthRouter }
						isAuthenticated={ isLoggedIn }
					/>

					<PrivateRoute
						path='/'
						component={ JournalScreen }
						isAuthenticated={ isLoggedIn }
					/>
					<Redirect to='/auth/login'/>
				</Switch>
			</div>
		</Router>
	)
}