
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-toronto-600 text-white p-2 rounded-md font-bold">UEH</span>
              <span className="font-semibold text-xl">Urban Engage Hub</span>
            </div>
            <p className="text-gray-600 max-w-xs">
              Empowering cities and communities to collaborate on urban projects and initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-toronto-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-toronto-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-toronto-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-toronto-600">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-toronto-600">
                  All Projects
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-toronto-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-toronto-600">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-toronto-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-toronto-600">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-toronto-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-toronto-600">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-toronto-600">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-toronto-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-toronto-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-toronto-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-toronto-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-toronto-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} Urban Engage Hub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="mailto:contact@urbanengagehub.com" className="text-gray-600 hover:text-toronto-600 inline-flex items-center space-x-2">
                <Mail size={16} />
                <span>contact@urbanengagehub.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
