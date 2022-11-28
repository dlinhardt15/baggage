import {useState} from "react";

export default function Article ({article, setSuitcase, suitcase}) {

    const [count, setCount] = useState(article.count)
    
    // Click event behavior dependent on whether adding or removing item from suitcase.
    function handleClick (event) {
        event.target.innerText === "➕" ?
            fetch("http://localhost:3001/items/" + article.id, {
             method: "PATCH",
                headers: {
                 "Content-Type": "application/json"
                },
                body: JSON.stringify({count: count + 1})
            })
            .then(response => response.json())
            .then(data => {
                setCount(data.count)
                setSuitcase(suitcase + data.weight)
            })
        :
            fetch("http://localhost:3001/items/" + article.id, {
             method: "PATCH",
                headers: {
                 "Content-Type": "application/json"
                },
                body: JSON.stringify({count: count - 1})
            })
            .then(response => response.json())
            .then(data => {
                setCount(data.count)
                setSuitcase(suitcase - data.weight)
            })
    }


    return (
        <div className="grid-item">
            <span>{article.name}: {count}</span>
            <span onClick={(event) => handleClick(event)} className="click">➕</span>
            {count === 0 ? null : <span onClick={(event) => handleClick(event)} className="click">➖</span>}
        </div>
        )

}