import {useEffect, useState} from "react";
import Article from "./Article";

export default function ArticlePage () {
    const [articles, setArticles] = useState([])
    const [suitcase, setSuitcase] = useState(0)
    const [articleWeight, setArticleWeight] = useState(0)

    useEffect(() => {
        fetch("http://localhost:3001/items")
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [])

    // function to get weight of items.( convert from grams to pounds) add weight to suitcase

    
    return (
        <div>
            {articles.map(article => {
                return (
                <Article article={article}/>)
            })}
            <div>Your suitcase weighs {suitcase} pounds.</div>
            {suitcase <= 50 ? <div>Your bag will make it!</div> : <div>You need to make room.</div>}
        </div>
    )
}