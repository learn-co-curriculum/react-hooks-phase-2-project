import React, {useState, useEffect} from 'react'
import Card from './Card.js'
import './../index.css'

const apiKey = `M8hsBtQcuiZFM4pD0mGiDAa0UMbA0UaQ`

function Home(){
    const baseUrl = `https://api.nytimes.com/svc/topstories/v2/`
    const newsUrl = baseUrl + `home.json?api-key=${apiKey}`

    const [topHeadlines, setTopHeadlines] = useState([])



    const fetchTopHeadlines = () => {
        fetch(newsUrl)
        .then(res => res.json())
        .then(headlinesData=>setTopHeadlines(headlinesData.results))
        .catch(error=>console.log(error))
    }

    useEffect(fetchTopHeadlines, [newsUrl]) 

    const renderArticles = topHeadlines.map(
        article => <Card key={article.id} {...article} />
    )

    return (<div>{renderArticles}</div>);
}


export default Home;
