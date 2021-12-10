import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "name123",
		userImg: "https://bit.ly/3GxwhqY",
		img: "https://bit.ly/3EKOXmr",
		caption: "nice",
	},
	{
		id: "123",
		username: "name123",
		userImg: "https://bit.ly/3GxwhqY",
		img: "https://bit.ly/3EKOXmr",
		caption: "nice",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.img}
					img={post.img}
					caption={post.caption}
				/>
			))}
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default Posts;
