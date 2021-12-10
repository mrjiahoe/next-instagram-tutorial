function MiniProfile() {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				className="w-16 h-16 rounded-full object-cover border p-[2px]"
				src="https://bit.ly/31URxYM"
				alt="profile"
			/>

			<div>
				<h2>heeeey</h2>
				<h3>Welcome to Instagram</h3>
			</div>

			<button>Sign Out</button>
		</div>
	);
}

export default MiniProfile;
