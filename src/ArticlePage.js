import {useEffect, useState} from "react";
import Article from "./Article";

export default function ArticlePage () {
    const [articles, setArticles] = useState([])
    const [suitcase, setSuitcase] = useState(0)

    // Collecting article data from db.json
    useEffect(() => {
        fetch("http://localhost:3001/items")
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [])

    // Converting suitcase weight from grams to pounds
    const suitcaseInPounds = Math.round((suitcase * 0.00220462) * 10) / 10
    
    return (
        <div>
            {articles.map(article => {
                return (
                <Article article={article} suitcase={suitcase} setSuitcase={setSuitcase}/>)
            })}
            <div>Your suitcase weighs {suitcaseInPounds} pounds.</div>
            {suitcaseInPounds <= 50 ? <div>Your bag will make it!</div> : <div>You need to make room.</div>}
            
        </div>
    )
}