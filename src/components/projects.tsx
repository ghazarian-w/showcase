import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function Projects({
	openSections,
	toggleSection,
}: {
	openSections: { projects: boolean };
	toggleSection: (section: string) => void;
}) {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold mb-8 text-purple-400">Mes projets</h2>
			<button
				onClick={() => toggleSection("projects")}
				className="w-full flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
			>
				<span className="text-xl font-semibold">Projets en cours</span>
				{openSections.projects ? (
					<ChevronUpIcon className="h-6 w-6" />
				) : (
					<ChevronDownIcon className="h-6 w-6" />
				)}
			</button>
			{openSections.projects && (
				<div className="mt-4 ml-6 bg-gray-800 p-4 rounded-lg">
					<ul className="list-disc list-inside space-y-2 text-gray-300">
						<li>Shell scripts</li>
						<li>Je veux faire une page web pour ludifier l'écriture</li>
						<li>
							Je vais faire un programme similaire à Firefox Pocket mais plus
							adapté à mes besoins.
						</li>
						<li>
							Je suis en train de travailler sur un jeu vidéo de marchandage
							dans l'espace.
						</li>
						<li>Et bien d'autres choses encore.</li>
					</ul>
				</div>
			)}
		</section>
	);
}
