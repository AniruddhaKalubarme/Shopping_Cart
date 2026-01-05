import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setLoading(true);

        try {
            const resp = await fetch(API_URL);
            const data = await resp.json();

            setPosts(data);
        }
        catch (error) {
            alert("Some error occured: " + error);
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="pb-20 pt-10">
            {
                loading ?
                    <div className="flex justify-center items-center h-screen">
                        <Spinner />
                    </div> :
                    posts.length > 0 ?
                        (
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-10 min-h-[80vh]">
                                {
                                    posts.map((post) => (
                                        <div key={post.id} >
                                            <Product post={post} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) :
                        (
                            <div className="flex justify-center items-center h-[90vh] text-red-500 text-2xl font-bold">No posts are found</div>
                        )
            }
        </div>
    )
}

export default Home;