import React from "react";
import {Box, Text} from "grommet";
import RoutedButton from "../RoutedButton";

function NavbarButton(props) {
	return (
		<RoutedButton plain {...props}>
			{({hover}) => (
				<Box
					pad={{vertical: "small", horizontal: "medium"}}
					round="medium"
					background={
						props.highlight ?
							hover ? "accent-3" : "accent-1"
							: hover ? "accent-3" : "brand"
					} margin="none"
					justify="center" align="center" alignContent="center" alignSelf="center"
				>
					<Text weight="bold" alignSelf="center" textAlign="center" size="small">{props.text}</Text>
				</Box>
			)}
		</RoutedButton>
	);
}

export default NavbarButton;