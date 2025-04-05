import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <div className="footer-background">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}