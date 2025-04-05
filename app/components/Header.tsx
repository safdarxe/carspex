export default function Header() {
    return (
      <div>
        <div className="header-background">
          <header className="header">
            <div className="header-content">
              <h1 className="brand-name">CarSpex</h1>
              <div className="nav-container">
                <nav className="nav-menu">
                  <a href="/" className="nav-item nav-item-primary">Home</a>
                  <a href="/" className="nav-item nav-item-primary">Upcoming Car</a>
                  <a href="/" className="nav-item nav-item-primary">Latest Launch</a>
                  <a href="/" className="nav-item nav-item-primary">EV Car</a>
                  <a href="/" className="nav-item nav-item-primary">Hot Deals</a>
                  <a href="/" className="nav-item nav-item-primary">Review</a>
                  <a href="/" className="nav-item nav-item-primary">Contact Us</a>
                  <a href="/" className="nav-item nav-item-primary">About Us</a>
                  <a href="/" className="nav-item nav-item-primary">Privacy Policy</a>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className="ad-space">
          <p>Ad Space</p>
        </div>
        <div className="secondary-menu-background">
          <div className="nav-container">
            <nav className="secondary-menu">
              <a href="/" className="nav-item nav-item-secondary">Price</a>
              <a href="/" className="nav-item nav-item-secondary">Compare</a>
              <a href="/" className="nav-item nav-item-secondary">Offers</a>
              <a href="/" className="nav-item nav-item-secondary">Images</a>
              <a href="/" className="nav-item nav-item-secondary">Specs</a>
              <a href="/" className="nav-item nav-item-secondary">User Reviews</a>
              <a href="/" className="nav-item nav-item-secondary">360 View</a>
              <a href="/" className="nav-item nav-item-secondary">Variants</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }