import { Box, Container, Flex, Link } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "../SectionHeader";

const Contact = () => {
	return (
		<>
			<Box
				as="section"
				id="contact"
				className="section-padding"
				zIndex={2}
				position="relative"
			>
				<Container maxW={"6xl"}>
					<SectionHeader name={"Get in Touch"} />
					<Flex alignItems={"center"} mt="24" justifyContent="space-evenly">
						<Flex
							boxShadow={`${"var(--box-shadow)"}`}
							p="5"
							alignItems={"center"}
							gap="3"
						>
							<Box
								as="i"
								fontSize={["md", "lg", "xl"]}
								className="bx bx-envelope"
								color={`${"var(--main-color)"}`}
							/>
							<Link
								fontSize={["md", "lg", "xl"]}
								href="mailto:ms5325749@gmail.com"
							>
								ms5325749@gmail.com
							</Link>
						</Flex>
						<Flex
							boxShadow={`${"var(--box-shadow)"}`}
							p="5"
							alignItems={"center"}
							gap="3"
						>
							<Box
								as="i"
								fontSize={["md", "lg", "xl"]}
								className="bx bxl-whatsapp"
								color={`${"var(--main-color)"}`}
							/>
							<Link
								fontSize={["md", "lg", "xl"]}
								href="https://wa.me/+201030843276"
								target={"_blank"}
							>
								+201030843276
							</Link>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default Contact;
