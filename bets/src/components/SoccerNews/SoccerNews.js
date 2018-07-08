import React, {Component} from 'react';
import "./SoccerNews.css";

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('630c69fe439f4aca8712955b9399d766');

class SoccerNews extends Component {

    constructor(props){
        super(props)
        this.state={
            articles:[]
        }
    }

    componentDidMount() {
        newsapi.v2.everything({
            q: 'Fifa World cup',
            // sources: 'bbc-news,th',
            domains: 'fox-sports.com, espn.com',
            language: 'en',
            sortBy: 'relevancy',
            page: 3
          }).then(response => {
            var fifa = (response.articles)
        
             for(var i = 0; i < fifa.length; i++){
                console.log(fifa[i])
                var articleObj = {};

                articleObj["title"] = fifa[i].title;
                articleObj["description"] = fifa[i].description;
                articleObj["url"]= fifa[i].url;
                articleObj["urlToImage"] = fifa[i].urlToImage;

                var newArticles = this.state.articles;
                newArticles.push(articleObj);


                this.setState({
                    articles: newArticles
                })
            }        
          });

    }



    render() {
        console.log(this.state.articles);
        return (
            this.state.articles.map( (item, i) => {
              return( 
                //   <div key={i}>
            <div>
                <div class="jumbotron jumbotron-fluid" key={i}>
                    <div class="container">
                        <h6 class="display-4">{item.title}</h6>
                        <p class="lead" >{item.description}</p>
                        <a href={item.url}>{item.url}</a>
                    </div>
                </div>
            </div>
              )
            })
        )
    } 
}

export default SoccerNews;



















// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.everything({
//     q: 'Fifa World cup',
//     // sources: 'bbc-news,th',
//     domains: 'fox-sports.com, espn.com',
//     language: 'en',
//     sortBy: 'relevancy',
//     page: 3
//   }).then(response => {
//     var fifa = (response.articles)

//      for(var i = 0; i < fifa.length; i++){
//         // console.log(fifa[i])
//         array1 = fifa[i].title 
//         array2 = fifa[i].description
//         array3 = fifa[i].url
//         array4 = fifa[i].urlToImage
//         console.log(array4)
//     }
    

//   });
   