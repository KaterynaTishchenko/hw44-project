import './Body.scss';

import BlogFeed from '../BlogFeed/BlogFeed';
import BlogNews from '../BlogNews/BlogNews';

const Body = () => {
  return (
    <>
     <section className="body">
      <BlogFeed />
      <BlogNews />
    </section>
    </>
  );
};

export default Body;