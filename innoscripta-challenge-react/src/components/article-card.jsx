import {Link} from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{article?.title}</h3>
                <p className="text-gray-600">{article?.description}</p>
                <Link to={`/article/${article?.slug}`} className="text-blue-500 hover:underline">
                    Read More
                </Link>
            </div>
        </>
    )
}

export default ArticleCard;