import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { setColor, setMode } from "../../store/PortfolioSlice/ThemeSlice";

// Settings
const mode_settings = [
	{
		id: "light",
		name: "Light",
		background: "light-background",
		class: "theme-mode-light",
	},
	{
		id: "dark",
		name: "Dark",
		background: "dark-background",
		class: "theme-mode-dark",
	},
];

const color_settings = [
	{
		id: "blue",
		name: "Blue",
		background: "blue-color",
		class: "theme-color-blue",
	},
	{
		id: "cyan",
		name: "Cyan",
		background: "cyan-color",
		class: "theme-color-cyan",
	},
	// {
	// 	id: "green",
	// 	name: "Green",
	// 	background: "green-color",
	// 	class: "theme-color-green",
	// },
	// {
	// 	id: "orange",
	// 	name: "Orange",
	// 	background: "orange-color",
	// 	class: "theme-color-orange",
	// },
];

const clickOutsideRef = (content_ref, toggle_ref) => {
	document.addEventListener("mousedown", (e) => {
		// user click toggle
		if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
			content_ref.current.classList.toggle("active");
		} else {
			// user click outside toggle and content
			if (content_ref.current && !content_ref.current.contains(e.target)) {
				content_ref.current.classList.remove("active");
			}
		}
	});
};

const ThemeMenu = () => {
	const mainColor = `${"var(--main-color)"}`;
	const menu_ref = useRef(null);
	const menu_toggle_ref = useRef(null);

	clickOutsideRef(menu_ref, menu_toggle_ref);

	const setActiveMenu = () => menu_ref.current.classList.add("active");

	const closeMenu = () => menu_ref.current.classList.remove("active");

	const [currMode, setcurrMode] = useState("light");

	const [currColor, setcurrColor] = useState("blue");

	const dispatch = useDispatch();

	const setModes = (mode) => {
		setcurrMode(mode.id);
		localStorage.setItem("themeMode", mode.class);
		dispatch(setMode(mode.class));
	};

	const setColors = (color) => {
		setcurrColor(color.id);
		localStorage.setItem("colorMode", color.class);
		dispatch(setColor(color.class));
	};

	useEffect(() => {
		const themeClass = mode_settings.find(
			(e) => e.class === localStorage.getItem("themeMode", "theme-mode-light")
		);

		const colorClass = color_settings.find(
			(e) => e.class === localStorage.getItem("colorMode", "theme-mode-light")
		);

		if (themeClass !== undefined) setcurrMode(themeClass.id);

		if (colorClass !== undefined) setcurrColor(colorClass.id);
	}, []);

	return (
		<>
			<Box>
				<Text
					fontSize={["1.2rem", "1.5rem", "1.7rem"]}
					fontWeight="600"
					className="btn-1"
					color={mainColor}
					padding={["4px 8px", "5px 10px", "5px 10px"]}
					rounded={"md"}
					cursor="pointer"
					transition="0.5s"
					display="flex"
					alignItems={"center"}
					justifyContent="center"
					ref={menu_toggle_ref}
					onClick={() => setActiveMenu()}
				>
					<Box
						as="i"
						fontSize={"inherit"}
						className="bx bx-palette"
						color={"inherit"}
					/>
				</Text>

				<Box
					ref={menu_ref}
					className="theme-menu"
					position="fixed"
					right={"-300px"}
					top="0"
					w="300px"
					opacity={0}
					height={"100vh"}
					padding="20px"
					zIndex={"99"}
					backgroundColor={`${"var(--second-bg)"}`}
					boxShadow={`${"var(--box-shadow)"}`}
					transition={`right 0.5s ${"var(--transition-cubic)"}`}
				>
					<Heading as="h4" fontSize={["md", "xl", "3xl"]} textAlign={"center"}>
						Theme Setting
					</Heading>
					{/* Close Button */}
					<Button
						position={"absolute"}
						top="0px"
						right={"0px"}
						size="sm"
						borderRadius={"sm"}
						onClick={() => closeMenu()}
						colorScheme="red"
					>
						<Box as="i" fontSize="1.2rem" className="bx bx-x"></Box>
					</Button>
					{/* Mode Choose */}
					<Box marginTop={"40px"}>
						<Text as="span" textAlign={"center"}>
							Choose Mode
						</Text>
						<Box as="ul" marginTop={"20px"}>
							{mode_settings.map((item, index) => (
								<Box
									display={"flex"}
									alignItems="center"
									cursor={"pointer"}
									gap="15px"
									a="li"
									mb="3"
									key={index}
									onClick={() => setModes(item)}
								>
									<Box
										className={`mode-list__color ${item.background} ${
											item.id === currMode ? "active" : ""
										}`}
									>
										<i className="bx bx-check"></i>
									</Box>
									<Text as="span">{item.name}</Text>
								</Box>
							))}
						</Box>
					</Box>
					{/* Color Choose */}
					<Box marginTop={"40px"}>
						<Text as="span" textAlign={"center"}>
							Choose Color
						</Text>
						<Box as="ul" marginTop={"20px"}>
							{color_settings.map((item, index) => (
								<Box
									display={"flex"}
									alignItems="center"
									cursor={"pointer"}
									gap="15px"
									mb="3"
									a="li"
									key={index}
									onClick={() => setColors(item)}
								>
									<Box
										className={`mode-list__color ${item.background} ${
											item.id === currColor ? "active" : ""
										}`}
									>
										<i className="bx bx-check"></i>
									</Box>
									<Text as="span">{item.name}</Text>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ThemeMenu;
