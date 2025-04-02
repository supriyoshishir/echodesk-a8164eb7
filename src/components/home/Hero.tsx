
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Connect Communities with Public Engagement
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            The platform that helps cities involve citizens in decision-making 
            and urban development projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg py-6 px-8">
              <Link to="/register">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8 bg-white/10 hover:bg-white/20 border-white/20">
              <Link to="/demo">Request Demo</Link>
            </Button>
          </div>
          <div className="mt-12 text-sm text-gray-200">
            <p>Trusted by municipalities across Canada</p>
            <div className="mt-4 flex justify-center space-x-8 md:space-x-16">
              <div className="font-semibold">City of Vancouver</div>
              <div className="font-semibold">Montreal</div>
              <div className="font-semibold">Ottawa</div>
              <div className="font-semibold">Calgary</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
