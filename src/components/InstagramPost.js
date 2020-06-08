import React, {useState, useEffect} from "react";
import {Box, Heading, Anchor, Text} from "grommet";
import {Instagram, Update} from "grommet-icons";

const InstagramPost = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			const result = await fetch("https://cors-anywhere.herokuapp.com/https://bemfilkom.ub.ac.id/secure/api/instapost/?username=bemfilkomub", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});
			let res = await result.json();
			setData(res);
			console.log(data);
			setIsLoading(false);
		}
		
		fetchData();
	}, []);
	
	return (
		<Box
			direction="column"
			background="acc-2"
			align="center"
			justify="center"
			pad={{"vertical": "large", "horizontal": "large"}}
		>
			<Heading align="center" level="2" size="medium">
				Berita Terbaru
			</Heading>
			<Text textAlign="center" margin={{"bottom": "medium"}} color="dark-2" size="medium" alignSelf="center">
				{isLoading ? (
					<span>
						<Anchor target="_blank" color="dark-2" href="https://www.instagram.com/bemfilkomub/">
							@bemfilkomub
						</Anchor>&nbsp;&nbsp;|&nbsp;&nbsp;Followers: ///&nbsp;&nbsp;|&nbsp;&nbsp;
						Following: ///&nbsp;&nbsp;|&nbsp;&nbsp;Total Post: ///
					</span>
				) : (
					<span>
						<Anchor target="_blank" color="dark-2" href="https://www.instagram.com/bemfilkomub/">
							@bemfilkomub
						</Anchor>&nbsp;&nbsp;|&nbsp;&nbsp;
						Followers: {data.followers}&nbsp;&nbsp;|&nbsp;&nbsp;Following: {data.following}
						&nbsp;&nbsp;|&nbsp;&nbsp;Total Post: {data.totalPost}
					</span>
				)}
			</Text>
			<Box
				direction="row-responsive"
				margin={{"top": "medium"}}
				justify="evenly"
				wrap
				width={{"max": "large"}}
			>
				{isLoading ? (
					<Box animation="jiggle" alignSelf="center">
						<Text color="dark-1" size="xlarge" alignSelf="center">
							<Update color="dark-1"/> fetching...
						</Text>
					</Box>
				) : (
					data.posts.map((item, index) => (
						<Anchor
							key={index} target="_blank" href={item.link} margin="medium" className="ig-post"
							title={item.title}
						>
							<Box
								direction="row"
								background={{
									"position": "center",
									"repeat": "no-repeat",
									"size": "cover",
									"image": `url("${item.thumbnail}")`
								}}
								width="small"
								height="small"
							/>
							<Box
								background="accent-2"
								width="small"
								pad="medium"
							>
								<Text className="instapost-title" size="xsmall">{item.title}</Text>
								<Text margin={{"top": "small"}} weight="normal" size="xsmall">{item.date}</Text>
							</Box>
						</Anchor>
					))
				)}
			</Box>
			<Anchor
				margin="large"
				color="neutral-4"
				href="https://www.instagram.com/bemfilkomub/"
				label="Ikuti kami agar tidak ketinggalan info! &#187;"
				target="_blank"
				icon={<Instagram/>}
			/>
		</Box>
	);
};
export default InstagramPost;