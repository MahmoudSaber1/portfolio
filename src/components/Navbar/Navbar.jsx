import React, { useEffect } from "react";

import {
	VStack,
	Flex,
	Container,
	Box,
	Link,
	Heading,
	Text,
} from "@chakra-ui/react";

import ThemeMenu from "./ThemeMenu";
import { SocialIcon } from "react-social-icons";
import { socialIcon } from "../../common/data";
import { motion } from "framer-motion";

const Navbar = () => {
	const mainColor = `${"var(--main-color)"}`;

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const y = window.scrollY;
			if (y >= 10) {
				document.querySelector("header").classList.add("active");
			} else {
				document.querySelector("header").classList.remove("active");
			}
		});
	}, []);

	return (
		<>
			<header className="navigation">
				<VStack
					alignItems={"center"}
					backgroundColor={`${"var(--second-bg)"}`}
					justifyContent={"center"}
					h={`${"var(--nav-height)"}`}
				>
					<Container maxW={"6xl"}>
						<Flex
							alignItems={"center"}
							flexDirection={["column", "row", "row"]}
							gap={["2", "1", "0"]}
							justifyContent={"space-between"}
						>
							{/* Logo */}
							<motion.div
								initial={{ x: -500, opacity: 0, scale: 0.5 }}
								animate={{ x: 0, opacity: 1, scale: 1 }}
								transition={{ duration: 1.2 }}
							>
								<Link to="/" color={"inherit"}>
									<Flex alignItems={"center"} justifyContent={"center"} gap="1">
										<Box
											color={mainColor}
											fontSize={["1.2rem", "1.5rem", "1.7rem"]}
											className="bx bxl-gmail"
										></Box>
										<Heading
											fontSize={["sm", "lg", "xl"]}
											display="flex"
											gap={"1"}
											letterSpacing="1px"
											fontWeight={"600"}
										>
											Mahmoud <Text color={mainColor}>Saber</Text>
										</Heading>
									</Flex>
								</Link>
							</motion.div>
							{/* User */}
							<motion.div
								initial={{ x: 500, opacity: 0, scale: 0.5 }}
								animate={{ x: 0, opacity: 1, scale: 1 }}
								transition={{ duration: 1.2 }}
							>
								<Flex alignItems={"center"} gap="2">
									{socialIcon.map((icon) => (
										<React.Fragment key={icon.id}>
											<SocialIcon
												url={icon.url}
												style={{ height: 28, width: 28 }}
												network={icon.name}
												target="_blank"
												bgColor={icon.color}
											/>
										</React.Fragment>
									))}
									<Box>
										<ThemeMenu />
									</Box>
								</Flex>
							</motion.div>
						</Flex>
					</Container>
				</VStack>
			</header>
		</>
	);
};

export default Navbar;
