const Footer = () => {
  return (
    <footer className="bg-netflix-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="space-y-2">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Audio Description
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Media Center
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Contact Us
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Audio Description
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Investor Relations
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Legal Notices
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Help Center
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Jobs
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Cookie Preferences
            </a>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Corporate Information
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">
              Netflix Originals
            </a>
          </div>
        </div>

        {/* Service Code & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <button className="text-gray-500 text-sm border border-gray-600 px-3 py-1 hover:text-white transition">
            Service Code
          </button>
          <p className="mt-4 text-gray-500 text-xs">
            © 2024 Netflix, Inc. All rights reserved. This is a demo application.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
