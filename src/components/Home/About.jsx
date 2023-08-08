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
								Front-end developer with 2 years experience in HTML, JavaScript,
								skilled in modern frameworks React.js, Next.js, Redux Toolkit,
								experienced in building dynamic web applications with attractive
								UIs using responsive design techniques. Proficient in state
								management with Redux and server communication with Axios.
								Strong knowledge of TypeScript for code quality and
								maintainability. Passionate about staying up-to-date with
								front-end development and best practices
							</Text>
						</Flex>
					</motion.div>
				</Flex>
			</Container>
		</Box>
	);
};

export default About;
