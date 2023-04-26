import {useState, useEffect} from 'react'

const apiKey = `M8hsBtQcuiZFM4pD0mGiDAa0UMbA0UaQ`
let country = 'US'


function Home(){
 
    const [topHeadlines, setTopHeadlines] = useState([])


    const baseUrl = `https://api.nytimes.com/svc/topstories/v2/`
    const newsUrl = baseUrl + `home.json?api-key=${apiKey}`

  const fetchTopHeadlines = () => {
      fetch(newsUrl)
      .then(res => res.json())
      .then(headlinesData=>setTopHeadlines(headlinesData.results))
      .catch(error=>console.log(error))

   }
//    console.log(topHeadlines)

    useEffect(fetchTopHeadlines, [newsUrl]) 


   
    
       
     const renderArticles = topHeadlines.map(article => 
     
           <div style={{ paddingTop: 20 , paddingBottom: 20}}>
           <h3 style={{textAlign: 'center', textJustify: 'center'}}>{article.title}</h3>
           <figure>
           <img src={article.multimedia[0].url} alt={article.multimedia[0].caption}  style={{ display: 'block', width: 850 , height: 550, marginLeft: 'auto', marginRight: 'auto'}} />
           <figcaption style={{textAlign: 'center', textJustify: 'center', fontSize:'smaller'}}>{article.abstract}</figcaption>
           </figure>
           {/* <pre style={{textAlign: 'center', textJustify: 'center', fontSize: 'medium'}}>{article.content}</pre> */}
           </div>)
          
  
    
   
    return (<div>{renderArticles  }</div>);
}


export default Home;
