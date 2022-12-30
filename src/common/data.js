import { icons, projects, skills } from "../assets";

export const socialIcon = [
	{ id: 1, url: "https://www.facebook.com/RogarIQ147/" },
	{ id: 2, url: "https://github.com/MahmoudSaber1", color: "gray" },
	{ id: 3, url: "https://www.linkedin.com/in/mahmoud-saber-49a483214/" },
	{ id: 4, url: "https://wa.me/+201030843276", name: "whatsapp" },
	{ id: 5, url: "mailto:ms5325749@gmail.com", name: "email" },
];

export const dotsIcon = [
	{ id: 1, icon: "bx-home", label: "Home", to: "#hero" },
	{ id: 2, icon: "bxs-id-card", label: "About Us", to: "#about" },
	{ id: 3, icon: "bx-code-alt", label: "Projects", to: "#projects" },
	{ id: 3, icon: "bx-book-open", label: "Skills", to: "#skills" },
	{ id: 4, icon: "bxs-comment-detail", label: "Contact Us", to: "#contact" },
];

export const skillsData = [
	{ id: 1, name: "HTML", exp: "100%", img: skills.html },
	{ id: 2, name: "CSS", exp: "98%", img: skills.css },
	{ id: 7, name: "Matrial-UI", exp: "100%", img: skills.mu5 },
	{ id: 8, name: "Chakra-UI", exp: "100%", img: skills.chakra },
	{ id: 9, name: "Tailwind-CSS", exp: "90%", img: skills.tailwindcss },
	{ id: 10, name: "Bootstrap", exp: "100%", img: skills.bootstrap },
	{ id: 10, name: "SASS", exp: "90%", img: skills.sass },
	{ id: 3, name: "JavaScript", exp: "98%", img: skills.javascript },
	{ id: 5, name: "React", exp: "90%", img: skills.react },
	{ id: 6, name: "Redux", exp: "85%", img: skills.redux },
	{ id: 4, name: "Rest Api", exp: "98%", img: skills.api },
	{ id: 10, name: "TypeScript", exp: "80%", img: skills.typescript },
	{ id: 11, name: "Git & Github", exp: "95%", img: skills.git },
	{ id: 12, name: "VS-Code", exp: "100%", img: skills.code },
];

export const HTMLCSS = [
	{
		id: 1,
		img: projects.leon,
		title: "Leon Template",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["20 June - 2022", "21 June - 2022"],
		description:
			"Leon Clone is a Practical Site to Use HTML & CSS in Real Design With Fully Responsive",
		demo: "https://leon-clone.netlify.app/",
		github: "https://github.com/MahmoudSaber1/HTML-CSS-Template-1",
	},
	{
		id: 2,
		img: projects.kasper,
		title: "Kasper Template",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["21 June - 2022", "22 June - 2022"],
		description:
			"Kasper Template Clone is a Practical Site to Use HTML & CSS in Real Design With Fully Responsive",
		demo: "https://kasper-clone.netlify.app/",
		github: "https://github.com/MahmoudSaber1/HTML-CSS-Template-2",
	},
	{
		id: 3,
		img: projects.information,
		title: "User-Info Template",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["7 April - 2022", "7 April - 2022"],
		description: "Project to show some information about the user",
		demo: "https://get-user-information.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Get-User-Information",
	},
	{
		id: 4,
		img: projects.terms,
		title: "Terms Template",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["21 Sep - 2022", "21 Sep - 2022"],
		description: "This Template For Terms Information",
		demo: "https://terms-info.netlify.app/termsofreference",
		github: "https://github.com/MahmoudSaber1/Terms",
	},
	{
		id: 5,
		img: projects.slide,
		title: "Slideing-Form Template",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["12 Feb - 2022", "12 Feb - 2022"],
		description: "> Signin-Signup-Slideing it's a beautiful Animation Slide",
		demo: "https://slideing-form-105.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Signin-Signup-Slideing",
	},
	{
		id: 6,
		img: projects.health,
		title: "Health-Panel",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.github, icons.code],
		date: ["12 Feb - 2022", "12 Feb - 2022"],
		description: "Power Full using grid And Beautiful Animation",
		demo: "https://health-panel-105.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Health-Panel",
	},
	{
		id: 7,
		img: projects.cf,
		title: "CF-Epic Gaming",
		category: "HTML & CSS",
		tech: [icons.html, icons.css, icons.bootstrap, icons.github, icons.code],
		date: ["23 Nov - 2022", "25 Nov - 2022"],
		description:
			"Epic-Gaming is a fast-paced free-to-play first person shooter, pitting two teams against each other. ",
		demo: "https://cfepic.com/",
		private: "Private Repo",
	},
];

export const Javascript = [
	{
		id: 1,
		img: projects.travel,
		title: "Travel Template",
		category: "JavaScript",
		tech: [icons.html, icons.css, icons.js, icons.github, icons.code],
		date: ["22 June - 2022", "23 June - 2022"],
		description:
			"Travel Website build it to Practic My New Skills (JavaScript) 1- Add Animation 2- Add Dark And Light MOD",
		demo: "https://travel-clone-site.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Travel-Website",
	},
	{
		id: 2,
		img: projects.portfolio,
		title: "Porfolio Template",
		category: "JavaScript",
		tech: [icons.html, icons.css, icons.js, icons.github, icons.code],
		date: ["12 March - 2021", "13 March - 2021"],
		description: "it's a Simple Portfolio To Practice 1- Add Dark & Light MODE",
		demo: "https://travel-clone-site.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Travel-Website",
	},
	{
		id: 3,
		img: projects.happy,
		title: "Happy-Messages Template",
		category: "JavaScript",
		tech: [
			icons.html,
			icons.css,
			icons.js,
			icons.jquery,
			icons.github,
			icons.code,
		],
		date: ["14 May - 2022", "15 May - 2022"],
		description:
			"The site was created in order for you to send a congratulatory, message to one of your relatives or colleagues on all occasions, whether birthdays or public occasions",
		demo: "https://happy-message.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Happy-Message",
	},
	{
		id: 4,
		img: projects.holux,
		title: "Holux Template",
		category: "JavaScript",
		tech: [icons.html, icons.css, icons.js, icons.github, icons.code],
		date: ["6 May - 2022", "6 May - 2022"],
		description:
			"Hikux Template Clone Add Dark-Mode and Light-Mode, it's a full Responsive",
		demo: "https://holux-clone.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Holux",
	},
	{
		id: 5,
		img: projects.avarage,
		title: "AvarageIncome Template",
		category: "JavaScript",
		tech: [icons.html, icons.css, icons.js, icons.github, icons.code],
		date: ["3 March - 2022", "3 March - 2022"],
		description:
			"AvarageIncome Site, Build For Calc Avarage USDT With Auto add Input or Remove it, Complex mathematical problems to extract the correct income ",
		demo: "https://avarageincome.netlify.app/",
		private: "Private Repo",
	},
	{
		id: 6,
		img: projects.app,
		title: "App-Landing Template",
		category: "JavaScript",
		tech: [
			icons.html,
			icons.css,
			icons.bootstrap,
			icons.js,
			icons.github,
			icons.code,
		],
		date: ["22 Oct - 2021", "23 Oct - 2021"],
		description:
			"App Landing it's a Site for ur Mobiles App ur can customise it",
		demo: "https://app-landing-site.netlify.app/",
		private: "Private Repo",
	},
];

export const Reactjs = [
	{
		id: 4,
		img: projects.krypt,
		title: "Krypt-Clone (Web3)",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.js,
			icons.react,
			icons.tailwindcss,
			icons.github,
			icons.code,
		],
		date: ["10 Feb - 2022", "10 Feb - 2022"],
		description:
			"Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.",
		demo: "https://krypt-web-3.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Krypt-web3.0",
	},
	{
		id: 5,
		img: projects.crypto,
		title: "Crypto Tracker",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.js,
			icons.react,
			icons.material,
			icons.github,
			icons.code,
		],
		date: ["8 Feb - 2022", "10 Feb - 2022"],
		description:
			"Explore the crypto world. Get All The Info Regarding Your Favorite Crypto Currency.",
		demo: "https://crypto-tracker105.netlify.app/",
		private: "Private Repo",
	},
	{
		id: 2,
		img: projects.risk,
		title: "RiskMangement",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.bootstrap,
			icons.js,
			icons.react,
			icons.chakra,
			icons.github,
			icons.code,
		],
		date: ["16 Apr - 2022", "18 Apr - 2022"],
		description:
			"risk management website, The site was built to help you anticipate the best results while trading and tell you the value of risk and whether you should trade or not, as well as calculate the value of income",
		demo: "https://risk-mangement.netlify.app/",
		private: "Private Repo",
	},
	{
		id: 1,
		img: projects.covied,
		title: "Covid-19 Tracke",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.bootstrap,
			icons.js,
			icons.react,
			icons.github,
			icons.code,
		],
		date: ["17 May - 2022", "17 May - 2022"],
		description:
			"Covid 19 Tracker is a website to track the number of injuries, deaths and cases treated, as well as an application of what I learned in React Hooks 1- get All Infected 2- Get All Recovered 3- Get All Deaths in All Country's",
		demo: "https://covid-tracker-105.netlify.app/",
		github: "https://github.com/MahmoudSaber1/Covid-Tracker",
	},
	{
		id: 3,
		img: projects.tracker,
		title: "Tracker (Admin-Panel)",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.js,
			icons.react,
			icons.redux,
			icons.github,
			icons.code,
		],
		date: ["15 Mar - 2022", "15 Mar - 2022"],
		description:
			"Tracker (Admin-Panel), The Panel was built to help you to Tracking ur Site",
		demo: "https://tracker-new.netlify.app/",
		private: "Private Repo",
	},
	{
		id: 6,
		img: projects.house,
		title: "Auctions Home",
		category: "React",
		tech: [
			icons.html,
			icons.css,
			icons.js,
			icons.react,
			icons.chakra,
			icons.github,
			icons.code,
		],
		date: ["17 Aug - 2022", "23 Aug - 2022"],
		description:
			"You can participate in the auction from the price of 50,000. You can win a free apartment after completing the sale of all apartments through a lottery.",
		demo: "https://mhouses.net/",
		private: "Private Repo",
	},
];

export const Nextjs = [];

export const MernStack = [];
