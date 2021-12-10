import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "name123",
		userImg: "https://bit.ly/31URxYM",
		img: "https://bit.ly/3IDDurq",
		caption: "nice",
	},
	{
		id: "1234",
		username: "name123",
		userImg: "https://bit.ly/31URxYM",
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
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
