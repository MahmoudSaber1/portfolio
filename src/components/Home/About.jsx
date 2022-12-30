import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { images } from "../../assets/index";
import SectionHeader from "../SectionHeader";

const About = () => {
	return (
		<Box
			as="section"
			id="about"
			className="section-padding"
			backgroundColor={`${"var(--main-bg)"}`}
			zIndex={2}
			position="relative"
		>
			<Container maxW={"6xl"}>
				<SectionHeader name={"About"} />
				<Flex
					flexDirection={["column", "column", "row"]}
					gap="10"
					alignItems={["center", "center", "flex-start"]}
				>
					<motion.img
						initial={{ x: -200, opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						src={images.myPhoto1}
						className="aboutImage"
					/>
					<motion.div
						initial={{ x: 200, opacity: 0 }}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<Flex
							flexDirection={"column"}
							gap="5"
							alignItems={"flex-start"}
							justifyContent="center"
						>
							<Heading fontWeight={"semibold"} fontSize={["sm", "xl", "4xl"]}>
								Here is a{" "}
								<Text
									as="span"
									textDecoration={"underline"}
									textDecorationColor={`${"var(--main-color)"}`}
								>
									little
								</Text>{" "}
								background
							</Heading>
							<Text
								fontSize={["sm", "md", "1rem"]}
								textTransform="capitalize"
								lineHeight="1.5"
							>
								Hi, I{"'"}m Mahmoud Saber 💝 <br /> My journey started since
								late 2019, I have a passion for most aspects of computer related
								departments as I learned JavaScript and dealing with OOP,
								software design patterns, and solid principles using JavaScript
								Building a website with React.js Networking Basics Basics of
								building operating systems Dealing with the operating system via
								the command line using bash and patch scripts I am interested in
								the field of penetration testing, I am currently working as a
								front end developer using JavaScript And React.js I am also
								interested to learn Backend Developer Using Node.js
							</Text>
						</Flex>
					</motion.div>
				</Flex>
			</Container>
		</Box>
	);
};

export default About;
