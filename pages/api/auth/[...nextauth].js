import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	secret: "9GP6VvLTlgGRpbGiX5kWvBsvdDybwkA8IHW70Bb2Ls8=",
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ") // Jia Hoe
				.join("") // JiaHoe
				.toLocaleLowerCase(); //jiahoe

			session.user.uid = token.sub;
			return session;
		},
	},
});
