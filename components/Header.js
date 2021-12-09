import Image from "next/image";

const Header = () => {
	return (
		<div>
			<h1>I'm the header</h1>

			{/* Left */}
			<div>
				<Image src="https://links.papareact.com/ocw" layout="fill" />
			</div>

			{/* Middle */}

			{/* Right */}
		</div>
	);
};

export default Header;
