import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	const mainColor = `${"var(--main-color)"}`;

	return (
		<>
			<Flex
				alignItems={"center"}
				justifyContent={"center"}
				py={"5"}
				fontSize={["lg", "xl", "2xl"]}
				backgroundColor={`${"var(--main-bg)"}`}
				textAlign="center"
			>
				<Text fontSize={["sm", "md", "lg"]}>
					All Right Reserved &copy;{" "}
					<Text as="span" color={mainColor} fontWeight="600">
						Mahmoud Saber
					</Text>{" "}
				</Text>
			</Flex>
		</>
	);
};

export default Footer;
