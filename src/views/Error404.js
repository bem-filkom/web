import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Text} from "grommet";

const Error404 = () => {
	return (
		<>
			<Helmet>
				<title>404 Not Found</title>
			</Helmet>
			<Box
				direction="column"
				background="accent-3"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				align="center"
				pad="xlarge"
			>
				<Heading textAlign="center" size="xlarge" margin="medium">404 :((</Heading>
				<Text textAlign="center" size="large">Konten yang kamu cari tidak ada (atau belum ada).<br/>Nyari apaan sih? :(</Text>
			</Box>
		</>
	);
};
export default Error404;
