import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image} from "grommet";

const StrukturKabinet = () => {
	return (
		<>
			<Helmet>
				<title>Struktur Kabinet</title>
			</Helmet>
			<Box
				direction="row-responsive"
				height={{"min": "xsmall"}}
				align="center"
				alignContent="center"
				justify="center"
				background="brand"
				border={{
					"color": "dark-1",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Heading textAlign="center" level="1" margin="small">STRUKTUR KABINET</Heading>
			</Box>
			<Box
				direction="row-responsive"
				background="light-3"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				pad="xlarge"
			>
				<Image
					style={{"maxWidth": "800px", "border-radius": "2em"}} fill fit="contain"
					src="/assets/kabinet/struktur.jpg"
				/>
			</Box>
		</>
	);
};
export default StrukturKabinet;
