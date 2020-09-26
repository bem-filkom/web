import React from "react";
import {Route, Switch} from "react-router-dom";
import {Grommet} from "grommet";
import {Helmet} from "react-helmet";
import ReactGA from "react-ga";
import {deepMerge} from "grommet/utils";

import {elmaTheme} from "./elma-theme";
import {grommet} from "grommet/themes";

import "normalize.css";
import "./style.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import VisiMisi from "./views/VisiMisi";
import StrukturKabinet from "./views/Kabinet/Struktur";
import KemenBiro from "./views/Kabinet/KemenBiro";
import Filkompedia from "./Filkompedia/Filkompedia";
import FilkompediaDetails from "./Filkompedia/FilkompediaDetails";
import Footer from "./components/Footer/Footer";
import Error404 from "./views/Error404";
import ScrollToTop from "./components/ScrollToTop";

// import ComingSoon from "./views/ComingSoon";

//merge default theme and BEM theme
const bemTheme = deepMerge(grommet, elmaTheme);

ReactGA.initialize("UA-38735593-4", {debug: false});

const App = () => {
	return (
		<>
			<Helmet titleTemplate="%s | BEM FILKOM UB 2020" defaultTitle="BEM FILKOM UB 2020 | Elaborasi Makna"/>
			<Grommet theme={bemTheme} full id="grommetParent">
				<ScrollToTop/>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/visimisi/" component={VisiMisi}/>
					<Route exact path="/kabinet/" component={StrukturKabinet}/>
					<Route path="/kabinet/:kementerian" component={KemenBiro} />
					<Route exact path="/filkompedia" component={Filkompedia} />
					<Route path="/filkompedia/:lembaga" component={FilkompediaDetails} />
					{/*404 not found*/}
					<Route path="/404" component={Error404}/>
					<Route component={Error404}/>
				</Switch>
				<Footer/>
			</Grommet>
		</>
	);
};

export default App;
