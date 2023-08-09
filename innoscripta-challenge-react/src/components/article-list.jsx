import ArticleCard from "./article-card.jsx";

const ArticleList = (props) => {
    return (
        <>
            <div>
                {!props.isLoading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {props.articles.map(article => (
                            <ArticleCard key={article.id} className="col-span-1" article={article}/>
                        ))}
                    </div>
                ) : (
                    <div className="h-screen flex items-center justify-center">
                        <p>Loading article...</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default ArticleList;