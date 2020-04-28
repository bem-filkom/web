import React from "react";
import {Route, HashRouter as Router, Switch} from "react-router-dom";
import {Grommet} from "grommet";
import {Helmet} from "react-helmet";
import {deepMerge} from "grommet/utils";

import {elmaTheme} from "./elma-theme";
import {grommet} from "grommet/themes";

import "normalize.css";
import "./style.css";

import ScrollIntoView from "./components/ScrollIntoView";
import Navbar from "./components/Navbar/Navbar";
import Home from "./container/Home";
import VisiMisi from "./container/VisiMisi";
import StrukturKabinet from "./container/Kabinet/Struktur";
import KemenBiro from "./container/Kabinet/KemenBiro";
import Footer from "./components/Footer/Footer";

import Error404 from "./container/Error404";
// import ComingSoon from "./container/ComingSoon";

// const PrivateRoute = ({ component: Component, status: isLogged, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         isLogged === true
//             ? <Component {...props} />
//             : <Redirect to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//             }} />
//     )} />
// );

//merge default and BEM theme
const bemTheme = deepMerge(grommet, elmaTheme);

const App = () => {
	return (
		<>
			<Helmet titleTemplate="%s | BEM FILKOM UB 2020" defaultTitle="BEM FILKOM UB 2020 | Elaborasi Makna"/>
			<Router>
				<ScrollIntoView>
					<Grommet theme={bemTheme} full>
						<Navbar/>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route path="/visimisi/" component={VisiMisi}/>
							<Route exact path="/kabinet/" component={StrukturKabinet}/>
							<Route path="/kabinet/:kementerian" component={KemenBiro}/>
							
							{/*404 not found*/}
							<Route path="/404" component={Error404}/>
							<Route component={Error404}/>
							{/*<Route component={ComingSoon}/>*/}
						</Switch>
						<Footer/>
					</Grommet>
				</ScrollIntoView>
			</Router>
		</>
	);
};

export default App;
