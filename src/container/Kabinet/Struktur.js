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
				background="acc-3"
				pad="medium"
				border={{
					"color": "acc-5",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Heading textAlign="center" level="1" margin="small" color="acc-8">STRUKTUR KABINET</Heading>
			</Box>
			<Box
				direction="row-responsive"
				background="acc-2"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				pad="xlarge"
			>
				<Image
					style={{"maxWidth": "1000px", "border-radius": "2em"}} fill fit="contain"
					src="/assets/kabinet/struktur.jpg"
				/>
			</Box>
		</>
	);
};
export default StrukturKabinet;
