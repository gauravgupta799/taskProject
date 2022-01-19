import React from "react";
import "./App.css";
import LoginForm from "./Public/LoginForm";
import Jokes from "./Private/Jokes";
import Logout from "./Private/Logout";
import Navbar from "./Private/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/loginform' component={LoginForm} />
					<Route path='/jokes' component={Jokes} />
					<Route path='/logout' component={Logout} />
				</Switch>
			</Router>
		</div>
	);
}

const Home = () => {
	<div className='Home'>
		<h2>Welcome To Home!</h2>
	</div>;
};
export default App;
