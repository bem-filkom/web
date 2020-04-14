import React from "react";
import {Box, Text, DropButton} from "grommet";

function NavbarDropButton(props) {
	return (
		<DropButton {...props} plain dropAlign={{"top": "top", "right": "right"}} dropContent={
			<Box
				background="brand" overflow={{"vertical": "auto"}} height={{"max": "medium"}} gap="xsmall"
				pad="small" className="navbar-dropmenu" align="center"
				border={{"side":"bottom", "color":"accent-2", "size":"medium"}}
			>
				{props.children}
			</Box>
		}>
			{({hover}) => (
				<Box
					pad={{vertical: "small", horizontal: "medium"}}
					round="medium"
					background={
						props.highlight ?
							hover ? "accent-3" : "accent-1"
							: hover ? "accent-3" : "brand"
					} margin="none"
					justify="center" align="center" alignContent="center"
				>
					<Text weight="bold" alignSelf="center" size="small">{props.text}&nbsp;<b>&#8757;</b></Text>
				</Box>
			)}
		</DropButton>
	);
}

export default NavbarDropButton;