import { useEffect, useState } from "react";
import { fetchPosts,createPost } from "../services/post";

const DataFetching = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadMyPosts = async () => {
            setIsLoading(true);
			const result = await fetchPosts();
			setIsLoading(false);

            if (result.error) {
                setError(result.error);
            } else {
                setPosts(result.posts);
            }
        };

        loadMyPosts();
    }, []);

    //handling post creation
    const handleCreatePost = async()=>{
        const result=  await createPost();
        if (result.error){
            setError(result.error)
        }else{
            setPosts((prevPosts) => [...prevPosts, result.posts]);   
        }
    };

    return (
        <div className="flex flex-col gap-4 p-2">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                posts.map((post) => (
                    <p className="p-4 rounded-md bg-gray-100" key={post.id}>
                        {post.title}
                        <p>{post.body}</p>
                    </p>
                ))
            )}
            <button onClick={handleCreatePost} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Create Post
      </button>
        </div>
    );
};

export default DataFetching;
