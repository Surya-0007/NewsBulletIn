import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import spinner from './spinner'
import PropTypes from 'prop-types'


export class NewsComponent extends Component {

    static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general'
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
    articles = [
        {
          "source": { "id": null, "name": "WSBT-TV" },
          "author": "Associated Press",
          "title": "Live Nation says data breach at Ticketmaster exposed info of millions of customers - KOMO News",
          "description": "Live Nation is investigating a data breach at its Ticketmaster subsidiary, which dominates ticketing for live events in the United States.",
          "url": "https://wsbt.com/news/nation-world/live-nation-says-data-breach-at-ticketmaster-exposed-info-of-millions-of-customers-shinyhunters-hacking-group-online-forum-data-names-addresses-credit-card-details-sec-filing-data-leak-criminal-threat",
          "urlToImage": "https://wsbt.com/resources/media/e2800bcd-3539-49f9-aef5-67b61c4e600e-large16x9_AP24153542179779.jpg",
          "publishedAt": "2024-06-01T18:31:08Z",
          "content": "Live Nation is investigating a data breach at its Ticketmaster subsidiary, which dominates ticketing for live events in the United States.\r\nLive Nation, based in Beverly Hills, California, said in a … [+1022 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "NASA’s Boeing Starliner Crew Flight Test Launch – June 1, 2024 (Official NASA Broadcast) - NASA",
          "description": "Watch live as two NASA astronauts launch from Boeing’s Starliner spacecraft as one of the final steps on the road to certification. Launch of the ULA (United...",
          "url": "https://www.youtube.com/watch?v=aEi5boWupRk",
          "urlToImage": "https://i.ytimg.com/vi/aEi5boWupRk/maxresdefault.jpg",
          "publishedAt": "2024-06-01T18:28:46Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Ian Casselberry",
          "title": "Fever defeat Sky, 71–70 in first WNBA meeting between Caitlin Clark and Angel Reese - Yahoo Sports",
          "description": "In the first WNBA matchup between Caitlin Clark and Angel Reese, the Indiana Fever won their second game of the season.",
          "url": "https://sports.yahoo.com/fever-defeat-sky-7170-in-first-wnba-meeting-between-caitlin-clark-and-angel-reese-180634075.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qEgefA29q60Duj8n_mASpA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-05/e2b376f0-2041-11ef-be7f-fcea25ed0b7f",
          "publishedAt": "2024-06-01T18:06:35Z",
          "content": "Angel Reese and Caitlin Clark faced each other for the first time on a WNBA court Saturday, but it was veteran Kelsey Mitchell who seized the spotlight in the Indiana Fever's 7170 win.\r\nThe seventh-y… [+3097 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": null,
          "title": "Dortmund vs. Real Madrid odds, picks, how to watch, stream, time: 2024 Champions League Final prediction - CBS Sports",
          "description": "Martin Green has locked in his best bets for Saturday's Borussia Dortmund vs. Real Madrid UEFA Champions League 2024 final on Paramount+",
          "url": "https://www.cbssports.com/soccer/news/dortmund-vs-real-madrid-odds-picks-how-to-watch-stream-time-2024-champions-league-final-prediction/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/05/30/15944e1f-8818-4ae1-a10c-2e2c55da5af0/thumbnail/1200x675/79e41ae63fbcd85f3f889de43320a127/joselu-vinijr-getty-cbs.jpg",
          "publishedAt": "2024-06-01T18:00:46Z",
          "content": "Borussia Dortmund will try to clinch their second ever UEFA Champions League title when they face Real Madrid in the final on Saturday on Paramount+. The German side's only UCL trophy came in 1997, a… [+4001 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "Deontay Wilder vs. Zhilei Zhang fight predictions, start time, odds, preview, undercard, expert picks - CBS Sports",
          "description": "The pair of heavyweights are looking to get back on track in this main event clash from Saudi Arabia",
          "url": "https://www.cbssports.com/boxing/news/deontay-wilder-vs-zhilei-zhang-fight-predictions-start-time-odds-preview-undercard-expert-picks/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/05/31/78c25c72-7dc9-4c30-b482-67fcd6d754bf/thumbnail/1200x675/24f6a9b8551df95c136f0d24acf3bb8d/zhang-wilder.jpg",
          "publishedAt": "2024-06-01T16:00:00Z",
          "content": "When Deontay Wilder and Zhilei Zhang meet in the ring in Saudi Arabia on Saturday, they'll do so knowing the situation could be do or die for their championship hopes. Two of the heavyweight division… [+6364 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": null,
          "title": "Obituary: Marian Robinson, Michelle Obama’s mother, dies - BBC.com",
          "description": "Described as the most popular person in the White House, she had the unique title of \"first grandma\".",
          "url": "https://www.bbc.com/news/world-us-canada-57037248",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15F11/production/_118437898_marianmichelle'sinsta.png",
          "publishedAt": "2024-06-01T15:53:23Z",
          "content": "By Tiffany Wertheimer,BBC News\r\nMichelle Obama once described her mother as \"my rock and my best friend a guiding light throughout my life.\"\r\nMarian Robinson shunned the spotlight and rarely gave int… [+7697 chars]"
        },
        // {
        //   "source": { "id": null, "name": "[Removed]" },
        //   "author": null,
        //   "title": "[Removed]",
        //   "description": "[Removed]",
        //   "url": "https://removed.com",
        //   "urlToImage": null,
        //   "publishedAt": "1970-01-01T00:00:00Z",
        //   "content": "[Removed]"
        // },
        {
          "source": { "id": null, "name": "Yahoo Entertainment" },
          "author": "Prashant Gopal and Michael Sasso",
          "title": "Homebuyers are starting to revolt over steep prices across US - Yahoo Finance",
          "description": "(Bloomberg) -- The US housing market — long crippled by an inventory drought — is finally starting to see listings rise. But now, in many places, the buyers ...",
          "url": "https://finance.yahoo.com/news/homebuyers-starting-revolt-over-steep-143000917.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/6mbNrpKbjUTuymzuednelg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/01288ece2372da8041109488093b965c",
          "publishedAt": "2024-06-01T15:36:39Z",
          "content": "(Bloomberg) -- The US housing market long crippled by an inventory drought is finally starting to see listings rise. But now, in many places, the buyers just arent showing up.\r\nMost Read from Bloombe… [+4251 chars]"
        },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Doyle Rice, Trevor Hughes, Jeanine Santucci",
          "title": "Northern lights could appear in US again, but too soon to tell - USA TODAY",
          "description": "Space weather forecasters say there's the potential for a dazzling display of the northern lights, but it's really too soon to know for sure.",
          "url": "https://www.usatoday.com/story/news/nation/2024/05/31/northern-lights-forecast-weekend-auroras-likely-more-could-be-coming/73921345007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/13/USAT/73668569007-20240512-t-170102-z-1560853664-rc-26-o-7-apbdbv-rtrmadp-3-canadaweatheraurora.JPG?crop=5153,2899,x0,y536&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2024-06-01T15:33:45Z",
          "content": "BOULDER, COLORADO Space weather forecasters say there could be another dazzling display of the northern lights over parts of the U.S. next week although it's too early to know for sure.\r\nForecasters … [+3021 chars]"
        },
        {
          "source": { "id": null, "name": "Deadline" },
          "author": "Anthony D'Alessandro",
          "title": "‘Garfield’ Still Has Upper Paw Over ‘Furiosa’ With $13M Second Weekend – Saturday AM Update - Deadline",
          "description": "'Haikyu!! Dumpster Battle' Sees $800K Previews in another weak weekend at the summer box office",
          "url": "http://deadline.com/2024/06/box-office-garfield-furiosa-haikyu-dumpster-battle-1235945804/",
          "urlToImage": "https://deadline.com/wp-content/uploads/2024/05/MCDGAMO_CO026.jpg?w=1024",
          "publishedAt": "2024-06-01T15:25:00Z",
          "content": "SATURDAY AM WRITETHRU: After a poor Memorial Day weekend, we have a poor post-holiday period, with all titles grossing an estimated $68.6M, -66% from a year ago, when Sony proved superhero movies wer… [+6231 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": null,
          "title": "Angelina Jolie and Brad Pitt's daughter Shiloh files for name change - BBC.com",
          "description": "Shiloh Nouvel Jolie-Pitt has filed to change her name amid ongoing legal battle between her parents.",
          "url": "https://www.bbc.com/news/articles/cyjjymklnvmo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/42b7/live/1ce4bb20-201c-11ef-b7dc-a5e8bc96df26.jpg",
          "publishedAt": "2024-06-01T15:08:04Z",
          "content": "Actor Shiloh Nouvel Jolie-Pitt has submitted a petition to a Los Angeles court to drop Pitt from her name. \r\nThe daughter of Hollywood stars Angelina Jolie and Brad Pitt took legal action to become S… [+2369 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Ray Sanchez, Steve Almasy, Cheri Mossburg",
          "title": "Idaho jury resumes deliberations Saturday in sentencing of Chad Daybell, who faces possible death penalty for 3 murders - CNN",
          "description": "An Idaho jury has reached a decision on whether Chad Daybell will get the death penalty for killing his first wife and two of his second wife’s children. The verdict will be announced shortly.",
          "url": "https://www.cnn.com/2024/06/01/us/chad-daybell-murder-sentencing-death-penalty/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24151751034012.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-06-01T14:51:00Z",
          "content": "An Idaho jury has reached a decision on whether Chad Daybell will get the death penalty for killing his first wife and two of his second wifes children.\r\nThe verdict will be announced shortly.\r\nDaybe… [+9100 chars]"
        },
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Al Jazeera",
          "title": "South Africa’s ANC loses 30-year parliamentary majority after election - Al Jazeera English",
          "description": "African National Congress vote share drops to 40 percent, forcing it to seek coalition partners to form government.",
          "url": "https://www.aljazeera.com/news/2024/6/1/south-africa-anc-loses-30-year-parliamentary-majority-after-election",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/05/2024-05-29T125644Z_441809566_RC2B08AWQTMW_RTRMADP_3_SAFRICA-ELECTION-1717002029.jpg?resize=1920%2C1440",
          "publishedAt": "2024-06-01T14:50:04Z",
          "content": "The African National Congress (ANC) party has lost its parliamentary majority in a historic election result that puts South Africa on a new political path for the first time since the end of the apar… [+2538 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "MARIA SHERMAN",
          "title": "Jennifer Lopez cancels 2024 North American tour - The Associated Press",
          "description": "Jennifer Lopez has canceled her 2024 North American tour. Representatives for Live Nation confirmed the cancellation to The Associated Press. “Jennifer is taking time off to be with her children, family and close friends,” they say in a statement. The tour wa…",
          "url": "https://apnews.com/article/jennifer-lopez-tour-340a7282847e4def128010caef400ebc",
          "urlToImage": "https://dims.apnews.com/dims4/default/b39d197/2147483647/strip/true/crop/3500x1969+0+211/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F47%2F22%2F62968688774b6875f8a2c0cb72f5%2F10fa2d9ba3c3480683ef998631ac832c",
          "publishedAt": "2024-06-01T14:48:00Z",
          "content": "NEW YORK (AP) Jennifer Lopez has canceled her 2024 North American tour, representatives for Live Nation confirmed to The Associated Press.\r\nJennifer is taking time off to be with her children, family… [+1021 chars]"
        },
        {
          "source": { "id": "ars-technica", "name": "Ars Technica" },
          "author": "Eric Berger",
          "title": "Here's why a Japanese billionaire just canceled his lunar flight on Starship - Ars Technica",
          "description": "\"I feel terrible making the crew members wait longer.\"",
          "url": "https://arstechnica.com/space/2024/06/heres-why-a-japanese-billionaire-just-canceled-his-lunar-flight-on-starship/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2018/09/GettyImages-1035243904-760x380.jpg",
          "publishedAt": "2024-06-01T14:10:57Z",
          "content": "Enlarge/ Elon Musk speaks as Yusaku Maezawa, founder and president of Start Today Co., looks on at an event at the SpaceX headquarters in Hawthorne, California, in 2018.\r\n35\r\nOn Friday night the dear… [+5338 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Charmaine Jacob",
          "title": "India election: Modi's BJP alliance set to win parliamentary majority - CNBC",
          "description": "India's Prime Minister Narendra Modi looks set for a rare third consecutive term in power, as local exit polls on Saturday suggest his Bharatiya Janata Party will clinch a parliamentary majority.",
          "url": "https://www.cnbc.com/2024/06/01/india-election-modis-bjp-alliance-set-to-win-parliamentary-majority.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107000504-1642058189513-gettyimages-1230740160-AFP_8ZD8HH.jpeg?v=1717157973&w=1920&h=1080",
          "publishedAt": "2024-06-01T13:32:05Z",
          "content": "India's Prime Minister Narendra Modi looks set for a rare third consecutive term in power, as local exit polls on Saturday suggested his Bharatiya Janata Party-led alliance will clinch a decisive par… [+3518 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "LISA MASCARO, MARY CLARE JALONICK",
          "title": "Republicans join Trump's attacks on justice system and campaign of vengeance after guilty verdict - The Associated Press",
          "description": "Republicans in Congress are embracing Donald Trump’s strategy of blaming the U.S. justice system after his historic guilty verdict. They're also enlisting themselves in his campaign of vengeance and political retribution. It's all part of the GOP bid to recla…",
          "url": "https://apnews.com/article/trump-guilty-republicans-vengeance-a05db7fa2512a62afe035992f2baaf16",
          "urlToImage": "https://dims.apnews.com/dims4/default/1719da9/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F82%2F0caa867125fdeb424b59a6e05fbf%2F8e369da136e6418e95c1c318280c8a27",
          "publishedAt": "2024-06-01T13:01:00Z",
          "content": "WASHINGTON (AP) Embracing Donald Trumps strategy of blaming the U.S. justice system after his historic guilty verdict, Republicans in Congress are fervently enlisting themselves in his campaign of ve… [+6791 chars]"
        },
        // {
        //   "source": { "id": null, "name": "[Removed]" },
        //   "author": null,
        //   "title": "[Removed]",
        //   "description": "[Removed]",
        //   "url": "https://removed.com",
        //   "urlToImage": null,
        //   "publishedAt": "1970-01-01T00:00:00Z",
        //   "content": "[Removed]"
        // },
        {
          "source": { "id": "usa-today", "name": "USA Today" },
          "author": "Anthony Robledo",
          "title": "Chipotle denies social media accusations that portions are smaller - USA TODAY",
          "description": "Chipotle is denying influencer reviews claiming the chain's portion sizes have gotten a lot smaller. Popular TikTok reviewer Keith Lee begs to differ.",
          "url": "https://www.usatoday.com/story/money/food/2024/06/01/chipotle-food-portions-claims/73928875007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/31/USAT/73929185007-2130940436.jpg?crop=5659,3183,x0,y342&width=3200&height=1800&format=pjpg&auto=webp",
          "publishedAt": "2024-06-01T12:05:54Z",
          "content": "Chipotle is denying rumors circulating on social media that customers are getting significantly smaller portions of food.\r\nSeveral influencers have uploaded TikTok videos claiming that the Mexican gr… [+2740 chars]"
        },
        {
          "source": { "id": null, "name": "Financial Times" },
          "author": "Demetri Sevastopulo",
          "title": "China accuses US of seeking 'Asia-Pacific Nato' - Financial Times",
          "description": "PLA general blames Washington for tension as Pentagon chief says allies seek ‘convergence’ on defence and security",
          "url": "https://www.ft.com/content/b889d33c-7745-48b7-b847-64f2b3003409",
          "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252Fd337c074-93f0-4059-be02-c7803ad01dd5.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
          "publishedAt": "2024-06-01T11:57:42Z",
          "content": "A top Chinese general has accused the US of trying to build an Asia-Pacific version of Nato, underlining tensions between Washington and Beijing one day after the two countries defence chiefs met for… [+4833 chars]"
        }
      ]

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log("Hello, I am a constructor");
        this.state = {
        articles: [],
        loading: false,
        page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsBulletIn`
        // this.props.setProgress(100)
    }

  async componentDidMount(props){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc1e7253a4c547d28e906df6e69acc88&pageSize=${this.props.pageSize}`;
    this.props.setProgress(20)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(50)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    this.props.setProgress(100)
    
  }
  handleNextClick = async()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc1e7253a4c547d28e906df6e69acc88&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles
        
      }
    )
  }
  }
  handlePrevClick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc1e7253a4c547d28e906df6e69acc88&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles
        
      }
    )

  }


  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style={{margin: '35px 0', marginTop: '90px'}}>NewsBulletIn - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
          <spinner/>
            
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key = {element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
                })}
                
                
            </div>
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default NewsComponent
