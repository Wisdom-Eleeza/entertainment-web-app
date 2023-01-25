import Hello from '../../data.json'
import './Videos.css'


const Videos = () => {
    return (
            <div className="tvSeries">
                {/* <h2>Trending</h2> */}
                <div className="series-items">
                    {
                        Hello.filter((item) => {
                            return item.category === 'TV Series'
                        }).map((item)=> (
                            <div className="series" key={item.title}>
                                <div className="bookmark-icon">
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" fill="none"/></svg>
                                </div>
                                <div className="image">
                                    <img src={item.thumbnail.regular.large} alt=''/>
                                </div>
                                <div className="item-info">
                                    <div className="about">
                                        {item.year} <div className="oval"></div> <img src={item.logo} alt=''/> {item.category} <div className="oval"></div> {item.rating}
                                    </div>
                                    <h1 className="item-title">
                                    {item.title}
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
                </div>
    )
}


export default Videos;