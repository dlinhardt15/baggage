import {useEffect, useState} from "react";
import Article from "./Article";

export default function ArticlePage ({suitcase, setSuitcase, suitcaseInPounds}) {
    const [articles, setArticles] = useState([])
    

    // Collecting article data from db.json
    useEffect(() => {
        fetch("http://localhost:3001/items")
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [])

    // Converting suitcase weight from grams to pounds
    
    
    return (
        <div>
            <span className="grid-container">
                {articles.map(article => <Article key={article.id} article={article} suitcase={suitcase} setSuitcase={setSuitcase}/>)}
            </span>
            <span>Your suitcase weighs {suitcaseInPounds} pounds.</span>
            {suitcaseInPounds <= 50 ? <span>Your bag will make it!</span> : <span>You need to make room.</span>}
        </div>
    )
}