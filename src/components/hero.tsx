export default function Hero() {
	return (
		<div className="relative h-96 bg-[url('/src/assets/background.webp')] bg-cover bg-center flex items-center justify-center">
			<div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
			<div className="relative z-10 text-center">
				<h1 className="text-4xl font-bold mb-4">William Ghazarian</h1>
				<p className="text-xl text-gray-300">Développeur & Admin Système</p>
			</div>
		</div>
	);
}
