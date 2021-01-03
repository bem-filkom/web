import React from "react";
import { Helmet } from "react-helmet";
import { Anchor, Box, Heading, Image, Text } from "grommet";
import ButtonPedia from "./buttonpedia";
import { Instagram, Link, Twitter, Youtube, Home, Facebook } from "grommet-icons";
import { lembagaList } from "./lembaga-list";
import { useParams} from "react-router";
// "acc-1":"#FFE3EE",//pink lebih muda
// "acc-2":"#bfe0f1",//biru lebih muda
// "acc-3":"#FFAFCF",//pink muda
// "acc-4":"#77b1de",//biru muda
// "acc-5":"#EFD5B8",//coklat krem
// "acc-6":"#414A50",//Grey blue
// "acc-7":"#000000",//hitam
// "acc-8":"#FFFFFF",//putih
// "acc-9":"#ae4f76",//marun
// "acc-10":"#285c85",//biru dongker
// "acc-11":"#343434",//near black

const FilkompediaDetails = () => {
	let params = useParams();
	let lembaga = [];
	lembaga = lembagaList.find((x) => x.id === params.lembaga);

	let isSocmed1 = false;
	for (let k in lembaga) {
		if (k === "sekret") {
			isSocmed1 = true;
		}
	}
	let isSocmed2 = false;
	for (let k in lembaga) {
		if (k === "link") {
			isSocmed2 = true;
		}
	}
	let isSocmed3 = false;
	for (let k in lembaga) {
		if (k === "line") {
			isSocmed3 = true;
		}
	}
	let isSocmed4 = false;
	for (let k in lembaga) {
		if (k === "insta") {
			isSocmed4 = true;
		}
	}
	let isSocmed5 = false;
	for (let k in lembaga) {
		if (k === "facebook") {
			isSocmed5 = true;
		}
	}
	let isSocmed6 = false;
	for (let k in lembaga) {
		if (k === "twitter") {
			isSocmed6 = true;
		}
	}
	let isSocmed7 = false;
	for (let k in lembaga) {
		if (k === "youtube") {
			isSocmed7 = true;
		}
	}

    return (
        <Box>
			<Helmet>
				<title>Deskripsi Lembaga</title>
			</Helmet>
			<Box
				height={{min: "xsmall"}}
				alignContent="center"
				align="center"
				justify="center"
				background="acc-3"
				round={{"size": "small", "corner": "bottom"}}
			>
				<Box justify="center">
					<Heading size="34px" margin={{bottom: "none"}} level="2" textAlign="center" color="acc-7">
						FILKOMPEDIA
					</Heading>
					<Heading size="20px" margin={{top: "small"}} level="3" textAlign="center" color="acc-7">
						Ensiklopedia Lembaga FILKOM
					</Heading>
				</Box>
            </Box>

            <Box
				direction="column"
				height={{min: "small"}}
				alignContent="center"
				align="center"
				justify="center"
				background="acc-8"
			>
				<Box
				width="xlarge"
				direction="column"
				alignContent="center"
				align="center"
				justify="center"
				background="none"
				margin={{bottom:"medium", top:"medium"}}
				>
					<Box direction="column" align="center" pad={{top:"5px", horizontal:"medium"}} fill="horizontal" background="none">
                        <Heading className="headingPop" size="30px" level="2" textAlign="center" color="acc-10">
                            {lembaga.og_title.toUpperCase() != null && lembaga.og_title.toUpperCase()}
                        </Heading>
					</Box>

					<Box direction="column" fill="horizontal" background="none">
						<Box direction="row-responsive" alignSelf="center">
							<Box background="none" align="center">
								<Box alignSelf="center" height="250px" width="300px" >
									<Image
										fit="contain"
										src={`/assets/logoLembaga/${lembaga.id}.png`}
									/>
								</Box>

								<Box direction="column" align="center" pad={{ vertical: "small", horizontal: "medium" }} width="medium">
									<Heading className="headingMon" size="25px" level="1" textAlign="center" color="acc-10">
										Program Kerja Unggulan
									</Heading>
									<Box
									direction="column-responsive"
									wrap
									alignContent="center"
									justify="center"
									align="center"
									width={{max: "80%"}}
									>
										{lembaga.proker.map((item, index) =>
											<Box
												key={index}
												background={{color: "acc-3"}}
												round="small"
												pad={{vertical: "small"}}
												posion="relative"
												gap="medium"
												justify="center"
												margin="5px"
												width="250px"
											>
												<Text weight="bold" textAlign="center" size="small">
													{item}
												</Text>
											</Box>
										)}
									</Box>

									<Heading className="headingMon" size="25px" level="1" textAlign="center" color="acc-10">
										Link External
									</Heading>
									<Text className="tupoksiTeks" style={{"textAlign": "justify"}}>
										<Box
										justify="center"
										align="justify"
										width="200px"
										>
											{isSocmed1 && (<>
												<Anchor
													className="notClickable"
													href="" label={lembaga.sekret}
													icon={<Home/>} target="_blank"
												/>
											</>)}
											{isSocmed2 && (<>
												<Anchor
													href={lembaga.link} label="Website resmi"
													icon={<Link/>} target="_blank"
												/>
											</>)}
											{isSocmed3 && (<>
												<Anchor
													href={`https://line.me/ti/p/${lembaga.line}`} label={lembaga.line} target="_blank"
													icon={<img src="/assets/linelogo.png" className="acc-6 whitify" style={{"width": 24}} alt="LINE"/>}
												/>
											</>)}
											{isSocmed4 && (<>
												<Anchor
													href={`https://instagram.com/${lembaga.insta}`} label={lembaga.insta}
													icon={<Instagram/>} target="_blank"
												/>
											</>)}
											{isSocmed5 && (<>
												<Anchor
													href={`https://facebook.com/${lembaga.facebook}`} label={lembaga.facebook}
													icon={<Facebook />} target="_blank"
												/>
											</>)}
											{isSocmed6 && (<>
												<Anchor
													href={`https://twitter.com/${lembaga.twitter}`} label={lembaga.twitter}
													icon={<Twitter />} target="_blank"
												/>
											</>)}
											{isSocmed7 && (<>
												<Anchor
													href={`https://www.youtube.com/c/${lembaga.youtube}`} label={lembaga.youtube}
													icon={<Youtube />} target="_blank"
												/>
											</>)}
										</Box>
									</Text>
								</Box>
							</Box>
							
							<Box background="none" responsive="true" margin="small" height={{ min: "small"}} pad="medium" round="small" justify="start">
								<Box width={{ max: "600px"}} >
									<Text className="tupoksiTeks" color="acc-11">
									{lembaga.deskripsi != null && lembaga.deskripsi}
									</Text>
								</Box>
							</Box>
							
						</Box>
					</Box>
				</Box>
			</Box>

            <Box direction="column" align="center" justify="center" margin={{vertical:"large"}}>
				<ButtonPedia path="/filkompedia/" text="kembali"/>
			</Box>
        </Box>
    );
};
export default FilkompediaDetails;
