import {useState, useEffect} from 'react'

const apiKey = `4b7a803e73094ba69d4de8c272c6798f`
let country = 'US'


function Home(){
 
    const [topHeadlines, setTopHeadlines] = useState({})


  const baseUrl = `https://newsapi.org/v2/`
  const newsUrl = baseUrl + `top-headlines?country=${country}&apiKey=${apiKey}`

  const fetchTopHeadlines = () => {
      fetch(newsUrl)
      .then(res => res.json())
      .then(res=>res.articles)
      .then(setTopHeadlines)
      .then(console.log(topHeadlines))
      


   }
  

    useEffect(fetchTopHeadlines, []) 


   
    
       
     const renderArticles = topHeadlines.map(article => 
     
           <div >
           <h3>{article.title}</h3>
           <figure >
           <img src={article.urlToImage} alt={article.description}/>
           <figcaption>{article.description}</figcaption>
           </figure>
          <p>{article.content}</p>
           </div>)
          
  
    
   
    return (<div>{renderArticles}</div>);
}


export default Home;
