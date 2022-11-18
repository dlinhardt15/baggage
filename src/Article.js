export default function Article ({article}) {

    function changeCount (event, article) {
        const count = parseInt(event.target.value)
        fetch("http://localhost:3001/items/" + article.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({count})
        })
        .then(response => response.json())
        .then(data => console.log(data))

        // const weightInGrams = event.target.value * article.weight
        // const weightInPounds = weightInGrams * 0.00220462
        // const weight = Math.round(weightInPounds * 10)/10
        // console.log(weight)
        // setSuitcase(suitcase + weightInPounds)
    }


    return (
        <div>
            <span>{article.name}:</span>
            <span><input type="number" min="0" onChange={(e) => changeCount(e, article)}/></span>
        </div>
        )

}