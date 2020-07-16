import React, {useState, useEffect} from "react";
import {Box, Heading, Anchor, Text} from "grommet";
import {Instagram, Update} from "grommet-icons";

const InstagramPost = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			// const result = await fetch("https://cors-anywhere.herokuapp.com/https://bemfilkom.ub.ac.id/secure/api/instapost/?username=bemfilkomub", {
			const result = await fetch(atob("aHR0cHM6Ly9iZW1maWxrb20udWIuYWMuaWQvc2VjdXJlL2FwaS9pbnN0YXBvc3QvP3VzZXJuYW1lPWJlbWZpbGtvbXVi"), {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});
			let res = await result.json();
			setData(res);
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
			border={{
				color: "acc-5",
				size: "large",
				side: "bottom"
			}}
		>
			<Heading align="center" level="2" size="large">
				Kabar Terbaru
			</Heading>
			<Text textAlign="center" margin={{"bottom": "medium"}} color="dark-2" size="medium" alignSelf="center">
				{isLoading ? (
					<span>
						<Anchor target="_blank" color="acc-9" href="https://www.instagram.com/bemfilkomub/">
							@bemfilkomub
						</Anchor>&nbsp;&nbsp;|&nbsp;&nbsp;Followers: -&nbsp;&nbsp;|&nbsp;&nbsp;
						Following: -&nbsp;&nbsp;|&nbsp;&nbsp;Total Post: -
					</span>
				) : (
					<span>
						<Anchor target="_blank" color="acc-9" href="https://www.instagram.com/bemfilkomub/">
							@bemfilkomub
						</Anchor>&nbsp;&nbsp;|&nbsp;&nbsp;
						Followers: <b>{data.followers}</b>&nbsp;&nbsp;|&nbsp;&nbsp;Following: <b>{data.following}</b>
						&nbsp;&nbsp;|&nbsp;&nbsp;Total Post: <b>{data.totalPost}</b>
					</span>
				)}
			</Text>
			<Box
				direction="row-responsive"
				margin={{"top": "medium"}}
				justify="center"
				align="center"
				wrap
				width={{"max": "large"}}
			>
				{isLoading ? (
					<Box animation="pulse" alignSelf="center">
						<Text color="dark-1" size="large" alignSelf="center">
							<Update size="small" color="dark-1"/> fetching
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
								background="acc-9"
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
				alignSelf="center"
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