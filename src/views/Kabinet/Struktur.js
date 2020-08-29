import React from "react";
import {Helmet} from "react-helmet";
import {Box, Image} from "grommet";

const StrukturKabinet = () => {
	return (
		<>
			<Helmet>
				<title>Struktur Kabinet</title>
			</Helmet>
			{/*<Box*/}
			{/*	direction="row-responsive"*/}
			{/*	height={{"min": "xsmall"}}*/}
			{/*	align="center"*/}
			{/*	alignContent="center"*/}
			{/*	justify="center"*/}
			{/*	background="acc-9"*/}
			{/*	pad="large"*/}
			{/*	border={{*/}
			{/*		"color": "acc-5",*/}
			{/*		"size": "large",*/}
			{/*		"style": "solid",*/}
			{/*		"side": "bottom"*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<Heading textAlign="center" level="1" margin="small">STRUKTUR KABINET</Heading>*/}
			{/*</Box>*/}
			<Box
				direction="row-responsive"
				background="acc-2"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				pad="xlarge"
			>
				<Image
					style={{"maxWidth": "825px", "border-radius": "2em"}} fill fit="contain"
					src="/assets/kabinet/struktur.jpg"
				/>
			</Box>
		</>
	);
};
export default StrukturKabinet;
