import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ name }) => {
	return (
		<motion.div
			initial={{ y: -200, opacity: 0 }}
			transition={{ duration: 1.2 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<Box mb="10" textAlign={"center"}>
				<Text
					fontSize={"xl"}
					letterSpacing="20px"
					color={"gray.500"}
					textTransform="uppercase"
					fontWeight={"600"}
				>
					{name}
				</Text>
			</Box>
		</motion.div>
	);
};

export default SectionHeader;
