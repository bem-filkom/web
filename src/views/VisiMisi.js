import React from "react";
import {Helmet} from "react-helmet";
import {Box, Heading, Image, Text} from "grommet";

const VisiMisi = () => {
	return (
		<Box>
			<Helmet>
				<title>Visi & Misi</title>
			</Helmet>
			<Box
				direction="row-responsive"
				height={{min: "small"}}
				alignContent="center"
				align="center"
				justify="center"
				pad="large"
				border={{
					color: "acc-5",
					size: "large",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box width="medium" justify="center" align="center" alignSelf="center">
					<Image
						style={{maxHeight: "250px"}}
						fit="contain"
						src="/assets/logotext.png"
					/>
				</Box>
				<Box width={{max: "large"}} justify="center">
					<Heading size="medium" level="2" textAlign="center">
						Visi-Misi BEM FILKOM UB <br/> Elaborasi Makna
					</Heading>
				</Box>
			</Box>
			
			<Box
				direction="row-responsive"
				height={{min: "300px"}}
				align="center"
				justify="center"
				background="acc-2"
				pad="xlarge"
				border={{
					color: "acc-5",
					size: "large",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box width="medium" justify="center" align="center" alignSelf="center">
					<Box background="acc-1" round="small" margin="large">
						<Heading size="xlarge" level="2" margin="25px">
							VISI
						</Heading>
					</Box>
				</Box>
				<Box
					alignSelf="center"
					justify="center"
					width={{max: "500px"}}
				>
					<Text size="large">
						BEM FILKOM sebagai wadah dalam membangun nilai instrumental
						mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi
						FILKOM dan Indonesia.
					</Text>
				</Box>
			</Box>
			
			<Box
				direction="row-responsive"
				alignContent="center"
				align="start"
				justify="center"
				pad="xlarge"
			>
				<Box width="medium" justify="start" align="center" alignSelf="center">
					<Box background="acc-1" round="small" margin="medium">
						<Heading size="xlarge" level="2" margin="25px">
							MISI
						</Heading>
					</Box>
				</Box>
				<Box
					width={{max: "500px"}}
					align="start"
					alignSelf="center"
				>
					<Text size="medium">
						<ol>
							<li className="space-li space-li-top">
								Membangun iklim internal BEM FILKOM UB yang <b> inklusif </b>
								dan <b> profesional </b> bernafaskan kekeluargaan.
							</li>
							<li className="space-li">
								<b>Bekerja</b> sama secara <b>dinamis</b> dengan seluruh
								pemangku kepentingan demi terciptanya kreasi jangka panjang dan
								berkelanjutan.
							</li>
							<li className="space-li">
								<b>Inisiator pergerakan</b> mahasiswa yang peka terhadap isu
								sosial-politik.
							</li>
							<li className="space-li">
								Melakukan <b>pengembangan</b> kemahasiswaan yang <b>suportif</b>{" "}
								dan komprehensif guna tercapainya aktualisasi diri dan prestasi
								mahasiswa.
							</li>
							<li className="space-li">
								Optimalisasi <b>pelayanan</b> advokasi <b>aktif progresif</b>{" "}
								terkait dengan kebutuhan dan kesejahteraan mahasiswa.
							</li>
						</ol>
					</Text>
				</Box>
			</Box>
			
			<Box
				background="acc-1"
				align="center"
				justify="center"
				pad={{top: "large"}}
				border={{
					color: "acc-5",
					size: "large",
					style: "solid",
					side: "top",
				}}
			>
				<Box justify="center" align="center">
					<Heading textAlign="center" size="xlarge" level="2">
						ARAH GERAK
					</Heading>
				</Box>
			</Box>
			<Box
				background="acc-1"
				align="center"
				justify="center"
				pad={{bottom: "large"}}
				border={{
					color: "acc-5",
					size: "large",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box
					direction="row-responsive"
					width={{max: "768px"}}
					alignSelf="center"
					align="start"
					justify="center"
					gap="medium"
				>
					<Box width={{min: "100px"}} justify="start" align="center" margin="medium">
						<Box className="boxAG" round="small" pad="small" background="acc-8">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag1.png"
							/>
						</Box>
						<Text size="small" textAlign="center" weight="bold">
							<p>INKLUSIF PROFESIONAL</p>
						</Text>
					</Box>
					<Box width={{min: "100px"}} justify="start" align="center" margin="medium">
						<Box className="boxAG" round="small" pad="small" background="acc-8">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag2.png"
							/>
						</Box>
						<Text size="small" textAlign="center" weight="bold">
							<p>BEKERJASAMA DINAMIS</p>
						</Text>
					</Box>
					<Box width={{min: "100px"}} justify="start" align="center" margin="medium">
						<Box className="boxAG" round="small" pad="small" background="acc-8">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag3.png"
							/>
						</Box>
						<Text size="small" textAlign="center" weight="bold">
							<p>INISIATOR PERGERAKAN</p>
						</Text>
					</Box>
					<Box width={{min: "100px"}} justify="start" align="center" margin="medium">
						<Box className="boxAG" round="small" pad="small" background="acc-8">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag4.png"
							/>
						</Box>
						<Text size="small" textAlign="center" weight="bold">
							<p>PENGEMBANGAN SUPORTIF</p>
						</Text>
					</Box>
					<Box width={{min: "100px"}} justify="start" align="center" margin="medium">
						<Box className="boxAG" round="small" pad="small" background="acc-8">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag5.png"
							/>
						</Box>
						<Text size="small" textAlign="center" weight="bold">
							<p>PELAYANAN AKTIF PROGRESIF</p>
						</Text>
					</Box>
				</Box>
			</Box>
			
			<Box
				fill="horizontal"
				justify="center"
				align="center"
				pad="xlarge"
				gap="medium"
			>
				<Text size="medium" textAlign="center"><i>ELABORASI MAKNA</i></Text>
				<Text size="xxlarge" weight="bold" textAlign="center">BANGUN NILAI, CIPTA KREASI!</Text>
			</Box>
		</Box>
	);
};
export default VisiMisi;