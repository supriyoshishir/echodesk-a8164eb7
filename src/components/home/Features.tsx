
import { 
  Users, 
  MessageSquare, 
  BarChartBig, 
  CalendarDays, 
  Map, 
  FileText 
} from "lucide-react";

const features = [
  {
    icon: <Users className="h-10 w-10 text-toronto-600" />,
    title: "Stakeholder Mapping",
    description: "Identify and categorize all relevant community stakeholders to ensure inclusive engagement."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-toronto-600" />,
    title: "Multi-channel Feedback",
    description: "Collect input through comments, surveys, polls, and direct messaging."
  },
  {
    icon: <Map className="h-10 w-10 text-toronto-600" />,
    title: "Interactive Mapping",
    description: "Allow citizens to pinpoint locations and provide geo-based feedback on urban initiatives."
  },
  {
    icon: <BarChartBig className="h-10 w-10 text-toronto-600" />,
    title: "Analytics Dashboard",
    description: "Visualize participation data and generate insights for better decision-making."
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-toronto-600" />,
    title: "Event Management",
    description: "Schedule and promote public meetings, workshops, and engagement sessions."
  },
  {
    icon: <FileText className="h-10 w-10 text-toronto-600" />,
    title: "Document Library",
    description: "Share and manage project documents, reports, and resources in one central location."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Public Engagement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to connect with your community and make data-driven decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 animated-card"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
