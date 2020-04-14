import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image, Text} from "grommet";

const VisiMisi = () => {
	return (
		<>
			<Helmet>
				<title>Visi & Misi</title>
			</Helmet>
			<Box
				direction="row-responsive"
				height={{"min": "small"}}
				alignContent="center"
				justify="center"
				border={{
					"color": "dark-1",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Box basis="1/3" justify="center" align="center" background="light-4" pad="medium">
					<Image style={{"maxWidth": "250px"}} fill fit="contain" src="/assets/logotext.png"/>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="large" background="accent-1">
					<Heading textAlign="center" level="1" margin="small">VISI-MISI BEM FILKOM UB</Heading>
					<Heading size="small" level="2" margin="small">Elaborasi Makna</Heading>
				</Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				border={{
					"color": "light-3",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Box basis="1/3" justify="center" align="center" background="accent-2" pad="medium">
					<Heading size="xlarge" level="2">VISI:</Heading>
				</Box>
				<Box
					height={{"min": "medium"}} basis="2/3" justify="center" align="center" pad="xlarge"
					background="brand"
				>
					<Text size="large">
						BEM FILKOM sebagai wadah dalam membangun nilai instrumental
						mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi FILKOM dan
						Indonesia.
					</Text>
				</Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				border={{
					"color": "light-3",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Box basis="1/3" justify="center" align="center" background="brand" pad="medium">
					<Heading size="xlarge" level="2">MISI:</Heading>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="xlarge" background="accent-2">
					<Text size="medium">
						<ol>
							<li>Membangun iklim internal BEM FILKOM UB yang inklusif dan profesional
								bernafaskan kekeluargaan.
							</li>
							<li>Bekerja sama secara dinamis dengan seluruh pemangku kepentingan demi
								terciptanya kreasi jangka panjang dan berkelanjutan.
							</li>
							<li>
								Inisiator pergerakan mahasiswa yang peka terhadap isu sosial-politik.
							</li>
							<li>
								Melakukan pengembangan kemahasiswaan yang suportif dan komprehensif
								guna tercapainya aktualisasi diri dan prestasi mahasiswa.
							</li>
							<li>Optimalisasi pelayanan advokasi aktif progresif terkait dengan kebutuhan dan
								kesejahteraan mahasiswa.
							</li>
						</ol>
					</Text>
				</Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
				border={{
					"color": "light-3",
					"size": "medium",
					"style": "solid",
					"side": "bottom"
				}}
			>
				<Box basis="1/3" justify="center" align="center" background="accent-2" pad="medium">
					<Heading textAlign="center" size="xlarge" level="2">ARAH<br/>GERAK:</Heading>
				</Box>
				<Box basis="2/3" justify="center" align="center" pad="xlarge" background="brand">
					<Text size="large">
						<ol>
							<li>INKLUSIF PROFESIONAL</li>
							<li>
								BEKERJASAMA DINAMIS
							</li>
							<li>
								INISIATOR PERGERAKAN
							</li>
							<li>
								PENGEMBANGAN SUPORTIF
							</li>
							<li>
								PELAYANAN AKTIF PROGRESIF
							</li>
						</ol>
					</Text>
				</Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{"min": "medium"}}
				alignContent="center"
				justify="center"
			>
				<Box
					fill="horizontal" justify="center" align="center" pad="large" background="accent-3"
					height={{"min": "medium"}}
				>
					<Text size="large">/ ELABORASI MAKNA /</Text>
					<Heading>BANGUN NILAI, CIPTA KREASI!</Heading>
				</Box>
			</Box>
		</>
	);
};
export default VisiMisi;
