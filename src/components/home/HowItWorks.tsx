
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Create Your Hub",
    description: "Set up your customized engagement platform with your city's branding and project focus areas."
  },
  {
    number: "02",
    title: "Add Projects & Initiatives",
    description: "Upload your urban projects, add details, timelines, and set engagement goals."
  },
  {
    number: "03",
    title: "Invite Your Community",
    description: "Engage citizens through email, social media, or community outreach to join the conversation."
  },
  {
    number: "04",
    title: "Collect & Analyze Feedback",
    description: "Gather community input, track participation, and generate insights through powerful analytics."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Urban Engage Hub Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process to transform how you connect with your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full animated-card">
                <div className="text-4xl font-bold text-toronto-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#CBD5E0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/how-it-works">Learn More About Our Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
