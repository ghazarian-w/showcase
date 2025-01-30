export default function Contact() {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold mb-8 text-purple-400">Me contacter</h2>
			<div className="bg-gray-800 p-6 rounded-lg">
				<div className="space-y-4 text-gray-300">
					<p>
						Email :{" "}
						<a
							href="mailto:ghazarian.w@proton.me"
							className="text-purple-400 hover:text-purple-300"
						>
							ghazarian.w@proton.me
						</a>
					</p>
					<p>
						GitHub :{" "}
						<a
							href="https://github.com/ghazarian-w"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-400 hover:text-purple-300"
						>
							ghazarian-w
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
