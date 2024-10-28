import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer mt-28 footer-center bg-[#2c2c2c] text-white rounded p-10">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-4 text-sm md:text-base">
          <Link to="/about" className="link link-hover">Our Story</Link>
          <Link to="/menu" className="link link-hover">Menu</Link>
          <Link to="/locations" className="link link-hover">Locations</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </nav>

        {/* Social Media Links */}
        <nav className="mt-4">
          <div className="flex justify-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
          </div>
        </nav>

        {/* Additional Info */}
        <aside className="mt-4">
          <p className="text-xs md:text-sm">
            Indulge in our finest coffee crafted with passion. Find us at a location near you.
          </p>
          <p className="mt-2 text-xs md:text-sm">
            © {new Date().getFullYear()} - Brewed Delight Caff Canvas. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
