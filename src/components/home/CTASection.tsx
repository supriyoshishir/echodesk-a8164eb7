
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Community Engagement?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Join municipalities across Canada that are using EchoDesk to connect with their citizens and make better decisions together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg py-6 px-8 bg-white text-toronto-800 hover:bg-gray-100">
              <Link to="/register">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8 border-white/40 hover:bg-white/10">
              <Link to="/contact">Talk to an Expert</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-200">
            No credit card required. Free 30-day trial for all premium features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
