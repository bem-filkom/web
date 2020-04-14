import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image, Text} from "grommet";
import {Redirect, useParams} from "react-router";
import ReactHtmlParser from "react-html-parser";

import {kemenbiroList} from "./kemenbiro-list";

const KemenBiro = () => {
	let params = useParams();
	
	let kemenbiro = [];
	kemenbiro = kemenbiroList.find(x => x.id === params.kementerian);
	//redirect ke struktur bila parameter tidak ditemukan
	if (typeof (kemenbiro) != "object") {
		return (
			<Redirect to="/404"/>
		);
	}
	
	let isStaff = false;
	for (let k in kemenbiro) {
		if (k === "staff") {
			isStaff = true;
		}
	}
	
	let isProker = false;
	for (let k in kemenbiro) {
		if (k === "proker") {
			isProker = true;
		}
	}
	
	return (
		<>
			<Helmet>
				<title>{kemenbiro.title}</title>
			</Helmet>
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				background="brand"
			>
				<Box basis="1/3" justify="center" align="center" className="relatify" pad="large">
					<Image
						style={{"maxHeight": "380px"}} fill fit="contain"
						src={`/assets/kabinet/${kemenbiro.id}.png`}
					/>
					<Box
						background={{
							"color": "accent-1",
							"opacity": "strong",
							"dark": true
						}}
						className="menteri-name" pad={{"vertical": "small", "horizontal": "medium"}} round="small"
						align="stretch"
						alignContent="stretch"
						justify="between"
						direction="row"
						gap="medium"
					>
						<Box>
							<Text weight="bold" size="small">{ReactHtmlParser(kemenbiro.jabatan)}</Text>
						</Box>
						<Box>
							<Text size="small">{ReactHtmlParser(kemenbiro.bph)}</Text>
						</Box>
					</Box>
				</Box>
				<Box basis="1/4" justify="center" align="center" pad="large">
					<Heading textAlign="center" level="1" size="small" margin="small">
						{kemenbiro.title.toUpperCase()}
					</Heading>
				</Box>
			</Box>
			
			{isStaff &&
			<>
				<Box
					direction="row-responsive"
					align="center"
					alignContent="center"
					justify="center"
					background="light-4"
					pad="medium"
				>
					<Text textAlign="center" weight="bold" size="xlarge">&darr; Staff &darr;</Text>
				</Box>
				<Box
					direction="row-responsive"
					height={{"min": "medium"}}
					alignContent="center"
					justify="center"
					wrap
					pad="large"
					gap="xsmall"
					background="accent-2"
					border={{
						"color": "accent-3",
						"size": "large",
						"style": "solid",
						"side": "bottom"
					}}
				>
					{
						kemenbiro.staff.map((item, index) => (
							<Box key={index} width="small" justify="center" align="center" margin="medium">
								<Image
									style={{"maxHeight": "200px"}} fill fit="contain"
									src={`/assets/kabinet/${kemenbiro.id}/${index + 1}.png`}
								/>
								<Text weight="bold" textAlign="center" size="small">{item}</Text>
							</Box>
						))
					}
				</Box>
			</>
			}
			
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
			>
				<Box basis="1/3" justify="center" align="center" background="light-4" pad="medium">
					<Heading size="xlarge" level="2">TUPOKSI:</Heading>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="xlarge" background="dark-1">
					<Text size="large">
						{kemenbiro.tupoksi}
					</Text>
				</Box>
			</Box>
			
			{isProker &&
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
			>
				<Box basis="1/3" justify="center" align="stretch" background="dark-1" pad="medium">
					<Heading textAlign="center" size="xlarge" level="2">PROGRAM<br/>KERJA:</Heading>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="xlarge" background="light-4">
					<Text size="small" style={{"textAlign": "justify"}}>
						<ul>
							{
								kemenbiro.proker.map((item, index) => (
									<li key={index}>
										<Text weight="bold">{item}</Text>
									</li>
								))
							}
						</ul>
					</Text>
				</Box>
			</Box>
			}
		</>
	);
};

export default KemenBiro;