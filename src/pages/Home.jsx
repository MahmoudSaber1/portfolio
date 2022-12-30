import { Box, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { dotsIcon } from "../common/data";
import {
	About,
	Contact,
	Hero,
	Projects,
	Skills,
	Testmonials,
} from "../components";

const Home = () => {
	return (
		<>
			{/* Hero */}
			<Hero />
			{/* About */}
			<About />
			{/* Projects */}
			<Projects />
			{/* Skills */}
			<Skills />
			{/* Testmonilas */}
			<Testmonials />
			{/* Contact Us */}
			<Contact />

			{/* Container Dot's */}
			<Box
				position={"fixed"}
				minW="100%"
				minH={"100vh"}
				left={["90.7%", "90.7%", "96.7%"]}
				top={"50%"}
				zIndex={9}
				translateY={"-50%"}
			>
				{dotsIcon.map((icon) => (
					<React.Fragment key={icon.id}>
						<Tooltip
							label={icon.label}
							hasArrow
							bg={`${"var(--main-color)"}`}
							color="white"
							placement="left"
						>
							<Link href={icon.to}>
								<Box
									w={"32px"}
									h="32px"
									mb="2"
									backgroundColor={`${"var(--main-color)"}`}
									display="flex"
									alignItems={"center"}
									justifyContent="center"
									rounded={"full"}
									cursor="pointer"
								>
									<Box
										as="i"
										fontSize={"xl"}
										color={`${"var(--txt-white)"}`}
										className={`bx ${icon.icon}`}
									/>
								</Box>
							</Link>
						</Tooltip>
					</React.Fragment>
				))}
			</Box>
		</>
	);
};

export default Home;
