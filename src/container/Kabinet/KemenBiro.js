import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image, Text} from "grommet";
import {Redirect, useParams} from "react-router";
import ReactHtmlParser from "react-html-parser";

import {kemenbiroList} from "./kemenbiro-list";

const KemenBiro = () => {
	//hook URL
	let params = useParams();
	
	//ambil string /kabinet/xxxxxx di URL, lihat react router di <app>
	let kemenbiro = [];
	kemenbiro = kemenbiroList.find((x) => x.id === params.kementerian);
	
	//redirect ke halaman 404 bila parameter kementerian tidak ditemukan
	if (typeof kemenbiro != "object") {
		return <Redirect to="/404"/>;
	}
	
	//cek apakah kemen/biro punya staff (bpi/bukan)
	let isStaff = false;
	for (let k in kemenbiro) {
		if (k === "staff") {
			isStaff = true;
		}
	}
	
	//cek apakah punya proker
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
				animation="fadeIn"
				align="center"
				justify="center"
				background="acc-8"
			>
				<Box justify="center" align="center" pad="large">
					<Text margin="none">
						{kemenbiro.tipe}
					</Text>
					<Heading textAlign="center" size="xxlarge" margin={{top: "none", bottom: "medium"}} color="acc-7" className="headingPop">
						{kemenbiro.title}
					</Heading>
					<Box background="acc-5" width="100%" height="5px"/>
				</Box>
			</Box>
			
			<Box
				animation="fadeIn"
				direction="row-responsive"
				background="acc-8"
				justify="center"
				align="center"
				pad={{top: "none", bottom: "large"}}
			>
				<Box
					className="relatify menteriInfo"
					width={{min: "medium"}}
					justify="center"
					align="center"
					margin={{top: "small", bottom: "large"}}
				>
					<Box className="ellipse" animation="pulse">
						<Image
							style={{
								width: "300px",
								maxWidth: "80vw",
								filter: "saturate(70%) brightness(110%)"
							}}
							src={"/assets/Ellipse.png"}
						/>
					</Box>
					<Image
						className="groupFoto"
						style={{width: "400px", maxWidth: "80vw"}}
						fit="contain"
						src={`/assets/kabinet/${kemenbiro.id}.png`}
					/>
				</Box>
				<Box
					alignSelf="center"
					direction="column"
					gap="none"
					width="medium"
					align="center"
					justify="center"
				>
					{kemenbiro.jabatan.map((item, index) => {
						return (
							<Box
								key={index}
								margin="none"
								pad="none"
								align="center"
								justify="center"
							>
								<Box
									width="large"
									height="xxsmall"
									margin={{vertical: "xxsmall"}}
									className="relatify"
									align="center"
									justify="center"
								>
									<Box
										background={{
											color: "acc-2"
										}}
										className="menteri-name"
										pad={{vertical: "xsmall", horizontal: "small"}}
										round="small"
										alignContent="stretch"
										direction="row"
										gap="small"
										align="center"
										justify="center"
									>
										<Box>
											<Text
												textAlign="center"
												size="small"
											>
												{ReactHtmlParser(item)}
											</Text>
										</Box>
										<Box>
											<Text
												textAlign="center"
												weight="bold"
												size="medium"
												color="black"
											>
												{ReactHtmlParser(kemenbiro.bph[index])}
											</Text>
										</Box>
									</Box>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Box>
			
			{isStaff && (
				<>
					<Box
						direction="row-responsive"
						align="center"
						alignContent="center"
						justify="center"
						margin={{bottom: "none"}}
						pad={{top: "large", bottom: "none"}}
						background="acc-8"
						
						border={{
							color: "acc-5",
							size: "large",
							style: "solid",
							side: "top",
						}}
					>
						<Box justify="center" align="center" pad={{top: "small"}}>
							<Heading size="medium" level="2" color="acc-7" className="headingPop">
								Staff
							</Heading>
						</Box>
					</Box>
					
					<Box
						direction="row-responsive"
						alignContent="center"
						justify="center"
						wrap
						margin={{top: "none", bottom: "medium"}}
						pad={{top: "none", horizontal: "small", bottom: "large"}}
						gap="xsmall"
						background="acc-8"
					>
						{isStaff && (
							<>
								{kemenbiro.staff.map((item, index) => (
									<Box
										key={index}
										width="small"
										justify="start"
										align="center"
										margin="small"
									>
										{/*<Image*/}
										{/*	style={{maxHeight: "200px"}}*/}
										{/*	fill*/}
										{/*	fit="contain"*/}
										{/*	src={"/assets/kabinet/advokesma/1.png"}*/}
										{/*/>*/}
										<Box
											background={{
												color: "acc-1"
											}}
											round="small"
											pad={{vertical: "small", horizontal: "medium"}}
											height={{"min": "96px"}}
											fill="horizontal"
											align="center"
											justify="center"
										>
											<Text
												textAlign="center"
												weight="bold"
											>
												{kemenbiro.staff[index]}
											</Text>
										</Box>
									</Box>
								))}
							</>
						)}
					</Box>
				</>
			)}
			
			<Box
				direction="column"
				height={{min: "min"}}
				alignContent="center"
				justify="center"
				align="center"
				pad="large"
				border={{
					color: "acc-5",
					size: "large",
					style: "solid",
					side: "top",
				}}
				background="acc-2"
			>
				<Box
					justify="center"
					align="center"
					background="acc-2"
					pad={{top: "small"}}
				>
					<Heading
						className="headingPop"
						size="medium"
						level="2"
						color="acc-7"
						weight="bold"
					>
						Tupoksi
					</Heading>
				</Box>
				<Box
					alignSelf="center"
					align="center"
					justify="center"
					background="acc-2"
					pad={{top: "small"}}
				>
					<Box
						className="relatify"
						background="acc-2"
						width="medium"
						alignContent="center"
						justify="center"
						align="center"
					>
					
					</Box>
					<Box background="acc-2" pad={{bottom: "large"}} width={{max: "80%"}}>
						<Text
							className="tupoksiTeks"
							style={{"textAlign": "justify"}}
						>
							{kemenbiro.tupoksi}
						</Text>
					</Box>
					<Box
						className="relatify"
						background="acc-2"
						width="medium"
						alignContent="center"
						justify="center"
						align="center"
					>
					
					</Box>
				</Box>
			</Box>
			
			{isProker && (
				<>
					<Box>
						<Box
							justify="center"
							align="center"
							background="acc-1"
							pad={{top: "large"}}
							border={{
								color: "acc-5",
								size: "large",
								style: "solid",
								side: "top",
							}}
						>
							<Heading className="headingPop" size="medium" level="2" color="acc-7">
								Program Kerja
							</Heading>
						</Box>
					</Box>
					<Box
						background="acc-1"
						pad={{top: "small", bottom: "xlarge"}}
						justify="center"
						align="center"
					>
						<Box
							direction="row-responsive"
							wrap
							alignContent="center"
							justify="center"
							align="center"
							width={{max: "80%"}}
						>
							{kemenbiro.proker.map((item, index) =>
								<Box
									key={index}
									background={{color: "acc-2"}}
									round="small"
									pad={{vertical: "small", horizontal: "large"}}
									position="relative"
									gap="medium"
									justify="center"
									margin="small"
								>
									<Text weight="bold" textAlign="center" size="small">
										{item}
									</Text>
								</Box>
							)}
						</Box>
					</Box>
				</>
			)}
		</>
	);
};
export default KemenBiro;
