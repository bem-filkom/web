import React from "react";
import {Paragraph, Text, Box, Heading, Image, Carousel} from "grommet";
import InstagramPost from "../components/InstagramPost";
// import {Close, FormClose, LinkNext} from "grommet-icons";

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
						"opacity": "0.5"
					}}
					align="center"
					alignContent="center"
					pad={{
						"vertical": "xlarge",
						"horizontal": "none"
					}}
					className="landing-title"
				>
					<Heading
						size="large" textAlign="center" margin={{top: "large", bottom: "small"}} level="1"
						className="headingPop"
						style={{padding: "0 20px"}}
					>
						BEM FILKOM 2020
					</Heading>
					<Heading
						textAlign="center" level="2" size="small" margin={{top: "none", bottom: "large"}}
						className="headingPop"
						style={{padding: "0 20px"}}
					>
						Kabinet Elaborasi Makna
					</Heading>
					<Box margin={{horizontal: "medium", top: "medium", bottom: "large"}} animation="pulse">
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
						filter: "contrast(110%)"
					}}
					background={{
						"position": "center",
						"repeat": "no-repeat",
						"size": "contain",
						"image": "url(/assets/preswapresnew.jpg)"
					}}
					basis="1/3"
					height={{"min": "medium"}}
				/>
				<Box basis="1/3">
					<Paragraph size="small" fill style={{"textAlign": "justify"}}>
						<Text weight="bold" size="small" color="acc-9">
							Assalamu alaikum wr wb. Shalom. Om Swastyastu. Namo Buddhaya Rahayu. Salam kebajikan untuk
							kita semua.<br/><br/>
						</Text>
						BEM FILKOM UB sebagai lembaga eksekutif tertinggi di tingkat fakultas memiliki tanggung jawab
						dalam memberikan pelayanan, kontribusi, serta partisipasi terbaik untuk Civitas Akademika
						FILKOM, Brawijaya dan juga masyarakat Indonesia.<br/><br/>
						Kabinet Elaborasi Makna bergerak sesuai dengan visi dan misi yang menjadi fundamental dalam
						mencapai tujuan yang telah ditetapkan. Dengan mengedepankan nilai dan juga kerjasama dalam
						pelaksanaannya, tentu akan menghasilkan suatu dampak yang dapat dirasakan secara menyeluruh.
						Berkembang tidak hanya secara individual, melainkan berkembang dengan seluruh pemangku
						kepentingan.<br/><br/>
						Elaborasi Makna mengajak seluruh elemen dalam menggarap suatu ide yang bernilai menjadi sebuah
						kreasi yang bermanfaat bagi FILKOM, Brawijaya dan Indonesia!<br/><br/>
						<Text weight="bold" size="small" color="acc-9">
							BEM FILKOM 2020 - Bangun Nilai, Cipta Kreasi!
						</Text>
					</Paragraph>
				</Box>
			</Box>
			
			{/*<Box*/}
			{/*	id="sambutan" background="acc-9" direction="row" align="center" justify="center"*/}
			{/*	pad="small"*/}
			{/*	border={{*/}
			{/*		color: "acc-5",*/}
			{/*		size: "large",*/}
			{/*		side: "bottom"*/}
			{/*	}}*/}
			{/*	style={{display: !quickyClosed ? "flex" : "none"}}*/}
			{/*>*/}
			{/*	<Box pad={{horizontal: "small"}}>*/}
			{/*		<Anchor*/}
			{/*			color="acc-3" alignSelf="center" label="⨯" size="xlarge"*/}
			{/*			onClick={() => setQuickyClosed(true)}*/}
			{/*		/>*/}
			{/*	</Box>*/}
			{/*	<Box pad={{horizontal: "small"}}>*/}
			{/*		<Text textAlign="center" weight="bold" color="white">*/}
			{/*			Quick Current Info:*/}
			{/*		</Text>*/}
			{/*	</Box>*/}
			{/*	<Box pad={{top: "xsmall", horizontal: "small"}} align="start" justify="center" alignSelf="center">*/}
			{/*		<Anchor*/}
			{/*			href="https://s.id/oprechology3" label="Open Recruitment Staff Hology 3.0"*/}
			{/*			icon={<LinkNext/>} target="_blank" color="acc-1"*/}
			{/*		/>*/}
			{/*		<Anchor*/}
			{/*			href="http://filkom.ub.ac.id/" label="Merchandise FILKOM UB"*/}
			{/*			icon={<LinkNext/>} target="_blank" color="acc-1"*/}
			{/*		/>*/}
			{/*	</Box>*/}
			{/*</Box>*/}
			
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
						play={1300}
					>
						{[...Array(13)].map((x, i) =>
							<Image key={i} fill fit="contain" src={`/assets/mitra/${i+1}.jpg`}	/>
						)}
					</Carousel>
				</Box>
			</Box>
		</>
	);
};
export default Home;
