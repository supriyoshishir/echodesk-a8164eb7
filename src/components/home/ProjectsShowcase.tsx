
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Downtown Waterfront Revitalization",
    description: "Transforming the harbor area into a vibrant public space with green infrastructure.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Urban Planning",
    engagement: {
      comments: 48,
      votes: 152,
      progress: 75
    }
  },
  {
    id: 2,
    title: "Sustainable Transportation Plan",
    description: "Developing a comprehensive strategy for eco-friendly mobility across the city.",
    image: "https://images.unsplash.com/photo-1600320402788-00e447d03d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Infrastructure",
    engagement: {
      comments: 37,
      votes: 98,
      progress: 60
    }
  },
  {
    id: 3,
    title: "Community Gardens Initiative",
    description: "Creating accessible urban gardens to promote food security and community bonds.",
    image: "https://images.unsplash.com/photo-1605657781760-934c744ccf3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Environment",
    engagement: {
      comments: 29,
      votes: 87,
      progress: 40
    }
  }
];

const ProjectsShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover ongoing urban initiatives and contribute your ideas
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animated-card"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-toronto-100 text-toronto-800 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Engagement progress</span>
                    <span>{project.engagement.progress}%</span>
                  </div>
                  <Progress value={project.engagement.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      <span>{project.engagement.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{project.engagement.votes}</span>
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link to={`/projects/${project.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
