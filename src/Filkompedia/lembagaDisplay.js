import React from 'react';
import { Box, Image, Text } from "grommet";
import { Link } from "react-router-dom";
import { lembagaList } from "./lembaga-list";

function LembagaDisplay(props) {
	return (
        <Box
            width="small"
            justify="start"
            align="center"
            margin={{horizontal:"xlarge", vertical:"50px"}}
        >
            <Link to={lembagaList[props.index].id}>
                <Box height="small" width="small" >
                    <Image
                        fit="contain"
                        src={`/assets/logoLembaga/${lembagaList[props.index].id}.png`}
                    />
                </Box>
            </Link>
            
            <Box
                background={{color: "acc-1"}}
                round="small"
                margin={{top: "small"}}
                fill="horizontal"
                align="center"
                justify="center"
            >
                <Text textAlign="center" weight="bold">
                {lembagaList[props.index].title}
                </Text>
            </Box>
        </Box>
	);
}

export default LembagaDisplay;