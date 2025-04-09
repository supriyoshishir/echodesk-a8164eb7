import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="bg-toronto-600 text-white p-2 rounded-md font-bold">ED</span>
          <span className="font-semibold text-xl hidden sm:inline-block">EchoDesk</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/projects" className="text-gray-700 hover:text-toronto-600 transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-toronto-600 transition-colors">
            About
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-toronto-600 transition-colors">
            How It Works
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <span>Resources</span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/case-studies" className="w-full">Case Studies</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/faqs" className="w-full">FAQs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full z-50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/projects" className="block py-2 text-gray-700 hover:text-toronto-600">
              Projects
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-toronto-600">
              About
            </Link>
            <Link to="/how-it-works" className="block py-2 text-gray-700 hover:text-toronto-600">
              How It Works
            </Link>
            <Link to="/case-studies" className="block py-2 text-gray-700 hover:text-toronto-600">
              Case Studies
            </Link>
            <Link to="/faqs" className="block py-2 text-gray-700 hover:text-toronto-600">
              FAQs
            </Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-toronto-600">
              Blog
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
