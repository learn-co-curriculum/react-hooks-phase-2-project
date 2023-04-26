import React, { useEffect } from 'react';



export default function Card(props) {
    // const [image, setImage] = useState({});

    // useEffect(()=>{

    // })
    
    let articleImage = {...props.multimedia[0]}

    return(
        <div className="article-card">
            <figure>
            <span>
                <button onClick={() => articleImage={...props.multimedia[1]}}>prev</button>
                <img src={articleImage.url} alt={articleImage.caption} className="article-image"/>
                {/* <figcaption className="article-caption">{articleImage.caption}</figcaption> */}
                <button>next</button>
            </span>
            </figure>
            <section>
                <h2 className="article-title">{props.title}</h2>
                <p className="article-info"> {props.byline} | Date Posted: {props.published_date} | Link: {} </p>
                <p className="article-description"> {props.abstract} </p>
            </section>
            <button className="favorite">Add to Favorites</button>
        </div>

        // <section className="article-card">
        //     <h4 className="article-title">{props.title}</h4>
        //     <CardFigure {...props.multimedia[0]} />
        //     <p className="article-description">{props.abstract}</p>
        // </section>
    )
}