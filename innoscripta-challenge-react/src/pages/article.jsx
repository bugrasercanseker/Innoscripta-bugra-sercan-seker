import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Article = () => {
    let {slug} = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const hasHtmlTags = /<[^>]+>/.test(article.content); // Check if the content has HTML tags

    useEffect(() => {
        // Fetch articles from the API
        fetch(`http://backend.innoscripta-challenge.test:8080/api/articles/${slug}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === "success" && data.data) {
                    setArticle(data.data);
                    setIsLoading(false); // Set loading state to false
                } else {
                    console.error('Error fetching article:', data.message);
                }
            })
            .catch(error => console.error('Error fetching article:', error));
    }, [slug]);

    return (
        <>
            <div className="px-4 md:px-20">
                <div className="py-4">
                    {isLoading ? (
                        <div className="h-screen flex items-center justify-center">
                            <p>Loading article...</p>
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-2xl text-center">{article.title}</h1>
                            <p className="pt-4">{article.description}</p>
                            {hasHtmlTags ? (
                                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                            ) : (
                                <p>{article.content}</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Article;