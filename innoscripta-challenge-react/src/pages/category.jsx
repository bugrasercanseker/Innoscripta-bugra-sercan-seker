import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticleList from "../components/article-list.jsx";

const Category = () => {
    let { slug } = useParams();

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageLinks, setPageLinks] = useState([]); // You need to set this based on API response
    const [url, setUrl] = useState('http://backend.innoscripta-challenge.test:8080/api/categories/' + slug); // You need to set this based on API response


    useEffect(() => {
        // Fetch articles from the API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success" && data.data && data.data.data) {
                    setArticles(data.data.data);
                    setPageLinks(data.data.links); // Set total pages based on API response
                    setIsLoading(false); // Set loading state to false
                } else {
                    console.error('Error fetching articles:', data.message);
                }
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, [slug, url]);

    const handlePageChange = (url) => {
        setUrl(url);
    };

    const renderPaginationLinks = () => {
        const paginationLinks = [];

        pageLinks.forEach((pageLink) => {
            paginationLinks.push(
                <button
                    disabled={!pageLink.url}
                    key={pageLink.label}
                    onClick={() => handlePageChange(pageLink.url)}
                    className={`px-3 py-2 rounded text-white ${
                        pageLink.active  ? 'bg-sky-950' : 'bg-sky-700'
                    } ${
                        pageLink.url ? 'bg-sky-950' : 'bg-gray-500'
                    }`}
                >
                    {pageLink.label}
                </button>
            );
        })

        return paginationLinks;
    };

    return (
        <>
            <ArticleList isLoading={isLoading} articles={articles}/>
            <div className="flex items-center justify-center my-8 gap-2">{renderPaginationLinks()}</div>
        </>
    )
}

export default Category;