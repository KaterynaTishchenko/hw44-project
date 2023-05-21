import './BlogNews.scss'

import News from '../News/News'

const New = () => {
  return (
    <>
     <div className="news-feed">
      <h2 className="news-feed__title">News</h2>
      <News />
      <News />
      <News />
    </div>
    </>
  )
}

export default New;