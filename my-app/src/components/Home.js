import {useState, useEffect} from 'react'

const apiKey = `4b7a803e73094ba69d4de8c272c6798f`
let country = 'US'


function Home(){
 
    const [topHeadlines, setTopHeadlines] = useState([])


  const baseUrl = `https://newsapi.org/v2/`
  const newsUrl = baseUrl + `top-headlines?country=${country}&apiKey=${apiKey}`

  const fetchTopHeadlines = () => {
      fetch(newsUrl)
      .then(res => res.json())
      .then(response=>response.articles)
      .then(setTopHeadlines)
      .then(console.log(topHeadlines))
      


   }
  

    useEffect(fetchTopHeadlines, [newsUrl, topHeadlines]) 


   
    
       
     const renderArticles = topHeadlines.map(article => 
     
           <div style={{paddingTop: 20 , paddingBottom: 20}}>
           <h3 style={{textAlign: 'center', textJustify: 'center'}}>{article.title}</h3>
           <figure>
           <img src={article.urlToImage} alt={article.description}  style={{ display: 'block', width: 850 , height: 550, marginLeft: 'auto', marginRight: 'auto'}} />
           <figcaption style={{textAlign: 'center', textJustify: 'center', fontSize:'smaller'}}>{article.description}</figcaption>
           </figure>
           <pre style={{display: 'block', textAlign: 'center', textJustify: 'center', fontSize: 'medium'}}>{article.content}</pre>
           </div>)
          
  
    
   
    return (<div>{renderArticles  }</div>);
}


export default Home;
