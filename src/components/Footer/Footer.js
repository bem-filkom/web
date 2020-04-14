import {Anchor, Box, Text} from "grommet";
import {Globe, Instagram, Link, Map, Twitter, UserAdd, Youtube} from "grommet-icons";
import React from "react";

const Footer = () => {
	return (
		<Box
			id="footer"
			direction="row-responsive"
			fill="horizontal"
			pad="xlarge"
			background="brand"
			justify="center"
			alignContent="center"
			gap="large"
			border={{
				"color": "accent-3",
				"size": "medium",
				"style": "solid",
				"side": "top"
			}}
		>
			<Box width="small">
				<Text className="footer-title" color="light-2" size="large">
					&copy; 2020<br/><br/>BEM FILKOM UB
				</Text>
				<Text color="light-2" size="small">Elaborasi Makna</Text>
				<br/>
				<Text color="light-2" size="small">
					Made with <Text color="accent-3">&#10084;</Text> by Biro Pengembangan Informasi & Teknologi
				</Text>
			</Box>
			<Box
				justify="start"
				align="start"
				width="small"
			>
				<Text className="footer-title" color="light-2" size="large"><Link/> Tautan</Text><br/>
				<Anchor
					color="light-6" href="http://filkom.ub.ac.id/" label="FILKOM UB"
					icon={<Globe/>} target="_blank"
				/>
				<Anchor
					color="light-6" href="https://bemfilkom.ub.ac.id/filkompedia" label="Filkompedia" icon={<Globe/>}
					target="_blank"
				/>
				<Anchor
					color="light-6" href="https://bemfilkom.ub.ac.id/apps/siperat" label="SIPERAT" icon={<Globe/>}
					target="_blank"
				/>
			</Box>
			<Box
				justify="start"
				align="start"
				width="small"
			>
				<Text className="footer-title" color="light-2" size="large"><UserAdd/> Ikuti kami</Text><br/>
				<Anchor
					color="light-6" href="https://www.instagram.com/bemfilkomub/" label="@bemfilkomub"
					icon={<Instagram/>} target="_blank"
				/>
				<Anchor
					color="light-6" href="line://ti/p/@bemfilkomub" label="@bemfilkomub" target="_blank"
					icon={<img src="/assets/linelogo.png" className="whitify" style={{"width": 24}} alt="LINE"/>}
				/>
				<Anchor
					color="light-6" href="https://twitter.com/BEMFILKOMUB" label="@BEMFILKOMUB" icon={<Twitter/>}
					target="_blank"
				/>
				<Anchor
					color="light-6" href="https://www.youtube.com/channel/UCLAmrHwP0hvOjPGHacMThZQ"
					label="BEM FILKOM UB" icon={<Youtube/>} target="_blank"
				/>
			</Box>
			<Box width="small">
				<Text className="footer-title" color="light-2" size="large"><Map/> Sekretariat</Text><br/>
				<Text color="light-2" size="small">
					Gedung C1.2 Fakultas Ilmu
					Komputer Universitas Brawijaya<br/><br/>
					Jalan Veteran Nomor 8, Lowokwaru,
					Malang, Jawa Timur 65145
				</Text>
			</Box>
		</Box>
	);
};

export default Footer;