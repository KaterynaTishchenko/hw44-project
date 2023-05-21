import './BlogFeed.scss'

import Blogs from '../Blogs/Blogs'

const Blog = () => {
  return (
    <>
     <div className="blog-feed">
      <h2 className="blog-feed__title">Blog</h2>
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
    </>
  )
}

export default Blog;