import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../SectionHeader";

import { skillsData } from "../../common/data";
import { motion } from "framer-motion";

const Skills = () => {
	return (
		<Box
			as="section"
			id="skills"
			className="section-padding"
			backgroundColor={`${"var(--main-bg)"}`}
			zIndex={2}
			position="relative"
		>
			<Container maxW={"6xl"}>
				<SectionHeader name={"Skills"} />
				<Flex
					marginTop="3rem"
					flexDirection={"row"}
					alignItems="center"
					justifyContent={"center"}
				>
					<motion.div className="app__skills-list">
						{skillsData.map((skill) => (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-item app__flex"
								key={skill.id}
							>
								<div
									className="app__flex"
									style={{ backgroundColor: skill.bgColor }}
								>
									<img src={skill.img} alt={skill.name} />
									<Box
										position={"absolute"}
										top="0"
										left={0}
										fontSize={"xl"}
										fontWeight="bold"
										color={"black"}
										width="100%"
										height={"100%"}
										rounded="full"
										display={"flex"}
										alignItems="center"
										justifyContent={"center"}
										opacity="0"
									>
										{skill.exp}
									</Box>
								</div>
								<p className="p-text">{skill.name}</p>
							</motion.div>
						))}
					</motion.div>
				</Flex>
			</Container>
		</Box>
	);
};

export default Skills;
