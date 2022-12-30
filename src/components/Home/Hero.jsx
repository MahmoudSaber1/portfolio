import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { images } from "../../assets/index";
import { motion } from "framer-motion";

const Hero = () => {
	const textColor = `${"var(--txt-color)"}`;
	const [text] = useTypewriter({
		words: [
			"Hi, My Name's Mahmoud Saber",
			"React Developer",
			"Web Designer",
			"<LovesCodeMore />",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<section id="hero">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 2 }}
			>
				<Box
					height={`${"calc(100vh - 64px)"}`}
					display="flex"
					flexDirection={"column"}
					justifyContent="center"
					alignItems={"center"}
					textAlign="center"
					overflow={"hidden"}
					gap="8"
				>
					<Image
						position={"relative"}
						rounded="full"
						h="24"
						w="24"
						mx={"auto"}
						objectFit="cover"
						src={images.myPhoto}
						alt="image"
					/>
					<Box zIndex={20}>
						<Heading
							as="h2"
							fontSize={["12px", "sm"]}
							textTransform="uppercase"
							color={textColor}
							pb="2"
							letterSpacing={"12px"}
						>
							Frontend Developer
						</Heading>
						<Box
							display={"flex"}
							fontSize={["lg", "xl", "5xl", "6xl"]}
							alignItems="center"
							justifyContent={"center"}
						>
							<Heading
								as="h1"
								className="blue_text-gradient"
								textColor="inherit"
								lineHeight={"20px"}
								textTransform="capitalize"
								letterSpacing={"2px"}
								fontSize={["lg", "xl", "5xl", "6xl"]}
							>
								<Text
									as="span"
									className="blue_text-gradient mr-2"
									fontWeight={"semibold"}
								>
									{text}
								</Text>
							</Heading>
							<Cursor cursorColor={`${"var(--main-color)"}`} />
						</Box>
						<Box display={"flex"} alignItems="center" justifyContent={"center"}>
							<Link
								href={"../../assets/Mahmoud's Resume.pdf"}
								download
								target={"_blank"}
							>
								<Text
									border={`1px solid  ${"var(--main-color)"}`}
									fontSize={["md", "lg", "xl"]}
									p={["1", "2"]}
									w="fit-content"
									borderRadius={"md"}
									color={`${"var(--txt-color)"}`}
									transition="0.5s"
									_hover={{
										backgroundColor: `${"var(--main-color)"}`,
										color: "white",
									}}
								>
									Download CV
								</Text>
							</Link>
						</Box>
					</Box>
				</Box>
			</motion.div>
		</section>
	);
};

export default Hero;
