import { getPostBySlug } from '../../../lib/fetchData';

interface Params {
  params: { slug: string };
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div className="page-layout">
      <main className="main-section">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <h2>Dummy Post</h2>
        <article>
          <h3>Exploring the Future of Electric Vehicles</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla facilisi. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </article>
      </main>
      <aside className="side-section">
        <div className="car-news">
          <h2>Car News</h2>
          <div className="news-tabs">
            <span className="tab active">Trending News</span>
            <span className="tab">Recent News</span>
          </div>
          <div className="news-item">
            <div className="news-image"></div>
            <p>Hyundai Creta Becomes The Best-selling Car In March 2025</p>
          </div>
          <div className="news-item">
            <div className="news-image"></div>
            <p>You Can Avail Discounts Of Up To Rs 76,100 On Honda Cars Thi...</p>
          </div>
          <div className="news-item">
            <div className="news-image"></div>
            <p>Watch: Which Mahindra BE 6 Variant Should You Buy?</p>
          </div>
          <div className="news-item">
            <div className="news-image"></div>
            <p>You Can Save Up To Rs 67,100 On Maruti Arena Models In April...</p>
          </div>
          <div className="news-item">
            <div className="news-image"></div>
            <p>Hyundai Creta Electric Mid-spec Smart (O) Variant Explained...</p>
          </div>
        </div>
        <h3>Side Content</h3>
        <p>Latest Updates</p>
        <ul>
          <li>New EV Models</li>
          <li>Hot Deals on Cars</li>
          <li>Upcoming Launches</li>
        </ul>
        <div className="side-ad-space">
          <p>Ad Space (300x250)</p>
        </div>
      </aside>
    </div>
  );
}