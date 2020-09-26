import React from "react";
import { Helmet } from "react-helmet";
import { Box, Heading, Text } from "grommet";
import ButtonPedia from "./buttonpedia";
import LembagaDisplay from "./lembagaDisplay";

const Filkompedia = () => {

    return (
        <Box>
			<Helmet>
				<title>Filkompedia</title>
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
					<Heading className="headingMon" size="34px" level="2" textAlign="center" color="acc-7">
						FILKOMPEDIA
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
				<Box height={{min: "xsmall"}} justify="center" margin={{ top: "50px" }}>
					<Heading className="headingPop" size="medium" level="2" textAlign="center" color="acc-7">
						Organisasi Kemahasiswaaan
					</Heading>
				</Box>
				
				<Box
				direction="row-responsive"
				height={{min: "small"}}
				alignContent="center"
				align="center"
				justify="center"
				background="none"
				margin={{ bottom: "large" }}
				>
					<Box responsive="true" direction="column" round="medium" background="acc-2" margin="large" size="medium" width={{min: "medium"}} height={{min: "medium"}}>
						<Box responsive="true" direction="column" round="medium" background="acc-11" margin="small" size="medium" width={{max: "medium"}} height={{min: "medium"}}>
							<Box direction="column" align="center">
								<Heading className="headingMon" size="medium" level="2" textAlign="center" color="acc-3">
								LO
								</Heading>
							</Box>
							<Box width={{max: "medium"}} direction="column" align="center" pad={{top:"none", bottom:"small", horizontal:"medium"}}>
								<Text className="tupoksiTeks">
								Lembaga Otonom adalah lembaga di FILKOM UB yang berdiri sendiri (independen) dan memerintah sendiri dalam membuat keputusan tanpa diganggu gugat. Lembaga Otonom berhubungan koordinatif konsultatif dengan himpunan dan berpegang teguh pada produk hukum FILKOM UB.
								</Text>
							</Box>
						</Box>
						<Box direction="column" align="center" margin={{ bottom: "medium" }}>
							<Text className="anim" size="xlarge">▼</Text>
							{/* <ButtonPedia text="List LO"></ButtonPedia> */}
						</Box>
					</Box>

					<Box responsive="true" direction="column" round="medium" background="acc-2" margin="large" width={{ min: "medium" }} height={{ min: "medium" }}>
						<Box responsive="true" direction="column" round="medium" background="acc-11" margin="small" size="medium" width={{max: "medium"}} height={{min: "medium"}}>
							<Box direction="column" align="center">
								<Heading className="headingMon" size="medium" level="2" textAlign="center" color="acc-3">
								LSO
								</Heading>
							</Box>
							<Box width={{max: "medium"}} direction="column" align="center" pad={{top:"none", bottom:"small", horizontal:"medium"}}>
								<Text className="tupoksiTeks">
								Lembaga Semi Otonom adalah lembaga yang dibentuk untuk mewadahi mahasiswa FILKOM UB dalam mengembangkan hobi dan minat masing-masing individu di tingkat fakultas. Lembaga ini di monitor oleh LO, berkedudukan dibawah LO dan sudah memiliki struktur organisasi yang jelas.
								</Text>
							</Box>
						</Box>
						<Box direction="column" align="center" margin={{ bottom: "medium" }}>
							<Text className="anim" size="xlarge">▼</Text>
							{/* <ButtonPedia text="List LSO"></ButtonPedia> */}
						</Box>
					</Box>
				</Box>
			</Box>

			<Box
				height={{min: "xsmall"}}
				alignContent="center"
				align="center"
				justify="center"
				background="acc-4"
				round={{ "size": "small", "corner": "bottom" }}
			>
				<Box justify="center">
					<Heading className="headingMon" size="medium" level="2" textAlign="center" color="acc-7">
						Lembaga Otonom
					</Heading>
				</Box>
			</Box>

			<Box height={{min: "medium"}} align="center" justify="center" pad="large" background="acc-8">
				<Box margin={{horizontal:"large", vertical: "none"}}>
					<Box
						direction="row-responsive"
						alignContent="center"
						justify="center"
						wrap
						margin={{horizontal:"55px", vertical: "none"}}
						pad={{horizontal: "medium", vertical: "none"}}
						gap="xsmall"
					>	
						<LembagaDisplay index="0" />
						<LembagaDisplay index="1" />
						<LembagaDisplay index="2" />
						<LembagaDisplay index="3" />
						<LembagaDisplay index="4" />
						<LembagaDisplay index="5" />
						<LembagaDisplay index="6" />
					</Box>
				</Box>
			</Box>


			<Box
				height={{min: "xsmall"}}
				alignContent="center"
				align="center"
				justify="center"
				background="acc-4"
				round={{"size": "small", "corner": "bottom"}}
			>
				<Box justify="center">
					<Heading className="headingMon" size="medium" level="2" textAlign="center" color="acc-7">
						Lembaga Semi Otonom
					</Heading>
				</Box>
			</Box>

			<Box height={{min: "medium"}} align="center" justify="center" pad="large" background="acc-8">
				<Box margin={{horizontal:"large", vertical: "none"}}>
					<Box
						direction="row-responsive"
						alignContent="center"
						justify="center"
						wrap
						margin={{horizontal:"55px", vertical: "none"}}
						pad={{horizontal: "medium", vertical: "none"}}
						gap="xsmall"
					>
						<LembagaDisplay index="7" />
						<LembagaDisplay index="8" />
						<LembagaDisplay index="9" />
						<LembagaDisplay index="10" />
						<LembagaDisplay index="11" />
						<LembagaDisplay index="12" />
						<LembagaDisplay index="13" />
					</Box>
				</Box>
			</Box>
        </Box>
	);
};
export default Filkompedia;
