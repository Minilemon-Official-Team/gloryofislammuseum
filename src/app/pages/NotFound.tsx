import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="font-['Cinzel'] text-9xl text-[#8C6B3E] mb-4">404</h1>
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#2B2B2B] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#5A5A5A] text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to exploring Indonesian heritage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-4 bg-white border-2 border-[#8C6B3E] text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Browse Gallery
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/virtual-tour" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              Virtual Tour
            </Link>
            <Link to="/visit" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              Visit
            </Link>
            <Link to="/news" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              News
            </Link>
            <Link to="/education" className="text-[#8C6B3E] hover:text-[#6F532F] transition-colors">
              Education
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
