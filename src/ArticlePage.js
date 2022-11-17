import {useEffect, useState} from "react";

export default function ArticlePage () {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/items")
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [])

    console.log(articles)
    
    return (
        <div>
            This is an article.
        </div>
    )
}