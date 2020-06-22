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
				justify="center"
				border={{
					color: "acc-5",
					size: "medium",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box basis="1/2" justify="center" align="center" pad="medium">
					<Image
						style={{maxWidth: "250px"}}
						fill
						fit="contain"
						src="/assets/logotext.png"
					/>
				</Box>
				<Box basis="1/2" justify="center" pad={{"horizontal": "large"}}>
					<Heading size="medium" level="2" textAlign="center">
						VISI-MISI BEM FILKOM UB <br/> Elaborasi Makna
					</Heading>
				</Box>
				<Box className="relatify" responsive="true" width="small" alignContent="center" justify="center"
				     align="center"></Box>
			</Box>
			
			<Box
				direction="row-responsive"
				height={{min: "300px"}}
				alignContent="center"
				justify="center"
				background="acc-2"
			>
				<Box basis="1/2" justify="center" align="center" pad={{vertical: "large", horizontal: "medium"}}>
					<Box background="acc-1" round="small">
						<Heading size="xlarge" level="2" margin="25px">
							VISI :
						</Heading>
					</Box>
				</Box>
				<Box
					basis="1/2"
					justify="center"
					pad="large"
				>
					<Text size="large">
						BEM FILKOM sebagai wadah dalam membangun nilai instrumental
						mahasiswa yang tepat sasaran demi terciptanya kreasi bermakna bagi
						FILKOM dan Indonesia.
					</Text>
				</Box>
				<Box className="relatify" responsive="true" width="small" alignContent="center" justify="center"
				     align="center"></Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{min: "300px"}}
				alignContent="center"
				justify="center"
				border={{
					color: "light-3",
					size: "medium",
					style: "solid",
					side: "bottom",
				}}
			>
				<Box basis="1/2" justify="center" align="center" pad={{vertical: "large", horizontal: "medium"}}>
					<Box background="acc-1" round="small">
						<Heading size="xlarge" level="2" margin="25px">
							MISI :
						</Heading>
					</Box>
				</Box>
				<Box
					basis="1/2"
					justify="center"
					pad="large"
				>
					<Text size="medium">
						<ol>
							<li className="space-li space-li-top">
								Membangun iklim internal BEM FILKOM UB yang <b> inklusif </b>
								dan
								<b> profesional </b> bernafaskan kekeluargaan.
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
				<Box className="relatify" responsive="true" width="small" alignContent="center" justify="center"
				     align="center"></Box>
			</Box>
			
			<Box
				direction="row-responsive"
				height={{min: "medium"}}
				height="small"
				pad={{top: "medium"}}
				alignContent="center"
				justify="center"
				border={{
					color: "acc-5",
					size: "medium",
					style: "solid",
					side: "top",
				}}
			>
				<Box justify="center" align="center">
					<Heading textAlign="center" size="xlarge" level="2">
						ARAH
						<br/>
						GERAK:
					</Heading>
				</Box>
			</Box>
			<Box
				height={{min: "medium"}}
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
					direction="row-responsive"
					width={{max: "768px"}}
					alignSelf="center"
					gap="xlarge"
				>
					<Box width="140px" justify="center" align="center">
						<Box className="boxAG" round="small" pad="small">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag1.png"
							/>
						</Box>
						<Text size="medium" textAlign="center">
							<p>INKLUSIF PROFESIONAL</p>
						</Text>
					</Box>
					<Box width="140px" justify="center" align="center">
						<Box className="boxAG" round="small" pad="small">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag2.png"
							/>
						</Box>
						<Text size="medium" textAlign="center">
							<p>BEKERJASAMA DINAMIS</p>
						</Text>
					</Box>
					<Box width="140px" justify="center" align="center">
						<Box className="boxAG" round="small" pad="small">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag3.png"
							/>
						</Box>
						<Text size="medium" textAlign="center">
							<p>INISIATOR PERGERAKAN</p>
						</Text>
					</Box>
					<Box width="140px" justify="center" align="center">
						<Box className="boxAG" round="small" pad="small">
							<Image
								style={{maxWidth: "140px", maxHeight: "140px"}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag4.png"
							/>
						</Box>
						<Text size="medium" textAlign="center">
							<p>PENGEMBANGAN SUPORTIF</p>
						</Text>
					</Box>
					<Box width="140px" justify="center" align="center">
						<Box className="boxAG" round="small" pad="small">
							<Image
								style={{
									maxWidth: "140px",
									maxHeight: "140px",
									padding: "12px 12px 12px 0px",
								}}
								fill
								fit="contain"
								src="/assets/arahGerak/ag5.png"
							/>
						</Box>
						<Text size="medium" textAlign="center">
							<p>PELAYANAN AKTIF PROGRESIF</p>
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				direction="row-responsive"
				height={{min: "medium"}}
				justify="center"
				align="center"
			>
				<Box
					fill="horizontal"
					justify="center"
					align="center"
					pad="large"
					height={{min: "medium"}}
				>
					<Text size="large">/ ELABORASI MAKNA /</Text>
					<Heading textAlign="center">BANGUN NILAI, CIPTA KREASI!</Heading>
				</Box>
			</Box>
		</Box>
	);
};
export default VisiMisi;