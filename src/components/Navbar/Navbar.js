import React from "react";
import {Header, Box, Image, Heading} from "grommet";
import NavbarButton from "./NavbarButton";
import NavbarDropButton from "./NavbarDropButton";

import {Link} from "react-router-dom";

function Navbar() {
	return (
		<Header
			id="navbar"
			direction="row-responsive"
			fill="horizontal"
			pad={{horizontal: "xlarge"}}
			background="acc-4"
			align="center"
			alignContent="center"
			justify="center"
			gap="small"
		>
			<Box
				direction="row" width={{min: "xsmall"}} height="xxsmall" align="center" alignContent="center"
				alignSelf="center" className="navbar-logo"
			>
				<Link to="/">
					<Image
						fit="contain"
						src="/assets/logo.png"
						margin={{"right": "small"}}
					/>
				</Link>
				<Link to="/" style={{"textDecorationLine":"none"}}>
					<Heading className="navbar-title" style={{"lineHeight":"25px"}} alignSelf="center" color="white">BEM FILKOM UB</Heading>
				</Link>
			</Box>
			
			<Box
				direction="row-responsive" gap="small" align="center" alignContent="center" alignSelf="center"
				className="navbar-menu" pad="none" margin="none"
			>
				<NavbarButton className="navbar-home-mobile" style={{"display":"none"}} path="/" text="Home"/>
				
				<NavbarButton path="/visimisi/" text="Visi & Misi"/>
				
				<NavbarDropButton text="Kabinet">
					<NavbarButton path="/kabinet/" text="Struktur"/>
					<NavbarButton path="/kabinet/preswapres" text="Presiden & Wapres"/>
					<NavbarButton path="/kabinet/sekpim" text="Sekretaris Pimpinan"/>
					<NavbarButton path="/kabinet/supervisor" text="Supervisor"/>
					<NavbarButton path="/kabinet/psdi" text="PSDI"/>
					<NavbarButton path="/kabinet/psdm" text="PSDM"/>
					<NavbarButton path="/kabinet/k2p" text="K2P"/>
					<NavbarButton path="/kabinet/perhub" text="Perhub"/>
					<NavbarButton path="/kabinet/sosling" text="Sosling"/>
					<NavbarButton path="/kabinet/kastrat" text="Kastrat"/>
					<NavbarButton path="/kabinet/advokesma" text="Advokesma"/>
					<NavbarButton path="/kabinet/bismit" text="Bismit"/>
					<NavbarButton path="/kabinet/pit" text="PIT"/>
					<NavbarButton path="/kabinet/adkeu" text="Adkeu"/>
					<NavbarButton path="/kabinet/medinkraf" text="Medinkraf"/>
				</NavbarDropButton>
			</Box>
			<Box
				direction="row-responsive" gap="small" align="center" alignContent="center" alignSelf="center"
				className="navbar-menu" pad="none" margin="none"
			>
				<NavbarButton highlight extern path="/filkompedia/" text="FILKOMPEDIA"/>
				
				<NavbarDropButton highlight text="APPS">
					<NavbarButton extern path="/apps/siperat/" text="SIPERAT"/>
					<NavbarButton extern path="/apps/bismit/" text="Bismit Apps"/>
					<NavbarButton extern path="/apps/injam/" text="Integrasi Peminjaman"/>
				</NavbarDropButton>
			</Box>
		</Header>
	);
}

export default Navbar;