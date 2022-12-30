import {
	Alert,
	AlertIcon,
	Badge,
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";

import {
	HTMLCSS,
	Javascript,
	Reactjs,
	Nextjs,
	MernStack,
} from "../../common/data";
import ProjectList from "../ProjectList";
import { SocialIcon } from "react-social-icons";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Pagination } from "@mui/material";

const Projects = () => {
	const [selected, setSelected] = useState("HTMLCSS");
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const list = [
		{
			id: "HTMLCSS",
			title: "HTML & CSS",
		},
		{
			id: "JavaScript",
			title: "JavaScript",
		},
		{
			id: "Reactjs",
			title: "Reactjs",
		},
		{
			id: "Nextjs",
			title: "Nextjs",
		},
		{
			id: "MernStack",
			title: "MernStack",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "HTMLCSS":
				setData(HTMLCSS);
				break;
			case "JavaScript":
				setData(Javascript);
				break;
			case "Reactjs":
				setData(Reactjs);
				break;
			case "Nextjs":
				setData(Nextjs);
				break;
			case "MernStack":
				setData(MernStack);
				break;
			default:
				setData(HTMLCSS);
		}
	}, [selected]);

	const theme = createTheme();

	return (
		<section id="projects" className="portfolio section-padding">
			<Container maxW={"6xl"}>
				<SectionHeader name={"Projects"} />
				<Box as="ul">
					{list.map((item) => (
						<React.Fragment key={item.id}>
							<ProjectList
								title={item.title}
								active={selected === item.id}
								setSelected={setSelected}
								id={item.id}
								link={item.link}
							/>
						</React.Fragment>
					))}
				</Box>
				{data?.length > 0 ? (
					<>
						<Box className="grid-3" gap={"5"}>
							{data.slice((page - 1) * 3, (page - 1) * 3 + 3).map((da) => (
								<Box
									boxShadow={"0px 5px 15px rgba(0,0,0,0.3)"}
									transition="0.5s"
									borderRadius="10px"
									key={da.id}
									h="fit-content"
									_hover={{
										transform: "scale(1.05)",
									}}
								>
									<Image
										src={da.img}
										w="100%"
										height={["100px", "150px", "250px"]}
										objectFit="cover"
										borderRadius="10px 10px 0 0"
									/>
									<Flex flexDirection={"column"} px="8" py="5">
										<Heading fontSize={["md", "xl", "3xl"]}>{da.title}</Heading>
										<Text
											my="3"
											fontSize={"md"}
											fontStyle="italic"
											color={`${"var(--main-color)"}`}
											fontWeight="600"
										>
											{da.category}
										</Text>
										<Flex alignItems={"center"} gap="2">
											{da.tech.map((img, index) => (
												<Image src={img} key={index} w="24px" h="24px" />
											))}
										</Flex>
										<Flex
											my="3"
											alignItems={"center"}
											justifyContent="space-between"
										>
											{da.date.map((date, index) => (
												<Text fontSize={"md"} key={index} fontWeight="500">
													{date}
												</Text>
											))}
										</Flex>
										<Text
											fontSize={"sm"}
											fontWeight="300"
											textTransform={"capitalize"}
											lineHeight="1.5"
										>
											{da.description.split(" ").slice(0, 13).join(" ")}...
										</Text>
										<Flex
											mt="3"
											alignItems={"center"}
											justifyContent="space-between"
										>
											{da.github ? (
												<SocialIcon
													url={da.github}
													target="_blank"
													bgColor="gray"
													style={{ width: "24px", height: "24px" }}
												/>
											) : (
												<Badge colorScheme={"red"}>{da.private}</Badge>
											)}

											<SocialIcon
												url={da.demo}
												target="_blank"
												style={{ width: "24px", height: "24px" }}
											/>
										</Flex>
									</Flex>
								</Box>
							))}
						</Box>
						<ThemeProvider theme={theme}>
							{data?.length < 3 ? null : (
								<Pagination
									count={(data?.length / 3).toFixed(0)}
									style={{
										padding: 20,
										width: "100%",
										display: "flex",
										justifyContent: "center",
									}}
									variant="outlined"
									shape="rounded"
									color="primary"
									onChange={(_, value) => {
										setPage(value);
										window.scroll(0, 1340);
									}}
								/>
							)}
						</ThemeProvider>
					</>
				) : (
					<Alert status="warning" textTransform={"capitalize"} color={"black"}>
						<AlertIcon />
						No projects have been added yet
					</Alert>
				)}
			</Container>
		</section>
	);
};

export default Projects;
