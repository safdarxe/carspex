import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <div className="header-background">
        <header className="header">
          <div className="header-content">
            <h1 className="brand-name">CarSpex</h1>
            <div className="nav-container">
              <nav className="nav-menu">
                <Link href="/" className="nav-item nav-item-primary">Home</Link>
                <Link href="/" className="nav-item nav-item-primary">Upcoming Car</Link>
                <Link href="/" className="nav-item nav-item-primary">Latest Launch</Link>
                <Link href="/" className="nav-item nav-item-primary">EV Car</Link>
                <Link href="/" className="nav-item nav-item-primary">Hot Deals</Link>
                <Link href="/" className="nav-item nav-item-primary">Review</Link>
                <Link href="/" className="nav-item nav-item-primary">Contact Us</Link>
                <Link href="/" className="nav-item nav-item-primary">About Us</Link>
                <Link href="/" className="nav-item nav-item-primary">Privacy Policy</Link>
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
            <Link href="/" className="nav-item nav-item-secondary">Price</Link>
            <Link href="/" className="nav-item nav-item-secondary">Compare</Link>
            <Link href="/" className="nav-item nav-item-secondary">Offers</Link>
            <Link href="/" className="nav-item nav-item-secondary">Images</Link>
            <Link href="/" className="nav-item nav-item-secondary">Specs</Link>
            <Link href="/" className="nav-item nav-item-secondary">User Reviews</Link>
            <Link href="/" className="nav-item nav-item-secondary">360 View</Link>
            <Link href="/" className="nav-item nav-item-secondary">Variants</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}