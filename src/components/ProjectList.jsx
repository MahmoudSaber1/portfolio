import { Box } from "@chakra-ui/react";
import React from "react";

export default function ProjectList({ id, title, active, setSelected }) {
	return (
		<Box
			as="li"
			className={active ? "portfolioList active" : "portfolioList"}
			onClick={() => setSelected(id)}
		>
			{title}
		</Box>
	);
}
