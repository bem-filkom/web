import React from "react";
import {Paragraph, Text, Box, Heading, Image, Carousel} from "grommet";
import InstagramPost from "../components/InstagramPost";

const Home = () => {
	return (
		<>
			<Box
				background={{
					"position": "center",
					"repeat": "no-repeat",
					"size": "cover",
					"image": "url(/assets/landingnew.jpg)"
				}}
				height={{"max": "large"}}
				// border={{
				// 	"color": "accent-3",
				// 	"size": "medium",
				// 	"style": "solid",
				// 	"side": "bottom"
				// }}
				border={{
					color: "acc-5",
					size: "large",
					side: "bottom"
				}}
			>
				<Box
					background={{
						"color": "acc-9",
						"dark": true,
						"opacity": "strong"
					}}
					align="center"
					alignContent="center"
					pad={{
						"vertical": "xlarge",
						"horizontal": "none"
					}}
					className="landing-title"
					animation="fadeIn"
				>
					<Heading size="large" textAlign="center" margin={{top: "large", bottom: "small"}} pad={{horizontal: "medium"}} level="1" className="headingPop">
						BEM FILKOM 2020
					</Heading>
					<Heading textAlign="center" level="2" size="small" margin={{top: "none", bottom: "large"}} pad={{horizontal: "medium"}} className="headingPop">
						Kabinet Elaborasi Makna
					</Heading>
					<Box margin={{horizontal: "medium", top: "medium", bottom: "large"}} animation="fadeIn">
						<Text size="xlarge">▼</Text>
					</Box>
				</Box>
			</Box>
			
			<Box
				id="sambutan" background="acc-8" direction="row-responsive" align="center" justify="center"
				pad="large" gap="large"
				border={{
					color: "acc-5",
					size: "large",
					side: "bottom"
				}}
			>
				<Heading alignSelf="center" level="2" size="medium">
					<Text color="brand" size="large">Sambutan hangat</Text><br/><br/>
					Presiden<br/>
					dan<br/>
					Wakil Presiden
				</Heading>
				<Box
					fill="vertical"
					style={{
						filter: "brightness(85%) contrast(110%)"
					}}
					background={{
						"position": "center",
						"repeat": "no-repeat",
						"size": "contain",
						"image": "url(/assets/preswapresnew.png)"
					}}
					basis="1/3"
					height={{"min": "medium"}}
				/>
				<Box basis="1/3">
					<Paragraph fill style={{"textAlign": "justify"}}>
						Assalamu alaikum wa rahmatullahi wa barakatuh!<br/><br/>Pada periode ini, kami memiliki fokus
						arah gerak yaitu penguatan kompetensi mahasiswa Fakultas Ekonomika dan Bisnis Universitas Gadjah
						Mada (FEB UGM) guna memberikan kontribusi bagi Indonesia melalui bidang dan keahliannya
						masing-masing.<br/><br/>Hidup mahasiswa!<br/><br/><Text weight="bold" color="accent-4">M Verrel
						Radiman &<br/>M Jordan Farrell</Text>
					</Paragraph>
				</Box>
			</Box>
			
			<InstagramPost/>
			
			<Box
				direction="row-responsive" background="acc-1"
				align="center" alignContent="center" alignSelf="center"
				justify="center" pad="large" gap="xlarge"
			>
				<Heading alignSelf="center" level="2" size="medium">Partnership:</Heading>
				<Box align="center" alignContent="center" alignSelf="center" width="small" height="small">
					<Carousel
						fill
						alignSelf="center"
						style={{"zIndex": 0}}
						controls={false}
						width="small"
						height="small"
						play={1500}
					>
						<Image fill fit="contain" src="/assets/mitra/1.png"/>
						<Image fill fit="contain" src="/assets/mitra/7.png"/>
						<Image fill fit="contain" src="/assets/mitra/9.png"/>
					</Carousel>
				</Box>
			</Box>
		</>
	);
};
export default Home;
