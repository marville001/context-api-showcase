import axios from "axios";

export const fetchPosts = async () => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
		
		return { posts: res.data };
	} catch (error) {
		return {
			error: error.message ?? "Something went wrong"
		};
	}
};
