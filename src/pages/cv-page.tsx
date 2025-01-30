import { useState } from "react";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";

const CVPage = () => {
	const [openSections, setOpenSections] = useState({
		os: false,
		devops: false,
		general: false,
		programming: false,
		projects: false,
	});

	type SectionKeys = "os" | "devops" | "general" | "programming" | "projects";

	const toggleSection = (section: SectionKeys) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<main className="min-h-screen bg-gray-900 text-gray-100">
			{/* Hero Section */}
			<Hero />

			{/* Main Content */}
			<div className="container py-12">
				{/* Compétences Section */}
				<Skills
					openSections={openSections}
					toggleSection={(section: string) =>
						toggleSection(section as SectionKeys)
					}
				/>

				{/* Projects Section */}
				<Projects
					openSections={openSections}
					toggleSection={(section: string) =>
						toggleSection(section as SectionKeys)
					}
				/>

				{/* Contact Section */}
				<Contact />

				{/* Footer */}
				<Footer />
			</div>
		</main>
	);
};

export default CVPage;
