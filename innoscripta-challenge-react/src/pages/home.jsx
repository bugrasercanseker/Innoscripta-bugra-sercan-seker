import {useEffect, useState} from "react";
import ArticleList from "../components/article-list.jsx";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch articles from the API
        fetch('http://backend.innoscripta-challenge.test:8080/api/articles')
            .then(response => response.json())
            .then(data => {
                if (data.status === "success" && data.data && data.data.data) {
                    setArticles(data.data.data);
                    setIsLoading(false); // Set loading state to false
                } else {
                    console.error('Error fetching articles:', data.message);
                }
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-start gap-4 py-4 px-4">
                <input className="px-4 py-2 rounded-lg bg-gray-100 placeholder:text-gray-500 border border-sky-950 focus:border-sky-700" name="search" id="search" placeholder="Search by keyword"/>

                <select className="px-4 py-2 rounded-lg bg-gray-100 placeholder:text-gray-500 border border-sky-950 focus:border-sky-700" name="categories[]" id="categories" placeholder="Select Category">
                    <option>Select Category</option>
                    <option value="test">Test</option>
                </select>

                <select className="px-4 py-2 rounded-lg bg-gray-100 placeholder:text-gray-500 border border-sky-950 focus:border-sky-700" name="categories[]" id="categories" placeholder="Select Author">
                    <option>Select Author</option>
                    <option value="test">Test</option>
                </select>
            </div>
            <ArticleList isLoading={isLoading} articles={articles}/>
        </>
    )
}

export default Home;