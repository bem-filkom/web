import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image, Text, Paragraph} from "grommet";
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
				direction="row-responsive"
				align="center"
				alignContent="center"
				justify="center"
				background="acc-8"
				pad={{horizontal: "medium"}}
			>
				<Box justify="center" align="center" pad="large">
					<Text textAlign="center" size="xxlarge" margin="small" color="acc-7">
						{kemenbiro.title}
					</Text>
					<Box background="acc-5" width="small" height="5px"></Box>
				</Box>
			</Box>
			
			<Box
				direction="row-responsive"
				height={{medium: "medium"}}
				width={{medium: "medium"}}
				background="acc-8"
				pad={{vertical: "medium"}}
				border={{
					color: "acc-5",
					size: "medium",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box
					className="relatify"
					responsive="true"
					width="medium"
					alignContent="center"
					justify="center"
					align="center"
				></Box>
				<Box
					className="relatify"
					responsive="true"
					width="large"
					alignContent="center"
					justify="center"
					align="center"
					pad={{bottom: "large"}}
					margin="small"
				>
					<Image
						className="ellipse"
						style={{maxHeight: "500px"}}
						src={"/assets/Ellipse.png"}
						position="absolute"
					/>
					<Image
						className="groupFoto"
						style={{maxHeight: "500px"}}
						fill
						fit="contain"
						src={`/assets/kabinet/${kemenbiro.id}.png`}
					/>
				</Box>
				{/* Error */}
				<Box
					direction="column"
					gap="none"
					align="center"
					justify="center"
				>
					{kemenbiro.jabatan.map((item, index) => {
						return (
							<Box
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
											color: "acc-2",
											opacity: "strong",
											dark: true,
										}}
										className="menteri-name"
										pad={{vertical: "small", horizontal: "small"}}
										round="small"
										align="stretch"
										alignContent="stretch"
										justify="between"
										direction="row"
										gap="medium"
									>
										<Box>
											<Text
												textAlign="center"
												weight="bold"
												size="small"
												color="acc-6"
											>
												{ReactHtmlParser(item)}
											</Text>
										</Box>
										<Box>
											<Text
												textAlign="center"
												weight="bold"
												size="medium"
												color="acc-7"
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
				{/* Error */}
				
				<Box
					className="relatify"
					responsive="true"
					width="medium"
					alignContent="center"
					justify="center"
					align="center"
				></Box>
			</Box>
			
			{isStaff && (
				<>
					<Box
						direction="row-responsive"
						align="center"
						alignContent="center"
						justify="center"
						background="acc-1"
					>
						<Box justify="center" align="center" pad={{top: "small"}}>
							<Heading size="medium" level="2" color="acc-7">
								Staff
							</Heading>
						</Box>
					</Box>
					
					<Box
						direction="row-responsive"
						height={{min: "medium"}}
						alignContent="center"
						justify="center"
						wrap
						pad={{horizontal: "small", bottom: "small"}}
						gap="xsmall"
						background="acc-8"
						border={{
							color: "acc-5",
							size: "medium",
							style: "solid",
							side: "bottom",
						}}
					>
						{isStaff && (
							<>
								{kemenbiro.staff.map((item, index) => (
									<Box
										width="small"
										justify="center"
										align="center"
										margin="medium"
									>
										<Image
											style={{maxHeight: "200px"}}
											fill
											fit="contain"
											src={"/assets/kabinet/advokesma/1.png"}
										/>
										<Box
											background={{
												color: "acc-2",
												opacity: "strong",
												dark: true,
											}}
											round="small"
											pad={{vertical: "5px", horizontal: "small"}}
											position="absolute"
											height="50px"
											width="150px"
										>
											<Text
												weight="bold"
												textAlign="center"
												size="small"
												color="acc-7"
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
				border={{
					color: "acc-5",
					size: "medium",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box
					justify="center"
					align="center"
					background="acc-1"
					pad={{top: "small"}}
				>
					<Heading
						className="headingPop"
						size="medium"
						level="2"
						color="acc-7"
						weight="bold"
					>
						Tupoksi:
					</Heading>
				</Box>
				<Box
					direction="column-responsive"
					background="acc-1"
					pad={{top: "small"}}
				>
					<Box
						className="relatify"
						background="acc-1"
						responsive="true"
						width="medium"
						alignContent="center"
						justify="center"
						align="center"
					>
					
					</Box>
					<Box responsive="true" background="acc-1" pad={{bottom: "large"}}>
						<Text
							className="tupoksiTeks"
							justify="center"
							textAlign="center"
							size="large"
							color="acc-7"
						>
							{kemenbiro.tupoksi}
						</Text>
					</Box>
					<Box
						className="relatify"
						background="acc-1"
						responsive="true"
						width="medium"
						alignContent="center"
						justify="center"
						align="center"
					>
					
					</Box>
				</Box>
			</Box>
			
			{/* {isProker && */}
			<Box>
				<Box
					justify="center"
					align="center"
					background="acc-2"
					pad={{top: "small"}}
				>
					<Heading className="headingPop" size="medium" level="2" color="acc-7">
						Program Kerja:
					</Heading>
				</Box>
			</Box>
			<Box
				direction="column"
				background="acc-2"
				pad={{top: "small", bottom: "medium"}}
			>
				<Box
					alignContent="center"
					justify="center"
					align="center"
					className="relatify"
				>
					<Box
						background={{color: "acc-1"}}
						round="small"
						pad={{vertical: "small", horizontal: "large"}}
						position="relative"
						gap="medium"
						justify="center"
						margin="small"
					>
						<Text weight="bold" textAlign="center" size="large" color="acc-7">
							Proker A
						</Text>
					</Box>
					<Box
						background={{color: "acc-1"}}
						round="small"
						pad={{vertical: "small", horizontal: "large"}}
						position="relative"
						gap="medium"
						justify="center"
						margin="small"
					>
						<Text weight="bold" textAlign="center" size="large" color="acc-7">
							Proker B
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

{
	/* <Text>
						<ul>
						
							{
								kemenbiro.proker.map((item, index) => (
									<li key={index}>
										<Text weight="bold">{item}</Text>
									</li>
								))
							}
						</ul>
					</Text> */
}

export default KemenBiro;
