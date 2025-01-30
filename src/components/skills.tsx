import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Skills({
	openSections,
	toggleSection,
}: {
	openSections: {
		os: boolean;
		devops: boolean;
		general: boolean;
		programming: boolean;
	};
	toggleSection: (section: string) => void;
}) {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold mb-8 text-purple-400">
				Mes compétences
			</h2>

			{/* OS Section */}
			<div className="mb-6">
				<button
					onClick={() => toggleSection("os")}
					className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
				>
					<span className="text-xl font-semibold">OS</span>
					{openSections.os ? (
						<ChevronUpIcon className="h-6 w-6" />
					) : (
						<ChevronDownIcon className="h-6 w-6" />
					)}
				</button>
				{openSections.os && (
					<div className="mt-4 ml-6 space-y-4">
						<div className="bg-gray-800 p-4 rounded-lg">
							<h4 className="font-semibold text-purple-400 mb-2">Linux</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Arch Linux - Daily driver depuis 2010</li>
								<li>Manjaro - Familier avec les systèmes similaires à Arch</li>
								<li>Debian - Administration système et troubleshooting</li>
								<li>Rocky - Administration système et troubleshooting</li>
								<li>Ubuntu - Administration système et troubleshooting</li>
							</ul>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg">
							<h4 className="font-semibold text-purple-400 mb-2">Windows</h4>
							<ul className="list-disc list-inside space-y-2 text-gray-300">
								<li>Administration système</li>
								<li>
									Windows Server - Comprehension des services, mise en place
									d'une forêt en VM
								</li>
							</ul>
						</div>
					</div>
				)}
			</div>

			{/* Dev-Ops Section */}
			<div className="mb-6">
				<button
					onClick={() => toggleSection("devops")}
					className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
				>
					<span className="text-xl font-semibold">Dev-Ops</span>
					{openSections.devops ? (
						<ChevronUpIcon className="h-6 w-6" />
					) : (
						<ChevronDownIcon className="h-6 w-6" />
					)}
				</button>
				{openSections.devops && (
					<div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
						<ul className="list-disc list-inside space-y-2 text-gray-300">
							<li>Virtualisation KVM, Hyper-V, VM Ware</li>
							<li>Ansible</li>
							<li>Docker</li>
							<li>Kubernetes</li>
						</ul>
					</div>
				)}
			</div>

			{/* General IT Section */}
			<div className="mb-6">
				<button
					onClick={() => toggleSection("general")}
					className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
				>
					<span className="text-xl font-semibold">Informatique générale</span>
					{openSections.general ? (
						<ChevronUpIcon className="h-6 w-6" />
					) : (
						<ChevronDownIcon className="h-6 w-6" />
					)}
				</button>
				{openSections.general && (
					<div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
						<ul className="list-disc list-inside space-y-2 text-gray-300">
							<li>Utilisation habituelle des terminaux</li>
							<li>
								Installation de logiciels depuis la source et utilisation de Git
							</li>
							<li>Utilisation de SSH</li>
							<li>Sensible à la sécurité des systèmes</li>
							<li>Bases sur GIMP</li>
							<li>Libre Office Writer, Calc et Base</li>
						</ul>
					</div>
				)}
			</div>

			{/* Programming Section */}
			<div className="mb-6">
				<button
					onClick={() => toggleSection("programming")}
					className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
				>
					<span className="text-xl font-semibold">Programmation</span>
					{openSections.programming ? (
						<ChevronUpIcon className="h-6 w-6" />
					) : (
						<ChevronDownIcon className="h-6 w-6" />
					)}
				</button>
				{openSections.programming && (
					<div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
						<ul className="list-disc list-inside space-y-2 text-gray-300">
							<li>Bash</li>
							<li>Java</li>
							<li>C#</li>
							<li>SQL</li>
						</ul>
					</div>
				)}
			</div>
		</section>
	);
}
